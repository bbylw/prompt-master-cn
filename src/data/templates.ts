export interface Template {
  name: string;
  zh: string;
  best: string;
}

export const templates: Template[] = [
  { name: 'RTF', zh: '角色 / 任务 / 格式', best: '快速一次性任务' },
  { name: 'CO-STAR', zh: '上下文、目标、风格、语气、受众、回复', best: '专业文档、报告、商务写作' },
  { name: 'RISEN', zh: '角色、指令、步骤、终局、收窄', best: '复杂多步骤项目' },
  { name: 'CRISPE', zh: '能力、角色、洞察、陈述、人格、实验', best: '创意工作、品牌语调、迭代式内容' },
  { name: 'Auditable Reasoning', zh: '可审计推理', best: '可核查的数学、逻辑、调试与分析，无需隐藏推理' },
  { name: 'Few-Shot', zh: '少样本', best: '一致的结构化输出、模式复刻' },
  { name: 'File-Scope', zh: '文件范围模板', best: 'Cursor、Windsurf、Copilot，任何代码编辑 AI' },
  { name: 'ReAct + Stop Conditions', zh: '推理行动加停止条件', best: 'Claude Code、Devin、AutoGPT，任何自主代理' },
  { name: 'Visual Descriptor', zh: '视觉描述符', best: 'Midjourney、DALL-E、Stable Diffusion、Sora 生成' },
  { name: 'Reference Image Editing', zh: '参考图编辑', best: '编辑已有图片，自动判别编辑还是生成' },
  { name: 'ComfyUI', zh: '节点工作流', best: '基于节点的工作流，每个 checkpoint 正/负向拆分' },
  { name: 'Prompt Decompiler', zh: '提示词解码器', best: '拆解、改写、精简或拆分既有提示词' },
  { name: 'Current Claude Task Brief', zh: '当前 Claude 任务简报', best: '在当前 Claude 模型上执行复杂、多步骤或 agentic 任务' },
];
