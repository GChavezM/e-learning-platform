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
  const currentLesson = { chapterId: 'chapter-1', id: 'lesson-2', order: 2 };

  it('renders the previous and next navigation when available and completed', () => {
    render(
      <LessonNav
        currentLesson={currentLesson}
        prevLesson={{ id: 'lesson-1' }}
        nextLesson={{ id: 'lesson-3' }}
        isCurrentCompleted={true}
        inline
      />
    );

    expect(screen.getByRole('link', { name: /Previous/i })).toHaveAttribute(
      'href',
      '/chapter/chapter-1/lesson/lesson-1'
    );
    expect(screen.getByRole('link', { name: /Next/i })).toHaveAttribute(
      'href',
      '/chapter/chapter-1/lesson/lesson-3'
    );
    expect(screen.getByText('#02')).toBeInTheDocument();
  });

  it('hides the next button until the current lesson is completed', () => {
    render(
      <LessonNav
        currentLesson={currentLesson}
        prevLesson={{ id: 'lesson-1' }}
        nextLesson={{ id: 'lesson-3' }}
        isCurrentCompleted={false}
        inline
      />
    );

    expect(screen.queryByRole('link', { name: /Next/i })).not.toBeInTheDocument();
  });

  it('shows the chapter complete action when there is no next lesson and the lesson is completed', () => {
    render(
      <LessonNav
        currentLesson={currentLesson}
        prevLesson={{ id: 'lesson-1' }}
        nextLesson={null}
        isCurrentCompleted={true}
        inline
      />
    );

    expect(screen.getByRole('link', { name: 'Chapter Complete! Back to Map' })).toHaveAttribute(
      'href',
      '/dashboard'
    );
  });
});
