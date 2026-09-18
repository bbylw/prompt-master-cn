import { useRef, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { patternCategories } from '../data/patterns';

export default function PatternsExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cat = patternCategories[active];
  const last = patternCategories.length - 1;

  const onKey = (e: React.KeyboardEvent) => {
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = active >= last ? 0 : active + 1;
    else if (e.key === 'ArrowLeft') next = active <= 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div>
      <div role="tablist" aria-label="模式类别" onKeyDown={onKey} className="flex flex-wrap gap-2">
        {patternCategories.map((c, i) => (
          <button
            key={c.key}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`patterns-tab-${i}`}
            aria-selected={i === active}
            aria-controls="patterns-panel"
            tabIndex={i === active ? 0 : -1}
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

      <ul
        role="tabpanel"
        id="patterns-panel"
        aria-labelledby={`patterns-tab-${active}`}
        tabIndex={0}
        key={active}
        className="anim-swap mt-8 space-y-4 focus-visible:outline-none"
      >
        {cat.patterns.map((p) => (
          <li key={p.name} className="rounded-card border border-line bg-surface p-5">
            <h3 className="text-[14.5px] font-semibold text-ink">{p.name}</h3>
            <div className="mt-3.5 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <div className="rounded-tile bg-elevated px-4 py-3">
                <p className="text-[11px] font-medium text-faint">改前</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{p.before}</p>
              </div>
              <div className="hidden items-center justify-center px-1 md:flex">
                <ArrowRight size={16} className="text-accent" aria-hidden="true" />
              </div>
              <div className="rounded-tile border border-accent/25 bg-accent-soft px-4 py-3">
                <p className="text-[11px] font-medium text-faint">改后</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink">{p.after}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
