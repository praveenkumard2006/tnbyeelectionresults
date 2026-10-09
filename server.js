const http = require('http');
const fs = require('fs');
const path = require('path');
const { parseEciHtml } = require('./parser');

// Parse requested port from CLI args, process.env.PORT, or default 3000
function getRequestedPort() {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--port' || args[i] === '-p') {
      const p = parseInt(args[i + 1], 10);
      if (!isNaN(p) && p > 0 && p <= 65535) return p;
    }
    const num = parseInt(args[i], 10);
    if (!isNaN(num) && num > 0 && num <= 65535) {
      return num;
    }
  }

  if (process.env.PORT) {
    const p = parseInt(process.env.PORT, 10);
    if (!isNaN(p) && p > 0 && p <= 65535) return p;
  }

  return 3000;
}

const INITIAL_PORT = getRequestedPort();
const ECI_URL = 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm';

// In-memory cache
let cachedData = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 15 * 1000; // 15 seconds cache

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
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const hostHeader = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const protoHeader = req.headers['x-forwarded-proto'] || 'http';
  const parsedUrl = new URL(req.url, `${protoHeader}://${hostHeader}`);
  const pathname = parsedUrl.pathname;

  // Live API Endpoint (Supports exact /api/results or reverse-proxied subpaths like /subpath/api/results)
  if (pathname === '/api/results' || pathname.endsWith('/api/results')) {
    try {
      const data = await fetchEciData();
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(JSON.stringify({ success: true, data }));
    } catch (err) {
      console.error('Error fetching ECI data:', err.message);
      if (cachedData) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, data: cachedData, warning: 'Stale cache: ' + err.message }));
      } else {
        res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    }
    return;
  }

  // Health check endpoint
  if (pathname === '/api/health' || pathname.endsWith('/api/health')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', uptime: process.uptime() }));
    return;
  }

  // Static File Resolver (supports root files, subpaths, and clean URLs)
  let requestedFile = pathname;
  if (requestedFile === '/' || requestedFile.endsWith('/')) {
    requestedFile += 'index.html';
  }

  // First try direct file in workspace
  let safePath = path.normalize(path.join(__dirname, requestedFile));
  
  // If not found, try by filename (helpful if deployed under subpaths like /byeelection/style.css)
  if (!fs.existsSync(safePath) || !fs.statSync(safePath).isFile()) {
    const baseName = path.basename(pathname);
    const altPath = path.normalize(path.join(__dirname, baseName));
    if (fs.existsSync(altPath) && fs.statSync(altPath).isFile()) {
      safePath = altPath;
    }
  }

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

    // Allow cache for static css/images, but no-cache for html and data.json
    const cacheControl = (ext === '.html' || ext === '.json')
      ? 'no-cache, no-store, must-revalidate'
      : 'public, max-age=3600';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': cacheControl
    });
    const stream = fs.createReadStream(safePath);
    stream.pipe(res);
  });
});

// Resilient port listener: tries requested port, auto-finds next port if busy
function listenOnAvailablePort(port, attemptsRemaining = 20) {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Port Notice] Port ${port} is currently in use.`);
      if (attemptsRemaining > 0) {
        const nextPort = port + 1;
        console.log(`[Auto-Port] Retrying on port ${nextPort}...`);
        listenOnAvailablePort(nextPort, attemptsRemaining - 1);
      } else {
        console.error('Fatal: Could not find any available port.');
        process.exit(1);
      }
    } else {
      console.error('Server error:', err);
    }
  });

  // Listen on 0.0.0.0 for universal compatibility across Render, Railway, Heroku, Docker, and LAN
  server.listen(port, '0.0.0.0', () => {
    console.log(`=================================================`);
    console.log(`Tamil Nadu Bye-Election Live Portal is running!`);
    console.log(`Active Port:   ${port}`);
    console.log(`Local URL:     http://localhost:${port}`);
    console.log(`Network URL:   http://0.0.0.0:${port}`);
    console.log(`API Endpoint:  http://localhost:${port}/api/results`);
    console.log(`=================================================`);
  });
}

listenOnAvailablePort(INITIAL_PORT);
