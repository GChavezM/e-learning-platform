import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';
import { getAllChapters, ChapterListItem, getAllLessons } from '@/modules/course/queries';
import {
  getUserStats,
  getUnlockedChapterIds,
  getAllLessonProgressForUser,
  LessonProgress,
  UserStats,
} from '@/modules/progress/queries';
import MissionMap from '@/components/game/mission-map';

export type AnnotatedChapter = ChapterListItem & {
  totalLessons: number;
  completedLessons: number;
  isUnlocked: boolean;
};

export interface MissionMapProps {
  userStats: UserStats | null;
  chapters: AnnotatedChapter[];
  allLessonProgress: LessonProgress[];
}

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect('/sign-in');
  }

  const userId = session.user.id;

  const [userStats, chapters, unlockedChapterIds, allLessonProgress, allLessons] =
    await Promise.all([
      getUserStats(userId),
      getAllChapters(),
      getUnlockedChapterIds(userId),
      getAllLessonProgressForUser(userId),
      getAllLessons(),
    ]);

  const unlockedSet = new Set(unlockedChapterIds);

  const lessonToChapter = new Map(allLessons.map((l) => [l.id, l.chapterId]));

  const annotatedChapters: AnnotatedChapter[] = chapters.map((chapter) => {
    const completedLessons = allLessonProgress.filter(
      (progress) => lessonToChapter.get(progress.lessonId) === chapter.id && progress.completed
    ).length;

    return {
      ...chapter,
      totalLessons: chapter._count.lessons,
      completedLessons,
      isUnlocked: unlockedSet.has(chapter.id),
    };
  });

  return (
    <MissionMap
      userStats={{
        totalXp: userStats?.totalXp ?? 0,
        level: userStats?.level ?? 1,
        name: session.user.name,
      }}
      chapters={annotatedChapters}
    />
  );
}
