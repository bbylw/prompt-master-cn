import { useState } from 'react';
import { ArrowRight, XCircle, CheckCircle } from '@phosphor-icons/react';
import { patternCategories } from '../data/patterns';
import { useRovingTabs } from '../lib/useRovingTabs';

export default function PatternsExplorer() {
  const [active, setActive] = useState(0);
  const { onKeyDown, tabProps } = useRovingTabs(active, patternCategories.length, setActive);
  const cat = patternCategories[active];

  return (
    <div>
      <div role="tablist" aria-label="模式类别" onKeyDown={onKeyDown} className="flex flex-wrap gap-2">
        {patternCategories.map((c, i) => (
          <button
            key={c.key}
            {...tabProps(i)}
            type="button"
            id={`patterns-tab-${i}`}
            aria-controls="patterns-panel"
            onClick={() => setActive(i)}
            className={`h-10 rounded-full px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              i === active
                ? 'bg-ink text-bg'
                : 'border border-line bg-surface text-muted hover:border-line-strong hover:text-ink'
            }`}
          >
            {c.label}
            <span className="ml-1.5 font-mono text-[11px] opacity-60">{c.patterns.length}</span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="patterns-panel"
        aria-labelledby={`patterns-tab-${active}`}
        tabIndex={0}
        className="mt-8 focus-visible:outline-none"
      >
        <ul key={active} className="anim-swap space-y-4">
          {cat.patterns.map((p) => (
            <li key={p.name} className="card-mat rounded-card p-5">
              <h3 className="text-[14.5px] font-semibold text-ink">{p.name}</h3>
              <div className="mt-3.5 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                <div className="rounded-tile bg-elevated px-4 py-3">
                  <p className="flex items-center gap-1.5 text-[11px] font-medium text-faint">
                    <XCircle size={13} weight="bold" className="text-faint" aria-hidden="true" />
                    改前
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{p.before}</p>
                </div>
                <div className="flex items-center justify-center px-1">
                  <ArrowRight size={16} className="rotate-90 text-accent md:rotate-0" aria-hidden="true" />
                </div>
                <div className="rounded-tile border border-accent/25 bg-accent-soft px-4 py-3">
                  <p className="flex items-center gap-1.5 text-[11px] font-medium text-faint">
                    <CheckCircle size={13} weight="bold" className="text-accent" aria-hidden="true" />
                    改后
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink">{p.after}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
