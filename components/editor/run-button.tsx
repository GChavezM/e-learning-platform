'use client';

import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

interface RunButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function RunButton({ onClick, isLoading }: RunButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="default"
      className="min-w-32.5 cursor-pointer bg-[#1DCD9E] font-semibold text-[#0D1117] shadow-[0_0_16px_rgba(29,205,158,0.35)] transition-all duration-200 hover:bg-[#17B589] hover:shadow-[0_0_22px_rgba(29,205,158,0.5)] active:scale-[0.97] disabled:cursor-not-allowed disabled:bg-[#1DCD9E]/60 disabled:opacity-100 disabled:shadow-none"
    >
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Running...
        </>
      ) : (
        <>
          <span aria-hidden="true" className="ml-0.5 text-[#0D1117]/80">
            ▶ Run
          </span>
        </>
      )}
    </Button>
  );
}
