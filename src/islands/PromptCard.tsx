import { Copy, Check } from '@phosphor-icons/react';
import { useCopy } from '../lib/useCopy';

export interface PromptCardProps {
  request: string;
  prompt: string;
  meta: { tool: string; framework?: string; tokens: string; strategy: string };
  scrollable?: boolean;
}

export default function PromptCard({ request, prompt, meta, scrollable }: PromptCardProps) {
  const { copied, copy } = useCopy();

  return (
    <div className="reveal w-full rounded-card border border-line bg-surface shadow-[0_20px_60px_-24px_rgba(19,10,24,0.28)]">
      <div className="border-b border-line px-5 py-4">
        <p className="text-[11px] font-medium text-faint">用户输入</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink">
          “{request}”
        </p>
      </div>

      <div className="relative px-5 py-4">
        <button
          type="button"
          onClick={() => copy(prompt)}
          aria-label={copied ? '已复制' : '复制提示词'}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {copied ? <Check size={15} weight="bold" /> : <Copy size={15} />}
        </button>
        <p className="text-[11px] font-medium text-faint">生成的提示词</p>
        <pre
          className={`mt-1.5 overflow-x-auto rounded-tile bg-code-bg p-4 font-mono text-[12.5px] leading-relaxed whitespace-pre text-ink ${
            scrollable ? 'max-h-[420px] overflow-y-auto' : ''
          }`}
        >
          {prompt}
        </pre>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line px-5 py-4">
        <div>
          <p className="text-[11px] text-faint">目标工具</p>
          <p className="mt-0.5 text-[13px] font-semibold text-ink">{meta.tool}</p>
        </div>
        {meta.framework && (
          <div>
            <p className="text-[11px] text-faint">框架</p>
            <p className="mt-0.5 text-[13px] font-semibold text-ink">{meta.framework}</p>
          </div>
        )}
        <div className={meta.framework ? '' : 'col-span-1'}>
          <p className="text-[11px] text-faint">Token 开销</p>
          <p className="mt-0.5 text-[13px] font-semibold text-ink">{meta.tokens}</p>
        </div>
        <div className="col-span-2">
          <p className="text-[11px] text-faint">策略</p>
          <p className="mt-0.5 text-[13px] leading-relaxed text-muted">{meta.strategy}</p>
        </div>
      </div>
    </div>
  );
}
