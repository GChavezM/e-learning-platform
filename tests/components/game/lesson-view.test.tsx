/** @jest-environment jsdom */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LessonView from '@/components/game/lesson-view';

const push = jest.fn();
const toastError = jest.fn();
const toastSuccess = jest.fn();
const runCode = jest.fn();
const submitChallengeAction = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: React.ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('sonner', () => ({
  toast: {
    error: (...args: unknown[]) => toastError(...args),
    success: (...args: unknown[]) => toastSuccess(...args),
  },
}));

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('@/hooks/usePyodide', () => ({
  usePyodide: () => ({
    isLoading: false,
    isReady: true,
    runCode: (...args: unknown[]) => runCode(...args),
  }),
}));

jest.mock('@/modules/challenge/actions', () => ({
  submitChallengeAction: (...args: unknown[]) => submitChallengeAction(...args),
}));

jest.mock('@/components/admin/space-card', () => ({
  SpaceCard: ({ children, ...props }: React.ComponentProps<'div'>) => (
    <div {...props}>{children}</div>
  ),
}));

jest.mock('@/components/editor/code-editor', () => ({
  __esModule: true,
  default: ({ onChange, value }: { onChange: (value: string) => void; value: string }) => (
    <textarea
      aria-label="Code editor"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  ),
}));

jest.mock('@/components/editor/output-panel', () => ({
  __esModule: true,
  default: ({
    error,
    isCorrect,
    output,
  }: {
    error: string | null;
    isCorrect: boolean | null;
    output: string | null;
  }) => (
    <div aria-label="Mock output panel">
      <span>{output ?? 'no output'}</span>
      <span>{error ?? 'no error'}</span>
      <span>{String(isCorrect)}</span>
    </div>
  ),
}));

jest.mock('@/components/editor/run-button', () => ({
  __esModule: true,
  default: ({ disabled, onClick }: { disabled?: boolean; onClick: () => void }) => (
    <button disabled={disabled} onClick={onClick}>
      Run Mission
    </button>
  ),
}));

jest.mock('@/components/game/pyodide-loading-overlay', () => ({
  __esModule: true,
  default: ({ isReady }: { isReady: boolean }) => (isReady ? null : <div>Loading Python</div>),
}));

jest.mock('@/components/game/lesson-nav', () => ({
  __esModule: true,
  default: () => <nav aria-label="Lesson navigation">Mock nav</nav>,
}));

describe('LessonView', () => {
  const lesson = {
    chapter: {
      id: 'chapter-1',
      slug: 'python-basics',
      order: 1,
      storyText: 'Incoming mission briefing',
      title: 'Python Basics',
    },
    challenge: {
      id: 'challenge-1',
      instructions: 'Write a greeting',
      starterCode: 'print("hello")',
      testCode: 'assert True',
    },
    content: '## Lesson content',
    id: 'lesson-1',
    order: 1,
    title: 'First Mission',
    xpReward: 100,
  } as never;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders guest mode CTA instead of the run button', () => {
    render(
      <LessonView
        lesson={lesson}
        alreadyCompleted={false}
        submittedCode={null}
        prevLesson={null}
        nextLesson={{ id: 'lesson-2', slug: 'lesson-two' }}
        userId={null}
        isGuestMode
      />
    );

    expect(screen.getByRole('link', { name: 'Create Free Account' })).toHaveAttribute(
      'href',
      '/sign-up'
    );
    expect(screen.queryByRole('button', { name: 'Run Mission' })).not.toBeInTheDocument();
  });

  it('runs the challenge code and then allows submission on success', async () => {
    const user = userEvent.setup();
    runCode.mockResolvedValue({ output: 'hello', success: true });
    submitChallengeAction.mockResolvedValue({ success: true, xpAwarded: 100 });

    render(
      <LessonView
        lesson={lesson}
        alreadyCompleted={false}
        submittedCode={null}
        prevLesson={null}
        nextLesson={{ id: 'lesson-2', slug: 'lesson-two' }}
        userId={'user-1'}
      />
    );

    await user.clear(screen.getByLabelText('Code editor'));
    await user.type(screen.getByLabelText('Code editor'), 'print("mission")');
    await user.click(screen.getByRole('button', { name: 'Run Mission' }));

    await waitFor(() => {
      expect(runCode).toHaveBeenCalledWith('print("mission")', 'assert True');
    });

    expect(await screen.findByRole('button', { name: /Submit & Continue/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Submit & Continue/i }));

    await waitFor(() => {
      expect(submitChallengeAction).toHaveBeenCalledWith({
        challengeId: 'challenge-1',
        code: 'print("mission")',
        isCorrect: true,
        output: 'hello',
      });
    });

    expect(toastSuccess).toHaveBeenCalledWith('+100 XP earned! Mission objective logged');
  });

  it('shows an error toast when submission fails', async () => {
    const user = userEvent.setup();
    runCode.mockResolvedValue({ output: '', success: true });
    submitChallengeAction.mockResolvedValue({ success: false, error: 'Submission failed' });

    render(
      <LessonView
        lesson={lesson}
        alreadyCompleted={false}
        submittedCode={null}
        prevLesson={null}
        nextLesson={{ id: 'lesson-2', slug: 'lesson-two' }}
        userId={'user-1'}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Run Mission' }));
    await user.click(await screen.findByRole('button', { name: /Submit & Continue/i }));

    await waitFor(() => {
      expect(toastError).toHaveBeenCalledWith('Submission failed');
    });

    expect(push).not.toHaveBeenCalled();
  });

  it('shows the completion banner for already completed lessons', () => {
    render(
      <LessonView
        lesson={lesson}
        alreadyCompleted
        submittedCode={'print("saved")'}
        prevLesson={null}
        nextLesson={{ id: 'lesson-2', slug: 'lesson-two' }}
        userId={'user-1'}
      />
    );

    expect(screen.getByText(/Mission Complete/i)).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });
});
