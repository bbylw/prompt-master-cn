import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { releases } from '../data/changelog';

export default function ChangelogList() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? releases : releases.slice(0, 3);

  return (
    <div>
      <ol className="space-y-0">
        {shown.map((r, i) => (
          <li
            key={r.version}
            className={`grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 py-5 md:grid-cols-[160px_1fr] ${
              i < shown.length - 1 ? 'border-b border-line' : ''
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[14px] font-semibold text-ink">{r.version}</span>
              {r.current && (
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold text-accent-ink">
                  当前
                </span>
              )}
            </div>
            <p className="col-span-2 max-w-[68ch] text-sm leading-relaxed text-muted md:col-span-1">
              {r.note}
            </p>
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-6 flex h-10 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink active:scale-[0.99]"
      >
        {expanded ? '收起' : `展开全部 ${releases.length} 个版本`}
        <CaretDown
          size={14}
          weight="bold"
          className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
