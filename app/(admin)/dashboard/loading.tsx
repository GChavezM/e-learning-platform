export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-[#060A12]">
      {/* Header */}
      <header className="border-b border-[#1e2d3d] bg-[#0B0F1A]/90 px-4 py-6">
        <div className="mx-auto max-w-2xl space-y-4">
          {/* Title Line */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-32 animate-pulse rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
            <div className="h-px flex-1 bg-[#1e2d3d]" />
            <div className="h-3 w-24 animate-pulse rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
          </div>

          {/* Welcome Section */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-2">
              <div className="h-3 w-28 animate-pulse rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-6 w-40 animate-pulse rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
            </div>

            {/* Level & XP Badges */}
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 animate-pulse rounded-lg bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
              <div className="h-8 w-32 animate-pulse rounded-full bg-linear-to-r from-[#FFD700]/30 to-[#FFD700]/10" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-3 w-32 animate-pulse rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-16 animate-pulse rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2d3d]">
              <div className="h-full w-1/3 animate-pulse bg-linear-to-r from-[#1DCD9E]/40 to-[#1DCD9E]/20" />
            </div>
          </div>
        </div>
      </header>

      {/* Mission Map Container */}
      <main className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Winding Path Layout - 5 skeleton cards */}
          <div className="pointer-events-none relative space-y-20">
            {/* Card 1 - Top Left */}
            <div className="flex justify-start">
              <div className="w-40 animate-pulse space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-4">
                <div className="h-8 w-8 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
                <div className="h-4 w-24 rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
                <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2d3d]">
                  <div className="h-full w-1/2 bg-linear-to-r from-[#1DCD9E]/40 to-[#1DCD9E]/20" />
                </div>
                <div className="h-6 w-20 rounded-full bg-linear-to-r from-emerald-500/30 to-emerald-500/10" />
              </div>
            </div>

            {/* Card 2 - Top Right */}
            <div className="flex justify-end">
              <div className="w-40 animate-pulse space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-4">
                <div className="h-8 w-8 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
                <div className="h-4 w-24 rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
                <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2d3d]">
                  <div className="h-full w-2/3 bg-linear-to-r from-[#1DCD9E]/40 to-[#1DCD9E]/20" />
                </div>
                <div className="h-6 w-20 rounded-full bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
              </div>
            </div>

            {/* Card 3 - Middle Left */}
            <div className="flex justify-start">
              <div className="w-40 animate-pulse space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-4">
                <div className="h-8 w-8 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
                <div className="h-4 w-24 rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
                <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2d3d]">
                  <div className="h-full w-1/4 bg-linear-to-r from-slate-600/40 to-slate-600/20" />
                </div>
                <div className="h-6 w-20 rounded-full bg-linear-to-r from-slate-700/30 to-slate-700/10" />
              </div>
            </div>

            {/* Card 4 - Middle Right */}
            <div className="flex justify-end">
              <div className="w-40 animate-pulse space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-4">
                <div className="h-8 w-8 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
                <div className="h-4 w-24 rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
                <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2d3d]">
                  <div className="h-full w-3/4 bg-linear-to-r from-[#1DCD9E]/40 to-[#1DCD9E]/20" />
                </div>
                <div className="h-6 w-20 rounded-full bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
              </div>
            </div>

            {/* Card 5 - Bottom Center */}
            <div className="flex justify-center">
              <div className="w-40 animate-pulse space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-4">
                <div className="h-8 w-8 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
                <div className="h-4 w-24 rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
                <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2d3d]">
                  <div className="h-full w-0 bg-linear-to-r from-slate-600/40 to-slate-600/20" />
                </div>
                <div className="h-6 w-20 rounded-full bg-linear-to-r from-slate-700/30 to-slate-700/10" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
