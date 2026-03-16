import { getFirstPublicLessonRoute } from '@/modules/course/queries';
import { notFound, redirect } from 'next/navigation';

export default async function TryItNowPage() {
  const firstLessonRoute = await getFirstPublicLessonRoute();

  if (!firstLessonRoute) {
    notFound();
  }

  redirect(`/chapter/${firstLessonRoute.chapterId}/lesson/${firstLessonRoute.lessonId}?guest=1`);
}
