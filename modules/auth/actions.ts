'use server';

import { signInSchema, signUpSchema } from './schemas';
import type { SignInFormData, SignUpFormData } from './schemas';
import { headers } from 'next/headers';
import { signIn, signOut, signUp } from './service';

export type ActionResult = { success: true } | { success: false; error: string };

export async function signInAction(formData: SignInFormData): Promise<ActionResult> {
  const parsed = signInSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, error: 'Invalid credentials' };
  }

  const result = await signIn(parsed.data, await headers());

  if (result.isFail()) {
    return { success: false, error: result.getError() };
  }

  return { success: true };
}

export async function signUpAction(formData: SignUpFormData): Promise<ActionResult> {
  const parsed = signUpSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, error: 'Invalid input. Please check your details' };
  }

  const result = await signUp(parsed.data, await headers());

  if (result.isFail()) {
    return { success: false, error: result.getError() };
  }

  return { success: true };
}

export async function signOutAction(): Promise<ActionResult> {
  const result = await signOut(await headers());

  if (result.isFail()) {
    return { success: false, error: result.getError() };
  }

  return { success: true };
}
