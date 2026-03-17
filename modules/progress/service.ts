import prisma from '@/lib/prisma';

const MAX_LEVEL = 10;
const XP_PER_LEVEL = 200;

type ProgressDbClient = Pick<
  typeof prisma,
  'challenge' | 'lesson' | 'lessonProgress' | 'userStats' | 'chapter' | 'chapterProgress'
>;

type ChallengeProgressContext = {
  challengeId: string;
  lessonId: string;
  chapterId: string;
  xpReward: number;
  totalLessonsCount: number;
};

export class ProgressAccessError extends Error {
  constructor(
    public readonly code: 'CHALLENGE_NOT_FOUND' | 'LESSON_LOCKED',
    message: string,
    public readonly status: 403 | 404
  ) {
    super(message);
    this.name = 'ProgressAccessError';
  }
}

async function completeLesson(
  userId: string,
  challengeId: string,
  db: ProgressDbClient = prisma
): Promise<{ xpAwarded: number }> {
  const execute = async (client: ProgressDbClient): Promise<{ xpAwarded: number }> => {
    const context = await assertChallengeUnlocked(userId, challengeId, client);
    const completedAt = new Date();

    await client.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId: context.lessonId } },
      create: {
        userId,
        lessonId: context.lessonId,
        completed: true,
        completedAt,
      },
      update: {
        completed: true,
        completedAt,
      },
    });

    await client.userStats.update({
      where: { userId },
      data: {
        totalXp: { increment: context.xpReward },
        currentChapterId: context.chapterId,
      },
    });

    await recalculateLevel(userId, client);
    await tryUnlockNextChapter(userId, context.chapterId, context.totalLessonsCount, client);

    return { xpAwarded: context.xpReward };
  };

  if (db === prisma) {
    return prisma.$transaction((tx) => execute(tx));
  }

  return execute(db);
}

async function recalculateLevel(userId: string, db: ProgressDbClient = prisma): Promise<void> {
  const stats = await db.userStats.findUnique({
    where: { userId },
    select: { totalXp: true, level: true },
  });

  if (!stats) return;

  const newLevel = Math.min(Math.floor(stats.totalXp / XP_PER_LEVEL) + 1, MAX_LEVEL);

  if (newLevel === stats.level) return;

  await db.userStats.update({
    where: { userId },
    data: { level: newLevel },
  });
}

async function tryUnlockNextChapter(
  userId: string,
  chapterId: string,
  totalLessonsInChapter: number,
  db: ProgressDbClient = prisma
): Promise<void> {
  const completedCount = await db.lessonProgress.count({
    where: { userId, completed: true, lesson: { chapterId } },
  });

  if (completedCount < totalLessonsInChapter) return;

  const currentChapter = await db.chapter.findUnique({ where: { id: chapterId } });
  if (!currentChapter) return;
  const nextChapter = await db.chapter.findUnique({
    where: { order: currentChapter.order + 1 },
  });
  if (!nextChapter) return;

  await db.chapterProgress.upsert({
    where: { userId_chapterId: { userId, chapterId: nextChapter.id } },
    create: { userId, chapterId: nextChapter.id },
    update: {},
  });
}

async function isChapterUnlocked(
  userId: string,
  chapterId: string,
  db: ProgressDbClient = prisma
): Promise<boolean> {
  const row = await db.chapterProgress.findUnique({
    where: { userId_chapterId: { userId, chapterId } },
  });

  return row !== null;
}

async function isLessonUnlocked(
  userId: string,
  lessonId: string,
  db: ProgressDbClient = prisma
): Promise<boolean> {
  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    select: {
      order: true,
      chapterId: true,
      chapter: { select: { order: true } },
    },
  });

  if (!lesson) return false;

  const { chapterId, order } = lesson;

  const chapterUnlocked = await isChapterUnlocked(userId, chapterId, db);
  if (!chapterUnlocked) return false;

  if (order === 1) return true;

  const previousLesson = await db.lesson.findUnique({
    where: { chapterId_order: { chapterId, order: order - 1 } },
    select: { id: true },
  });

  if (!previousLesson) return false;

  const previousProgress = await db.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: previousLesson.id } },
    select: { completed: true },
  });

  return previousProgress?.completed === true;
}

async function getChallengeProgressContext(
  challengeId: string,
  db: ProgressDbClient = prisma
): Promise<ChallengeProgressContext> {
  const challenge = await db.challenge.findUnique({
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
    throw new ProgressAccessError('CHALLENGE_NOT_FOUND', 'Desafio no encontrado', 404);
  }

  return {
    challengeId: challenge.id,
    lessonId: challenge.lesson.id,
    chapterId: challenge.lesson.chapterId,
    xpReward: challenge.lesson.xpReward,
    totalLessonsCount: challenge.lesson.chapter.lessons.length,
  };
}

async function assertChallengeUnlocked(
  userId: string,
  challengeId: string,
  db: ProgressDbClient = prisma
): Promise<ChallengeProgressContext> {
  const context = await getChallengeProgressContext(challengeId, db);
  const unlocked = await isLessonUnlocked(userId, context.lessonId, db);

  if (!unlocked) {
    throw new ProgressAccessError('LESSON_LOCKED', 'Esta leccion esta bloqueada actualmente', 403);
  }

  return context;
}

export const progressService = {
  assertChallengeUnlocked,
  completeLesson,
  recalculateLevel,
  tryUnlockNextChapter,
  isChapterUnlocked,
  isLessonUnlocked,
};
