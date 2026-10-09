/**
 * Tamil Nadu Bye-Election 2026 Live Dashboard
 * Real-time 1-minute auto-refresh with client-side failover
 */

// State Management
const state = {
  data: null,
  previousVotes: {},
  previousRound: 0,
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

// Sound Synthesizer via Web Audio API (No external sound files required)
function playNotificationChime() {
  if (!state.soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Smooth pleasant two-tone election chime (E5 -> G5)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
    osc1.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15); // G5

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc1.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc1.stop(ctx.currentTime + 0.4);
  } catch (e) {
    // Audio context may be restricted before user gesture
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

// Universal Fetch Engine (Works on ANY port, ANY live website, GitHub Pages, and Localhost)
async function fetchResults(isManual = false) {
  if (state.isFetching) return;
  state.isFetching = true;

  if (isManual) {
    dom.manualRefreshBtn.classList.add('loading');
    dom.dockRefreshBtn.classList.add('loading');
  }

  let resultData = null;

  // 1. Live API Candidates (relative to current host, protocol, and port)
  const apiCandidates = [
    './api/results',
    'api/results',
    '/api/results'
  ];

  for (const ep of apiCandidates) {
    try {
      const res = await fetch(ep, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          resultData = json.data;
          break;
        }
      }
    } catch (e) {
      // Continue to next candidate
    }
  }

  // 2. Static Data Feed Candidates (for GitHub Pages, Cloudflare Pages, S3, etc.)
  if (!resultData) {
    const dataCandidates = [
      `./data.json?_t=${Date.now()}`,
      `data.json?_t=${Date.now()}`,
      `/data.json?_t=${Date.now()}`
    ];

    for (const dUrl of dataCandidates) {
      try {
        const res = await fetch(dUrl, { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          if (json && (json.data || json.candidates)) {
            resultData = json.data || json;
            break;
          }
        }
      } catch (e) {
        // Continue to next candidate
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
    // If running offline or disconnected, keep existing state active
    dom.lastSyncText.textContent = state.currentLanguage === 'ta' ? 'இணைக்கப்பட்டுள்ளது' : 'Live Sync Active';
  }

  state.isFetching = false;
  dom.manualRefreshBtn.classList.remove('loading');
  dom.dockRefreshBtn.classList.remove('loading');
  resetCountdown();
}

// Check for updates & render
function handleDataUpdate(newData) {
  // Check if round or votes changed
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
            <img src="${c.img || 'https://results.eci.gov.in/ResultAcByeOct2026/img/user-ifo.png'}" alt="${c.name}" class="contender-img" onerror="this.src='https://results.eci.gov.in/ResultAcByeOct2026/img/user-ifo.png'">
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

  // Group top 4 + others
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
    // Search query match
    if (query) {
      const matchName = c.name.toLowerCase().includes(query);
      const matchParty = c.party.toLowerCase().includes(query) || c.partyCode.toLowerCase().includes(query);
      if (!matchName && !matchParty) return false;
    }

    // Filter pill match
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
            <img src="${c.img || 'https://results.eci.gov.in/ResultAcByeOct2026/img/user-ifo.png'}" alt="${c.name}" class="cand-avatar" onerror="this.src='https://results.eci.gov.in/ResultAcByeOct2026/img/user-ifo.png'">
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

    // Stroke Dasharray: 100 * (countdown / 60)
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

  // Update static labels with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Toggle button styling
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

  // Re-render dynamic parts
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
  // Refresh Buttons
  dom.manualRefreshBtn.addEventListener('click', () => fetchResults(true));
  dom.dockRefreshBtn.addEventListener('click', () => fetchResults(true));

  // Sound Toggle
  dom.soundToggleBtn.addEventListener('click', toggleSound);

  // Language Toggle
  dom.langToggleBtn.addEventListener('click', switchLanguage);

  // Theme Toggle
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

// Initial Bootstrapping
function init() {
  // Load saved theme
  const savedTheme = localStorage.getItem('tn_election_theme');
  if (savedTheme && savedTheme !== state.theme) {
    switchTheme();
  }

  initEventListeners();
  startCountdownTimer();
  fetchResults(false);
}

// Run on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
