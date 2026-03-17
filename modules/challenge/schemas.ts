import { z } from 'zod';

export const submissionSchema = z.object({
  challengeId: z.cuid(),
  code: z
    .string()
    .min(1, 'El codigo no puede estar vacio')
    .max(10000, 'El codigo es demasiado largo'),
  isCorrect: z.boolean(),
  output: z.string().optional(),
});

export type SubmissionData = z.infer<typeof submissionSchema>;
