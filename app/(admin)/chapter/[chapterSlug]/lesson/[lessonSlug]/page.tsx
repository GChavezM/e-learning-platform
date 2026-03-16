import LessonView from '@/components/game/lesson-view';
import { LessonProgress } from '@/generated/prisma/client';
import { auth } from '@/lib/auth';
import {
  getFirstPublicLessonRoute,
  getLessonBySlug,
  getLessonSibilings,
  LessonSiblings,
  LessonWithChallengeAndChapter,
} from '@/modules/course/queries';
import { getLessonProgress, getLastCorrectSubmission } from '@/modules/progress/queries';
import { progressService } from '@/modules/progress/service';
import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

interface LessonPageParams {
  chapterSlug: string;
  lessonSlug: string;
}

interface LessonPageProps {
  params: Promise<LessonPageParams>;
  searchParams: Promise<{ guest?: string }>;
}

export default async function LessonPage({ params, searchParams }: LessonPageProps) {
  const { chapterSlug, lessonSlug } = await params;
  const { guest } = await searchParams;
  const isGuestMode = guest === '1';

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session && !isGuestMode) {
    redirect('/sign-in');
  }

  if (!session && isGuestMode) {
    const firstLessonRoute = await getFirstPublicLessonRoute();

    if (!firstLessonRoute) {
      notFound();
    }

    const isFirstLessonRoute =
      firstLessonRoute.chapterSlug === chapterSlug && firstLessonRoute.lessonSlug === lessonSlug;

    if (!isFirstLessonRoute) {
      redirect(
        `/chapter/${firstLessonRoute.chapterSlug}/lesson/${firstLessonRoute.lessonSlug}?guest=1`
      );
    }
  }

  const lesson: LessonWithChallengeAndChapter | null = await getLessonBySlug(chapterSlug, lessonSlug);

  if (!lesson) {
    notFound();
  }

  if (lesson.chapter.slug !== chapterSlug) {
    notFound();
  }

  if (!session) {
    return (
      <LessonView
        lesson={lesson}
        userId={null}
        alreadyCompleted={false}
        prevLesson={null}
        nextLesson={null}
        isGuestMode
      />
    );
  }

  const userId = session.user.id;

  const unlocked = await progressService.isLessonUnlocked(userId, lesson.id);

  if (!unlocked) {
    redirect('/dashboard');
  }

  const [lessonProgress, { prevLesson, nextLesson }]: [LessonProgress | null, LessonSiblings] =
    await Promise.all([
      getLessonProgress(userId, lesson.id) as Promise<LessonProgress | null>,
      getLessonSibilings(lesson.chapterId, lesson.order),
    ]);

  const alreadyCompleted = lessonProgress?.completed ?? false;

  const submittedCode =
    alreadyCompleted && lesson.challenge
      ? ((await getLastCorrectSubmission(userId, lesson.challenge.id))?.code ?? null)
      : null;

  return (
    <LessonView
      lesson={lesson}
      userId={userId}
      alreadyCompleted={alreadyCompleted}
      submittedCode={submittedCode}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      isGuestMode={false}
    />
  );
}
