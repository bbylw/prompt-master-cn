export interface PatternCategory {
  key: string;
  label: string;
  patterns: { name: string; before: string; after: string }[];
}

export const patternCategories: PatternCategory[] = [
  {
    key: 'task',
    label: '任务模式',
    patterns: [
      { name: '模糊的任务动词', before: '帮我弄弄我的代码', after: '重构 getUserData()，改用 async/await 并处理 null 返回' },
      { name: '一个提示两件事', before: '解释并且重写这个函数', after: '拆开：先解释，再重写' },
      { name: '没有成功标准', before: '弄得更好一点', after: '完成标准：函数通过现有单元测试并能处理 null 输入' },
      { name: '代理权限过宽', before: '不惜一切代价搞定', after: '明确列出允许 + 禁止的操作' },
      { name: '情绪化任务描述', before: '全都不对了，修一切', after: '当 user 为 null 时在第 43 行抛出未捕获的 TypeError' },
      { name: '一口气造整个东西', before: '把我的整个应用做出来', after: '拆成提示 1（脚手架）、提示 2（功能）、提示 3（打磨）' },
      { name: '隐式引用', before: '把刚才说的那件事加上', after: '永远完整重述任务，绝不引用“刚才说的事”' },
    ],
  },
  {
    key: 'context',
    label: '上下文模式',
    patterns: [
      { name: '假设对方知道前情', before: '接着上次继续', after: '附带包含全部既往决策的记忆块' },
      { name: '没有项目上下文', before: '写一封求职信', after: 'B2B 金融科技公司 PM，2 年开发经验，任技术负责人期间交付 3 个功能' },
      { name: '忘了技术栈', before: '新提示与之前的技术选型矛盾', after: '永远包含记忆块' },
      { name: '邀请幻觉', before: '专家们对 X 怎么说？', after: '只引用你确定的来源。不确定就明说。' },
      { name: '受众未定义', before: '给用户写点东西', after: '非技术背景的 B2B 采购者，不懂编程，决策人层级' },
      { name: '不提既往失败', before: '（空白）', after: '我已经试过 X，失败原因是 Y。不要再建议 X。' },
    ],
  },
  {
    key: 'format',
    label: '格式模式',
    patterns: [
      { name: '缺少输出格式', before: '解释这个概念', after: '3 个要点，每个不超过 20 字，开头给一句总结' },
      { name: '隐含长度要求', before: '写个总结', after: '写一个恰好 3 句话的总结' },
      { name: '没有角色设定', before: '（空白）', after: '你是一名专注 Node.js 和 PostgreSQL 的资深后端工程师' },
      { name: '模糊的审美形容词', before: '弄得专业一点', after: '单色配色、16px 基准字号、24px 行高、无装饰元素' },
      { name: '图像 AI 没有负向提示', before: '一位女性的肖像', after: '加上：no watermark, no blur, no extra fingers, no distortion, no text' },
      { name: '给 Midjourney 写散文', before: '完整的描述性长句', after: 'subject, style, mood, lighting, --ar 16:9 --v 6' },
    ],
  },
  {
    key: 'scope',
    label: '范围模式',
    patterns: [
      { name: '没有范围边界', before: '修我的应用', after: '只修 src/auth.js 里登录表单的校验。其他文件一律不动。' },
      { name: '没有技术栈约束', before: '写一个 React 组件', after: 'React 18、TypeScript strict、不用外部库、只用 Tailwind' },
      { name: '代理没有停止条件', before: '把整个功能做完', after: '明确的停止条件 + 每步之后输出检查点' },
      { name: 'IDE AI 没有文件路径', before: '更新登录函数', after: '只更新 src/pages/Login.tsx 中的 handleLogin()' },
      { name: '工具用错模板', before: '在 Cursor 里用 GPT 式散文', after: '改写为带路径 + 范围的文件范围模板' },
      { name: '粘贴整个代码库', before: '每个提示都带上全仓库上下文', after: '只圈定相关函数与文件' },
    ],
  },
  {
    key: 'reasoning',
    label: '推理模式',
    patterns: [
      { name: '逻辑任务没有审计契约', before: '哪个方案更好？', after: '要求给出推荐、假设、判断标准、证据与检查项' },
      { name: '索要隐藏思维链', before: '展示你的思考过程', after: '改为要求简明的理由、证据与验证' },
      { name: '指望跨会话记忆', before: '你已经知道我的项目了', after: '每个新会话都重新提供记忆块' },
      { name: '与既往工作矛盾', before: '新提示无视先前的架构决定', after: '把已确立的决策写进记忆块' },
      { name: '事实任务没有增援规则', before: '总结一下专家们对 X 的看法', after: '要求可核实的来源和明确的不确定性声明' },
    ],
  },
  {
    key: 'agentic',
    label: 'Agentic 模式',
    patterns: [
      { name: '没有起始状态', before: '给我搭一个 REST API', after: '空的 Node.js 项目，已装 Express，src/app.js 已存在' },
      { name: '没有目标状态', before: '加上鉴权', after: '在 src/middleware/auth.js 实现 JWT 校验；POST /login 和 POST /register 放在 src/routes/auth.js' },
      { name: '沉默的代理', before: '没有进度输出', after: '每完成一步输出：✅ [完成了什么]' },
      { name: '文件系统不设锁', before: '没有文件限制', after: '只能编辑 src/ 内的文件。不许碰 package.json、.env 或任何配置文件。' },
      { name: '没有人工复核触发点', before: '代理自作主张', after: '在以下操作前必须停下询问：删除任何文件、添加任何依赖、改动数据库结构' },
      { name: 'agentic 模型首轮太模糊', before: '修一下鉴权 bug，没有范围、文件或标准', after: '首轮就给足结果、上下文、范围、边界与验收标准' },
      { name: '长会话上下文腐化', before: '反复纠错后上下文中残留过期假设', after: '无关工作直接开新会话，或围绕当前决策与状态做压缩' },
    ],
  },
];
