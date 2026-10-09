const http = require('http');
const fs = require('fs');
const path = require('path');
const { parseEciHtml } = require('./parser');

const PORT = process.env.PORT || 3000;
const ECI_URL = 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm';

// Simple in-memory cache
let cachedData = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 15 * 1000; // 15 seconds cache to stay near-instant live

async function fetchEciData() {
  const now = Date.now();
  if (cachedData && (now - lastFetchTime < CACHE_TTL_MS)) {
    return cachedData;
  }

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
    throw new Error(`ECI server returned HTTP ${response.status}`);
  }

  const html = await response.text();
  const parsed = parseEciHtml(html);
  
  cachedData = {
    ...parsed,
    fetchedAt: new Date().toISOString(),
    sourceUrl: ECI_URL
  };
  lastFetchTime = now;

  // Persist to data.json for GitHub Pages and static consumers
  try {
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify({ success: true, data: cachedData }, null, 2));
  } catch (err) {
    console.warn('Could not persist data.json:', err.message);
  }

  return cachedData;
}

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // API Endpoint
  if (pathname === '/api/results') {
    try {
      const data = await fetchEciData();
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache'
      });
      res.end(JSON.stringify({ success: true, data }));
    } catch (err) {
      console.error('Error fetching ECI data:', err.message);
      // If we have cached data, return it even if expired with a warning
      if (cachedData) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, data: cachedData, warning: 'Serving stale cache: ' + err.message }));
      } else {
        res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    }
    return;
  }

  // Health check
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', uptime: process.uptime() }));
    return;
  }

  // Serve static files
  let filePath = pathname === '/' ? '/index.html' : pathname;
  const safePath = path.normalize(path.join(__dirname, filePath));

  // Security check: ensure path stays within workspace root
  if (!safePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(safePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`Tamil Nadu Bye-Election Live Portal is running!`);
  console.log(`Local URL: http://localhost:${PORT}`);
  console.log(`API URL:   http://localhost:${PORT}/api/results`);
  console.log(`=================================================`);
});
