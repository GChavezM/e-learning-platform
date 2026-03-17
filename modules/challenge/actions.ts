'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { submissionSchema } from './schemas';
import prisma from '@/lib/prisma';
import { ProgressAccessError, progressService } from '../progress/service';

export type SubmissionResult =
  | {
      success: false;
      error: string;
      code?: 'UNAUTHORIZED' | 'INVALID_SUBMISSION' | 'LESSON_LOCKED' | 'CHALLENGE_NOT_FOUND';
      status?: 400 | 401 | 403 | 404;
    }
  | { success: true; isCorrect: boolean; xpAwarded?: number };

function mapProgressAccessError(error: unknown): SubmissionResult | null {
  if (!(error instanceof ProgressAccessError)) {
    return null;
  }

  return {
    success: false,
    error: error.message,
    code: error.code,
    status: error.status,
  };
}

export async function submitChallengeAction(rawData: unknown): Promise<SubmissionResult> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { success: false, error: 'Unauthorized', code: 'UNAUTHORIZED', status: 401 };
  }

  const userId = session.user.id;

  let data: ReturnType<typeof submissionSchema.parse>;

  try {
    data = submissionSchema.parse(rawData);
  } catch {
    return {
      success: false,
      error: 'Datos de envio invalidos',
      code: 'INVALID_SUBMISSION',
      status: 400,
    };
  }

  const { challengeId, code, isCorrect, output } = data;

  try {
    return await prisma.$transaction(async (tx) => {
      await progressService.assertChallengeUnlocked(userId, challengeId, tx);

      await tx.submission.create({
        data: {
          userId,
          challengeId,
          code,
          isCorrect,
          output,
        },
      });

      if (!isCorrect) {
        return { success: true, isCorrect };
      }

      const { xpAwarded } = await progressService.completeLesson(userId, challengeId, tx);

      return { success: true, isCorrect, xpAwarded };
    });
  } catch (error) {
    return mapProgressAccessError(error) ?? { success: false, error: 'El envio fallo' };
  }
}
