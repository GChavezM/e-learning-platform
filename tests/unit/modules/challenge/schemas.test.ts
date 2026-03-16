import { submissionSchema } from '@/modules/challenge/schemas';

describe('submissionSchema', () => {
  const validChallengeId = 'ck1234567890abcdef123456';

  it('accepts a valid submission', () => {
    const parsed = submissionSchema.parse({
      challengeId: validChallengeId,
      code: 'print("hello")',
      isCorrect: true,
      output: 'hello',
    });

    expect(parsed).toEqual({
      challengeId: validChallengeId,
      code: 'print("hello")',
      isCorrect: true,
      output: 'hello',
    });
  });

  it('allows output to be omitted', () => {
    const parsed = submissionSchema.parse({
      challengeId: validChallengeId,
      code: 'print("hello")',
      isCorrect: false,
    });

    expect(parsed.output).toBeUndefined();
  });

  it('rejects an invalid challenge id', () => {
    const result = submissionSchema.safeParse({
      challengeId: 'invalid-id',
      code: 'print("hello")',
      isCorrect: false,
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toEqual(['challengeId']);
  });

  it('rejects empty code', () => {
    const result = submissionSchema.safeParse({
      challengeId: validChallengeId,
      code: '',
      isCorrect: false,
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Code cannot be empty');
  });

  it('rejects code longer than the configured limit', () => {
    const result = submissionSchema.safeParse({
      challengeId: validChallengeId,
      code: 'a'.repeat(10001),
      isCorrect: false,
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Code is too long');
  });
});
