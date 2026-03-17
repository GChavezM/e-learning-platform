import { cn } from '@/lib/utils';

const TIER_COLOR: Record<'cyan' | 'purple' | 'gold', string> = {
  cyan: 'var(--primary)',
  purple: 'var(--lvl-purple)',
  gold: 'var(--xp-gold)',
};

function getTier(level: number): keyof typeof TIER_COLOR {
  if (level <= 3) return 'cyan';
  if (level <= 6) return 'purple';
  return 'gold';
}

interface LevelBadgeProps {
  level: number;
  className?: string;
}

export function LevelBadge({ level, className }: LevelBadgeProps) {
  const tier = getTier(level);
  const color = TIER_COLOR[tier];

  const cssVars = {
    '--lvl-color': color,
  } as React.CSSProperties;

  return (
    <div
      className={cn('relative inline-flex h-16 w-16 items-center justify-center', className)}
      style={cssVars}
      aria-label={`Nivel ${level}`}
      role="img"
    >
      <div
        className={cn('absolute inset-0', 'rotate-45', 'rounded-sm', 'animate-lvl-pulse')}
        style={{
          backgroundColor: 'color-mix(in oklch, var(--lvl-color) 8%, #131929)',
          border: '1.5px solid color-mix(in oklch, var(--lvl-color) 60%, transparent)',
        }}
      />

      <div className={cn('relative z-10', 'flex flex-col items-center leading-none select-none')}>
        <span
          className="text-[9px] font-bold tracking-widest uppercase"
          style={{ color: 'color-mix(in oklch, var(--lvl-color) 70%, white)' }}
        >
          LVL
        </span>
        <span className="text-lg leading-tight font-black tabular-nums" style={{ color }}>
          {level}
        </span>
      </div>
    </div>
  );
}
