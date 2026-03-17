import { Rocket } from 'lucide-react';

interface PyodideLoadingOverlayProps {
  isReady: boolean;
}

export default function PyodideLoadingOverlay({ isReady }: PyodideLoadingOverlayProps) {
  if (isReady) return null;

  return (
    <>
      <div
        role="status"
        aria-label="Cargando motor de Python"
        aria-live="polite"
        className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-[radial-gradient(ellipse_at_50%_40%,#0D1B2A,@060B12_70%,#020508_100%)] backdrop-blur-[2px]"
      >
        <div
          className="starfield pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <div className="absolute h-16 w-16 rounded-full border border-dashed border-[#1DCD9E33]" />
            <div className="animation-duration-[2.4s] absolute inset-0 animate-spin">
              <span className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1DCD9E] shadow-[0_0_6px_#1DCD9E]" />
            </div>

            <div className="animate-bounce">
              <Rocket className="h-8 w-8 text-[#1DCD9E] drop-shadow-[0_0_8px_rgba(29,205,158,0.5)]" />
            </div>
          </div>

          <p className="animate-pulse font-mono text-sm font-semibold tracking-[0.2em] text-[#1DCD9E] uppercase">
            Cargando motor de Python...
          </p>

          {/* Progress bar — .shimmer from globals.css */}
          <div
            className="relative h-0.75 w-48 overflow-hidden rounded-full bg-[#1E2D3D]"
            aria-hidden="true"
          >
            <span className="shimmer absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(90deg,transparent_0%,#1DCD9E_50%,transparent_100%)]" />
          </div>

          {/* Sub-label */}
          <p className="font-mono text-xs tracking-widest text-[#3D5568] uppercase">
            Preparando sistemas de misión
          </p>
        </div>
      </div>
    </>
  );
}
