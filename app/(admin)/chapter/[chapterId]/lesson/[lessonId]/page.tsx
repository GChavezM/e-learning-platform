import LessonView from '@/components/game/lesson-view';
import { LessonProgress } from '@/generated/prisma/client';
import { auth } from '@/lib/auth';
import {
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
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { chapterId, lessonId } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/sign-in');
  }

  const userId = session.user.id;

  const lesson: LessonWithChallengeAndChapter | null = await getLessonById(lessonId);

  if (!lesson) {
    notFound();
  }

  if (lesson.chapterId !== chapterId) {
    notFound();
  }

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
    />
  );
}
