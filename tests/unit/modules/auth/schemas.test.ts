import { signInSchema, signUpSchema } from '@/modules/auth/schemas';

describe('signUpSchema', () => {
  it('accepts valid data and normalizes trimmed fields', () => {
    const parsed = signUpSchema.parse({
      confirmPassword: 'Secure123',
      email: 'USER@Example.COM',
      name: '  Ada Lovelace  ',
      password: 'Secure123',
    });

    expect(parsed).toEqual({
      confirmPassword: 'Secure123',
      email: 'user@example.com',
      name: 'Ada Lovelace',
      password: 'Secure123',
    });
  });

  it('rejects names with non-letter characters', () => {
    const result = signUpSchema.safeParse({
      confirmPassword: 'Secure123',
      email: 'user@example.com',
      name: 'Ada123',
      password: 'Secure123',
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Name can only contain letters and spaces');
  });

  it('rejects passwords shorter than 8 characters', () => {
    const result = signUpSchema.safeParse({
      confirmPassword: 'Short1A',
      email: 'user@example.com',
      name: 'Ada Lovelace',
      password: 'Short1A',
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Password must be at least 8 characters');
  });

  it('rejects passwords without lowercase, uppercase, or numbers', () => {
    const cases = [
      {
        message: 'Password must contain at least one lowercase letter',
        password: 'PASSWORD1',
      },
      {
        message: 'Password must contain at least one uppercase letter',
        password: 'password1',
      },
      {
        message: 'Password must contain at least one number',
        password: 'Password',
      },
    ];

    for (const testCase of cases) {
      const result = signUpSchema.safeParse({
        confirmPassword: testCase.password,
        email: 'user@example.com',
        name: 'Ada Lovelace',
        password: testCase.password,
      });

      expect(result.success).toBe(false);
      expect(result.error?.issues.map((issue) => issue.message)).toContain(testCase.message);
    }
  });

  it('rejects mismatched passwords', () => {
    const result = signUpSchema.safeParse({
      confirmPassword: 'Secure124',
      email: 'user@example.com',
      name: 'Ada Lovelace',
      password: 'Secure123',
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Passwords do not match');
    expect(result.error?.issues[0]?.path).toEqual(['confirmPassword']);
  });
});

describe('signInSchema', () => {
  it('accepts valid credentials and normalizes the email', () => {
    const parsed = signInSchema.parse({
      email: 'USER@Example.COM',
      password: 'secret',
    });

    expect(parsed).toEqual({
      email: 'user@example.com',
      password: 'secret',
    });
  });

  it('rejects an invalid email', () => {
    const result = signInSchema.safeParse({
      email: 'not-an-email',
      password: 'secret',
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Please enter a valid email address');
  });

  it('rejects an empty password after trimming', () => {
    const result = signInSchema.safeParse({
      email: 'user@example.com',
      password: '   ',
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toEqual(['password']);
  });
});
