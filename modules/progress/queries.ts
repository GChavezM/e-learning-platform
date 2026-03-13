import { LessonProgress, UserStats } from '@/generated/prisma/client';
import prisma from '@/lib/prisma';

export type { LessonProgress };

export type ChapterProgressSummary = {
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

export async function getAllLessonProgressForUser(userId: string): Promise<LessonProgress[]> {
  return prisma.lessonProgress.findMany({
    where: { userId },
  });
}

export async function getChapterProgress(
  userId: string,
  chapterId: string
): Promise<ChapterProgressSummary> {
  const [total, completed] = await Promise.all([
    prisma.lesson.count({ where: { chapterId } }),
    prisma.lessonProgress.count({
      where: { userId, completed: true, lesson: { chapterId } },
    }),
  ]);

  return { completed, total, allComplete: total > 0 && completed === total };
}

export async function getUnlockedChapterIds(userId: string): Promise<string[]> {
  const rows = await prisma.chapterProgress.findMany({
    where: { userId },
    select: { chapterId: true },
  });

  return rows.map((row) => row.chapterId);
}

export async function getUserStats(userId: string): Promise<UserStats | null> {
  return prisma.userStats.findUnique({
    where: { userId },
  });
}
