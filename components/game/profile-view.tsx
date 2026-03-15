'use client';

import { useEffect, useState } from 'react';
import { LevelBadge } from '@/components/admin/level-badge';
import { SpaceCard } from '@/components/admin/space-card';
import { CheckCircle2 } from 'lucide-react';

interface User {
  name: string;
  email: string;
  createdAt: Date;
}

interface Stats {
  totalXp: number;
  level: number;
  currentChapterId: string | null;
}

interface ChapterProgressItem {
  chapter: { title: string };
  completedLessons: number;
  totalLessons: number;
}

interface ProfileViewProps {
  user: User;
  stats: Stats;
  chapterProgress: ChapterProgressItem[];
  totalCompleted: number;
  totalLessons: number;
}

function AnimatedCounter({ value, duration = 1000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setDisplayValue(Math.floor(value * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  return <>{displayValue.toLocaleString()}</>;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

interface XpProgress {
  current: number;
  needed: number;
}

function getXpProgressToNextLevel(currentXp: number, level: number): XpProgress {
  const currentLevelThreshold = level * 200;
  const xpInCurrentLevel = currentXp - currentLevelThreshold;
  const xpNeededForLevel = 200;

  return {
    current: Math.max(0, xpInCurrentLevel),
    needed: xpNeededForLevel,
  };
}

export default function ProfileView({
  user,
  stats,
  chapterProgress,
  totalCompleted,
  totalLessons,
}: ProfileViewProps) {
  const xpProgression = getXpProgressToNextLevel(stats.totalXp, stats.level);
  const xpProgressPercent = Math.round((xpProgression.current / xpProgression.needed) * 100);

  return (
    <div className="min-h-screen bg-[#060A12]">
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 lg:px-6 lg:py-14">
        {/* ASTRONAUT CARD - Hero Section */}
        <SpaceCard className="relative overflow-hidden border-[#1DCD9E]/40 bg-linear-to-br from-[#0B0F1A]/80 to-[#060A12]/60">
          <div className="space-y-6 px-8 py-10">
            {/* Avatar with Glow */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4 h-24 w-24">
                <div className="absolute inset-0 animate-pulse rounded-full border-2 border-[#1DCD9E]/40 bg-[#1DCD9E]/10" />
                <div className="absolute inset-3 flex items-center justify-center rounded-full border border-[#1DCD9E]/60 text-6xl shadow-[0_0_20px_rgba(29,205,158,0.4)]">
                  👨‍🚀
                </div>
              </div>

              {/* User Name */}
              <h1 className="font-space-grotesk bg-linear-to-r from-[#1DCD9E] to-cyan-400 bg-clip-text text-center text-4xl font-bold text-transparent">
                {user.name}
              </h1>

              {/* Subtitle */}
              <p className="mt-2 text-sm text-slate-400">Mission Control Operator</p>
            </div>

            {/* Stats Display */}
            <div className="flex flex-col items-center gap-4 border-t border-[#1e2d3d] pt-4">
              <div className="flex items-center gap-4">
                <LevelBadge level={stats.level} />
                <div className="text-center">
                  <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                    Total Experience
                  </p>
                  <p className="text-2xl font-bold text-[#FFD700]">
                    <AnimatedCounter value={stats.totalXp} duration={1500} /> XP
                  </p>
                </div>
              </div>

              {/* Join Date */}
              <p className="text-xs text-slate-500">
                Joined{' '}
                <span className="font-semibold text-slate-300">{formatDate(user.createdAt)}</span>
              </p>
            </div>
          </div>
        </SpaceCard>

        {/* STATS ROW - 3 Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Total XP Card */}
          <SpaceCard className="space-y-3 border-[#FFD700]/30 bg-[#0B0F1A]/50 p-6 text-center">
            <div className="text-2xl">⭐</div>
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Total XP
            </p>
            <p className="text-3xl font-bold text-[#FFD700]">
              <AnimatedCounter value={stats.totalXp} duration={1500} />
            </p>
          </SpaceCard>

          {/* Current Level Card */}
          <SpaceCard className="space-y-4 border-[#1DCD9E]/30 bg-[#0B0F1A]/50 p-6">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Level Progress
              </p>
              <div className="text-3xl font-bold text-[#1DCD9E]">
                <AnimatedCounter value={stats.level} duration={1500} />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#1e2d3d]">
                <div
                  className="h-full bg-linear-to-r from-[#1DCD9E] to-cyan-400 transition-all duration-500"
                  style={{ width: `${xpProgressPercent}%` }}
                />
              </div>
              <p className="text-center text-xs text-slate-500">
                {xpProgression.current.toLocaleString()} / {xpProgression.needed} XP
              </p>
            </div>
          </SpaceCard>

          {/* Lessons Completed Card */}
          <SpaceCard className="space-y-3 border-purple-500/30 bg-[#0B0F1A]/50 p-6 text-center">
            <div className="text-2xl">📚</div>
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Missions Done
            </p>
            <p className="text-3xl font-bold text-purple-400">
              {totalCompleted}/{totalLessons}
            </p>
          </SpaceCard>
        </div>

        {/* CHAPTER PROGRESS SECTION */}
        <SpaceCard className="space-y-6 border-[#1DCD9E]/40 bg-[#0B0F1A]/50 p-6">
          <div className="flex items-center gap-2 border-b border-[#1e2d3d] pb-4">
            <span className="text-xl">📊</span>
            <h2 className="text-lg font-bold text-slate-100">Mission Progress Report</h2>
          </div>

          <div className="space-y-4">
            {chapterProgress.length > 0 ? (
              chapterProgress.map((item, index) => {
                const percentage =
                  item.totalLessons > 0
                    ? Math.round((item.completedLessons / item.totalLessons) * 100)
                    : 0;
                const isComplete =
                  item.completedLessons === item.totalLessons && item.totalLessons > 0;

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-200">
                        {item.chapter.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400">
                          {item.completedLessons}/{item.totalLessons}
                        </span>
                        {isComplete && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 overflow-hidden rounded-full bg-[#1e2d3d]">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isComplete
                            ? 'bg-linear-to-r from-emerald-400 to-emerald-500'
                            : 'bg-linear-to-r from-[#1DCD9E] to-cyan-400'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    {/* Percentage */}
                    <p className="text-right text-xs text-slate-500">{percentage}% complete</p>
                  </div>
                );
              })
            ) : (
              <p className="py-4 text-center text-sm text-slate-400">
                No chapter progress yet. Start your first mission!
              </p>
            )}
          </div>
        </SpaceCard>

        {/* RECENT ACTIVITY SECTION */}
        <SpaceCard className="space-y-4 border-[#1DCD9E]/40 bg-[#0B0F1A]/50 p-6">
          <div className="flex items-center gap-2 border-b border-[#1e2d3d] pb-4">
            <span className="text-xl">📝</span>
            <h2 className="text-lg font-bold text-slate-100">Recent Activity</h2>
          </div>

          <p className="py-6 text-center text-sm text-slate-400">
            Recent mission logs coming soon...
          </p>
        </SpaceCard>
      </div>
    </div>
  );
}
