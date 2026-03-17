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
    return Result.fail('Correo o contrasena invalidos.');
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
      return Result.fail('Ya existe una cuenta con ese correo.');
    }
    return Result.fail('No se pudo crear la cuenta. Intentalo de nuevo.');
  }
}

async function signOut(requestHeaders: Headers): Promise<Result<void, string>> {
  try {
    await auth.api.signOut({
      headers: requestHeaders,
    });
    return Result.ok();
  } catch {
    return Result.fail('No se pudo cerrar sesion. Intentalo de nuevo.');
  }
}

export const authService = {
  signIn,
  signUp,
  signOut,
};
