import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  max: number;
  label?: string;
  className?: string;
}

function toPct(current: number, max: number): number {
  if (max <= 0) return 0;
  return Math.round(Math.min(Math.max(current / max, 0), 1) * 1000) / 10; // 0.0 – 100.0
}

export function ProgressBar({ current, max, label, className }: ProgressBarProps) {
  const pct = toPct(current, max);
  const isFull = pct >= 100;

  return (
    <div
      className={cn('flex w-full flex-col gap-1.5', className)}
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label ?? 'Progreso de XP'}
    >
      <div className="flex items-baseline justify-between">
        {label && (
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            {label}
          </span>
        )}
        <span
          className={cn(
            'ml-auto font-mono text-xs tabular-nums',
            isFull ? 'text-[#1DCD9E]' : 'text-slate-400'
          )}
        >
          <span className={cn('font-semibold', isFull && 'text-[#1DCD9E]')}>
            {current.toLocaleString()}
          </span>
          <span className="mx-0.5 text-slate-600">/</span>
          {max.toLocaleString()} XP
        </span>
      </div>

      <div
        className="relative h-2.5 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: 'color-mix(in oklch, var(--primary) 8%, #131929)' }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow: 'inset 0 0 0 1px color-mix(in oklch, var(--primary) 15%, transparent)',
          }}
          aria-hidden="true"
        />

        {pct > 0 && (
          <div
            className="relative h-full overflow-hidden rounded-full transition-[width] duration-700 ease-out"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(to right, var(--primary), var(--lvl-purple))',
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full opacity-60"
              style={{
                background:
                  'linear-gradient(to right, color-mix(in oklch, white 70%, transparent), color-mix(in oklch, white 20%, transparent))',
              }}
              aria-hidden="true"
            />

            <span
              className="shimmer absolute inset-0 -translate-x-full rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, color-mix(in oklch, white 35%, transparent) 50%, transparent 100%)',
              }}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  );
}
