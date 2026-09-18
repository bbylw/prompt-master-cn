import { Copy, Check } from '@phosphor-icons/react';
import { useCopy } from '../lib/useCopy';

export default function CopyCode({ code, caption }: { code: string; caption?: string }) {
  const { copied, copy } = useCopy();

  return (
    <div>
      {caption && (
        <p className="mb-2 text-[13px] font-medium text-muted">{caption}</p>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => copy(code)}
          aria-label={copied ? '已复制' : '复制代码'}
          className="absolute right-3 top-3 z-10 flex h-8 items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-xs font-medium text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {copied ? <Check size={13} weight="bold" /> : <Copy size={13} />}
          {copied ? '已复制' : '复制'}
        </button>
        <pre className="overflow-x-auto rounded-tile border border-line bg-code-bg p-5 pr-28 font-mono text-[13px] leading-relaxed text-ink">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
