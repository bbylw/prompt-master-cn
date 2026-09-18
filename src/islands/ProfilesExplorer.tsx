import { useState } from 'react';
import { groups, profiles, type ProfileGroup } from '../data/profiles';

export default function ProfilesExplorer() {
  const [group, setGroup] = useState<ProfileGroup | 'all'>('all');
  const [expanded, setExpanded] = useState(false);
  const shown = group === 'all' ? profiles : profiles.filter((p) => p.group === group);
  const visible = expanded ? shown : shown.slice(0, 12);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="按类别筛选">
        {groups.map((g) => (
          <button
            key={g.key}
            type="button"
            aria-pressed={group === g.key}
            onClick={() => setGroup(g.key)}
            className={`h-9 rounded-full px-4 text-[13px] font-medium transition-colors duration-200 ${
              group === g.key
                ? 'bg-ink text-bg'
                : 'border border-line bg-surface text-muted hover:border-line-strong hover:text-ink'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div key={group} className="anim-swap mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
        {visible.map((p, i) => (
          <div
            key={p.tool}
            className="flex flex-col rounded-tile border border-line bg-bg p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_10px_24px_-16px_rgba(13,11,16,0.35)] sm:p-4"
          >
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
              <h3 className="text-[13.5px] font-semibold text-ink sm:text-[14px]">{p.tool}</h3>
              <p className="truncate font-mono text-[10.5px] text-accent sm:max-w-[100px] sm:shrink-0">
                {p.category}
              </p>
            </div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted line-clamp-2 sm:mt-2 sm:text-[13px]">
              {p.fixes}
            </p>
          </div>
        ))}
      </div>

      {shown.length > 12 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-6 flex h-10 w-fit items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink active:scale-[0.99]"
        >
          展开全部 {shown.length} 个档案
        </button>
      )}

      <p className="mt-6 text-[13px] text-faint" aria-live="polite">
        共 {shown.length} 个档案
      </p>
    </div>
  );
}
