'use client';

import { usePyodide } from '@/hooks/usePyodide';
import { submitChallengeAction } from '@/modules/challenge/actions';
import { LessonWithChallengeAndChapter } from '@/modules/course/queries';
import { ArrowRight, Star, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useState, useTransition } from 'react';
import { toast } from 'sonner';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { SpaceCard } from '../admin/space-card';
import CodeEditor from '../editor/code-editor';
import OutputPanel from '../editor/output-panel';
import RunButton from '../editor/run-button';
import { Button } from '../ui/button';
import PyodideLoadingOverlay from './pyodide-loading-overlay';
import LessonNav from './lesson-nav';

interface LessonViewProps {
  lesson: LessonWithChallengeAndChapter;
  userId: string;
  alreadyCompleted: boolean;
  prevLesson: { id: string } | null;
  nextLesson: { id: string } | null;
}

export default function LessonView({
  lesson,
  alreadyCompleted,
  prevLesson,
  nextLesson,
}: LessonViewProps) {
  const router = useRouter();
  const challenge = lesson.challenge;
  const chapter = lesson.chapter;

  const [code, setCode] = useState<string>(challenge?.starterCode ?? '');
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(alreadyCompleted ? true : null);
  const [isTestFailure, setIsTestFailure] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(alreadyCompleted);
  const [isSubmitting, startSubmitTransition] = useTransition();

  const { runCode, isLoading, isReady } = usePyodide();

  const handleRun = useCallback(async () => {
    if (isLoading || !isReady || !code.trim()) return;

    setOutput(null);
    setError(null);
    setIsCorrect(null);
    setIsTestFailure(false);

    const result = await runCode(code, challenge?.testCode ?? undefined);

    setOutput(result.output || null);

    if (result.success) {
      setIsCorrect(true);
      setError(null);
    } else {
      setIsCorrect(false);
      setError(result.error || 'An unknown error occurred');
      setIsTestFailure(result.isTestFailure ?? false);
    }
  }, [code, challenge, isLoading, isReady, runCode]);

  const handleSubmit = useCallback(() => {
    if (!challenge || hasSubmitted || isCorrect !== true) return;

    startSubmitTransition(async () => {
      const result = await submitChallengeAction({
        challengeId: challenge.id,
        code,
        isCorrect: true,
        output: output ?? undefined,
      });

      if (!result.success) {
        toast.error(result.error ?? 'Submission failed. Please try again');
        return;
      }

      setHasSubmitted(true);

      if (result.xpAwarded) {
        toast.success(`+${result.xpAwarded} XP earned! Mission objective logged`);
      }

      setTimeout(() => router.push('/dashboard'), 1500);
    });
  }, [challenge, code, output, isCorrect, hasSubmitted, router]);

  return (
    <div className="min-h-screen bg-[#060A12]">
      {/* Completion Banner */}
      {alreadyCompleted && (
        <div className="border-b border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
          <div className="mx-auto flex max-w-screen-2xl items-center gap-2 text-sm font-semibold text-emerald-400">
            <Check className="h-4 w-4" />
            Mission Complete ✅ — You can still run and modify your code
          </div>
        </div>
      )}

      {/* Page Layout */}
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 p-4 lg:grid-cols-[2fr_3fr] lg:p-6">
        {/* LEFT PANEL */}
        <div className="flex flex-col gap-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/dashboard" className="transition-colors hover:text-[#1DCD9E]">
              Dashboard
            </Link>
            <span>/</span>
            <Link
              href={`/chapter/${chapter.id}`}
              className="transition-colors hover:text-[#1DCD9E]"
            >
              Chapter {chapter.order}
            </Link>
            <span>/</span>
            <span className="text-slate-200">{lesson.title}</span>
          </div>

          {/* Chapter Badge & Title */}
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#1DCD9E]/40 bg-[#1DCD9E]/10 px-3 py-1.5 text-xs font-bold tracking-widest text-[#1DCD9E] uppercase">
              Chapter {chapter.order} — {chapter.title}
            </span>
            <h1 className="font-space-grotesk bg-linear-to-r from-[#1DCD9E] to-cyan-400 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
              {lesson.title}
            </h1>
          </div>

          {/* Story Panel */}
          <SpaceCard className="transmission-panel relative space-y-4 border-[#1DCD9E]/40 bg-linear-to-br from-[#0B0F1A]/80 to-[#060A12]/60 p-6">
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-lg">📡</span>
              <h2 className="text-xs font-bold tracking-wide text-[#1DCD9E] uppercase">
                Incoming Transmission
              </h2>
            </div>
            <p className="typewriter relative z-10 text-sm leading-relaxed text-slate-200 italic">
              {chapter.storyText}
            </p>
          </SpaceCard>

          {/* Lesson Content */}
          <SpaceCard className="scan-lines border-[#1e2d3d] bg-[#0B0F1A]/80 p-6">
            <div className="prose prose-invert prose-sm prose-headings:text-slate-100 prose-headings:font-semibold prose-headings:mb-2 prose-headings:mt-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-code:rounded prose-code:bg-[#1e2d3d] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[#FFD700] prose-code:text-xs prose-code:font-mono prose-pre:bg-[#0D1117] prose-pre:border prose-pre:border-[#1e2d3d] prose-pre:p-4 prose-pre:overflow-x-auto prose-strong:text-slate-100 prose-a:text-[#1DCD9E] prose-a:hover:text-cyan-300 prose-a:hover:underline prose-li:text-slate-300 prose-li:my-1 max-w-none">
              <Markdown>{lesson.content}</Markdown>
            </div>
          </SpaceCard>

          {/* XP Badge */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-3 py-1.5 text-xs font-bold text-[#FFD700]">
              <Star className="h-3.5 w-3.5 fill-[#FFD700]" />+{lesson.xpReward} XP on completion
            </span>
            {alreadyCompleted && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400">
                <Check className="h-3.5 w-3.5" />
                Completed
              </span>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-4">
          {challenge && (
            <>
              {/* Mission Objective Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b-2 border-[#1DCD9E] pb-3">
                  <span className="text-lg">🎯</span>
                  <h2 className="text-sm font-bold tracking-wide text-[#1DCD9E] uppercase">
                    Mission Objective
                  </h2>
                </div>

                {/* Instructions Callout */}
                <SpaceCard className="border-[#1DCD9E]/40 bg-[#0B1421]/60 p-4">
                  <p className="text-sm leading-relaxed text-slate-300">{challenge.instructions}</p>
                </SpaceCard>
              </div>

              {/* Python Runtime Status */}
              {!isReady && (
                <div className="flex items-center gap-2 rounded-lg border border-[#1e2d3d] bg-[#0B0F1A] px-4 py-3 text-xs text-slate-400">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DCD9E] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DCD9E]/50" />
                  </span>
                  Initialising Python runtime…
                </div>
              )}

              {/* Code Editor */}
              <SpaceCard className="flex flex-col overflow-hidden border-[#1e2d3d] bg-[#0B0F1A] p-0">
                {/* File Tab */}
                <div className="border-b border-[#1e2d3d] bg-[#060A12]/50 px-4 py-3">
                  <p className="font-mono text-xs text-slate-400">
                    <span className="text-[#1DCD9E]">📄</span> mission_code.py
                  </p>
                </div>

                {/* Editor */}
                <div className="relative flex-1 overflow-hidden">
                  <PyodideLoadingOverlay isReady={isReady} />
                  <CodeEditor
                    value={code}
                    onChange={setCode}
                    readOnly={isLoading || isSubmitting}
                    height="320px"
                  />
                </div>
              </SpaceCard>

              {/* Run Button with Shortcut */}
              <div className="flex items-center justify-between gap-3">
                <RunButton
                  onClick={handleRun}
                  isLoading={isLoading}
                  disabled={!isReady || isLoading}
                />
                <span className="text-xs text-slate-500">
                  Shortcut: <span className="font-mono text-slate-400">Ctrl+Enter</span>
                </span>
              </div>

              {/* Output Panel */}
              <OutputPanel
                output={output}
                error={error}
                isLoading={isLoading}
                isCorrect={isCorrect}
                isTestFailure={isTestFailure}
              />

              {/* Submit Button */}
              {isCorrect === true && !alreadyCompleted && (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting || hasSubmitted}
                  size="lg"
                  className="w-full gap-2 bg-linear-to-r from-emerald-500 to-emerald-600 font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    'Logging mission data…'
                  ) : hasSubmitted ? (
                    <>
                      <Check className="h-4 w-4" />
                      Submitted
                    </>
                  ) : (
                    <>
                      Submit & Continue
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </>
          )}

          {/* Lesson Navigation */}
          <LessonNav
            currentLesson={{ id: lesson.id, chapterId: chapter.id, order: lesson.order }}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
            isCurrentCompleted={alreadyCompleted || hasSubmitted}
            inline
          />
        </div>
      </div>
    </div>
  );
}
