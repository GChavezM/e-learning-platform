import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#060A12]">
      <style>{`
        @keyframes astronaut-float {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50%       { transform: translateY(-24px) rotate(4deg); }
        }
        .floating-astronaut {
          animation: astronaut-float 4s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>

      {/* Starfield Background */}
      <div className="starfield pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Floating Astronaut */}
        <div className="floating-astronaut mb-4 text-8xl">👨‍🚀</div>

        {/* 404 Title */}
        <div className="space-y-2">
          <p className="font-mono text-sm font-bold tracking-[0.4em] text-[#1DCD9E]/60 uppercase">
            Error 404
          </p>
          <h1 className="font-space-grotesk bg-linear-to-r from-[#1DCD9E] to-cyan-400 bg-clip-text text-5xl font-black text-transparent lg:text-6xl">
            Lost in Space
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-sm text-base leading-relaxed text-slate-400">
          This sector of the galaxy doesn&apos;t exist.
          <br />
          Returning to base is recommended.
        </p>

        {/* Back to Dashboard */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-lg border border-[#1DCD9E]/40 bg-[#1DCD9E]/10 px-6 py-3 text-sm font-semibold text-[#1DCD9E] transition-all hover:bg-[#1DCD9E]/20 hover:shadow-[0_0_20px_rgba(29,205,158,0.3)]"
        >
          ← Return to Mission Control
        </Link>
      </div>
    </div>
  );
}
