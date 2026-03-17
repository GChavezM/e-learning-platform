import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .regex(/^[\p{L}\s]+$/u, 'El nombre solo puede contener letras y espacios'),
    email: z.email({ error: 'Ingresa una direccion de correo valida' }).trim().toLowerCase(),
    password: z
      .string()
      .trim()
      .min(8, { error: 'La contrasena debe tener al menos 8 caracteres' })
      .regex(/[a-z]/, { error: 'La contrasena debe incluir al menos una letra minuscula' })
      .regex(/[A-Z]/, { error: 'La contrasena debe incluir al menos una letra mayuscula' })
      .regex(/\d/, { error: 'La contrasena debe incluir al menos un numero' }),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Las contrasenas no coinciden',
    path: ['confirmPassword'],
  });

export const signInSchema = z.object({
  email: z.email({ error: 'Ingresa una direccion de correo valida' }).trim().toLowerCase(),
  password: z.string().trim().min(1),
});

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
