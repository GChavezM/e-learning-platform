import { getFirstPublicLessonRoute } from '@/modules/course/queries';
import { notFound, redirect } from 'next/navigation';
import { connection } from 'next/server';

export default async function TryItNowPage() {
  await connection();
  const firstLessonRoute = await getFirstPublicLessonRoute();

  if (!firstLessonRoute) {
    notFound();
  }

  redirect(
    `/chapter/${firstLessonRoute.chapterSlug}/lesson/${firstLessonRoute.lessonSlug}?guest=1`
  );
}
