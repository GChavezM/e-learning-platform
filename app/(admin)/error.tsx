'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AdminError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error for monitoring/debugging
    console.error('Admin layout error:', error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#060A12]">
      {/* Starfield Background */}
      <div
        className="starfield pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6 px-4 text-center">
        {/* Icon */}
        <div className="animate-bounce text-6xl">🛸</div>

        {/* Title */}
        <h1 className="font-space-grotesk bg-linear-to-r from-[#FF6B6B] to-[#FF8E72] bg-clip-text text-4xl font-bold text-transparent">
          Something went wrong
        </h1>

        {/* Error Message Box */}
        <div className="w-full rounded-lg border border-[#FF6B6B]/40 bg-[#1a0a0a]/60 p-4 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B6B]" />
            <div className="flex-1 text-left">
              <p className="mb-2 font-mono text-xs tracking-widest text-[#FF6B6B] uppercase">
                Error Details
              </p>
              <code className="block max-h-32 overflow-auto font-mono text-xs wrap-break-word whitespace-pre-wrap text-slate-300">
                {error.message || 'An unknown error occurred'}
              </code>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="gap-2 bg-linear-to-r from-[#1DCD9E] to-cyan-400 font-semibold text-[#060A12] transition-all hover:shadow-[0_0_20px_rgba(29,205,158,0.4)]"
          >
            <span>↻</span>
            Try Again
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-[#1e2d3d] text-slate-300 hover:bg-[#1e2d3d]/50"
          >
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        {/* Debug Info */}
        {error.digest && (
          <p className="border-t border-[#1e2d3d] pt-4 text-xs text-slate-500">
            Error ID: <span className="font-mono text-slate-400">{error.digest}</span>
          </p>
        )}
      </div>
    </div>
  );
}
