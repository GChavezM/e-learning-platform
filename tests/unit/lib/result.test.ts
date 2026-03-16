import { Result } from '@/lib/result';

describe('Result', () => {
  it('creates a successful result with a value', () => {
    const result = Result.ok<number, string>(42);

    expect(result.isOk()).toBe(true);
    expect(result.isFail()).toBe(false);
    expect(result.getValue()).toBe(42);
  });

  it('creates a failed result with an error', () => {
    const result = Result.fail<number, string>('boom');

    expect(result.isOk()).toBe(false);
    expect(result.isFail()).toBe(true);
    expect(result.getError()).toBe('boom');
  });

  it('throws when reading the error from a successful result', () => {
    const result = Result.ok<number, string>(1);

    expect(() => result.getError()).toThrow('Invalid Operation');
  });

  it('throws when reading the value from a failed result', () => {
    const result = Result.fail<number, string>('boom');

    expect(() => result.getValue()).toThrow('Invalid Operation');
  });

  it('supports undefined payloads', () => {
    const success = Result.ok<void, string>();
    const failure = Result.fail<void, string>();

    expect(success.getValue()).toBeUndefined();
    expect(failure.getError()).toBeUndefined();
  });
});
