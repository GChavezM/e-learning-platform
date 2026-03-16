import LessonView from '@/components/game/lesson-view';
import { LessonProgress } from '@/generated/prisma/client';
import { auth } from '@/lib/auth';
import {
  getFirstPublicLessonRoute,
  getLessonById,
  getLessonSibilings,
  LessonSiblings,
  LessonWithChallengeAndChapter,
} from '@/modules/course/queries';
import { getLessonProgress } from '@/modules/progress/queries';
import { progressService } from '@/modules/progress/service';
import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

interface LessonPageParams {
  chapterId: string;
  lessonId: string;
}

interface LessonPageProps {
  params: Promise<LessonPageParams>;
  searchParams: Promise<{ guest?: string }>;
}

export default async function LessonPage({ params, searchParams }: LessonPageProps) {
  const { chapterId, lessonId } = await params;
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
      firstLessonRoute.chapterId === chapterId && firstLessonRoute.lessonId === lessonId;

    if (!isFirstLessonRoute) {
      redirect(
        `/chapter/${firstLessonRoute.chapterId}/lesson/${firstLessonRoute.lessonId}?guest=1`
      );
    }
  }

  const lesson: LessonWithChallengeAndChapter | null = await getLessonById(lessonId);

  if (!lesson) {
    notFound();
  }

  if (lesson.chapterId !== chapterId) {
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

  const unlocked = await progressService.isLessonUnlocked(userId, lessonId);

  if (!unlocked) {
    redirect('/dashboard');
  }

  const [lessonProgress, { prevLesson, nextLesson }]: [LessonProgress | null, LessonSiblings] =
    await Promise.all([
      getLessonProgress(userId, lessonId) as Promise<LessonProgress | null>,
      getLessonSibilings(chapterId, lesson.order),
    ]);

  return (
    <LessonView
      lesson={lesson}
      userId={userId}
      alreadyCompleted={lessonProgress?.completed ?? false}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      isGuestMode={false}
    />
  );
}
