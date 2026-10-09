const { parseEciHtml } = require('../parser');

const CONSTITUENCIES = {
  '101': {
    id: '101',
    name: 'Dharapuram',
    url: 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm'
  },
  '35': {
    id: '35',
    name: 'Madurantakam',
    url: 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S2235.htm'
  }
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate=40');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const requestedAc = req.query && req.query.ac ? req.query.ac : null;

  try {
    const results = {};
    await Promise.all(
      Object.entries(CONSTITUENCIES).map(async ([id, conf]) => {
        try {
          const response = await fetch(conf.url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.9'
            }
          });
          if (response.ok) {
            const html = await response.text();
            results[id] = {
              ...parseEciHtml(html),
              acId: id,
              acName: conf.name,
              sourceUrl: conf.url,
              fetchedAt: new Date().toISOString()
            };
          }
        } catch (err) {
          console.error(`Error AC ${id}:`, err);
        }
      })
    );

    const defaultData = requestedAc && results[requestedAc]
      ? results[requestedAc]
      : (results['101'] || Object.values(results)[0]);

    return res.status(200).json({
      success: true,
      data: defaultData,
      constituencies: results
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
