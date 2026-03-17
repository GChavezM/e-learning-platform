'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, MapIcon } from 'lucide-react';
import Link from 'next/link';

interface LessonRef {
  id: string;
  slug: string;
}

interface CurrentLesson {
  id: string;
  order: number;
  chapterId: string;
  chapterSlug: string;
}

interface LessonNavProps {
  currentLesson: CurrentLesson;
  nextLesson: LessonRef | null;
  prevLesson: LessonRef | null;
  isCurrentCompleted: boolean;
  inline?: boolean;
  className?: string;
}

function lessonUrl(chapterSlug: string, lessonSlug: string) {
  return `/chapter/${chapterSlug}/lesson/${lessonSlug}`;
}

function CompletedPip() {
  return (
    <span className="relative flex h-2 w-2" aria-hidden>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DCD9E] opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DCD9E]" />
    </span>
  );
}

function LessonBreadcrumb({ order }: { order: number }) {
  return (
    <span className="flex items-center gap-2 text-xs text-slate-500 tabular-nums">
      <span className="hidden sm:inline">Misión</span>
      <span className="font-mono text-slate-400">#{String(order).padStart(2, '0')}</span>
    </span>
  );
}

export default function LessonNav({
  currentLesson,
  nextLesson,
  prevLesson,
  isCurrentCompleted,
  inline = false,
  className,
}: LessonNavProps) {
  const { chapterSlug, order } = currentLesson;

  const showNext = !!nextLesson && isCurrentCompleted;
  const showChapterComplete = !nextLesson && isCurrentCompleted;

  return (
    <nav
      aria-label="Navegacion de lecciones"
      className={cn(
        'z-50 flex items-center justify-between gap-4 border-t border-[#1e2d3d] bg-[#0B0F1A]/95 px-4 py-3 backdrop-blur-sm sm:px-6',
        inline ? 'mt-4 rounded-xl border border-[#1e2d3d]' : 'fixed right-0 bottom-0 left-0',
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center">
        {prevLesson ? (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 border border-[#1e2d3d] text-slate-400 hover:border-slate-600 hover:bg-[#1e2d3d]/60 hover:text-slate-100"
          >
            <Link href={lessonUrl(chapterSlug, prevLesson.slug)}>
              <ArrowLeft className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Anterior</span>
            </Link>
          </Button>
        ) : (
          <div aria-hidden />
        )}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {isCurrentCompleted && <CompletedPip />}
        <LessonBreadcrumb order={order} />
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end">
        {showNext && (
          <Button
            asChild
            size="sm"
            className="gap-2 bg-[#1DCD9E] font-semibold text-[#0D1117] hover:bg-[#17b589]"
          >
            <Link href={lessonUrl(chapterSlug, nextLesson!.slug)}>
              <span className="hidden sm:inline">Siguiente</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Button>
        )}

        {showChapterComplete && (
          <Button
            asChild
            size="sm"
            className={cn(
              'gap-2 font-semibold',
              'border border-[#1DCD9E]/40 bg-[#1DCD9E]/10 text-[#1DCD9E]',
              'hover:border-[#1DCD9E]/70 hover:bg-[#1DCD9E]/20',
              'transition-colors duration-200'
            )}
          >
            <Link href="/dashboard">
              <MapIcon className="h-4 w-4 shrink-0" />
              <span>Capitulo completado. Volver al mapa</span>
            </Link>
          </Button>
        )}

        {!showNext && !showChapterComplete && <div aria-hidden />}
      </div>
    </nav>
  );
}
