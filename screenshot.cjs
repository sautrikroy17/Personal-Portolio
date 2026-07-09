const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  
  const capture = async (url, path) => {
    try {
      const page = await context.newPage();
      console.log(`Navigating to ${url}...`);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Wait a bit for animations/content to settle
      await page.waitForTimeout(5000);
      await page.screenshot({ path });
      console.log(`Saved ${path}`);
      await page.close();
    } catch (e) {
      console.error(`Error capturing ${url}: ${e.message}`);
    }
  };

  await capture('https://loop-feel.vercel.app', 'public/loop.png');
  await capture('https://legacy-lens-beta.vercel.app', 'public/legacy-lens.png');
  await capture('https://quizzify-ai.vercel.app', 'public/quizzify.png');

  await browser.close();
})();
