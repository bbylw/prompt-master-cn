import { chromium } from 'playwright';

// Usage: SITE_URL=http://localhost:4321 bun scripts/interact.mjs  (or pass the URL as argv[2])
const url = new URL(process.argv[2] ?? process.env.SITE_URL ?? 'http://localhost:4321/').href;
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  colorScheme: 'dark',
  permissions: ['clipboard-read', 'clipboard-write'],
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

await page.goto(url, { waitUntil: 'networkidle' });

// 1. Examples: switch to 编码 tab
await page.locator('#examples').scrollIntoViewIfNeeded();
await page.getByRole('tab', { name: '编码' }).click();
await page.waitForTimeout(400);
const ccVisible = await page.getByText('Done When:').first().isVisible();
console.log('examples coding tab shows Claude Code prompt:', ccVisible);
await page.locator('#examples').screenshot({ path: '.shots/interact-examples.png' });

// 2. Profiles: filter by 图像
await page.locator('#profiles').scrollIntoViewIfNeeded();
await page.getByRole('button', { name: '图像', exact: true }).click();
await page.waitForTimeout(400);
const countText = await page.locator('#profiles p[aria-live]').innerText();
console.log('profiles filter 图像 count:', countText);
await page.locator('#profiles').screenshot({ path: '.shots/interact-profiles.png' });

// 3. Patterns: switch to Agentic tab
await page.locator('#patterns').scrollIntoViewIfNeeded();
await page.getByRole('tab', { name: /Agentic/ }).click();
await page.waitForTimeout(400);
const agentic = await page.getByText('长会话上下文腐化').first().isVisible();
console.log('patterns agentic tab:', agentic);
await page.locator('#patterns').screenshot({ path: '.shots/interact-patterns.png' });

// 4. Changelog expand
await page.locator('#changelog').scrollIntoViewIfNeeded();
await page.getByRole('button', { name: /展开全部 9 个版本/ }).click();
await page.waitForTimeout(300);
const v100 = await page.getByText('1.0.0').first().isVisible();
console.log('changelog expanded shows 1.0.0:', v100);

// 5. Theme toggle
await page.evaluate(() => window.scrollTo(0, 0));
await page.getByRole('button', { name: '切换深浅主题' }).click();
await page.waitForTimeout(300);
const isLight = await page.evaluate(() => !document.documentElement.classList.contains('dark'));
console.log('theme toggled to light:', isLight);
await page.screenshot({ path: '.shots/interact-light-hero.png' });

// 6. Copy button on hero card
await page.locator('#top').getByRole('button', { name: '复制提示词' }).click();
await page.waitForTimeout(300);
const copied = await page.getByRole('button', { name: '已复制' }).count();
console.log('copy feedback shown:', copied > 0);

// 7. Mobile menu
const mp = await browser.newPage({ viewport: { width: 390, height: 844 }, colorScheme: 'dark' });
await mp.goto(url, { waitUntil: 'networkidle' });
await mp.getByRole('button', { name: '打开菜单' }).click();
await mp.waitForTimeout(400);
const menuLink = await mp.getByRole('link', { name: '工具档案' }).first().isVisible();
console.log('mobile menu open:', menuLink);
await mp.screenshot({ path: '.shots/interact-mobile-menu.png' });

if (errors.length) console.log('PAGE ERRORS:', errors);
await browser.close();
console.log('interactions done');
