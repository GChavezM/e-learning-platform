'use server';

import { auth } from '@/lib/auth';
import { signInSchema, signUpSchema } from './schemas';
import type { SignInFormData, SignUpFormData } from './schemas';
import { redirect } from 'next/navigation';
// import { headers } from 'next/headers';

export type ActionResult = { success: true } | { success: false; error: string };

export async function signInAction(formData: SignInFormData): Promise<ActionResult> {
  const parsed = signInSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, error: 'Invalid credentials' };
  }

  const { email, password } = parsed.data;

  try {
    await auth.api.signInEmail({
      body: { email, password },
      //   headers: await headers(),
    });
  } catch {
    return { success: false, error: 'Invalid email or password' };
  }

  redirect('/dashboard');
}

export async function signUpAction(formData: SignUpFormData): Promise<ActionResult> {
  const paresd = signUpSchema.safeParse(formData);

  if (!paresd.success) {
    return { success: false, error: 'Invalid input. Please check your details' };
  }

  const { name, email, password } = paresd.data;

  try {
    await auth.api.signUpEmail({
      body: { name, email, password },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : '';
    if (message.toLowerCase().includes('already exists')) {
      return { success: false, error: 'An account with that email already exists.' };
    }

    return { success: false, error: 'Clould not create account. Please try again' };
  }

  redirect('/dashboard');
}
