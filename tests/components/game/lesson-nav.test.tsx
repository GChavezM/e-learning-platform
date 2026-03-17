/** @jest-environment jsdom */

import React from 'react';
import { render, screen } from '@testing-library/react';
import LessonNav from '@/components/game/lesson-nav';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: React.ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('LessonNav', () => {
  const currentLesson = {
    chapterId: 'chapter-1',
    chapterSlug: 'python-basics',
    id: 'lesson-2',
    order: 2,
  };

  it('renders the previous and next navigation when available and completed', () => {
    render(
      <LessonNav
        currentLesson={currentLesson}
        prevLesson={{ id: 'lesson-1', slug: 'lesson-one' }}
        nextLesson={{ id: 'lesson-3', slug: 'lesson-three' }}
        isCurrentCompleted={true}
        inline
      />
    );

    expect(screen.getByRole('link', { name: /Anterior/i })).toHaveAttribute(
      'href',
      '/chapter/python-basics/lesson/lesson-one'
    );
    expect(screen.getByRole('link', { name: /Siguiente/i })).toHaveAttribute(
      'href',
      '/chapter/python-basics/lesson/lesson-three'
    );
    expect(screen.getByText('#02')).toBeInTheDocument();
  });

  it('hides the next button until the current lesson is completed', () => {
    render(
      <LessonNav
        currentLesson={currentLesson}
        prevLesson={{ id: 'lesson-1', slug: 'lesson-one' }}
        nextLesson={{ id: 'lesson-3', slug: 'lesson-three' }}
        isCurrentCompleted={false}
        inline
      />
    );

    expect(screen.queryByRole('link', { name: /Siguiente/i })).not.toBeInTheDocument();
  });

  it('shows the chapter complete action when there is no next lesson and the lesson is completed', () => {
    render(
      <LessonNav
        currentLesson={currentLesson}
        prevLesson={{ id: 'lesson-1', slug: 'lesson-one' }}
        nextLesson={null}
        isCurrentCompleted={true}
        inline
      />
    );

    expect(
      screen.getByRole('link', { name: 'Capitulo completado. Volver al mapa' })
    ).toHaveAttribute('href', '/dashboard');
  });
});
