export default function LessonLoading() {
  return (
    <div className="min-h-screen bg-[#060A12]">
      {/* Completion Banner Placeholder (optional) */}
      <div className="border-b border-[#1e2d3d] bg-[#0B0F1A]/50 px-4 py-3">
        <div className="mx-auto max-w-screen-2xl">
          <div className="h-4 w-48 animate-pulse rounded bg-linear-to-r from-emerald-500/30 to-emerald-500/10" />
        </div>
      </div>

      {/* Page Layout */}
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 p-4 lg:grid-cols-[2fr_3fr] lg:p-6">
        {/* LEFT PANEL */}
        <div className="flex animate-pulse flex-col gap-6">
          {/* Breadcrumb */}
          <div className="space-y-2">
            <div className="h-3 w-64 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
          </div>

          {/* Chapter Badge & Title */}
          <div className="space-y-3">
            <div className="h-6 w-48 rounded-full bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
            <div className="h-8 w-full rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
            <div className="h-8 w-5/6 rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
          </div>

          {/* Story Panel */}
          <div className="space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-6">
            <div className="h-4 w-40 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-5/6 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-4/5 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
            </div>
          </div>

          {/* Lesson Content */}
          <div className="space-y-4 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-6">
            {/* Heading */}
            <div className="space-y-2">
              <div className="h-5 w-32 rounded bg-linear-to-r from-slate-400/30 to-slate-400/10" />
            </div>

            {/* Content Lines */}
            <div className="space-y-3">
              <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-5/6 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
            </div>

            {/* Code Block */}
            <div className="my-3 space-y-2 rounded bg-[#0D1117] p-3">
              <div className="h-3 w-24 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-2 w-full rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-2 w-5/6 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
            </div>

            {/* More Content */}
            <div className="space-y-3">
              <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-4/5 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
            </div>
          </div>

          {/* XP Badge */}
          <div className="h-8 w-48 rounded-full bg-linear-to-r from-[#FFD700]/30 to-[#FFD700]/10" />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex animate-pulse flex-col gap-4">
          {/* Mission Objective Header */}
          <div className="space-y-3 border-b-2 border-[#1e2d3d] pb-3">
            <div className="h-4 w-32 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />

            {/* Instructions Box */}
            <div className="space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B1421]/60 p-4">
              <div className="h-3 w-full rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-5/6 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
              <div className="h-3 w-4/5 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
            </div>
          </div>

          {/* Python Runtime Status */}
          <div className="h-10 rounded-lg border border-[#1e2d3d] bg-[#0B0F1A] p-3" />

          {/* Code Editor */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]">
            {/* File Tab */}
            <div className="h-10 border-b border-[#1e2d3d] bg-[#060A12]/50 px-4 py-2">
              <div className="h-3 w-20 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
            </div>

            {/* Editor Placeholder */}
            <div className="h-80 space-y-2 p-4">
              <div className="h-3 w-5/6 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-3 w-full rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-3 w-4/5 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-3 w-3/4 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-3 w-5/6 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
            </div>
          </div>

          {/* Run Button & Hint */}
          <div className="flex items-center justify-between gap-3">
            <div className="h-10 w-24 rounded bg-linear-to-r from-[#1DCD9E]/30 to-[#1DCD9E]/10" />
            <div className="h-3 w-32 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
          </div>

          {/* Output Panel */}
          <div className="space-y-3 rounded-xl border border-[#1e2d3d] bg-[#0B0F1A]/50 p-4">
            <div className="h-4 w-32 rounded bg-linear-to-r from-slate-500/30 to-slate-500/10" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
              <div className="h-2 w-5/6 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
            </div>
          </div>

          {/* Lesson Navigation */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <div className="h-10 w-20 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
            <div className="h-10 w-20 rounded bg-linear-to-r from-slate-600/30 to-slate-600/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
