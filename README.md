# Tamil Nadu Bye-Election 2026 Live Dashboard 🗳️

A modern, mobile-friendly, real-time live election results web application for Tamil Nadu Bye-Election (**101 - Dharapuram Assembly Constituency**).

Live data source: [ECI Official Results Portal](https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm)

---

## 🌟 Key Features

1. **Live 1-Minute Auto-Refresh**:
   - Updates countdown timer (60s circular radar ring).
   - Automatically polls the official ECI portal every 1 minute.
   - Manual "Refresh Now" button for immediate sync anytime.

2. **Mobile-First & Modern UI**:
   - Glassmorphic dark theme (with one-click Light Mode toggle).
   - Sticky bottom quick-status dock on mobile screens for effortless one-handed browsing.
   - Candidate photos loaded directly from ECI with custom fallback avatars.

3. **Leader Spotlight & EVM Tracker**:
   - Prominent hero spotlight card for the currently leading candidate.
   - Live lead margin calculation (`+724 votes`).
   - Dynamic EVM counting progress bar (e.g. `Round 5 of 23 completed`).

4. **Contenders Battle & Vote Share Visualization**:
   - Top 3 contenders comparison cards (TVK vs AIADMK vs DMK).
   - Proportional stacked vote-share distribution bar with party colors.

5. **Search & Instant Filters**:
   - Real-time search by candidate name or party.
   - Quick filters: `All (23)`, `Top 5`, `Major Parties`, `Independents`, `NOTA`.

6. **Bilingual Support (English & தமிழ்)**:
   - One-click toggle between English and Tamil (நேரலை வாக்கு எண்ணிக்கை, முன்னிலை, பின்னடைவு, சுற்றுகள்).

7. **Live Change Alerts**:
   - Subtle Web Audio API chime when votes or rounds update.
   - Toast notification displaying newly declared rounds and lead changes.

---

## 🚀 How to Run

### Option 1: Run with Node.js (Recommended)
From the project folder `d:\gitprojects\byeelection`:
```bash
npm start
# OR
node server.js
```
Then open your browser at:
**[http://localhost:3000](http://localhost:3000)**

### Option 2: Standalone Static Use
You can also open `index.html` directly in your browser. The client-side application contains automatic fallback CORS proxies to fetch and parse the official ECI page directly.
