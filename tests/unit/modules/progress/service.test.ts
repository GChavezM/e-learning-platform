jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    $transaction: jest.fn(),
    challenge: {},
    chapter: {},
    chapterProgress: {},
    lesson: {},
    lessonProgress: {},
    userStats: {},
  },
}));

import prisma from '@/lib/prisma';
import { ProgressAccessError, progressService } from '@/modules/progress/service';

const mockedPrisma = prisma as unknown as { $transaction: jest.Mock };

type MockDb = {
  challenge: { findUnique: jest.Mock };
  chapter: { findUnique: jest.Mock };
  chapterProgress: { findUnique: jest.Mock; upsert: jest.Mock };
  lesson: { findUnique: jest.Mock };
  lessonProgress: { count: jest.Mock; findUnique: jest.Mock; upsert: jest.Mock };
  userStats: { findUnique: jest.Mock; update: jest.Mock };
};

function createMockDb(): MockDb {
  return {
    challenge: { findUnique: jest.fn() },
    chapter: { findUnique: jest.fn() },
    chapterProgress: { findUnique: jest.fn(), upsert: jest.fn() },
    lesson: { findUnique: jest.fn() },
    lessonProgress: {
      count: jest.fn(),
      findUnique: jest.fn(),
      upsert: jest.fn(),
    },
    userStats: { findUnique: jest.fn(), update: jest.fn() },
  };
}

describe('ProgressAccessError', () => {
  it('stores the code, message, status, and name', () => {
    const error = new ProgressAccessError('LESSON_LOCKED', 'Locked', 403);

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('ProgressAccessError');
    expect(error.code).toBe('LESSON_LOCKED');
    expect(error.message).toBe('Locked');
    expect(error.status).toBe(403);
  });
});

describe('progressService.recalculateLevel', () => {
  it('does nothing when the user stats do not exist', async () => {
    const db = createMockDb();
    db.userStats.findUnique.mockResolvedValue(null);

    await progressService.recalculateLevel('user-1', db as never);

    expect(db.userStats.update).not.toHaveBeenCalled();
  });

  it('updates the level based on total xp and caps it at the maximum', async () => {
    const db = createMockDb();
    db.userStats.findUnique.mockResolvedValue({ level: 5, totalXp: 2500 });

    await progressService.recalculateLevel('user-1', db as never);

    expect(db.userStats.update).toHaveBeenCalledWith({
      data: { level: 10 },
      where: { userId: 'user-1' },
    });
  });

  it('skips the update when the computed level is unchanged', async () => {
    const db = createMockDb();
    db.userStats.findUnique.mockResolvedValue({ level: 2, totalXp: 250 });

    await progressService.recalculateLevel('user-1', db as never);

    expect(db.userStats.update).not.toHaveBeenCalled();
  });
});

describe('progressService.tryUnlockNextChapter', () => {
  it('returns early when the chapter is not fully completed', async () => {
    const db = createMockDb();
    db.lessonProgress.count.mockResolvedValue(2);

    await progressService.tryUnlockNextChapter('user-1', 'chapter-1', 3, db as never);

    expect(db.chapter.findUnique).not.toHaveBeenCalled();
    expect(db.chapterProgress.upsert).not.toHaveBeenCalled();
  });

  it('unlocks the next chapter when all lessons are complete', async () => {
    const db = createMockDb();
    db.lessonProgress.count.mockResolvedValue(3);
    db.chapter.findUnique
      .mockResolvedValueOnce({ id: 'chapter-1', order: 1 })
      .mockResolvedValueOnce({ id: 'chapter-2', order: 2 });

    await progressService.tryUnlockNextChapter('user-1', 'chapter-1', 3, db as never);

    expect(db.chapterProgress.upsert).toHaveBeenCalledWith({
      create: { chapterId: 'chapter-2', userId: 'user-1' },
      update: {},
      where: { userId_chapterId: { chapterId: 'chapter-2', userId: 'user-1' } },
    });
  });
});

describe('progressService.isChapterUnlocked', () => {
  it('returns true when there is progress for the chapter', async () => {
    const db = createMockDb();
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });

    await expect(
      progressService.isChapterUnlocked('user-1', 'chapter-1', db as never)
    ).resolves.toBe(true);
  });

  it('returns false when there is no progress for the chapter', async () => {
    const db = createMockDb();
    db.chapterProgress.findUnique.mockResolvedValue(null);

    await expect(
      progressService.isChapterUnlocked('user-1', 'chapter-1', db as never)
    ).resolves.toBe(false);
  });
});

describe('progressService.isLessonUnlocked', () => {
  it('returns false when the lesson does not exist', async () => {
    const db = createMockDb();
    db.lesson.findUnique.mockResolvedValue(null);

    await expect(progressService.isLessonUnlocked('user-1', 'lesson-1', db as never)).resolves.toBe(
      false
    );
  });

  it('returns false when the chapter is locked', async () => {
    const db = createMockDb();
    db.lesson.findUnique.mockResolvedValue({
      chapter: { order: 1 },
      chapterId: 'chapter-1',
      order: 1,
    });
    db.chapterProgress.findUnique.mockResolvedValue(null);

    await expect(progressService.isLessonUnlocked('user-1', 'lesson-1', db as never)).resolves.toBe(
      false
    );
  });

  it('returns true for the first lesson of an unlocked chapter', async () => {
    const db = createMockDb();
    db.lesson.findUnique.mockResolvedValue({
      chapter: { order: 1 },
      chapterId: 'chapter-1',
      order: 1,
    });
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });

    await expect(progressService.isLessonUnlocked('user-1', 'lesson-1', db as never)).resolves.toBe(
      true
    );
  });

  it('returns false when the previous lesson is missing', async () => {
    const db = createMockDb();
    db.lesson.findUnique
      .mockResolvedValueOnce({
        chapter: { order: 1 },
        chapterId: 'chapter-1',
        order: 2,
      })
      .mockResolvedValueOnce(null);
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });

    await expect(progressService.isLessonUnlocked('user-1', 'lesson-2', db as never)).resolves.toBe(
      false
    );
  });

  it('returns false when the previous lesson is incomplete', async () => {
    const db = createMockDb();
    db.lesson.findUnique
      .mockResolvedValueOnce({
        chapter: { order: 1 },
        chapterId: 'chapter-1',
        order: 2,
      })
      .mockResolvedValueOnce({ id: 'lesson-1' });
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });
    db.lessonProgress.findUnique.mockResolvedValue({ completed: false });

    await expect(progressService.isLessonUnlocked('user-1', 'lesson-2', db as never)).resolves.toBe(
      false
    );
  });

  it('returns true when the previous lesson is completed', async () => {
    const db = createMockDb();
    db.lesson.findUnique
      .mockResolvedValueOnce({
        chapter: { order: 1 },
        chapterId: 'chapter-1',
        order: 2,
      })
      .mockResolvedValueOnce({ id: 'lesson-1' });
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });
    db.lessonProgress.findUnique.mockResolvedValue({ completed: true });

    await expect(progressService.isLessonUnlocked('user-1', 'lesson-2', db as never)).resolves.toBe(
      true
    );
  });
});

describe('progressService.assertChallengeUnlocked', () => {
  it('throws a challenge not found error when the challenge does not exist', async () => {
    const db = createMockDb();
    db.challenge.findUnique.mockResolvedValue(null);

    await expect(
      progressService.assertChallengeUnlocked('user-1', 'challenge-1', db as never)
    ).rejects.toMatchObject({
      code: 'CHALLENGE_NOT_FOUND',
      status: 404,
    });
  });

  it('throws a locked error when the lesson is not unlocked', async () => {
    const db = createMockDb();
    db.challenge.findUnique.mockResolvedValue({
      id: 'challenge-1',
      lesson: {
        chapter: { lessons: [{ id: 'lesson-1' }, { id: 'lesson-2' }] },
        chapterId: 'chapter-1',
        id: 'lesson-2',
        xpReward: 50,
      },
    });
    db.lesson.findUnique
      .mockResolvedValueOnce({
        chapter: { order: 1 },
        chapterId: 'chapter-1',
        order: 2,
      })
      .mockResolvedValueOnce({ id: 'lesson-1' });
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });
    db.lessonProgress.findUnique.mockResolvedValue({ completed: false });

    await expect(
      progressService.assertChallengeUnlocked('user-1', 'challenge-1', db as never)
    ).rejects.toMatchObject({
      code: 'LESSON_LOCKED',
      status: 403,
    });
  });

  it('returns the challenge context when the lesson is unlocked', async () => {
    const db = createMockDb();
    db.challenge.findUnique.mockResolvedValue({
      id: 'challenge-1',
      lesson: {
        chapter: { lessons: [{ id: 'lesson-1' }, { id: 'lesson-2' }] },
        chapterId: 'chapter-1',
        id: 'lesson-1',
        xpReward: 75,
      },
    });
    db.lesson.findUnique.mockResolvedValue({
      chapter: { order: 1 },
      chapterId: 'chapter-1',
      order: 1,
    });
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });

    await expect(
      progressService.assertChallengeUnlocked('user-1', 'challenge-1', db as never)
    ).resolves.toEqual({
      challengeId: 'challenge-1',
      chapterId: 'chapter-1',
      lessonId: 'lesson-1',
      totalLessonsCount: 2,
      xpReward: 75,
    });
  });
});

describe('progressService.completeLesson', () => {
  it('completes the lesson and awards xp when a custom db client is provided', async () => {
    const db = createMockDb();
    db.challenge.findUnique.mockResolvedValue({
      id: 'challenge-1',
      lesson: {
        chapter: { lessons: [{ id: 'lesson-1' }, { id: 'lesson-2' }] },
        chapterId: 'chapter-1',
        id: 'lesson-1',
        xpReward: 100,
      },
    });
    db.lesson.findUnique.mockResolvedValueOnce({
      chapter: { order: 1 },
      chapterId: 'chapter-1',
      order: 1,
    });
    db.chapter.findUnique
      .mockResolvedValueOnce({ id: 'chapter-1', order: 1 })
      .mockResolvedValueOnce({ id: 'chapter-2', order: 2 });
    db.chapterProgress.findUnique.mockResolvedValue({ chapterId: 'chapter-1' });
    db.userStats.findUnique.mockResolvedValue({ level: 1, totalXp: 200 });
    db.lessonProgress.count.mockResolvedValue(2);

    await expect(
      progressService.completeLesson('user-1', 'challenge-1', db as never)
    ).resolves.toEqual({
      xpAwarded: 100,
    });

    expect(mockedPrisma.$transaction).not.toHaveBeenCalled();
    expect(db.lessonProgress.upsert).toHaveBeenCalledWith({
      create: {
        completed: true,
        completedAt: expect.any(Date),
        lessonId: 'lesson-1',
        userId: 'user-1',
      },
      update: {
        completed: true,
        completedAt: expect.any(Date),
      },
      where: { userId_lessonId: { lessonId: 'lesson-1', userId: 'user-1' } },
    });
    expect(db.userStats.update).toHaveBeenNthCalledWith(1, {
      data: {
        currentChapterId: 'chapter-1',
        totalXp: { increment: 100 },
      },
      where: { userId: 'user-1' },
    });
    expect(db.userStats.update).toHaveBeenNthCalledWith(2, {
      data: { level: 2 },
      where: { userId: 'user-1' },
    });
    expect(db.chapterProgress.upsert).toHaveBeenCalledWith({
      create: { chapterId: 'chapter-2', userId: 'user-1' },
      update: {},
      where: { userId_chapterId: { chapterId: 'chapter-2', userId: 'user-1' } },
    });
  });
});
