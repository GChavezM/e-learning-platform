'use client';

import { usePyodide } from '@/hooks/usePyodide';
import { submitChallengeAction } from '@/modules/challenge/actions';
import { LessonWithChallengeAndChapter } from '@/modules/course/queries';
import { ArrowRight, BookOpen, Radio, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useState, useTransition } from 'react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import CodeEditor from '../editor/code-editor';
import OutputPanel from '../editor/output-panel';
import RunButton from '../editor/run-button';
import { Button } from '../ui/button';

interface LessonViewProps {
  lesson: LessonWithChallengeAndChapter;
  userId: string;
  alreadyCompleted: boolean;
}

export default function LessonView({ lesson, alreadyCompleted }: LessonViewProps) {
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
      setError(result.error ?? 'An unknown error occurred');
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
    <div className="bg-background min-h-screen">
      <div className="border-b border-[#1e2d3d] bg-[#0B0F1A] px-4 py-3">
        <div className="mx-auto flex max-w-screen-2xl items-center gap-3">
          <Radio className="text-primary h-4 w-4 shrink-0" />
          <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            PyMission Control
          </span>
          <span className="text-[#1e2d3d]">/</span>
          <span className="text-muted-foreground text-xs">
            Chapter {chapter.order} — {chapter.title}
          </span>
          <span className="text-[#1e2d3d]">/</span>
          <span className="text-xs text-slate-300">{lesson.title}</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 p-4 lg:grid-cols-[2fr_3fr] lg:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="text-primary inline-flex w-fit items-center gap-1.5 rounded-full border border-[#1DCD9E]/30 bg-[#1DCD9E]/10 px-3 py-1 text-xs font-semibold tracking-wide">
              Chapter {chapter.order} — {chapter.title}
            </span>
            <h1 className="text-2xl font-bold text-slate-100 lg:text-3xl">{lesson.title}</h1>
          </div>

          <Card className="border-[#1e2d3d] bg-[#0B0F1A]/80">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm text-slate-400">
                <Radio className="text-primary h-3.5 w-3.5" />
                Mission Transmission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-slate-300 italic">{chapter.storyText}</p>
            </CardContent>
          </Card>

          <Card className="border-[#1e2d3d] bg-[#0D1117]">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm text-slate-400">
                <BookOpen className="h-3.5 w-3.5" />
                Lesson
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* TODO: Replace with <ReactMarkdown> once react-markdown is installed */}
              <div
                className="prose prose-invert prose-sm prose-headings:text-slate-100 prose-headings:font-semibold prose-code:rounded prose-code:bg-[#1e2d3d] prose-code:px-1 prose-code:py-0.5 prose-code:text-[#1DCD9E] prose-code:text-xs prose-code:font-mono prose-pre:bg-[#0B0F1A] prose-pre:border prose-pre:border-[#1e2d3d] prose-strong:text-slate-100 prose-a:text-[#1DCD9E] max-w-none text-slate-300"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </CardContent>
          </Card>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-sm font-medium text-amber-300">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />+{lesson.xpReward} XP on
              completion
            </span>
            {alreadyCompleted && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400">
                ✅ Completed
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {challenge ? (
            <>
              <Card className="border-[#1DCD9E]/25 bg-[#0B0F1A]">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold text-[#1DCD9E]">
                    <span className="text-base">🛸</span>
                    Mission Objective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-300">{challenge.instructions}</p>
                </CardContent>
              </Card>

              {!isReady && (
                <div className="flex items-center gap-2 rounded-md border border-[#1e2d3d] bg-[#0B0F1A] px-4 py-2.5 text-xs text-slate-500">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DCD9E] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DCD9E]/50" />
                  </span>
                  Initialising Python runtime…
                </div>
              )}

              <CodeEditor
                value={code}
                onChange={setCode}
                readOnly={isLoading || isSubmitting}
                height="320px"
              />

              <div className="flex items-center justify-between gap-3">
                <RunButton
                  onClick={handleRun}
                  isLoading={isLoading}
                  disabled={!isReady || isLoading}
                />
              </div>

              <OutputPanel
                output={output}
                error={error}
                isLoading={isLoading}
                isCorrect={isCorrect}
                isTestFailure={isTestFailure}
              />

              {isCorrect === true && !alreadyCompleted && (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting || hasSubmitted}
                  size="lg"
                  className="w-full gap-2 bg-emerald-600 font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:bg-emerald-500 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    'Logging mission data…'
                  ) : hasSubmitted ? (
                    '✅ Submitted'
                  ) : (
                    <>
                      Submit & Continue
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}

              {alreadyCompleted && (
                <Button
                  onClick={() => router.push('/dashboard')}
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 border-[#1e2d3d] text-slate-400 hover:text-slate-200"
                >
                  Back to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </>
          ) : (
            <Card className="flex flex-col items-center justify-center gap-4 border-[#1e2d3d] bg-[#0D1117] py-16 text-center">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="text-5xl">🚀</div>
                <p className="text-sm text-slate-400">
                  No coding challenge for this lesson.
                  <br />
                  Read through the material and continue when ready.
                </p>
                <Button
                  onClick={() => router.push('/dashboard')}
                  size="lg"
                  className="gap-2 bg-[#1DCD9E] font-semibold text-[#0D1117] hover:bg-[#17b589]"
                >
                  Continue to Next Lesson
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
