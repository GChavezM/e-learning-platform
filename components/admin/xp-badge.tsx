import { cn } from '@/lib/utils';

type BadgeSize = 'sm' | 'md' | 'lg';

interface XPBadgeProps {
  xp: number;
  size?: BadgeSize;
  className?: string;
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-3 py-1 gap-1.5',
  lg: 'text-base px-4 py-1.5 gap-2',
};

const STAR_SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const GLOW_STYLE: Record<BadgeSize, React.CSSProperties> = {
  sm: { boxShadow: '0 0 6px 1px color-mix(in oklch, var(--xp-gold) 30%, transparent)' },
  md: { boxShadow: '0 0 10px 2px color-mix(in oklch, var(--xp-gold) 35%, transparent)' },
  lg: { boxShadow: '0 0 16px 3px color-mix(in oklch, var(--xp-gold) 40%, transparent)' },
};

export function XPBadge({ xp, size = 'md', className }: XPBadgeProps) {
  return (
    <span
      role="status"
      aria-label={`${xp} puntos de experiencia`}
      style={{
        color: 'var(--xp-gold)',
        backgroundColor: 'color-mix(in oklch, var(--xp-gold) 10%, transparent)',
        border: '1px solid color-mix(in oklch, var(--xp-gold) 30%, transparent)',
        ...GLOW_STYLE[size],
      }}
      className={cn(
        'rounded-full',
        'inline-flex items-center font-semibold tabular-nums',
        SIZE_CLASSES[size],
        className
      )}
    >
      <span aria-hidden="true" className={STAR_SIZE_CLASSES[size]}>
        ⭐
      </span>
      {xp.toLocaleString()} XP
    </span>
  );
}
