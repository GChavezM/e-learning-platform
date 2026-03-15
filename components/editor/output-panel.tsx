'use client';

import { cn } from '@/lib/utils';

interface OutputPanelProps {
  output: string | null;
  error: string | null;
  isLoading: boolean;
  isCorrect: boolean | null;
  isTestFailure: boolean;
}

type PanelVariant = 'idle' | 'loading' | 'success' | 'testFailure' | 'error' | 'output';

function deriveVariant(props: Omit<OutputPanelProps, never>): PanelVariant {
  const { isLoading, isCorrect, isTestFailure, error, output } = props;

  if (isLoading) return 'loading';
  if (isCorrect === true) return 'success';
  if (isCorrect === false && isTestFailure) return 'testFailure';
  if (error) return 'error';
  if (output) return 'output';
  return 'idle';
}

const containerVariants: Record<PanelVariant, string> = {
  idle: 'border-[#1e2d3d]',
  loading: 'border-[#1e2d3d]',
  success: 'border-emerald-500/60  shadow-[0_0_16px_rgba(16,185,129,0.12)]',
  testFailure: 'border-amber-400/60    shadow-[0_0_16px_rgba(251,191,36,0.10)]',
  error: 'border-rose-500/60     shadow-[0_0_16px_rgba(244,63,94,0.10)]',
  output: 'border-[#1e2d3d]',
};

const headerVariants: Record<PanelVariant, string | null> = {
  idle: null,
  loading: null,
  success: 'text-emerald-400  border-emerald-500/30  bg-emerald-500/8',
  testFailure: 'text-amber-300    border-amber-400/30    bg-amber-400/8',
  error: 'text-rose-400     border-rose-500/30     bg-rose-500/8',
  output: null,
};

const headerLabels: Record<PanelVariant, string | null> = {
  idle: null,
  loading: null,
  success: '✅ Mission objective complete!',
  testFailure: '⚠️ Test failed',
  error: '❌ Error detected',
  output: null,
};

function LoadingState() {
  return (
    <div className="flex items-center gap-3 px-4 py-4 text-slate-400">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DCD9E] opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1DCD9E]" />
      </span>
      <span className="text-sm tracking-wide">Running Code</span>
    </div>
  );
}

interface HeaderBannerProps {
  variant: PanelVariant;
}

function HeaderBanner({ variant }: HeaderBannerProps) {
  const label = headerLabels[variant];
  const styles = headerVariants[variant];
  if (!label || !styles) return null;

  return (
    <div className={cn('border-b px-4 py-2.5 text-sm font-semibold tracking-wide', styles)}>
      {label}
    </div>
  );
}

interface OutputBodyProps {
  variant: PanelVariant;
  output: string | null;
  error: string | null;
}

function OutputBody({ variant, output, error }: OutputBodyProps) {
  if (variant === 'idle') {
    return (
      <p className="px-4 py-4 text-sm text-[#3D5568] italic select-none">
        Output will appear here...
      </p>
    );
  }

  if (variant === 'loading') return null;

  const showOutput = output && output.trim().length > 0;

  if (variant === 'testFailure') {
    return (
      <div className="flex flex-col gap-0">
        {error && (
          <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed wrap-break-word whitespace-pre-wrap text-amber-200">
            {error}
          </pre>
        )}

        {showOutput && (
          <>
            <div className="mx-4 border-t border-b-amber-400/15" />
            <p className="px-4 pt-2 pb-0.5 text-xs font-medium tracking-widest text-[#3D5568] uppercase">
              stdout
            </p>
            <pre className="overflow-x-auto px-4 pb-3 text-sm leading-relaxed wrap-break-word whitespace-pre-wrap text-slate-400">
              {output}
            </pre>
          </>
        )}
      </div>
    );
  }

  if (variant === 'error') {
    return (
      <div className="flex flex-col gap-0">
        {error && (
          <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed wrap-break-word whitespace-pre-wrap text-rose-300">
            {error}
          </pre>
        )}
        {showOutput && (
          <>
            <div className="mx-4 border-t border-rose-500/15" />
            <p className="px-4 pt-2 pb-0.5 text-xs font-medium tracking-widest text-[#3D5568] uppercase">
              stdout
            </p>
            <pre className="overflow-x-auto px-4 pb-3 text-sm leading-relaxed wrap-break-word whitespace-pre-wrap text-slate-400">
              {output}
            </pre>
          </>
        )}
      </div>
    );
  }

  return (
    <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed wrap-break-word whitespace-pre-wrap text-slate-200">
      {showOutput ? output : <span className="text-[#3D5568] italic">(no output)</span>}
    </pre>
  );
}

export default function OutputPanel({
  output,
  error,
  isLoading,
  isCorrect,
  isTestFailure,
}: OutputPanelProps) {
  const variant = deriveVariant({ output, error, isLoading, isCorrect, isTestFailure });

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border bg-[#0D1117] transition-[border-color,box-shadow] duration-300',
        'min-h-37.5',
        containerVariants[variant]
      )}
      aria-live="polite"
      aria-label="Python execution output"
    >
      <div className="flex items-center gap-2 border-b border-[#1E2D3D] bg-[#0B0F1A] px-4 py-2">
        <span className="text-xs font-semibold tracking-widest text-[#3D5568] uppercase select-none">
          Output
        </span>
      </div>

      {isLoading && <LoadingState />}

      {!isLoading && <HeaderBanner variant={variant} />}

      {!isLoading && <OutputBody variant={variant} output={output} error={error} />}
    </div>
  );
}
