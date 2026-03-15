import { ChapterWithLessons } from '@/modules/course/queries';
import { ChapterProgressSummary } from '@/modules/progress/queries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, BookOpen, Lock, Radio, Star } from 'lucide-react';
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

function findResumeLesson(lessons: AnnotatedLesson[]): AnnotatedLesson | undefined {
  return lessons.find((l) => l.isUnlocked && !l.isCompleted);
}

function LessonStatusIcon({ lesson }: { lesson: AnnotatedLesson }) {
  if (lesson.isCompleted) {
    return (
      <span className="text-base" aria-label="Completed">
        ✅
      </span>
    );
  }
  if (lesson.isUnlocked) {
    return (
      <span
        className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1DCD9E]/15 text-[#1DCD9E]"
        aria-label="Current"
      >
        <ArrowRight className="h-3 w-3" />
      </span>
    );
  }
  return (
    <span className="flex h-5 w-5 items-center justify-center text-slate-600" aria-label="Locked">
      <Lock className="h-3.5 w-3.5" />
    </span>
  );
}

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1e2d3d]">
        <div
          className="h-full rounded-full bg-[#1DCD9E] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="shrink-0 font-mono text-xs text-slate-500 tabular-nums">
        {completed}/{total}
      </span>
    </div>
  );
}

export default function ChapterIntroView({
  chapter,
  chapterProgress,
  lessons,
}: ChapterIntroViewProps) {
  const resumeLesson = findResumeLesson(lessons);
  const isStarted = chapterProgress.completed > 0;
  const ctaLabel = chapterProgress.allComplete
    ? 'Replay Chapter'
    : isStarted
      ? 'Continue Mission'
      : 'Start Mission';

  const ctaTarget = resumeLesson ?? lessons[0];

  return (
    <div className="min-h-screen bg-[#060A12]">
      <div className="border-b border-[#1e2d3d] bg-[#0B0F1A] px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <Radio className="h-4 w-4 shrink-0 text-[#1DCD9E]" />
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            PyMission Control
          </span>
          <span className="text-[#1e2d3d]">/</span>
          <span className="text-xs text-slate-300">
            Chapter {chapter.order} — {chapter.title}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 lg:px-6 lg:py-14">
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

        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1DCD9E]/30 bg-[#1DCD9E]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#1DCD9E]">
            Chapter {chapter.order}
          </span>
          <h1 className="text-3xl font-bold text-slate-100 lg:text-4xl">{chapter.title}</h1>
          <p className="text-sm leading-relaxed text-slate-400">{chapter.description}</p>
        </div>

        <Card className="border-[#1e2d3d] bg-[#0B0F1A]/80">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm text-slate-400">
              <Radio className="h-3.5 w-3.5 text-[#1DCD9E]" />
              Mission Transmission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-slate-300 italic">{chapter.storyText}</p>
          </CardContent>
        </Card>

        <Card className="border-[#1e2d3d] bg-[#0D1117]">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="flex items-center gap-2 text-sm text-slate-400">
                <BookOpen className="h-3.5 w-3.5" />
                Mission Objectives
              </CardTitle>
              <span className="text-xs text-slate-500">
                {chapterProgress.completed} of {chapterProgress.total} complete
              </span>
            </div>
            <ProgressBar completed={chapterProgress.completed} total={chapterProgress.total} />
          </CardHeader>

          <CardContent className="pt-0">
            <ol className="space-y-1">
              {lessons.map((lesson) => {
                const isActive = lesson.isUnlocked && !lesson.isCompleted;
                return (
                  <li key={lesson.id}>
                    <Link
                      href={lesson.isUnlocked ? lessonUrl(chapter.id, lesson.id) : '#'}
                      aria-disabled={!lesson.isUnlocked}
                      tabIndex={lesson.isUnlocked ? undefined : -1}
                      className={[
                        'group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors',
                        lesson.isUnlocked
                          ? 'cursor-pointer hover:bg-[#1e2d3d]/60'
                          : 'cursor-default opacity-50',
                        isActive ? 'bg-[#1DCD9E]/5 ring-1 ring-[#1DCD9E]/20' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1e2d3d] font-mono text-[10px] text-slate-500">
                        {String(lesson.order).padStart(2, '0')}
                      </span>

                      <span
                        className={[
                          'flex-1 text-sm font-medium',
                          lesson.isCompleted
                            ? 'text-slate-400 line-through decoration-slate-600'
                            : isActive
                              ? 'text-slate-100'
                              : 'text-slate-400',
                        ].join(' ')}
                      >
                        {lesson.title}
                      </span>

                      {lesson.isUnlocked && !lesson.isCompleted && (
                        <span className="hidden items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-400 sm:flex">
                          <Star className="h-2.5 w-2.5 fill-amber-400" />
                          {lesson.xpReward} XP
                        </span>
                      )}

                      <LessonStatusIcon lesson={lesson} />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </CardContent>
        </Card>

        {ctaTarget && (
          <div className="flex justify-end">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[#1DCD9E] font-semibold text-[#0D1117] hover:bg-[#17b589]"
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
