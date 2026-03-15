import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import { getUserWithStats } from '@/modules/user/queries';
import { getAllLessonProgressForUser, getUserStats } from '@/modules/progress/queries';
import { getAllChapters, getAllLessons } from '@/modules/course/queries';
import ProfileView from '@/components/game/profile-view';

export default async function Profile() {
  // 1. Get session
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/sign-in');

  const userId = session.user.id;

  // 2. Fetch user with stats and stats separately
  const [userWithStats, stats, allLessonProgress, chapters, allLessons] = await Promise.all([
    getUserWithStats(userId),
    getUserStats(userId),
    getAllLessonProgressForUser(userId),
    getAllChapters(),
    getAllLessons(),
  ]);

  if (!userWithStats || !stats) notFound();

  // 3. Create a map of lessonId -> chapterId for quick lookup
  const lessonToChapterMap = new Map<string, string>();
  allLessons.forEach((lesson) => {
    lessonToChapterMap.set(lesson.id, lesson.chapterId);
  });

  // 4. Create a set of completed lesson IDs for quick lookup
  const completedLessonIds = new Set(
    allLessonProgress.filter((p) => p.completed).map((p) => p.lessonId)
  );

  // 5. Build chapter progress from chapters and lesson/progress data
  const chapterProgress = chapters.map((chapter) => {
    // Get all lessons that belong to this chapter
    const chapterLessons = allLessons.filter((lesson) => lesson.chapterId === chapter.id);

    // Count how many of those lessons are completed
    const completedLessons = chapterLessons.filter((lesson) =>
      completedLessonIds.has(lesson.id)
    ).length;

    return {
      chapter: { title: chapter.title },
      completedLessons,
      totalLessons: chapterLessons.length,
    };
  });

  // 6. Count totals
  const totalCompleted = completedLessonIds.size;
  const totalLessons = allLessons.length;

  // 7. Prepare user data
  const user = {
    name: userWithStats.name,
    email: userWithStats.email,
    createdAt: userWithStats.createdAt,
  };

  // 8. Prepare stats data (note: 'stats' not 'profile', 'totalXp' not 'xp')
  const statsData = {
    totalXp: stats.totalXp,
    level: stats.level,
    currentChapterId: stats.currentChapterId,
  };

  return (
    <ProfileView
      user={user}
      stats={statsData}
      chapterProgress={chapterProgress}
      totalCompleted={totalCompleted}
      totalLessons={totalLessons}
    />
  );
}
