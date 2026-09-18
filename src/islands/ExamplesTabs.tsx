import { useRef, useState } from 'react';
import PromptCard from './PromptCard';
import type { PromptExample } from '../data/examples';

export default function ExamplesTabs({ examples }: { examples: PromptExample[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const ex = examples[active];
  const last = examples.length - 1;

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
      <div role="tablist" aria-label="示例类别" onKeyDown={onKey} className="flex flex-wrap gap-2">
        {examples.map((e, i) => (
          <button
            key={e.tab}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`examples-tab-${i}`}
            aria-selected={i === active}
            aria-controls="examples-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`h-10 rounded-full px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              i === active
                ? 'bg-ink text-bg'
                : 'border border-line bg-surface text-muted hover:border-line-strong hover:text-ink'
            }`}
          >
            {e.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="examples-panel"
        aria-labelledby={`examples-tab-${active}`}
        tabIndex={0}
        className="mt-6 min-w-0 focus-visible:outline-none"
      >
        <div key={active} className="anim-swap">
          <PromptCard
            request={ex.request}
            prompt={ex.prompt}
            meta={ex.meta}
            scrollable={ex.prompt.length > 500}
          />
        </div>
      </div>
    </div>
  );
}
