import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, 'Name must be at least 2 characters')
      .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
    email: z.email({ error: 'Please enter a valid email addres' }).trim().toLowerCase(),
    password: z
      .string()
      .trim()
      .min(8, { error: 'Password mut be at least 8 characters' })
      .regex(/[a-z]/, { error: 'Password must contain at least one lowercase letter' })
      .regex(/[A-Z]/, { error: 'Password must contain at least one uppercase letter' })
      .regex(/\d/, { error: 'Password must contain at least one number' }),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Passwords do ot match',
    path: ['confirmPassword'],
  });

export const signInSchema = z.object({
  email: z.email({ error: 'Please enter a valid eail address' }).trim().toLowerCase(),
  password: z.string().trim().min(1),
});

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
