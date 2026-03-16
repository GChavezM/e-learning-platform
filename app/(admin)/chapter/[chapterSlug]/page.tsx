import ChapterIntroView from '@/components/game/chapter-intro-view';
import { auth } from '@/lib/auth';
import { getChapterBySlug, ChapterWithLessons } from '@/modules/course/queries';
import {
  getChapterProgress,
  getLessonProgress,
  ChapterProgressSummary,
} from '@/modules/progress/queries';
import { LessonProgress } from '@/generated/prisma/client';
import { progressService } from '@/modules/progress/service';
import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

interface ChapterPageParams {
  chapterSlug: string;
}

interface ChapterPageProps {
  params: Promise<ChapterPageParams>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapterSlug } = await params;

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/sign-in');

  const userId = session.user.id;

  const chapter: ChapterWithLessons | null = await getChapterBySlug(chapterSlug);
  if (!chapter) notFound();

  if (!chapter.isPublic) redirect('/dashboard');

  const chapterUnlocked = await progressService.isChapterUnlocked(userId, chapter.id);
  if (!chapterUnlocked) redirect('/dashboard');

  const lessons = chapter.lessons;

  const [chapterProgress, ...lessonData] = await Promise.all([
    getChapterProgress(userId, chapter.id) as Promise<ChapterProgressSummary>,
    ...lessons.map((lesson) =>
      Promise.all([
        progressService.isLessonUnlocked(userId, lesson.id),
        getLessonProgress(userId, lesson.id) as Promise<LessonProgress | null>,
      ])
    ),
  ]);

  const annotatedLessons = lessons.map((lesson, i) => {
    const [isUnlocked, progress] = lessonData[i] as [boolean, LessonProgress | null];
    return {
      ...lesson,
      isUnlocked,
      isCompleted: progress?.completed ?? false,
    };
  });

  return (
    <ChapterIntroView
      chapter={chapter}
      chapterProgress={chapterProgress}
      lessons={annotatedLessons}
    />
  );
}
