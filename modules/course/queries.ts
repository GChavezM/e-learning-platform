import { Prisma, Challenge } from '@/generated/prisma/client';
import prisma from '@/lib/prisma';

const chapterListShape = {
  include: {
    _count: {
      select: { lessons: true },
    },
  },
} satisfies Prisma.ChapterDefaultArgs;

const chapterWithLessonsShape = {
  include: {
    lessons: {
      orderBy: { order: 'asc' },
      include: {
        challenge: {
          select: { id: true },
        },
      },
    },
  },
} satisfies Prisma.ChapterDefaultArgs;

const lessonWithChallengeAndChapterShape = {
  include: {
    challenge: true,
    chapter: true,
  },
} satisfies Prisma.LessonDefaultArgs;

// const challengeShape = {} satisfies Prisma.ChallengeDefaultArgs;

export type ChapterListItem = Prisma.ChapterGetPayload<typeof chapterListShape>;

export type ChapterWithLessons = Prisma.ChapterGetPayload<typeof chapterWithLessonsShape>;

export type LessonWithChallengeAndChapter = Prisma.LessonGetPayload<
  typeof lessonWithChallengeAndChapterShape
>;

// export type Challenge = Prisma.ChallengeGetPayload<typeof challengeShape>;

export type { Challenge };

export async function getAllChapters(): Promise<ChapterListItem[]> {
  return prisma.chapter.findMany({
    orderBy: { order: 'asc' },
    ...chapterListShape,
  });
}

export async function getPublicChapters(): Promise<ChapterListItem[]> {
  return prisma.chapter.findMany({
    where: { isPublic: true },
    orderBy: { order: 'asc' },
    ...chapterListShape,
  });
}

export async function getChapterById(id: string): Promise<ChapterWithLessons | null> {
  return prisma.chapter.findUnique({
    where: { id },
    ...chapterWithLessonsShape,
  });
}

export async function getChapterBySlug(slug: string): Promise<ChapterWithLessons | null> {
  return prisma.chapter.findUnique({
    where: { slug },
    ...chapterWithLessonsShape,
  });
}

export async function getLessonById(id: string): Promise<LessonWithChallengeAndChapter | null> {
  return prisma.lesson.findUnique({
    where: { id },
    ...lessonWithChallengeAndChapterShape,
  });
}

export async function getLessonBySlug(
  chapterSlug: string,
  lessonSlug: string
): Promise<LessonWithChallengeAndChapter | null> {
  return prisma.lesson.findFirst({
    where: { slug: lessonSlug, chapter: { slug: chapterSlug } },
    ...lessonWithChallengeAndChapterShape,
  });
}

export async function getLessonBySlugAndChapterId(
  chapterId: string,
  lessonSlug: string
): Promise<LessonWithChallengeAndChapter | null> {
  return prisma.lesson.findUnique({
    where: { chapterId_slug: { chapterId, slug: lessonSlug } },
    ...lessonWithChallengeAndChapterShape,
  });
}

export async function getChallengeByLessonId(lessonId: string): Promise<Challenge | null> {
  return prisma.challenge.findUnique({
    where: { lessonId },
  });
}
