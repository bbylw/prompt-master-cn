import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Sun, Moon, List, X, GithubLogo } from '@phosphor-icons/react';

function useTheme() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('pm-theme', next ? 'dark' : 'light');
    } catch {}
  };
  return { toggle };
}

export default function NavActions() {
  const [open, setOpen] = useState(false);
  const { toggle } = useTheme();
  const reduce = useReducedMotion();

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={toggle}
        aria-label="切换深浅主题"
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-elevated hover:text-ink active:scale-[0.96]"
      >
        <Moon size={18} weight="bold" className="hidden dark:inline" />
        <Sun size={18} weight="bold" className="dark:hidden" />
      </button>

      <a
        href="https://github.com/nidhinjs/prompt-master"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden h-9 items-center gap-2 rounded-full bg-ink px-4 text-[13px] font-semibold text-bg transition-transform duration-200 hover:-translate-y-px active:translate-y-0 sm:flex"
      >
        <GithubLogo size={15} weight="fill" />
        获取技能
      </a>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="打开菜单"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-elevated hover:text-ink lg:hidden"
      >
        <List size={20} weight="bold" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="关闭菜单"
              className="absolute inset-0 h-full w-full bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="移动导航"
              className="absolute inset-x-3 top-3 rounded-card border border-line bg-surface p-3 shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
              initial={reduce ? false : { y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-2 pb-2">
                <span className="font-display text-sm font-bold text-ink">Prompt Master</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="关闭菜单"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-elevated hover:text-ink"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
              {[
                ['用法', '#usage'],
                ['原理', '#how'],
                ['工具档案', '#profiles'],
                ['模式库', '#patterns'],
                ['模板', '#templates'],
                ['安装', '#install'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-tile px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-elevated"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://github.com/nidhinjs/prompt-master"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink"
              >
                <GithubLogo size={16} weight="fill" />
                获取技能
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
