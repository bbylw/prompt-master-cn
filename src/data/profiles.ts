export type ProfileGroup =
  | 'llm'
  | 'coding'
  | 'fullstack'
  | 'agentic'
  | 'search'
  | 'image'
  | '3d'
  | 'video'
  | 'audio'
  | 'automation';

export interface Profile {
  tool: string;
  category: string;
  group: ProfileGroup;
  fixes: string;
}

export const groups: { key: ProfileGroup | 'all'; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'llm', label: 'LLM 与推理' },
  { key: 'coding', label: '编码与 IDE' },
  { key: 'fullstack', label: '全栈生成' },
  { key: 'agentic', label: '自主与计算机操作' },
  { key: 'search', label: '搜索' },
  { key: 'image', label: '图像' },
  { key: '3d', label: '3D 与游戏' },
  { key: 'video', label: '视频' },
  { key: 'audio', label: '语音' },
  { key: 'automation', label: '自动化' },
];

export const profiles: Profile[] = [
  { tool: 'Claude 5 / 当前 Claude', category: '推理与 Agentic LLM', group: 'llm', fixes: '模型感知的投入级别、范围控制、XML 结构与委派控制' },
  { tool: 'ChatGPT / GPT-5.6', category: '推理与 Agentic LLM', group: 'llm', fixes: 'Sol/Terra/Luna 路由、精简契约、自主性与投入控制' },
  { tool: 'Codex', category: '编码代理', group: 'coding', fixes: '文件范围、审批边界、验证流程、有界子代理' },
  { tool: 'Grok 4.6', category: '推理与 Agentic LLM', group: 'llm', fixes: '搜索增援、推理投入、工具使用、缓存与停止条件' },
  { tool: 'Gemini 2.x', category: '推理 LLM', group: 'llm', fixes: '事实锚定、引用规则、格式锁定' },
  { tool: 'o3 / o4-mini', category: '思考型 LLM', group: 'llm', fixes: '只写简短干净的指令，绝不添加思维链（它们内部会思考）' },
  { tool: 'Ollama', category: '本地 LLM', group: 'llm', fixes: '询问加载的是哪个模型，为 Modelfile 附上系统提示' },
  { tool: 'Qwen 2.5 / Qwen3', category: '开源权重 LLM', group: 'llm', fixes: 'Chat 模板格式，思考模式与非思考模式检测' },
  { tool: '本地模型（Llama, Mistral）', category: '开源权重 LLM', group: 'llm', fixes: '更短的提示、更简单的结构、不用复杂嵌套' },
  { tool: 'DeepSeek-R1', category: '推理 LLM', group: 'llm', fixes: '简短干净的指令，剥离思维链，必要时抑制思考输出' },
  { tool: 'MiniMax（M3 / M2.7）', category: '推理 LLM', group: 'llm', fixes: '温度钳制、思考标签控制、结构化输出优化' },
  { tool: 'Claude Code', category: 'Agentic AI', group: 'coding', fixes: '停止条件、文件范围、检查点输出' },
  { tool: 'Cursor / Windsurf', category: 'IDE AI', group: 'coding', fixes: '文件路径、函数名、禁改清单、按序提示指导' },
  { tool: 'Cline', category: 'Agentic IDE', group: 'coding', fixes: '文件范围、审批门、停止条件、任务拆解' },
  { tool: 'GitHub Copilot', category: '自动补全 AI', group: 'coding', fixes: '以文档字符串给出精确的函数契约' },
  { tool: 'Antigravity', category: 'Agentic IDE', group: 'coding', fixes: '基于任务的提示、Artifact 验证、自主级别' },
  { tool: 'Bolt / v0 / Lovable', category: '全栈生成器', group: 'fullstack', fixes: '技术栈规格、版本、明确不要脚手架什么' },
  { tool: 'Figma Make', category: '全栈生成器', group: 'fullstack', fixes: '组件名引用、frame 到代码的范围界定' },
  { tool: 'Google Stitch', category: '全栈生成器', group: 'fullstack', fixes: '以界面目标而非实现方式表述、Material Design 3 规范' },
  { tool: 'Devin / SWE-agent', category: '自主代理', group: 'agentic', fixes: '起始状态、目标状态、停止条件' },
  { tool: 'Manus', category: '自主代理', group: 'agentic', fixes: '任务结果导向、权限范围、记忆锚点' },
  { tool: 'OpenAI Computer Use', category: '计算机操作代理', group: 'agentic', fixes: '屏幕状态、允许的应用、不可逆操作前必须停下' },
  { tool: 'Perplexity Computer', category: '计算机操作代理', group: 'agentic', fixes: 'Artifact 优先提示、限定权限范围、验证步骤' },
  { tool: 'OpenClaw', category: '计算机操作代理', group: 'agentic', fixes: '对话精度、持久记忆、安全约束' },
  { tool: 'Perplexity / SearchGPT', category: '搜索 AI', group: 'search', fixes: '模式指定：搜索 vs 分析 vs 对比' },
  { tool: 'Midjourney', category: '图像 AI', group: 'image', fixes: '逗号分隔描述符、参数、负向提示' },
  { tool: 'DALL-E 3', category: '图像 AI', group: 'image', fixes: '散文式描述、文字排除，编辑与生成的自动判别' },
  { tool: 'Stable Diffusion', category: '图像 AI', group: 'image', fixes: '权重语法 (word:1.3)、CFG 引导、强制负向提示' },
  { tool: 'SeeDream', category: '图像 AI', group: 'image', fixes: '艺术风格优先、氛围与情绪描述符、负向提示' },
  { tool: 'ComfyUI', category: '图像 AI', group: 'image', fixes: '正向/负向节点拆分、按 checkpoint 区分的语法' },
  { tool: 'Meshy / Tripo / Rodin', category: '3D AI', group: '3d', fixes: '风格 + 导出格式 + 多边形预算 + 绑定需求' },
  { tool: 'BlenderGPT', category: '3D AI', group: '3d', fixes: 'Python 脚本输出、Blender 版本、场景上下文' },
  { tool: 'Unity AI', category: '3D / 游戏 AI', group: '3d', fixes: '游戏类型、目标平台、以机制描述代替代码' },
  { tool: 'Sora / Runway', category: '视频 AI', group: 'video', fixes: '镜头运动、时长、剪辑风格' },
  { tool: 'LTX / Dream Machine / Kling', category: '视频 AI', group: 'video', fixes: '电影化语言、运动强度、风格参考' },
  { tool: 'ElevenLabs', category: '语音 AI', group: 'audio', fixes: '情绪、节奏、重音、语速' },
  { tool: 'Zapier / Make / n8n', category: '工作流自动化', group: 'automation', fixes: '触发应用 + 事件、动作应用 + 字段映射' },
];
