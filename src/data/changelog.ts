export interface Release {
  version: string;
  current?: boolean;
  note: string;
}

export const releases: Release[] = [
  { version: '1.8.0', current: true, note: '当前模型刷新。新增 Claude Fable 5、Opus 5、Sonnet 5、GPT-5.6 Sol/Terra/Luna、Codex 与 Grok 4.6 的路由。用可审计推理取代隐藏思维链请求，并将 Claude 任务简报泛化以适配当前的自适应思考模型。' },
  { version: '1.7.0', note: 'Opus 4.8 兼容。使 Claude 4.x 路由具备版本感知：将稳健建议泛化到 4.6/4.7/4.8，新增 Opus 4.8（当前默认）档案。去除硬编码的投入级别说明（现由 harness 管理）。' },
  { version: '1.6.0', note: 'Opus 4.7 更新。新增模板 M（Opus 4.7 任务简报）。按字面执行、自适应思考、xhigh 投入、会话卫生等维度更新 Claude 与 Claude Code 路由。新增模式 36 至 37。' },
  { version: '1.5.0', note: '扩展更多工具路由。新增 Agentic AI 和 3D 模型 AI 路由。描述修正至 189 字符。从输出中移除 token 估算。新增指令层与文案占位符。' },
  { version: '1.4.0', note: '新增参考图编辑检测、ComfyUI 支持、提示词解码器模式。修复触发描述使其能在 Claude Code 中正确调用。references 目录新增 3 个模板。' },
  { version: '1.3.0', note: '围绕 PAC2026 位置结构重建（30/55/15）。静默路由取代面向用户的框架选择。引入 references 目录。' },
  { version: '1.2.0', note: '为注意力架构重构。移除易致幻觉的技术（ToT、GoT、USC、提示链）。模板与模式移入 references 目录。' },
  { version: '1.1.0', note: '扩展工具覆盖面，新增记忆块系统、35 种烧额度模式。' },
  { version: '1.0.0', note: '首次发布。' },
];
