const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'http://localhost:3000/';
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const logs = [];
  page.on('console', msg => {
    logs.push({ type: 'console', level: msg.type(), text: msg.text() });
  });
  page.on('pageerror', err => {
    logs.push({ type: 'pageerror', text: err.stack || err.message || String(err) });
  });
  page.on('requestfailed', req => {
    logs.push({ type: 'requestfailed', url: req.url(), status: req.failure() && req.failure().errorText });
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle' });
    // Wait a bit more for runtime activity
    await page.waitForTimeout(3000);
  } catch (e) {
    logs.push({ type: 'goto-error', text: e.stack || e.message || String(e) });
  }

  console.log('---CAPTURED LOGS START---');
  console.log(JSON.stringify(logs, null, 2));
  console.log('---CAPTURED LOGS END---');

  await browser.close();
})();