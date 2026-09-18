export interface PromptExample {
  tab: string;
  request: string;
  prompt: string;
  meta: { tool: string; framework?: string; tokens: string; strategy: string };
}

const mjPrompt = `lone samurai standing in heavy rain at night, traditional armor,
neon reflections on wet cobblestone street, cinematic lighting,
dramatic shadows, fog, ultra detailed, photorealistic,
shallow depth of field --ar 16:9 --v 6 --style raw

negative: blurry, low quality, watermark, cartoon, anime, extra limbs`;

const ccPrompt = `Objective:
Build a fully detailed, production-quality static landing page for a
business dashboard product. Design must match Notion's exact aesthetic -
clean, minimal, typographic, with smooth animations throughout.

Stack:
Single HTML file with embedded CSS and vanilla JS. No frameworks.
No external dependencies except Google Fonts (Inter).

Design Spec - match these exactly:
- Background: #ffffff
- Primary text: #1a1a1a
- Secondary text: #6b7280
- Border color: #e5e7eb
- Accent: #000000
- Font: Inter, weights 400 / 500 / 600 / 700
- Base spacing unit: 8px
- Border radius: 6px on cards, 4px on buttons
- Box shadows: 0 1px 3px rgba(0,0,0,0.08) only, no dramatic shadows
- Buttons: black fill, white text, no border radius above 6px

Sections to build in order:
1. Navbar - logo left, nav links center, "Get started free" CTA right.
   Sticky on scroll, adds subtle border-bottom on scroll with JS.
2. Hero - large left-aligned heading (max 3 lines), subtext, two CTAs
   (primary black + secondary outlined), hero screenshot mockup
   placeholder (gray rounded card, 16:9 ratio).
3. Logos bar - "Trusted by teams at..." with 5 placeholder company names
   in muted gray, centered.
4. Features - 3-column grid. Each card: icon (use emoji), bold title,
   2-line description. Hover state: border darkens to #d1d5db,
   translateY(-2px), transition 200ms ease.
5. How it works - alternating left/right layout, 3 steps. Number badge,
   heading, description, placeholder screenshot card.
6. Pricing - 2 tiers side by side. Free tier: outlined card. Pro tier:
   black background, white text, "Most popular" badge. List 4 features
   each with checkmarks.
7. CTA banner - full-width dark section, centered heading, subtext,
   single CTA button.
8. Footer - 4-column links, copyright line, minimal.

Animations - implement all of these:
- Fade-in + translateY(20px) to translateY(0) on scroll for every section,
  using IntersectionObserver. Threshold 0.15. Duration 500ms ease-out.
- Staggered animation on feature cards: 100ms delay between each card.
- Navbar CTA button: background transitions from black to #333 on hover,
  200ms ease.
- Hero CTA primary: same hover transition. Secondary: background goes from
  transparent to #f3f4f6 on hover.
- Smooth scroll on all anchor links.
- Navbar border-bottom fades in on scroll past 60px using JS scroll event.

Constraints:
- Single file only. All CSS and JS embedded, no external files
- No dependencies except Google Fonts via CDN link tag
- All placeholder images replaced with styled gray div elements
- Must be pixel-perfect at 375px mobile and 1440px desktop
- No CSS frameworks, no utility classes from external sources

Done When:
- All 8 sections render correctly at both breakpoints
- All animations trigger on scroll without layout shift
- Navbar sticks and border appears on scroll
- Hover states work on all interactive elements
- Opens in browser with zero console errors`;

export const examples: PromptExample[] = [
  {
    tab: '图像生成',
    request: '给我写一个 midjourney 提示词：一个写实风格的武士在雨夜中伫立',
    prompt: mjPrompt,
    meta: {
      tool: 'Midjourney',
      framework: 'Visual Descriptor（视觉描述符）',
      tokens: '轻量，约 60',
      strategy:
        '用逗号分隔的描述符代替整句散文，光照与氛围锚定在前，锁定宽高比和版本，负向提示防止风格漂移。',
    },
  },
  {
    tab: '编码',
    request: '给 claude code 写一个提示词，做一个业务仪表盘产品的落地页，外观和手感要完全像 Notion，流畅的动画、干净的 UI',
    prompt: ccPrompt,
    meta: {
      tool: 'Claude Code',
      tokens: '中等，约 380',
      strategy:
        '把每一条模糊的“Notion 风格”线索翻译成精确的十六进制色值和像素规格，Claude Code 没有猜错的空间。动画精确定义了时长、实现方式和触发条件，无需任何解读。',
    },
  },
];
