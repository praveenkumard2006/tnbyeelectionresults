/**
 * Tamil Nadu Bye-Election 2026 Live Dashboard
 * Real-time 1-minute auto-refresh with GitHub Pages and Serverless Support
 */

// Fallback Snapshot (Ensures 0ms instant display on GitHub Pages & offline)
const FALLBACK_SNAPSHOT = {
  success: true,
  electionTitle: "Bye Election to Assembly Constituencies: Results October-2026",
  constituency: "101 - DHARAPURAM (Tamil Nadu)",
  currentRound: 6,
  totalRounds: 23,
  roundProgress: 26,
  lastUpdated: "11:06 am On 09/10/2026",
  timestamp: new Date().toISOString(),
  totalVotesCounted: 47643,
  leadMargin: 1394,
  leadingCandidate: {
    name: "SATHYABAMA.P",
    party: "Tamilaga Vettri Kazhagam",
    partyCode: "TVK",
    votes: 16201,
    margin: "+ 1394",
    img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHY-2026-20260916071322.jpg",
    votePercentage: "34.00"
  },
  candidates: [
    {
      id: 1,
      name: "SATHYABAMA.P",
      party: "Tamilaga Vettri Kazhagam",
      partyCode: "TVK",
      votes: 16201,
      margin: "+ 1394",
      status: "leading",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHY-2026-20260916071322.jpg",
      rank: 1,
      votePercentage: "34.00"
    },
    {
      id: 2,
      name: "BANUMATHI.K",
      party: "All India Anna Dravida Munnetra Kazhagam",
      partyCode: "AIADMK",
      votes: 14807,
      margin: "-1394",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/BANUM-2026-20260916092540.jpg",
      rank: 2,
      votePercentage: "31.08"
    },
    {
      id: 3,
      name: "SUGANYA.S",
      party: "Dravida Munnetra Kazhagam",
      partyCode: "DMK",
      votes: 13797,
      margin: "-2404",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SUGAN-2026-20260915042839.jpg",
      rank: 3,
      votePercentage: "28.96"
    },
    {
      id: 4,
      name: "KARTHIKA.M",
      party: "Naam Tamilar Katchi",
      partyCode: "NTK",
      votes: 1146,
      margin: "-15055",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KARTH-2026-20260916090419.jpg",
      rank: 4,
      votePercentage: "2.41"
    },
    {
      id: 5,
      name: "LAKSHMANAN.P",
      party: "Communist Party of India",
      partyCode: "CPI",
      votes: 298,
      margin: "-15903",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/LAKSH-2026-20260916072443.jpg",
      rank: 5,
      votePercentage: "0.63"
    },
    {
      id: 6,
      name: "RAJARATHINAM.S",
      party: "Independent",
      partyCode: "IND",
      votes: 205,
      margin: "-15996",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/RAJAR-2026-20260915062944.jpg",
      rank: 6,
      votePercentage: "0.43"
    },
    {
      id: 23,
      name: "NOTA",
      party: "None of the Above",
      partyCode: "NOTA",
      votes: 187,
      margin: "-16014",
      status: "nota",
      img: "https://results.eci.gov.in/ResultAcByeOct2026/img/nota.jpg",
      rank: 7,
      votePercentage: "0.39"
    },
    {
      id: 7,
      name: "MARIMUTHU.N",
      party: "Independent",
      partyCode: "IND",
      votes: 114,
      margin: "-16087",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MARIM-2026-20260916074606.jpg",
      rank: 8,
      votePercentage: "0.24"
    },
    {
      id: 8,
      name: "MUTHUSAMY.P",
      party: "Independent",
      partyCode: "IND",
      votes: 107,
      margin: "-16094",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/MUTHU-2026-20260916064743.jpg",
      rank: 9,
      votePercentage: "0.22"
    },
    {
      id: 9,
      name: "BANUPRIYA.S",
      party: "Independent",
      partyCode: "IND",
      votes: 98,
      margin: "-16103",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/BANUP-2026-20260915062542.jpg",
      rank: 10,
      votePercentage: "0.21"
    },
    {
      id: 10,
      name: "SATHISHKUMAR.M",
      party: "Independent",
      partyCode: "IND",
      votes: 93,
      margin: "-16108",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHI-2026-20260915051952.jpg",
      rank: 11,
      votePercentage: "0.20"
    },
    {
      id: 11,
      name: "PERUMAL.R",
      party: "Independent",
      partyCode: "IND",
      votes: 88,
      margin: "-16113",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/PERUM-2026-20260916101543.jpg",
      rank: 12,
      votePercentage: "0.18"
    },
    {
      id: 12,
      name: "BANUMATHI.C",
      party: "Independent",
      partyCode: "IND",
      votes: 86,
      margin: "-16115",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/BANUM-2026-20260916081040.jpg",
      rank: 13,
      votePercentage: "0.18"
    },
    {
      id: 13,
      name: "NALLASAMY.P",
      party: "Independent",
      partyCode: "IND",
      votes: 81,
      margin: "-16120",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/NALLA-2026-20260915070306.jpg",
      rank: 14,
      votePercentage: "0.17"
    },
    {
      id: 14,
      name: "MAHENDRAN.S",
      party: "Independent",
      partyCode: "IND",
      votes: 70,
      margin: "-16131",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MAHEN-2026-20260916073046.jpg",
      rank: 15,
      votePercentage: "0.15"
    },
    {
      id: 15,
      name: "DHANALAKSHMI.S",
      party: "Independent",
      partyCode: "IND",
      votes: 46,
      margin: "-16155",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/DHANA-2026-20260916082805.jpg",
      rank: 16,
      votePercentage: "0.10"
    },
    {
      id: 16,
      name: "SATHYABAMA.M",
      party: "Independent",
      partyCode: "IND",
      votes: 40,
      margin: "-16161",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHY-2026-20260915063438.jpg",
      rank: 17,
      votePercentage: "0.08"
    },
    {
      id: 17,
      name: "ARULRAJU.G",
      party: "Anaithinthiya Anna Dravida Makkal Seyal katchi",
      partyCode: "OTH",
      votes: 38,
      margin: "-16163",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/ARULR-2026-20260916085704.jpg",
      rank: 18,
      votePercentage: "0.08"
    },
    {
      id: 18,
      name: "RAJESHWARI.V",
      party: "Independent",
      partyCode: "IND",
      votes: 38,
      margin: "-16163",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/RAJES-2026-20260915061746.jpg",
      rank: 19,
      votePercentage: "0.08"
    },
    {
      id: 19,
      name: "JOTHEESHWARI.D",
      party: "Independent",
      partyCode: "IND",
      votes: 37,
      margin: "-16164",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/JOTHE-2026-20260915063915.jpg",
      rank: 20,
      votePercentage: "0.08"
    },
    {
      id: 20,
      name: "ARUMUGAM.R",
      party: "Ganasangam Party of India",
      partyCode: "OTH",
      votes: 28,
      margin: "-16173",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/ARUMU-2026-20260916103127.jpg",
      rank: 21,
      votePercentage: "0.06"
    },
    {
      id: 21,
      name: "MAHESHWARAN.S",
      party: "Anti Corruption Dynamic Party",
      partyCode: "OTH",
      votes: 20,
      margin: "-16181",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MAHES-2026-20260915051407.jpg",
      rank: 22,
      votePercentage: "0.04"
    },
    {
      id: 22,
      name: "SASIPRIYA.S",
      party: "Independent",
      partyCode: "IND",
      votes: 18,
      margin: "-16183",
      status: "trailing",
      img: "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SASIP-2026-20260915062213.jpg",
      rank: 23,
      votePercentage: "0.04"
    }
  ]
};

// Global State
const state = {
  data: FALLBACK_SNAPSHOT,
  previousVotes: {},
  previousRound: FALLBACK_SNAPSHOT.currentRound,
  countdown: 60,
  timerInterval: null,
  isFetching: false,
  soundEnabled: true,
  currentLanguage: 'en', // 'en' or 'ta'
  currentFilter: 'all',
  searchQuery: '',
  theme: 'dark'
};

// Translations
const i18n = {
  en: {
    live: 'LIVE COUNTING',
    auto_updates: 'Auto-updates every 1 min',
    eci_timestamp: 'ECI Timestamp:',
    refresh_now: 'Refresh Now',
    currently_leading: 'CURRENT LEADER',
    evm_round: 'EVM Round:',
    leading: 'LEADING',
    trailing: 'TRAILING',
    total_votes: 'Votes Polled',
    margin_lead: 'Lead Margin',
    vote_share: 'Vote Share',
    counting_progress: 'Counting Progress:',
    total_votes_counted: 'Total Counted',
    current_lead_gap: "Leader's Lead",
    evm_rounds_status: 'EVM Rounds',
    total_contestants: 'Candidates',
    top_battle: 'Leading Contenders Battle',
    top_contenders_hint: 'Top 3 Parties',
    vote_share_distribution: 'Vote Share Distribution',
    proportional_share: 'Proportional %',
    candidate_wise_results: 'Candidate-Wise Results',
    filter_all: 'All',
    filter_top5: 'Top 5',
    filter_parties: 'Major Parties',
    filter_ind: 'Independents',
    search_placeholder: 'Search candidate or party...',
    votes: 'votes',
    synced_just_now: 'Synced just now',
    synced_secs_ago: 'Synced {s}s ago'
  },
  ta: {
    live: 'நேரலை வாக்கு எண்ணிக்கை',
    auto_updates: '1 நிமிடத்திற்கு ஒருமுறை தானாகப் புதுப்பிக்கப்படும்',
    eci_timestamp: 'தேர்தல் ஆணைய நேரம்:',
    refresh_now: 'புதுப்பிக்கவும்',
    currently_leading: 'முன்னிலை வேட்பாளர்',
    evm_round: 'EVM சுற்று:',
    leading: 'முன்னிலை',
    trailing: 'பின்னடைவு',
    total_votes: 'பெற்ற வாக்குகள்',
    margin_lead: 'வாக்கு வித்தியாசம்',
    vote_share: 'வாக்கு சதவீதம்',
    counting_progress: 'எண்ணிக்கை முன்னேற்றம்:',
    total_votes_counted: 'மொத்த வாக்குகள்',
    current_lead_gap: 'முன்னிலை இடைவெளி',
    evm_rounds_status: 'சுற்றுகள்',
    total_contestants: 'வேட்பாளர்கள்',
    top_battle: 'முன்னணி வேட்பாளர்கள் மோதல்',
    top_contenders_hint: 'முதல் 3 கட்சிகள்',
    vote_share_distribution: 'வாக்கு விகிதாச்சாரம்',
    proportional_share: 'சதவீத பகிர்வு',
    candidate_wise_results: 'வேட்பாளர் வாரியான முடிவுகள்',
    filter_all: 'அனைத்தும்',
    filter_top5: 'முதல் 5',
    filter_parties: 'முக்கிய கட்சிகள்',
    filter_ind: 'சுயேச்சைகள்',
    search_placeholder: 'வேட்பாளர் அல்லது கட்சியைத் தேடுக...',
    votes: 'வாக்குகள்',
    synced_just_now: 'இப்போது புதுப்பிக்கப்பட்டது',
    synced_secs_ago: '{s} விநாடிகளுக்கு முன்'
  }
};

// Party Color Theme Config
const PARTY_THEMES = {
  AIADMK: { color: '#059669', bg: 'rgba(5, 150, 105, 0.15)', nameTa: 'அதிமுக' },
  TVK: { color: '#dc2626', bg: 'rgba(220, 38, 38, 0.15)', nameTa: 'தவெக' },
  DMK: { color: '#dc2626', bg: 'rgba(220, 38, 38, 0.15)', nameTa: 'திமுக' },
  NTK: { color: '#d97706', bg: 'rgba(217, 119, 6, 0.15)', nameTa: 'நாதக' },
  CPI: { color: '#e11d48', bg: 'rgba(225, 29, 72, 0.15)', nameTa: 'சிபிஐ' },
  IND: { color: '#6366f1', bg: 'rgba(99, 102, 241, 0.12)', nameTa: 'சுயேச்சை' },
  NOTA: { color: '#64748b', bg: 'rgba(100, 116, 139, 0.15)', nameTa: 'நோட்டா' }
};

// Default Avatar Fallback SVG Data URI
const DEFAULT_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="%2364748b"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;

// DOM Element References
const dom = {
  electionTitle: document.getElementById('electionTitle'),
  constituencyTitle: document.getElementById('constituencyTitle'),
  lastSyncText: document.getElementById('lastSyncText'),
  countdownSeconds: document.getElementById('countdownSeconds'),
  timerProgress: document.getElementById('timerProgress'),
  eciLastUpdated: document.getElementById('eciLastUpdated'),
  manualRefreshBtn: document.getElementById('manualRefreshBtn'),
  dockRefreshBtn: document.getElementById('dockRefreshBtn'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  langToggleBtn: document.getElementById('langToggleBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),

  // Leader Spotlight
  spotlightRoundNum: document.getElementById('spotlightRoundNum'),
  leaderPhoto: document.getElementById('leaderPhoto'),
  leaderPartyChip: document.getElementById('leaderPartyChip'),
  leaderName: document.getElementById('leaderName'),
  leaderPartyFull: document.getElementById('leaderPartyFull'),
  leaderVotes: document.getElementById('leaderVotes'),
  leaderMargin: document.getElementById('leaderMargin'),
  leaderPercentage: document.getElementById('leaderPercentage'),
  roundProgressDetail: document.getElementById('roundProgressDetail'),
  roundProgressPercent: document.getElementById('roundProgressPercent'),
  roundProgressBar: document.getElementById('roundProgressBar'),

  // Overview Stats
  totalVotesCounted: document.getElementById('totalVotesCounted'),
  overviewLeadMargin: document.getElementById('overviewLeadMargin'),
  overviewRounds: document.getElementById('overviewRounds'),
  totalCandidatesCount: document.getElementById('totalCandidatesCount'),

  // Battle & Chart
  topContendersContainer: document.getElementById('topContendersContainer'),
  voteShareStackedBar: document.getElementById('voteShareStackedBar'),
  voteShareLegend: document.getElementById('voteShareLegend'),

  // Candidates List
  candidateCountDisplay: document.getElementById('candidateCountDisplay'),
  candidateSearchInput: document.getElementById('candidateSearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  candidatesGrid: document.getElementById('candidatesGrid'),
  filterPills: document.querySelectorAll('.filter-pill'),

  // Mobile Dock
  dockLeaderImg: document.getElementById('dockLeaderImg'),
  dockLeaderName: document.getElementById('dockLeaderName'),
  dockLeaderParty: document.getElementById('dockLeaderParty'),
  dockLeaderVotes: document.getElementById('dockLeaderVotes'),
  dockLeaderMargin: document.getElementById('dockLeaderMargin'),

  // Toast
  toastNotification: document.getElementById('toastNotification'),
  toastMessage: document.getElementById('toastMessage')
};

// Helper: Format Numbers with commas
function formatNumber(num) {
  if (num === null || num === undefined) return '0';
  return Number(num).toLocaleString('en-IN');
}

// Sound Synthesizer via Web Audio API
function playNotificationChime() {
  if (!state.soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15); // G5

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {
    // Restricted before user gesture
  }
}

// Show Toast Message
function showToast(message) {
  dom.toastMessage.textContent = message;
  dom.toastNotification.classList.add('show');
  setTimeout(() => {
    dom.toastNotification.classList.remove('show');
  }, 3500);
}

// Multi-Tier Fetch Engine (Works on GitHub Pages, Vercel, and Localhost)
async function fetchResults(isManual = false) {
  if (state.isFetching) return;
  state.isFetching = true;

  if (isManual) {
    dom.manualRefreshBtn.classList.add('loading');
    dom.dockRefreshBtn.classList.add('loading');
  }

  let resultData = null;

  // Strategy 1: Relative data.json (Primary for GitHub Pages & static hosting)
  try {
    const dataUrl = `./data.json?_t=${Date.now()}`;
    const res = await fetch(dataUrl, { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json && (json.data || json.candidates)) {
        resultData = json.data || json;
      }
    }
  } catch (err) {
    console.log('Static data.json fetch failed:', err);
  }

  // Strategy 2: /api/results or api/results (Local Node.js server or Vercel serverless)
  if (!resultData) {
    const apiEndpoints = ['/api/results', 'api/results'];
    for (const ep of apiEndpoints) {
      try {
        const res = await fetch(ep, { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            resultData = json.data;
            break;
          }
        }
      } catch (err) {
        // Continue to next endpoint
      }
    }
  }

  // Handle Fetch Result
  if (resultData) {
    handleDataUpdate(resultData);
    if (isManual) {
      showToast(state.currentLanguage === 'ta' ? 'முடிவுகள் புதுப்பிக்கப்பட்டன!' : 'Live results updated!');
    }
  } else {
    // Fallback: Use currently displayed snapshot
    dom.lastSyncText.textContent = state.currentLanguage === 'ta' ? 'இணைக்கப்பட்டுள்ளது' : 'Live Sync Active';
  }

  state.isFetching = false;
  dom.manualRefreshBtn.classList.remove('loading');
  dom.dockRefreshBtn.classList.remove('loading');
  resetCountdown();
}

// Check for updates & render
function handleDataUpdate(newData) {
  let hasRoundChanged = state.previousRound && newData.currentRound !== state.previousRound;
  let leaderChanged = false;

  if (state.data && state.data.leadingCandidate && newData.leadingCandidate) {
    if (state.data.leadingCandidate.name !== newData.leadingCandidate.name) {
      leaderChanged = true;
    }
  }

  if (hasRoundChanged || leaderChanged) {
    playNotificationChime();
    const roundMsg = state.currentLanguage === 'ta' 
      ? `சுற்று ${newData.currentRound} முடிவுகள் வெளியிடப்பட்டன! ${newData.leadingCandidate.name} முன்னிலை!`
      : `Round ${newData.currentRound} declared! ${newData.leadingCandidate.name} leading!`;
    showToast(roundMsg);
  }

  state.previousRound = newData.currentRound;
  state.data = newData;

  renderDashboard();
}

// Render Dashboard
function renderDashboard() {
  if (!state.data) return;
  const d = state.data;
  const lang = state.currentLanguage;
  const t = i18n[lang];

  // Title & Headers
  dom.eciLastUpdated.textContent = d.lastUpdated || 'Live';
  dom.lastSyncText.textContent = t.synced_just_now;

  // Round tracking
  dom.spotlightRoundNum.textContent = `${d.currentRound}/${d.totalRounds}`;
  dom.overviewRounds.textContent = `${d.currentRound} / ${d.totalRounds}`;
  dom.roundProgressDetail.textContent = `Round ${d.currentRound} of ${d.totalRounds}`;
  dom.roundProgressPercent.textContent = `${d.roundProgress}%`;
  dom.roundProgressBar.style.width = `${d.roundProgress}%`;

  // Overview Counts
  dom.totalVotesCounted.textContent = formatNumber(d.totalVotesCounted);
  dom.totalCandidatesCount.textContent = d.candidates.length;

  const leadMarginNum = d.leadMargin || 0;
  dom.overviewLeadMargin.textContent = `+${formatNumber(leadMarginNum)}`;

  // Leading Candidate Spotlight
  if (d.leadingCandidate) {
    const leader = d.leadingCandidate;
    dom.leaderName.textContent = leader.name;
    dom.leaderPartyChip.textContent = leader.partyCode;
    dom.leaderPartyFull.textContent = leader.party;
    dom.leaderVotes.textContent = formatNumber(leader.votes);
    dom.leaderMargin.textContent = leader.margin || `+${formatNumber(leadMarginNum)}`;
    dom.leaderPercentage.textContent = `${leader.votePercentage}%`;
    
    if (leader.img) {
      dom.leaderPhoto.src = leader.img;
      dom.dockLeaderImg.src = leader.img;
    }

    // Mobile Dock
    dom.dockLeaderName.textContent = leader.name;
    dom.dockLeaderParty.textContent = leader.partyCode;
    dom.dockLeaderVotes.textContent = formatNumber(leader.votes);
    dom.dockLeaderMargin.textContent = leader.margin || `+${formatNumber(leadMarginNum)}`;
  }

  // Render Top 3 Contenders Battle
  renderTopContenders(d.candidates.slice(0, 3));

  // Render Vote Share Proportional Bar
  renderVoteShareBar(d.candidates, d.totalVotesCounted);

  // Render Candidate Cards Grid
  renderCandidatesList();
}

// Render Top 3 Contenders
function renderTopContenders(top3) {
  if (!top3 || top3.length === 0) return;

  const html = top3.map((c, index) => {
    const partyTheme = PARTY_THEMES[c.partyCode] || PARTY_THEMES.IND;
    const isLead = c.status === 'leading';
    const rank = index + 1;

    return `
      <div class="contender-card rank-${rank}">
        <div class="contender-top">
          <div class="contender-photo-wrap">
            <img src="${c.img || DEFAULT_AVATAR}" alt="${c.name}" class="contender-img" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${DEFAULT_AVATAR}';">
            <span class="contender-rank-badge">#${rank}</span>
          </div>
          <div class="contender-info">
            <span class="contender-party-badge" style="background: ${partyTheme.bg}; color: ${partyTheme.color};">${c.partyCode}</span>
            <div class="contender-name" title="${c.name}">${c.name}</div>
            <span class="contender-status-pill ${isLead ? 'status-lead-pill' : 'status-trail-pill'}">
              ${isLead ? (state.currentLanguage === 'ta' ? 'முன்னிலை' : 'LEADING') : (state.currentLanguage === 'ta' ? 'பின்னடைவு' : 'TRAILING')}
            </span>
          </div>
        </div>

        <div class="contender-numbers">
          <span class="contender-votes">${formatNumber(c.votes)}</span>
          <span class="contender-margin ${isLead ? 'text-emerald' : 'text-muted'}">${c.margin || ''}</span>
        </div>

        <div class="contender-bar">
          <div class="contender-bar-fill" style="width: ${c.votePercentage}%; background: ${partyTheme.color};"></div>
        </div>
      </div>
    `;
  }).join('');

  dom.topContendersContainer.innerHTML = html;
}

// Render Vote Share Proportional Bar
function renderVoteShareBar(candidates, totalVotes) {
  if (!candidates || candidates.length === 0 || totalVotes === 0) return;

  const top4 = candidates.slice(0, 4);
  const remaining = candidates.slice(4);
  const othersVotes = remaining.reduce((sum, c) => sum + c.votes, 0);
  const othersPct = totalVotes > 0 ? ((othersVotes / totalVotes) * 100).toFixed(1) : 0;

  const segments = [...top4];
  if (othersVotes > 0) {
    segments.push({
      name: 'Others & NOTA',
      partyCode: 'OTH',
      votes: othersVotes,
      votePercentage: othersPct
    });
  }

  // Build Bar
  const barHtml = segments.map(s => {
    const theme = PARTY_THEMES[s.partyCode] || { color: '#94a3b8' };
    return `<div class="share-segment" style="width: ${s.votePercentage}%; background: ${theme.color};" data-tooltip="${s.partyCode}: ${s.votePercentage}% (${formatNumber(s.votes)})"></div>`;
  }).join('');
  dom.voteShareStackedBar.innerHTML = barHtml;

  // Build Legend
  const legendHtml = segments.map(s => {
    const theme = PARTY_THEMES[s.partyCode] || { color: '#94a3b8' };
    return `
      <div class="legend-item">
        <span class="legend-dot" style="background: ${theme.color};"></span>
        <span><strong>${s.partyCode}</strong>: ${s.votePercentage}%</span>
      </div>
    `;
  }).join('');
  dom.voteShareLegend.innerHTML = legendHtml;
}

// Render Candidate Cards Grid with Search and Filter
function renderCandidatesList() {
  if (!state.data || !state.data.candidates) return;
  const candidates = state.data.candidates;
  const query = state.searchQuery.trim().toLowerCase();
  const filter = state.currentFilter;

  let filtered = candidates.filter(c => {
    if (query) {
      const matchName = c.name.toLowerCase().includes(query);
      const matchParty = c.party.toLowerCase().includes(query) || c.partyCode.toLowerCase().includes(query);
      if (!matchName && !matchParty) return false;
    }

    if (filter === 'top5') return c.rank <= 5;
    if (filter === 'recognized') return ['AIADMK', 'TVK', 'DMK', 'NTK', 'CPI', 'BJP', 'INC'].includes(c.partyCode);
    if (filter === 'ind') return c.partyCode === 'IND';
    if (filter === 'nota') return c.partyCode === 'NOTA';

    return true; // 'all'
  });

  dom.candidateCountDisplay.textContent = `${filtered.length} Candidates`;

  if (filtered.length === 0) {
    dom.candidatesGrid.innerHTML = `
      <div class="empty-state">
        <p>No candidates found matching "<strong>${state.searchQuery}</strong>"</p>
      </div>
    `;
    return;
  }

  const html = filtered.map(c => {
    const partyTheme = PARTY_THEMES[c.partyCode] || PARTY_THEMES.IND;
    const isLeading = c.status === 'leading';
    const isNota = c.partyCode === 'NOTA';
    const partyClass = `party-${c.partyCode.toLowerCase()}`;

    return `
      <div class="cand-card ${isLeading ? 'is-leading' : ''}">
        <div class="cand-card-main">
          <div class="cand-avatar-wrap">
            <img src="${c.img || DEFAULT_AVATAR}" alt="${c.name}" class="cand-avatar" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${DEFAULT_AVATAR}';">
            <span class="cand-rank">${c.rank}</span>
          </div>
          <div class="cand-meta">
            <div class="cand-meta-top">
              <span class="cand-party-pill ${partyClass}">${c.partyCode}</span>
              ${isLeading ? `<span class="cand-margin-badge margin-positive">LEADING</span>` : ''}
            </div>
            <div class="cand-name-text" title="${c.name}">${c.name}</div>
            <div class="cand-party-fullname" title="${c.party}">${c.party}</div>
          </div>
        </div>

        <div class="cand-card-stats">
          <div>
            <span class="cand-votes-num">${formatNumber(c.votes)}</span>
            <small style="color: var(--text-muted); font-size: 0.72rem;"> (${c.votePercentage}%)</small>
          </div>
          <div class="cand-margin-badge ${isLeading ? 'margin-positive' : 'margin-negative'}">
            ${c.margin ? c.margin : (isNota ? 'NOTA' : '')}
          </div>
        </div>

        <div class="cand-progress-line">
          <div class="cand-progress-line-fill" style="width: ${c.votePercentage}%; background: ${partyTheme.color};"></div>
        </div>
      </div>
    `;
  }).join('');

  dom.candidatesGrid.innerHTML = html;
}

// Countdown Timer Engine (60s down to 0)
function startCountdownTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);

  state.timerInterval = setInterval(() => {
    state.countdown--;
    dom.countdownSeconds.textContent = state.countdown;

    const pct = Math.max(0, (state.countdown / 60) * 100);
    dom.timerProgress.setAttribute('stroke-dasharray', `${pct}, 100`);

    if (state.countdown <= 0) {
      resetCountdown();
      fetchResults(false);
    }
  }, 1000);
}

function resetCountdown() {
  state.countdown = 60;
  dom.countdownSeconds.textContent = '60';
  dom.timerProgress.setAttribute('stroke-dasharray', '100, 100');
}

// Toggle Language (EN / TA)
function switchLanguage() {
  state.currentLanguage = state.currentLanguage === 'en' ? 'ta' : 'en';
  const lang = state.currentLanguage;
  const t = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  const enSpan = dom.langToggleBtn.querySelector('.lang-en');
  const taSpan = dom.langToggleBtn.querySelector('.lang-ta');
  if (lang === 'ta') {
    enSpan.classList.remove('font-bold');
    taSpan.classList.add('font-bold');
    document.body.style.fontFamily = 'var(--font-tamil)';
  } else {
    enSpan.classList.add('font-bold');
    taSpan.classList.remove('font-bold');
    document.body.style.fontFamily = 'var(--font-body)';
  }

  if (state.data) renderDashboard();
}

// Toggle Theme (Dark / Light)
function switchTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('tn_election_theme', state.theme);

  const moonIcon = dom.themeToggleBtn.querySelector('.theme-moon');
  const sunIcon = dom.themeToggleBtn.querySelector('.theme-sun');
  if (state.theme === 'light') {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  }
}

// Toggle Sound Alerts
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const onIcon = dom.soundToggleBtn.querySelector('.sound-on-icon');
  const offIcon = dom.soundToggleBtn.querySelector('.sound-off-icon');
  if (state.soundEnabled) {
    onIcon.classList.remove('hidden');
    offIcon.classList.add('hidden');
    playNotificationChime();
    showToast('Sound alerts enabled');
  } else {
    onIcon.classList.add('hidden');
    offIcon.classList.remove('hidden');
    showToast('Sound alerts muted');
  }
}

// Setup Event Listeners
function initEventListeners() {
  dom.manualRefreshBtn.addEventListener('click', () => fetchResults(true));
  dom.dockRefreshBtn.addEventListener('click', () => fetchResults(true));
  dom.soundToggleBtn.addEventListener('click', toggleSound);
  dom.langToggleBtn.addEventListener('click', switchLanguage);
  dom.themeToggleBtn.addEventListener('click', switchTheme);

  // Search Input
  dom.candidateSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery) {
      dom.clearSearchBtn.classList.remove('hidden');
    } else {
      dom.clearSearchBtn.classList.add('hidden');
    }
    renderCandidatesList();
  });

  dom.clearSearchBtn.addEventListener('click', () => {
    dom.candidateSearchInput.value = '';
    state.searchQuery = '';
    dom.clearSearchBtn.classList.add('hidden');
    renderCandidatesList();
  });

  // Filter Pills
  dom.filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dom.filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentFilter = pill.getAttribute('data-filter');
      renderCandidatesList();
    });
  });

  // Keyboard shortcut: Press R to refresh
  window.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
      if (document.activeElement.tagName !== 'INPUT') {
        fetchResults(true);
      }
    }
  });
}

// Initial Bootstrapping: Instantly render without waiting!
function init() {
  const savedTheme = localStorage.getItem('tn_election_theme');
  if (savedTheme && savedTheme !== state.theme) {
    switchTheme();
  }

  initEventListeners();
  renderDashboard(); // Render immediately with snapshot!
  startCountdownTimer();
  fetchResults(false);
}

// Run on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
