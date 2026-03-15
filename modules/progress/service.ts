import prisma from '@/lib/prisma';

const MAX_LEVEL = 10;
const XP_PER_LEVEL = 200;

async function completeLesson(userId: string, challengeId: string): Promise<{ xpAwarded: number }> {
  const challenge = await prisma.challenge.findUnique({
    where: { id: challengeId },
    include: {
      lesson: {
        include: {
          chapter: {
            include: {
              lessons: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!challenge) {
    throw new Error(`Challenge not found: ${challengeId}`);
  }

  const { lesson } = challenge;
  const { xpReward, chapterId } = lesson;
  const totalLessonsCount = lesson.chapter.lessons.length;

  await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
    create: {
      userId,
      lessonId: lesson.id,
      completed: true,
      completedAt: new Date(),
    },
    update: {
      completed: true,
      completedAt: new Date(),
    },
  });

  await prisma.userStats.update({
    where: { userId },
    data: {
      totalXp: { increment: xpReward },
      currentChapterId: chapterId,
    },
  });

  await Promise.all([
    recalculateLevel(userId),
    tryUnlockNextChapter(userId, chapterId, totalLessonsCount),
  ]);

  return { xpAwarded: xpReward };
}

async function recalculateLevel(userId: string): Promise<void> {
  const stats = await prisma.userStats.findUnique({
    where: { userId },
    select: { totalXp: true, level: true },
  });

  if (!stats) return;

  const newLevel = Math.min(Math.floor(stats.totalXp / XP_PER_LEVEL) + 1, MAX_LEVEL);

  if (newLevel === stats.level) return;

  await prisma.userStats.update({
    where: { userId },
    data: { level: newLevel },
  });
}

async function tryUnlockNextChapter(
  userId: string,
  chapterId: string,
  totalLessonsInChapter: number
): Promise<void> {
  const completedCount = await prisma.lessonProgress.count({
    where: { userId, completed: true, lesson: { chapterId } },
  });

  if (completedCount < totalLessonsInChapter) return;

  const currentChapter = await prisma.chapter.findUnique({ where: { id: chapterId } });
  if (!currentChapter) return;
  const nextChapter = await prisma.chapter.findUnique({
    where: { order: currentChapter.order + 1 },
  });
  if (!nextChapter) return;

  await prisma.chapterProgress.upsert({
    where: { userId_chapterId: { userId, chapterId: nextChapter.id } },
    create: { userId, chapterId: nextChapter.id },
    update: {},
  });
}

async function isChapterUnlocked(userId: string, chapterId: string): Promise<boolean> {
  const row = await prisma.chapterProgress.findUnique({
    where: { userId_chapterId: { userId, chapterId } },
  });

  return row !== null;
}

async function isLessonUnlocked(userId: string, lessonId: string): Promise<boolean> {
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    select: {
      order: true,
      chapterId: true,
      chapter: { select: { order: true } },
    },
  });

  if (!lesson) return false;

  const { chapterId, order } = lesson;

  const chapterUnlocked = await isChapterUnlocked(userId, chapterId);
  if (!chapterUnlocked) return false;

  if (order === 1) return true;

  const previousLesson = await prisma.lesson.findUnique({
    where: { chapterId_order: { chapterId, order: order - 1 } },
    select: { id: true },
  });

  if (!previousLesson) return false;

  const previousProgress = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: previousLesson.id } },
    select: { completed: true },
  });

  return previousProgress?.completed === true;
}

export const progressService = {
  completeLesson,
  recalculateLevel,
  tryUnlockNextChapter,
  isChapterUnlocked,
  isLessonUnlocked,
};
