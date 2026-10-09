/**
 * ECI Election Result Parser
 * Compatible with Node.js and Browser environments
 */
(function (global) {
  function parseEciHtml(html) {
    if (!html || typeof html !== 'string') {
      throw new Error('Empty or invalid HTML content');
    }

    // Assembly Constituency
    let constituency = '101 - DHARAPURAM (Tamil Nadu)';
    const constMatch = html.match(/<h2>Assembly Constituency\s*<span>([\s\S]*?)<\/span>\s*<\/h2>/i);
    if (constMatch) {
      constituency = constMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    }

    // Round status: "Status of EVM Round: <span>4</span>/23"
    let currentRound = 0;
    let totalRounds = 23;
    const roundMatch = html.match(/Status of EVM Round:\s*<span>\s*(\d+)\s*<\/span>\s*\/\s*(\d+)/i);
    if (roundMatch) {
      currentRound = parseInt(roundMatch[1], 10);
      totalRounds = parseInt(roundMatch[2], 10);
    }

    // Last updated: "Last Updated at <span>10:24 am On 09/10/2026</span>"
    let lastUpdated = '';
    const updateMatch = html.match(/Last Updated at\s*<span>\s*([^<]+)\s*<\/span>/i);
    if (updateMatch) {
      lastUpdated = updateMatch[1].trim();
    }

    // Election Title
    let electionTitle = 'Bye Election to Assembly Constituencies: Results October-2026';
    const titleMatch = html.match(/<h1>\s*<div>\s*([\s\S]*?)\s*<\/div>\s*<\/h1>/i);
    if (titleMatch) {
      electionTitle = titleMatch[1].replace(/\s+/g, ' ').trim();
    }

    // Parse Candidates
    const candidates = [];
    const boxes = html.split("<div class='cand-box'>");

    for (let i = 1; i < boxes.length; i++) {
      const box = boxes[i];

      // Photo
      let img = '';
      const imgMatch = box.match(/<figure><img src='([^']+)'/i);
      if (imgMatch) {
        img = imgMatch[1];
        if (img.startsWith('img/')) {
          img = 'https://results.eci.gov.in/ResultAcByeOct2026/' + img;
        }
      }

      // Status (leading, trailing, won)
      let status = 'trailing';
      const statusMatch = box.match(/<div class='captli'>\s*([a-zA-Z]*)\s*<\/div>/i);
      if (statusMatch && statusMatch[1]) {
        status = statusMatch[1].trim().toLowerCase();
      }

      // Votes and Margin
      let votes = 0;
      let margin = '';
      const votesMatch = box.match(/<div>\s*(\d+)\s*(?:<span>\s*\(([^)]+)\)\s*<\/span>)?\s*<\/div>/i);
      if (votesMatch) {
        votes = parseInt(votesMatch[1], 10);
        if (votesMatch[2]) {
          margin = votesMatch[2].trim();
        }
      }

      // Candidate Name
      let name = '';
      const nameMatch = box.match(/<h5>([^<]+)<\/h5>/i);
      if (nameMatch) {
        name = nameMatch[1].trim();
      }

      // Party Name
      let party = '';
      const partyMatch = box.match(/<h6>([^<]+)<\/h6>/i);
      if (partyMatch) {
        party = partyMatch[1].trim();
      }

      if (name) {
        if (name.toUpperCase() === 'NOTA') {
          status = 'nota';
        }
        candidates.push({
          id: i,
          name,
          party,
          partyCode: getPartyCode(party, name),
          votes,
          margin,
          status: status || 'trailing',
          img
        });
      }
    }

    // Sort: Leading first, then descending by votes
    candidates.sort((a, b) => b.votes - a.votes);

    // Re-verify leading candidate
    if (candidates.length > 0 && candidates[0].name.toUpperCase() !== 'NOTA') {
      candidates[0].status = 'leading';
    }

    const totalVotesCounted = candidates.reduce((sum, c) => sum + (c.votes || 0), 0);
    const leadingCandidate = candidates.find(c => c.status === 'leading') || candidates[0];

    // Margin calculation against runner up
    let leadMargin = 0;
    if (candidates.length > 1) {
      leadMargin = candidates[0].votes - candidates[1].votes;
    }

    candidates.forEach((c, idx) => {
      c.rank = idx + 1;
      c.votePercentage = totalVotesCounted > 0 ? ((c.votes / totalVotesCounted) * 100).toFixed(2) : '0.00';
    });

    return {
      success: true,
      electionTitle,
      constituency,
      currentRound,
      totalRounds,
      roundProgress: totalRounds > 0 ? Math.round((currentRound / totalRounds) * 100) : 0,
      lastUpdated,
      timestamp: new Date().toISOString(),
      totalVotesCounted,
      leadMargin,
      leadingCandidate: leadingCandidate ? {
        name: leadingCandidate.name,
        party: leadingCandidate.party,
        partyCode: leadingCandidate.partyCode,
        votes: leadingCandidate.votes,
        margin: leadingCandidate.margin,
        img: leadingCandidate.img,
        votePercentage: leadingCandidate.votePercentage
      } : null,
      candidates
    };
  }

  // Helper to map party name to recognizable short code & colors
  function getPartyCode(party, name) {
    if (name && name.toUpperCase() === 'NOTA') return 'NOTA';
    const p = (party || '').toUpperCase();
    if (p.includes('ALL INDIA ANNA DRAVIDA') || p.includes('AIADMK')) return 'AIADMK';
    if (p.includes('TAMILAGA VETTRI') || p.includes('TVK')) return 'TVK';
    if (p.includes('DRAVIDA MUNNETRA') || p.includes('DMK')) return 'DMK';
    if (p.includes('NAAM TAMILAR') || p.includes('NTK')) return 'NTK';
    if (p.includes('COMMUNIST') || p.includes('CPI')) return 'CPI';
    if (p.includes('BHARATIYA JANATA') || p.includes('BJP')) return 'BJP';
    if (p.includes('CONGRESS') || p.includes('INC')) return 'INC';
    if (p.includes('INDEPENDENT')) return 'IND';
    return 'OTH';
  }

  // Export for Node and Browser
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parseEciHtml, getPartyCode };
  } else {
    global.parseEciHtml = parseEciHtml;
    global.getPartyCode = getPartyCode;
  }
})(typeof window !== 'undefined' ? window : globalThis);
