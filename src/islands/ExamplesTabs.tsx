import { useState } from 'react';
import PromptCard from './PromptCard';
import { useRovingTabs } from '../lib/useRovingTabs';
import type { PromptExample } from '../data/examples';

export default function ExamplesTabs({ examples }: { examples: PromptExample[] }) {
  const [active, setActive] = useState(0);
  const { onKeyDown, tabProps } = useRovingTabs(active, examples.length, setActive);
  const ex = examples[active];

  return (
    <div>
      <div role="tablist" aria-label="示例类别" onKeyDown={onKeyDown} className="flex flex-wrap gap-2">
        {examples.map((e, i) => (
          <button
            key={e.tab}
            {...tabProps(i)}
            type="button"
            id={`examples-tab-${i}`}
            aria-controls="examples-panel"
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
