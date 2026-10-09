const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { parseEciHtml } = require('./parser');

const ECI_URL = 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm';
const DATA_FILE = path.join(__dirname, 'data.json');

const isOnce = process.argv.includes('--once');
const shouldPush = process.argv.includes('--push');

async function syncElectionData() {
  const timestamp = new Date().toLocaleTimeString('en-US');
  process.stdout.write(`[${timestamp}] Fetching latest ECI data... `);

  try {
    const response = await fetch(ECI_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const parsed = parseEciHtml(html);

    const payload = {
      success: true,
      data: {
        ...parsed,
        fetchedAt: new Date().toISOString(),
        sourceUrl: ECI_URL
      }
    };

    // Check if data changed
    let hasChanged = true;
    if (fs.existsSync(DATA_FILE)) {
      try {
        const oldData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        if (
          oldData.data &&
          oldData.data.currentRound === parsed.currentRound &&
          oldData.data.totalVotesCounted === parsed.totalVotesCounted &&
          oldData.data.leadingCandidate &&
          parsed.leadingCandidate &&
          oldData.data.leadingCandidate.votes === parsed.leadingCandidate.votes
        ) {
          hasChanged = false;
        }
      } catch (e) {
        hasChanged = true;
      }
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(payload, null, 2));

    const leaderName = parsed.leadingCandidate ? parsed.leadingCandidate.name : 'Unknown';
    const leaderVotes = parsed.leadingCandidate ? parsed.leadingCandidate.votes : 0;
    const margin = parsed.leadingCandidate ? parsed.leadingCandidate.margin : '';

    console.log(`OK! Round: ${parsed.currentRound}/${parsed.totalRounds} | Leader: ${leaderName} (${leaderVotes} votes, ${margin})`);

    if (hasChanged && shouldPush) {
      try {
        console.log('Detected new count! Committing and pushing to GitHub...');
        execSync('git add data.json', { stdio: 'inherit' });
        execSync(`git commit -m "Live Update: Round ${parsed.currentRound} - ${leaderName} (${margin})"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });
        console.log('Pushed to GitHub successfully!');
      } catch (gitErr) {
        console.warn('Git push warning:', gitErr.message);
      }
    }

    return payload;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    return null;
  }
}

// Execution
if (isOnce) {
  syncElectionData();
} else {
  console.log('======================================================');
  console.log('Tamil Nadu Bye-Election Auto-Updater Started');
  console.log('Polling ECI every 60 seconds and updating data.json');
  if (shouldPush) console.log('Auto-pushing new counts to GitHub Pages repository');
  console.log('======================================================');

  syncElectionData();
  setInterval(syncElectionData, 60 * 1000);
}
