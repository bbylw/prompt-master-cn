import { useCallback, useEffect, useRef, useState } from 'react';

/** Shared clipboard copy with a transient "copied" flag that resets after `resetMs`. */
export function useCopy(resetMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetMs);
      } catch {
        /* clipboard unavailable (insecure context / permission denied) — fail silently */
      }
    },
    [resetMs],
  );

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return { copied, copy };
}
