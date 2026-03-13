import { auth } from '@/lib/auth';
import { SignInFormData, SignUpFormData } from './schemas';
import { Result } from '@/lib/result';

async function signIn(
  data: SignInFormData,
  requestHeaders: Headers
): Promise<Result<void, string>> {
  try {
    await auth.api.signInEmail({
      body: data,
      headers: requestHeaders,
    });
    return Result.ok();
  } catch {
    return Result.fail('Invalid email or password.');
  }
}

async function signUp(
  data: SignUpFormData,
  requestHeaders: Headers
): Promise<Result<void, string>> {
  try {
    await auth.api.signUpEmail({
      body: data,
      headers: requestHeaders,
    });
    return Result.ok();
  } catch (error) {
    const message = error instanceof Error ? error.message : '';
    if (message.toLowerCase().includes('already exists')) {
      return Result.fail('An account with that email already exists.');
    }
    return Result.fail('Could not create account. Please try again.');
  }
}

async function signOut(requestHeaders: Headers): Promise<Result<void, string>> {
  try {
    await auth.api.signOut({
      headers: requestHeaders,
    });
    return Result.ok();
  } catch {
    return Result.fail('Could not sign out. Please try again.');
  }
}

export const authService = {
  signIn,
  signUp,
  signOut,
};
