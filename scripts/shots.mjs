import { chromium } from 'playwright';

const url = 'http://localhost:4321/';

const browser = await chromium.launch();

const shots = [
  { name: 'desktop-dark', width: 1440, height: 900, dark: true, full: false },
  { name: 'desktop-dark-full', width: 1440, height: 900, dark: true, full: true },
  { name: 'desktop-light-full', width: 1440, height: 900, dark: false, full: true },
  { name: 'mobile-dark', width: 390, height: 844, dark: true, full: false },
];

async function autoScroll(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 400));
  });
}

for (const s of shots) {
  const page = await browser.newPage({
    viewport: { width: s.width, height: s.height },
    colorScheme: s.dark ? 'dark' : 'light',
  });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  if (s.full) await autoScroll(page);
  await page.screenshot({ path: `.shots/${s.name}.png`, fullPage: s.full });
  if (errors.length) console.log(s.name, 'ERRORS:', errors);
  await page.close();
}

await browser.close();
console.log('done');
