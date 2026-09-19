import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, List, X, GithubLogo } from '@phosphor-icons/react';

const REPO_URL = 'https://github.com/nidhinjs/prompt-master';

const menuLinks: [label: string, href: string][] = [
  ['用法', '#usage'],
  ['原理', '#how'],
  ['工具档案', '#profiles'],
  ['模式库', '#patterns'],
  ['模板', '#templates'],
  ['安装', '#install'],
];

function toggleTheme() {
  const next = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', next);
  try {
    localStorage.setItem('pm-theme', next ? 'dark' : 'light');
  } catch {}
}

export default function NavActions() {
  // 'closed' → unmounted, 'open' → enter animation, 'closing' → exit animation then unmount
  const [phase, setPhase] = useState<'closed' | 'open' | 'closing'>('closed');
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const mounted = phase !== 'closed';

  const close = () => setPhase((p) => (p === 'open' ? 'closing' : p));

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      openBtnRef.current?.focus();
    };
  }, [mounted]);

  // Unmount after the exit animation finishes. If animations are disabled
  // (prefers-reduced-motion), animationend never fires, so fall back to a timer.
  useEffect(() => {
    if (phase !== 'closing') return;
    const t = setTimeout(() => setPhase('closed'), 300);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="切换深浅主题"
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-elevated hover:text-ink active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Moon size={18} weight="bold" className="hidden dark:inline" />
        <Sun size={18} weight="bold" className="dark:hidden" />
      </button>

      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden h-9 items-center gap-2 rounded-full bg-ink px-4 text-[13px] font-semibold text-bg transition-transform duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:flex"
      >
        <GithubLogo size={15} weight="fill" />
        获取技能
      </a>

      <button
        ref={openBtnRef}
        type="button"
        onClick={() => setPhase('open')}
        aria-label="打开菜单"
        aria-expanded={phase === 'open'}
        aria-haspopup="dialog"
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-elevated hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
      >
        <List size={20} weight="bold" />
      </button>

      {mounted && (
        <div
          className="menu-overlay fixed inset-0 z-[90] lg:hidden"
          data-state={phase}
          onAnimationEnd={(e) => {
            if (e.target === e.currentTarget && phase === 'closing') setPhase('closed');
          }}
        >
          <button
            type="button"
            aria-label="关闭菜单"
            className="absolute inset-0 h-full w-full bg-ink/40 backdrop-blur-sm"
            onClick={close}
          />
          <nav
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="导航菜单"
            className="menu-panel absolute inset-x-3 top-3 rounded-card border border-line bg-surface p-3 shadow-[0_24px_64px_rgba(0,0,0,0.18)] focus:outline-none"
          >
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="font-display text-sm font-bold text-ink">Prompt Master</span>
              <button
                type="button"
                onClick={close}
                aria-label="关闭菜单"
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-elevated hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <X size={18} weight="bold" />
              </button>
            </div>
            {menuLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="block rounded-tile px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-elevated focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
              >
                {label}
              </a>
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <GithubLogo size={16} weight="fill" />
              获取技能
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
