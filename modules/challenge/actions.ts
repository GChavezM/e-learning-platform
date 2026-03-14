'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { submissionSchema } from './schemas';
import prisma from '@/lib/prisma';
import { progressService } from '../progress/service';

export type SubmissionResult =
  | { success: false; error: string }
  | { success: true; isCorrect: boolean; xpAwarded?: number };

export async function submitChallengeAction(rawData: unknown): Promise<SubmissionResult> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { success: false, error: 'Unauthorized' };
  }

  const userId = session.user.id;

  let data: ReturnType<typeof submissionSchema.parse>;

  try {
    data = submissionSchema.parse(rawData);
  } catch {
    return { success: false, error: 'Invalid submission data' };
  }

  const { challengeId, code, isCorrect, output } = data;

  await prisma.submission.create({
    data: {
      userId,
      challengeId,
      code,
      isCorrect,
      output,
    },
  });

  if (isCorrect) {
    const { xpAwarded } = await progressService.completeLesson(userId, challengeId);
    return { success: true, isCorrect, xpAwarded };
  }

  return { success: true, isCorrect };
}
