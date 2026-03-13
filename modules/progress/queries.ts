import { LessonProgress, UserStats } from '@/generated/prisma/client';
import prisma from '@/lib/prisma';

export type { LessonProgress };

export type ChapterProgressSumary = {
  completed: number;
  total: number;
  allComplete: boolean;
};

export type { UserStats };

export async function getLessonProgress(
  userId: string,
  lessonId: string
): Promise<LessonProgress | null> {
  return prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
  });
}

export async function getAllProgressForUser(userId: string): Promise<LessonProgress[]> {
  return prisma.lessonProgress.findMany({
    where: { userId, completed: true },
    orderBy: { completedAt: 'desc' },
  });
}

export async function getChapterProgress(
  userId: string,
  chapterId: string
): Promise<ChapterProgressSumary> {
  const [total, completed] = await Promise.all([
    prisma.lesson.count({ where: { chapterId } }),
    prisma.lessonProgress.count({
      where: { userId, completed: true, lesson: { chapterId } },
    }),
  ]);

  return { completed, total, allComplete: total > 0 && completed === total };
}

export async function getUserStats(userId: string) {
  return prisma.userStats.findUnique({
    where: { userId },
  });
}
