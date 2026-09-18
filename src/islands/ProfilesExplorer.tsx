import { useState } from 'react';
import { groups, profiles, type ProfileGroup } from '../data/profiles';

export default function ProfilesExplorer() {
  const [group, setGroup] = useState<ProfileGroup | 'all'>('all');
  const shown = group === 'all' ? profiles : profiles.filter((p) => p.group === group);

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

      <div key={group} className="anim-swap mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <div
            key={p.tool}
            className="flex flex-col rounded-card border border-line bg-bg p-5 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <h3 className="text-[14.5px] font-semibold text-ink">{p.tool}</h3>
            <p className="mt-1 font-mono text-[11px] text-accent">{p.category}</p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{p.fixes}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[13px] text-faint" aria-live="polite">
        共 {shown.length} 个档案
      </p>
    </div>
  );
}
