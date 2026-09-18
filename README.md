![](https://i.postimg.cc/kG03s7tk/prompt-banner.png)

<br/>

一项 Claude 技能，为任何 AI 工具撰写精准的提示词。零 token 或额度浪费，完整的上下文与记忆保持。不必再反复重试，才拿到本该第一次就得到的答案。

**适用工具：** Claude, ChatGPT, Codex, Grok, Gemini, o1/o3, MiniMax, Cursor, Claude Code, GitHub Copilot, Windsurf, Bolt, v0, Lovable, Devin, Perplexity, Midjourney, DALL-E, Stable Diffusion, ComfyUI, Sora, Runway, ElevenLabs, Zapier, Make, 以及你甩给它的任何 AI 工具。

---

## 🚀 安装

### 推荐方式 - Claude.ai（浏览器）

1. 下载本仓库的 ZIP 压缩包
2. 前往 **claude.ai → 侧边栏 → Customize（自定义）→ Skills（技能）→ Upload a Skill（上传技能）**


### 或者：直接克隆到 Claude Code 技能目录（不推荐）

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/nidhinjs/prompt-master.git ~/.claude/skills/prompt-master
```

## 🔥 它解决的问题

每个 AI 用户都在以同样的方式浪费额度：

> 写个模糊的提示 → 得到错误的输出 → 重新提问 → 稍微接近 → 再问一次 → 到第 4 次才终于拿到你想要的东西

这就是 3 次被浪费的 API 调用。乘以每天 50 个提示，那就是实实在在流走的金钱和时间。

### 关键洞察

> "最好的提示词不是最长的那个，而是每一个词都在承担作用的。"

大多数"提示词生成器"只会让提示更长。这项技能是让提示更锋利。

---

## 🎯 用法

在 Claude 中，你可以用自然的方式调用这项技能：

```
帮我写一个给 Cursor 的提示词，用来重构我的鉴权模块
```

```
我需要一个给 Claude Code 的提示词来构建 REST API — 你需要什么信息直接问我
```

```
这是我给 GPT-4o 写的一个烂提示，帮我修一下：[粘贴提示]
```

```
为夜晚的赛博朋克城市生成一个 Midjourney 提示词
```

```
我有一张参考图 — 帮我写一个只修改头部角度的编辑提示词
```

```
把这个提示词拆解并改写适配 Stable Diffusion
```

或者显式调用：

```
/prompt-master

我想让 Claude Code 用 React 和 Supabase 构建一个待办应用
```

---

## 工作原理

Prompt Master 对每个请求执行一条结构化流水线：

1. **识别目标工具** — 判断提示词面向哪个 AI 系统，静默路由到正确的方案
2. **提取意图的 9 个维度** — 任务、输入、输出、约束、上下文、受众、记忆、成功标准、示例
3. **提出针对性的澄清问题** — 关键信息缺失时最多问 3 个问题，绝不多问
4. **路由到正确的框架** — 自动选择并应用合适的提示架构，永不展示给用户
5. **只应用安全的技术** — 按需使用角色设定、few-shot 示例、XML 结构、事实锚定、记忆块
6. **核查模型时效性** — 当请求依赖"最新"时，对照官方文档核实确切的模型与参数
7. **执行 token 效率审计** — 删掉每一个不会改变输出的词
8. **交付提示词** — 一个干净可复制的代码块，附一行策略说明

---
## 完整示例 #1：为图像生成提示词

### 用户输入
```
给我写一个 midjourney 提示词：一个写实风格的武士在雨夜中伫立
```

### 生成的提示词
```
lone samurai standing in heavy rain at night, traditional armor, 
neon reflections on wet cobblestone street, cinematic lighting, 
dramatic shadows, fog, ultra detailed, photorealistic, 
shallow depth of field --ar 16:9 --v 6 --style raw

negative: blurry, low quality, watermark, cartoon, anime, extra limbs
```
**🎯 目标：** Midjourney · **⚡ 框架：** Visual Descriptor（视觉描述符） · **💰 Tokens：** 轻量（约 60） · **💡 策略：** 用逗号分隔的描述符代替整句散文，光照与氛围锚定在前，锁定宽高比和版本，负向提示防止风格漂移。

---
## 完整示例 #2：为编码生成提示词

### 用户输入
```
给 claude code 写一个提示词，做一个业务仪表盘产品的落地页，
外观和手感要完全像 Notion — 流畅的动画、干净的 UI
```


### 生成的提示词
```
Objective:
Build a fully detailed, production-quality static landing page for a 
business dashboard product. Design must match Notion's exact aesthetic — 
clean, minimal, typographic, with smooth animations throughout.

Stack:
Single HTML file with embedded CSS and vanilla JS. No frameworks. 
No external dependencies except Google Fonts (Inter).

Design Spec — match these exactly:
- Background: #ffffff
- Primary text: #1a1a1a
- Secondary text: #6b7280
- Border color: #e5e7eb
- Accent: #000000
- Font: Inter, weights 400 / 500 / 600 / 700
- Base spacing unit: 8px
- Border radius: 6px on cards, 4px on buttons
- Box shadows: 0 1px 3px rgba(0,0,0,0.08) only — no dramatic shadows
- Buttons: black fill, white text, no border radius above 6px

Sections to build in order:
1. Navbar — logo left, nav links center, "Get started free" CTA right. 
   Sticky on scroll, adds subtle border-bottom on scroll with JS.
2. Hero — large left-aligned heading (max 3 lines), subtext, two CTAs 
   (primary black + secondary outlined), hero screenshot mockup 
   placeholder (gray rounded card, 16:9 ratio).
3. Logos bar — "Trusted by teams at..." with 5 placeholder company names 
   in muted gray, centered.
4. Features — 3-column grid. Each card: icon (use emoji), bold title, 
   2-line description. Hover state: border darkens to #d1d5db, 
   translateY(-2px), transition 200ms ease.
5. How it works — alternating left/right layout, 3 steps. Number badge, 
   heading, description, placeholder screenshot card.
6. Pricing — 2 tiers side by side. Free tier: outlined card. Pro tier: 
   black background, white text, "Most popular" badge. List 4 features 
   each with checkmarks.
7. CTA banner — full-width dark section, centered heading, subtext, 
   single CTA button.
8. Footer — 4-column links, copyright line, minimal.

Animations — implement all of these:
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
- Single file only — all CSS and JS embedded, no external files
- No dependencies except Google Fonts via CDN link tag
- All placeholder images replaced with styled gray div elements
- Must be pixel-perfect at 375px mobile and 1440px desktop
- No CSS frameworks, no utility classes from external sources

Done When:
- All 8 sections render correctly at both breakpoints
- All animations trigger on scroll without layout shift
- Navbar sticks and border appears on scroll
- Hover states work on all interactive elements
- Opens in browser with zero console errors
```
**🎯 目标：** Claude Code · **💰 Tokens：** 中等（约 380） · **💡 策略：** 把每一条模糊的"Notion 风格"线索翻译成精确的十六进制色值和像素规格 — Claude Code 没有猜错的空间。动画的精确定义了时长、实现方式和触发条件，无需任何解读。

---

## 🤝 适配任何 AI 工具

Prompt Master 内置了 20 多个工具的专属档案。对于清单之外的工具，它使用**通用指纹（Universal Fingerprint）**：4 个问题，让它能为从未见过的任何 AI 系统写出高质量提示词。

<details>
<summary><h3> 点击查看全部 30+ 工具档案 </h3></summary>

| 工具 | 类别 | Prompt Master 修复什么 |
|------|----------|--------------------------|
| **Claude 5 / 当前 Claude** | 推理与 Agentic LLM | 模型感知的投入级别、范围控制、XML 结构与委派控制 |
| **ChatGPT / GPT-5.6** | 推理与 Agentic LLM | Sol/Terra/Luna 路由、精简契约、自主性与投入控制 |
| **Codex** | 编码代理 | 文件范围、审批边界、验证流程、有界子代理 |
| **Grok 4.6** | 推理与 Agentic LLM | 搜索增援、推理投入、工具使用、缓存与停止条件 |
| **Gemini 2.x** | 推理 LLM | 事实锚定、引用规则、格式锁定 |
| **o3 / o4-mini** | 思考型 LLM | 只写简短干净的指令 — 绝不添加思维链（它们内部会思考） |
| **Ollama** | 本地 LLM | 询问加载的是哪个模型，为 Modelfile 附上系统提示 |
| **Qwen 2.5 / Qwen3** | 开源权重 LLM | Chat 模板格式，思考模式与非思考模式检测 |
| **本地模型（Llama, Mistral）** | 开源权重 LLM | 更短的提示、更简单的结构、不用复杂嵌套 |
| **DeepSeek-R1** | 推理 LLM | 简短干净的指令，剥离思维链，必要时抑制思考输出 |
| **MiniMax（M3 / M2.7）** | 推理 LLM | 温度钳制、思考标签控制、结构化输出优化 |
| **Claude Code** | Agentic AI | 停止条件、文件范围、检查点输出 |
| **Cursor / Windsurf** | IDE AI | 文件路径、函数名、禁改清单、按序提示指导 |
| **Cline（原 Claude Dev）** | Agentic IDE | 文件范围、审批门、停止条件、任务拆解 |
| **GitHub Copilot** | 自动补全 AI | 以文档字符串给出精确的函数契约 |
| **Antigravity** | Agentic IDE | 基于任务的提示、Artifact 验证、自主级别 |
| **Bolt / v0 / Lovable** | 全栈生成器 | 技术栈规格、版本、明确不要脚手架什么 |
| **Figma Make** | 全栈生成器 | 组件名引用、frame 到代码的范围界定 |
| **Google Stitch** | 全栈生成器 | 以界面目标而非实现方式表述、Material Design 3 规范 |
| **Devin / SWE-agent** | 自主代理 | 起始状态、目标状态、停止条件 |
| **Manus** | 自主代理 | 任务结果导向、权限范围、记忆锚点 |
| **OpenAI Computer Use** | 计算机操作代理 | 屏幕状态、允许的应用、不可逆操作前必须停下 |
| **Perplexity Computer** | 计算机操作代理 | Artifact 优先提示、限定权限范围、验证步骤 |
| **OpenClaw** | 计算机操作代理 | 对话精度、持久记忆、安全约束 |
| **Perplexity / SearchGPT** | 搜索 AI | 模式指定：搜索 vs 分析 vs 对比 |
| **Midjourney** | 图像 AI | 逗号分隔描述符、参数、负向提示 |
| **DALL-E 3** | 图像 AI | 散文式描述、文字排除 — 编辑与生成的自动判别 |
| **Stable Diffusion** | 图像 AI | 权重语法 `(word:1.3)`、CFG 引导、强制负向提示 |
| **SeeDream** | 图像 AI | 艺术风格优先、氛围与情绪描述符、负向提示 |
| **ComfyUI** | 图像 AI | 正向/负向节点拆分、按 checkpoint 区分的语法 |
| **Meshy / Tripo / Rodin** | 3D AI | 风格 + 导出格式 + 多边形预算 + 绑定需求 |
| **BlenderGPT** | 3D AI | Python 脚本输出、Blender 版本、场景上下文 |
| **Unity AI** | 3D / 游戏 AI | 游戏类型、目标平台、以机制描述代替代码 |
| **Sora / Runway** | 视频 AI | 镜头运动、时长、剪辑风格 |
| **LTX / Dream Machine / Kling** | 视频 AI | 电影化语言、运动强度、风格参考 |
| **ElevenLabs** | 语音 AI | 情绪、节奏、重音、语速 |
| **Zapier / Make / n8n** | 工作流自动化 | 触发应用 + 事件、动作应用 + 字段映射 |

</details>

---

## 📐 13 个提示词模板（自动选择）

Prompt Master 为每个任务自动挑选正确的架构并静默路由 — 你永远看不到框架名称，只看到最终的提示词。

<details>
<summary><h3> 点击查看全部 13 个模板</h3></summary>

| 模板 | 最适合 |
|----------|----------|
| **RTF**（Role 角色, Task 任务, Format 格式） | 快速一次性任务 |
| **CO-STAR**（上下文、目标、风格、语气、受众、回复） | 专业文档、报告、商务写作 |
| **RISEN**（角色、指令、步骤、终局、收窄） | 复杂多步骤项目 |
| **CRISPE**（能力、角色、洞察、陈述、人格、实验） | 创意工作、品牌语调、迭代式内容 |
| **Auditable Reasoning**（可审计推理） | 可核查的数学、逻辑、调试与分析，无需隐藏推理 |
| **Few-Shot** | 一致的结构化输出、模式复刻 |
| **File-Scope Template**（文件范围模板） | Cursor、Windsurf、Copilot — 任何代码编辑 AI |
| **ReAct + Stop Conditions** | Claude Code、Devin、AutoGPT — 任何自主代理 |
| **Visual Descriptor**（视觉描述符） | Midjourney、DALL-E、Stable Diffusion、Sora — 生成 |
| **Reference Image Editing**（参考图编辑） | 编辑已有图片 — 自动判别编辑还是生成 |
| **ComfyUI** | 基于节点的工作流 — 每个 checkpoint 正/负向拆分 |
| **Prompt Decompiler**（提示词解码器） | 拆解、改写、精简或拆分既有提示词 |
| **Current Claude Task Brief**（当前 Claude 任务简报） | 在当前 Claude 模型上执行复杂、多步骤或 agentic 任务 |

</details>

---

## 🛡️ 5 项安全技术，按需应用

Prompt Master 只使用效果可靠、边界清晰的技术。已知会产生幻觉或不可预测输出的方法（Tree of Thought、Graph of Thought、Universal Self-Consistency、提示链）被明确排除。

| 技术 | 作用 |
|-----------|-------------|
| **Role Assignment**（角色设定） | 指定具体的专家身份，校准深度与用词 |
| **Few-Shot Examples**（少样本示例） | 当格式一致性比指令更重要时，加入 2-5 个示例 |
| **XML Structural Tags**（XML 结构标签） | 对能可靠解析 XML 的 Claude 系工具，用 XML 包裹各部分 |
| **Grounding Anchors**（事实锚定） | 为事实性与引用类任务添加反幻觉规则 |
| **Auditable Reasoning**（可审计推理） | 要求给出结论、假设、证据与验证，而非隐藏推理 |

---

## 🚫 检测 37 种烧额度模式（附前后对比示例）

<details>
<summary><h3> 任务模式（7）</h3></summary>

| # | 模式 | 改前 | 改后 |
|---|---------|--------|-------|
| 1 | **模糊的任务动词** | "帮我弄弄我的代码" | "重构 `getUserData()`，改用 async/await 并处理 null 返回" |
| 2 | **一个提示两件事** | "解释并且重写这个函数" | 拆开：先解释，再重写 |
| 3 | **没有成功标准** | "弄得更好一点" | "完成标准：函数通过现有单元测试并能处理 null 输入" |
| 4 | **代理权限过宽** | "不惜一切代价搞定" | 明确列出允许 + 禁止的操作 |
| 5 | **情绪化任务描述** | "全都不对了，修一切" | "当 `user` 为 null 时在第 43 行抛出未捕获的 TypeError" |
| 6 | **一口气造整个东西** | "把我的整个应用做出来" | 拆成提示 1（脚手架）、提示 2（功能）、提示 3（打磨） |
| 7 | **隐式引用** | "把刚才说的那件事加上" | 永远完整重述任务，绝不引用"刚才说的事" |

</details>

<details>
<summary><h3> 上下文模式（6）</h3></summary>

### 上下文模式

| # | 模式 | 改前 | 改后 |
|---|---------|--------|-------|
| 8 | **假设对方知道前情** | "接着上次继续" | 附带包含全部既往决策的记忆块 |
| 9 | **没有项目上下文** | "写一封求职信" | "B2B 金融科技公司 PM，2 年开发经验，任技术负责人期间交付 3 个功能" |
| 10 | **忘了技术栈** | 新提示与之前的技术选型矛盾 | 永远包含记忆块 |
| 11 | **邀请幻觉** | "专家们对 X 怎么说？" | "只引用你确定的来源。不确定就明说。" |
| 12 | **受众未定义** | "给用户写点东西" | "非技术背景的 B2B 采购者，不懂编程，决策人层级" |
| 13 | **不提既往失败** | （空白） | "我已经试过 X，失败原因是 Y。不要再建议 X。" |

</details>


<details>
<summary><h3> 格式模式（6）</h3></summary>

| # | 模式 | 改前 | 改后 |
|---|---------|--------|-------|
| 14 | **缺少输出格式** | "解释这个概念" | "3 个要点，每个不超过 20 字，开头给一句总结" |
| 15 | **隐含长度要求** | "写个总结" | "写一个恰好 3 句话的总结" |
| 16 | **没有角色设定** | （空白） | "你是一名专注 Node.js 和 PostgreSQL 的资深后端工程师" |
| 17 | **模糊的审美形容词** | "弄得专业一点" | "单色配色、16px 基准字号、24px 行高、无装饰元素" |
| 18 | **图像 AI 没有负向提示** | "一位女性的肖像" | 加上："no watermark, no blur, no extra fingers, no distortion, no text" |
| 19 | **给 Midjourney 写散文** | 完整的描述性长句 | "subject, style, mood, lighting, --ar 16:9 --v 6" |

</details>


<details>
<summary><h3> 范围模式（6）</h3></summary>

| # | 模式 | 改前 | 改后 |
|---|---------|--------|-------|
| 20 | **没有范围边界** | "修我的应用" | "只修 `src/auth.js` 里登录表单的校验。其他文件一律不动。" |
| 21 | **没有技术栈约束** | "写一个 React 组件" | "React 18、TypeScript strict、不用外部库、只用 Tailwind" |
| 22 | **代理没有停止条件** | "把整个功能做完" | 明确的停止条件 + 每步之后输出检查点 |
| 23 | **IDE AI 没有文件路径** | "更新登录函数" | "只更新 `src/pages/Login.tsx` 中的 `handleLogin()`" |
| 24 | **工具用错模板** | 在 Cursor 里用 GPT 式散文 | 改写为带路径 + 范围的文件范围模板 |
| 25 | **粘贴整个代码库** | 每个提示都带上全仓库上下文 | 只圈定相关函数与文件 |

</details>


<details>
<summary><h3> 推理模式（5）</h3></summary>

| # | 模式 | 改前 | 改后 |
|---|---------|--------|-------|
| 26 | **逻辑任务没有审计契约** | "哪个方案更好？" | 要求给出推荐、假设、判断标准、证据与检查项 |
| 27 | **索要隐藏思维链** | "展示你的思考过程" | 改为要求简明的理由、证据与验证 |
| 28 | **指望跨会话记忆** | "你已经知道我的项目了" | 每个新会话都重新提供记忆块 |
| 29 | **与既往工作矛盾** | 新提示无视先前的架构决定 | 把已确立的决策写进记忆块 |
| 30 | **事实任务没有增援规则** | "总结一下专家们对 X 的看法" | 要求可核实的来源和明确的不确定性声明 |

</details>

<details>
<summary><h3> Agentic 模式（7）</h3></summary>

| # | 模式 | 改前 | 改后 |
|---|---------|--------|-------|
| 31 | **没有起始状态** | "给我搭一个 REST API" | "空的 Node.js 项目，已装 Express，`src/app.js` 已存在" |
| 32 | **没有目标状态** | "加上鉴权" | "`/src/middleware/auth.js` 实现 JWT 校验；`POST /login` 和 `POST /register` 放在 `/src/routes/auth.js`" |
| 33 | **沉默的代理** | 没有进度输出 | "每完成一步输出：✅ [完成了什么]" |
| 34 | **文件系统不设锁** | 没有文件限制 | "只能编辑 `src/` 内的文件。不许碰 `package.json`、`.env` 或任何配置文件。" |
| 35 | **没有人工复核触发点** | 代理自作主张 | "在以下操作前必须停下询问：删除任何文件、添加任何依赖、改动数据库结构" |
| 36 | **agentic 模型首轮太模糊** | "修一下鉴权 bug"，没有范围、文件或标准 | 首轮就给足结果、上下文、范围、边界与验收标准 |
| 37 | **长会话上下文腐化** | 反复纠错后上下文中残留过期假设 | 无关工作直接开新会话，或围绕当前决策与状态做压缩 |

</details>

---

## 🧠 记忆块系统

当你的对话已有历史时，Prompt Master 会提取既往决策并前置一个记忆块，让 AI 永不与前期的工作矛盾：

```
## Memory (Carry Forward from Previous Context)
- Stack: React 18 + TypeScript + Supabase
- Auth uses JWT stored in httpOnly cookies, not localStorage
- Component naming convention: PascalCase, no default exports
- Design system: Tailwind only, no custom CSS files
- Architecture: no Redux, context API only
```

这是长会话最有效的单一修复手段。大多数白白浪费的重新提问，都源于 AI 忘了你已经做过的决定。

---

## ℹ️ 版本历史

- **1.8.0** — 当前模型刷新。新增 Claude Fable 5、Opus 5、Sonnet 5、GPT-5.6 Sol/Terra/Luna、Codex 与 Grok 4.6 的路由。用可审计推理取代隐藏思维链请求，并将 Claude 任务简报泛化以适配当前的自适应思考模型。
- **1.7.0** — Opus 4.8 兼容。使 Claude 4.x 路由具备版本感知：将稳健建议泛化到 4.6/4.7/4.8，新增 Opus 4.8（当前默认）档案，Opus 4.7 保持原标签。去除硬编码的投入级别说明（现由 harness 管理）。模板 M 与模式 36 覆盖 4.7 和 4.8。修复了 patterns.md 中的一处残留片段。
- **1.6.0** — Opus 4.7 更新。新增模板 M（Opus 4.7 任务简报）。按字面执行、自适应思考、xhigh 投入、会话卫生等维度更新 Claude 与 Claude Code 路由。新增模式 36–37。
- **1.5.0** — 扩展更多工具路由。新增 Agentic AI 和 3D 模型 AI 路由。描述修正至 189 字符。从输出中移除 token 估算。新增指令层与文案占位符。
- **1.4.0** — 新增参考图编辑检测、ComfyUI 支持、提示词解码器模式。修复触发描述使其能在 Claude Code 中正确调用。references 目录新增 3 个模板。
- **1.3.0** — 围绕 PAC2026 位置结构重建（30/55/15）。静默路由取代面向用户的框架选择。引入 references 目录。
- **1.2.0** — 为注意力架构重构。移除易致幻觉的技术（ToT、GoT、USC、提示链）。模板与模式移入 references 目录。
- **1.1.0** — 扩展工具覆盖面，新增记忆块系统、35 种烧额度模式。
- **1.0.0** — 首次发布

---

## 📄 许可证

MIT：详见 [LICENSE](https://github.com/nidhinjs/prompt-master/blob/main/LICENSE)。

---

## ⭐ Star 历史

[![Star History Chart](https://star-history.dera.page/svg?repos=nidhinjs/prompt-master&type=Date)](https://star-history.dera.page/#nidhinjs/prompt-master&Date)

---
