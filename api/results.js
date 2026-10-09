const { parseEciHtml } = require('../parser');

const ECI_URL = 'https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate=40');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    const response = await fetch(ECI_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });

    if (!response.ok) {
      throw new Error(`ECI server returned HTTP ${response.status}`);
    }

    const html = await response.text();
    const parsed = parseEciHtml(html);

    return res.status(200).json({
      success: true,
      data: {
        ...parsed,
        fetchedAt: new Date().toISOString(),
        sourceUrl: ECI_URL
      }
    });
  } catch (err) {
    console.error('Serverless fetch error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
