import { z } from 'zod';

export const submissionSchema = z.object({
  challengeId: z.cuid(),
  code: z.string().min(1, 'Code cannot be empty').max(10000, 'Code is too long'),
  isCorrect: z.boolean(),
  output: z.string().optional(),
});

export type SubmissionData = z.infer<typeof submissionSchema>;
