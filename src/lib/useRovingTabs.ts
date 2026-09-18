import { useRef } from 'react';
import type { KeyboardEvent } from 'react';

/** WAI-ARIA roving tabindex + arrow/Home/End navigation for a tablist. */
export function useRovingTabs(active: number, count: number, onSelect: (index: number) => void) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent) => {
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = active >= count - 1 ? 0 : active + 1;
    else if (e.key === 'ArrowLeft') next = active <= 0 ? count - 1 : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = count - 1;
    if (next === null) return;
    e.preventDefault();
    onSelect(next);
    refs.current[next]?.focus();
  };

  const tabProps = (index: number) => ({
    ref: (el: HTMLButtonElement | null) => {
      refs.current[index] = el;
    },
    role: 'tab' as const,
    'aria-selected': index === active,
    tabIndex: index === active ? 0 : -1,
  });

  return { onKeyDown, tabProps };
}
