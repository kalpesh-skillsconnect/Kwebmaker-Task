const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();

  // Mobile 390px
  const mob = await browser.newPage();
  await mob.setViewportSize({ width: 390, height: 844 });
  await mob.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await mob.waitForTimeout(2500);
  const mobEl = await mob.$('section.fac-section');
  if (mobEl) { await mobEl.screenshot({ path: 'fac-mobile.png' }); console.log('mobile done'); }

  // Tablet 768px
  const tab = await browser.newPage();
  await tab.setViewportSize({ width: 768, height: 1024 });
  await tab.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await tab.waitForTimeout(2500);
  const tabEl = await tab.$('section.fac-section');
  if (tabEl) { await tabEl.screenshot({ path: 'fac-tablet.png' }); console.log('tablet done'); }

  // Desktop 1440px
  const desk = await browser.newPage();
  await desk.setViewportSize({ width: 1440, height: 900 });
  await desk.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await desk.waitForTimeout(2500);
  const deskEl = await desk.$('section.fac-section');
  if (deskEl) { await deskEl.screenshot({ path: 'fac-desktop.png' }); console.log('desktop done'); }

  await browser.close();
})();
