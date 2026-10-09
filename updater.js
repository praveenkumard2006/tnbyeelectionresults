const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { parseEciHtml } = require('./parser');

const CONSTITUENCIES = {
  '101': {
    id: '101',
    name: 'Dharapuram',
    code: 'S22101',
    url: 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm'
  },
  '35': {
    id: '35',
    name: 'Madurantakam',
    code: 'S2235',
    url: 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S2235.htm'
  }
};

const DATA_FILE = path.join(__dirname, 'data.json');
const isOnce = process.argv.includes('--once');
const shouldPush = process.argv.includes('--push');

async function fetchConstituency(id, config) {
  const response = await fetch(config.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch AC ${id}: HTTP ${response.status}`);
  }

  const html = await response.text();
  const parsed = parseEciHtml(html);

  return {
    ...parsed,
    acId: id,
    acName: config.name,
    sourceUrl: config.url,
    fetchedAt: new Date().toISOString()
  };
}

async function syncAllElectionData() {
  const timestamp = new Date().toLocaleTimeString('en-US');
  process.stdout.write(`[${timestamp}] Fetching all constituency data... `);

  const results = {};
  for (const [id, config] of Object.entries(CONSTITUENCIES)) {
    try {
      results[id] = await fetchConstituency(id, config);
    } catch (err) {
      console.error(`\nError fetching AC ${id}:`, err.message);
    }
  }

  if (Object.keys(results).length === 0) {
    console.error('Failed to fetch data for any constituency.');
    return null;
  }

  // Active default is 101 or first available
  const defaultData = results['101'] || Object.values(results)[0];

  const payload = {
    success: true,
    lastUpdated: new Date().toISOString(),
    constituencies: results,
    // Provide top-level data compatibility for single-constituency consumers
    data: defaultData
  };

  fs.writeFileSync(DATA_FILE, JSON.stringify(payload, null, 2));

  console.log('OK!');
  for (const [id, res] of Object.entries(results)) {
    const leader = res.leadingCandidate ? `${res.leadingCandidate.name} (${res.leadingCandidate.partyCode}, ${res.leadingCandidate.votes} votes, ${res.leadingCandidate.margin})` : 'N/A';
    console.log(`  -> AC ${id} [${res.constituency}]: Round ${res.currentRound}/${res.totalRounds} | Leader: ${leader}`);
  }

  if (shouldPush) {
    try {
      console.log('Pushing updated constituency data to GitHub...');
      execSync('git add data.json', { stdio: 'inherit' });
      execSync('git commit -m "Auto-update live election data for all constituencies [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log('Pushed to GitHub successfully!');
    } catch (gitErr) {
      console.warn('Git push warning:', gitErr.message);
    }
  }

  return payload;
}

if (isOnce) {
  syncAllElectionData();
} else {
  console.log('======================================================');
  console.log('Tamil Nadu Bye-Election Multi-Constituency Sync');
  console.log('Tracking: 101 - Dharapuram & 35 - Madurantakam');
  console.log('Polling every 60 seconds');
  console.log('======================================================');
  syncAllElectionData();
  setInterval(syncAllElectionData, 60 * 1000);
}
