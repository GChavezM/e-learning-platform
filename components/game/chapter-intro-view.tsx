import { ChapterWithLessons } from '@/modules/course/queries';
import { ChapterProgressSummary } from '@/modules/progress/queries';
import { Button } from '@/components/ui/button';
import { SpaceCard } from '@/components/admin/space-card';
import { ArrowLeft, ArrowRight, Lock, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';

type AnnotatedLesson = ChapterWithLessons['lessons'][number] & {
  isUnlocked: boolean;
  isCompleted: boolean;
};

interface ChapterIntroViewProps {
  chapter: ChapterWithLessons;
  chapterProgress: ChapterProgressSummary;
  lessons: AnnotatedLesson[];
}

function lessonUrl(chapterId: string, lessonId: string) {
  return `/chapter/${chapterId}/lesson/${lessonId}`;
}

function getChapterEmoji(order: number): string {
  const emojis = { 1: '🛸', 2: '🪐', 3: '⚡', 4: '🔄', 5: '🏠' };
  return emojis[order as keyof typeof emojis] || '🚀';
}

function getTotalXP(lessons: AnnotatedLesson[]): number {
  return lessons.reduce((sum, lesson) => sum + (lesson.xpReward || 0), 0);
}

function findResumeLesson(lessons: AnnotatedLesson[]): AnnotatedLesson | undefined {
  return lessons.find((l) => l.isUnlocked && !l.isCompleted);
}

function LessonRow({ lesson, chapterId }: { lesson: AnnotatedLesson; chapterId: string }) {
  const isCompleted = lesson.isCompleted;
  const isUnlocked = lesson.isUnlocked;

  return (
    <Link
      href={isUnlocked ? lessonUrl(chapterId, lesson.id) : '#'}
      aria-disabled={!isUnlocked}
      tabIndex={isUnlocked ? undefined : -1}
      className={`group flex items-center gap-4 rounded-lg border border-[#1e2d3d] px-4 py-3.5 transition-all duration-200 ${
        isUnlocked
          ? 'cursor-pointer hover:border-[#1DCD9E]/40 hover:bg-[#1DCD9E]/5'
          : 'cursor-default opacity-50'
      } ${isCompleted ? 'bg-[#0d2817]/30' : 'bg-[#0B0F1A]/50'}`}
    >
      {/* Order Number */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1DCD9E]/30 font-mono text-xs font-bold text-[#1DCD9E]">
        {String(lesson.order).padStart(2, '0')}
      </div>

      {/* Lesson Title */}
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-medium ${
            isCompleted
              ? 'text-slate-500 line-through'
              : isUnlocked
                ? 'text-slate-100'
                : 'text-slate-400'
          }`}
        >
          {lesson.title}
        </p>
      </div>

      {/* XP Badge */}
      {!isCompleted && (
        <div className="hidden items-center gap-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-3 py-1 sm:flex">
          <span className="text-xs font-semibold text-[#FFD700]">⭐ {lesson.xpReward} XP</span>
        </div>
      )}

      {/* Status Icon */}
      <div className="flex shrink-0">
        {isCompleted ? (
          <CheckCircle2 className="h-5 w-5 text-green-400" />
        ) : isUnlocked ? (
          <ArrowRight className="h-5 w-5 text-[#1DCD9E]" />
        ) : (
          <Lock className="h-4 w-4 text-slate-600" />
        )}
      </div>
    </Link>
  );
}

export default function ChapterIntroView({
  chapter,
  chapterProgress,
  lessons,
}: ChapterIntroViewProps) {
  const resumeLesson = findResumeLesson(lessons);
  const totalXP = getTotalXP(lessons);
  const chapterEmoji = getChapterEmoji(chapter.order);
  const isStarted = chapterProgress.completed > 0;
  const ctaLabel = chapterProgress.allComplete
    ? 'Replay Chapter'
    : isStarted
      ? 'Continue Mission'
      : 'Start Mission';
  const ctaTarget = resumeLesson ?? lessons[0];

  return (
    <div className="min-h-screen bg-[#060A12]">
      {/* Hero Banner */}
      <div className="relative overflow-hidden border-b border-[#1DCD9E]/20 bg-linear-to-r from-[#060A12] via-[#0B1421] to-[#060A12]">
        <div className="absolute inset-0 opacity-5">
          <div className="grid-bg" style={{ '--grid-hero': '#1DCD9E' } as React.CSSProperties} />
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-4 py-12 lg:py-16">
          {/* Chapter Emoji */}
          <div className="animate-pulse text-6xl lg:text-7xl">{chapterEmoji}</div>

          {/* Chapter Number */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1DCD9E]/40 bg-[#1DCD9E]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#1DCD9E] uppercase">
            <Zap className="h-3.5 w-3.5" />
            Chapter {chapter.order}
          </span>

          {/* Title */}
          <h1 className="font-space-grotesk bg-linear-to-r from-[#1DCD9E] to-cyan-400 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-5xl">
            {chapter.title}
          </h1>

          {/* Subtitle (Python Topic) */}
          <p className="max-w-2xl text-center text-sm text-slate-300">
            Learning: <span className="font-semibold text-[#1DCD9E]">{chapter.description}</span>
          </p>

          {/* XP Available */}
          <div className="flex items-center gap-2 rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/10 px-4 py-2">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-semibold text-[#FFD700]">
              {totalXP} XP available in this chapter
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 lg:px-6 lg:py-14">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="gap-1.5 text-slate-500 hover:text-slate-200"
        >
          <Link href="/dashboard">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Map
          </Link>
        </Button>

        {/* Story Transmission Panel */}
        <SpaceCard className="space-y-4 border-[#1DCD9E]/40 bg-linear-to-br from-[#0B0F1A]/80 to-[#060A12]/60 p-8">
          <div className="flex items-center gap-2">
            <span className="text-xl">📡</span>
            <h2 className="text-sm font-bold tracking-wide text-[#1DCD9E] uppercase">
              Incoming Transmission from Commander Nova
            </h2>
          </div>

          <p className="typewriter text-sm leading-relaxed whitespace-pre-wrap text-slate-200 italic">
            {chapter.storyText}
          </p>
        </SpaceCard>

        {/* Mission Objectives Header */}
        <div className="flex items-center justify-between gap-4 border-b border-[#1e2d3d] pb-4">
          <h2 className="text-lg font-bold text-slate-100">📋 Mission Objectives</h2>
          <div className="flex items-center gap-3">
            <div className="h-2 w-48 overflow-hidden rounded-full bg-[#1e2d3d]">
              <div
                className="h-full bg-linear-to-r from-[#1DCD9E] to-cyan-400 transition-all duration-500"
                style={{
                  width: `${
                    chapterProgress.total > 0
                      ? Math.round((chapterProgress.completed / chapterProgress.total) * 100)
                      : 0
                  }%`,
                }}
              />
            </div>
            <span className="font-mono text-xs whitespace-nowrap text-slate-400">
              {chapterProgress.completed}/{chapterProgress.total}
            </span>
          </div>
        </div>

        {/* Lesson List */}
        <div className="space-y-2">
          {lessons.map((lesson) => (
            <LessonRow key={lesson.id} lesson={lesson} chapterId={chapter.id} />
          ))}
        </div>

        {/* Continue Mission Button */}
        {ctaTarget && (
          <div className="flex justify-end pt-4">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-linear-to-r from-[#1DCD9E] to-cyan-400 font-semibold text-[#060A12] transition-all hover:shadow-[0_0_20px_rgba(29,205,158,0.4)]"
            >
              <Link href={lessonUrl(chapter.id, ctaTarget.id)}>
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
