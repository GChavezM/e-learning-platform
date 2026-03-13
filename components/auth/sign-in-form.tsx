'use client';

import { useState } from 'react';
import { Card } from '../ui/card';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '../ui/input-group';
import { EyeIcon, EyeOffIcon, Loader2, Lock, Mail, Send } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { SignInFormData, signInSchema } from '@/modules/auth/schemas';
import { signInAction } from '@/modules/auth/actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    const result = await signInAction(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    form.reset();
    router.push('/dashboard');
  };

  return (
    <Card className="overflow-hidden rounded-xl border-white/10 bg-[#1c2623]/60 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
      <form
        className="flex flex-col gap-6 p-6 pt-6 sm:p-8"
        id="form-sign-in"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-slate-600 dark:text-slate-300">
                  Email
                </FieldLabel>
                <InputGroup className="focus-within:border-primary dark:focus-within:border-primary focus-within:ring-primary dark:focus-within:ring-primary group rounded-lg border-slate-300 bg-slate-50 transition-all duration-200 hover:border-slate-400 focus:ring-1 focus:outline-none dark:border-[#3d524c] dark:bg-[#111716]/80 dark:hover:border-[#536e66]">
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    className="placeholder:text-slate-400 dark:placeholder:text-[#9eb7b1]"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={fieldState.invalid}
                    disabled={form.formState.isSubmitting}
                    required
                  />
                  <InputGroupAddon align="inline-start">
                    <Mail className="group-focus-within:text-primary dark:group-focus-within:text-primary text-slate-400 dark:text-[#9eb7b1]" />
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-slate-600 dark:text-slate-300">
                  Password
                </FieldLabel>
                <InputGroup className="focus-within:border-primary dark:focus-within:border-primary focus-within:ring-primary dark:focus-within:ring-primary group rounded-lg border-slate-300 bg-slate-50 transition-all duration-200 focus-within:ring-1 focus-within:outline-none hover:border-slate-400 dark:border-[#3d524c] dark:bg-[#111716]/80 dark:hover:border-[#536e66]">
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    className="placeholder:text-slate-400 dark:placeholder:text-[#9eb7b1]"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    aria-invalid={fieldState.invalid}
                    disabled={form.formState.isSubmitting}
                    required
                  />
                  <InputGroupAddon align="inline-start">
                    <Lock className="group-focus-within:text-primary dark:group-focus-within:text-primary text-slate-400 dark:text-[#9eb7b1]" />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword(!showPassword)}
                      size="icon-xs"
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Field>
            <Button
              type="submit"
              className="group text-primary-foreground relative h-12 w-full overflow-hidden px-5 font-bold"
              form="form-sign-in"
              disabled={form.formState.isSubmitting}
              aria-busy={form.formState.isSubmitting}
            >
              <span className="shimmer absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  <span className="text-base font-bold tracking-wide uppercase">Signing In...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <span className="text-base font-bold tracking-wide uppercase">Sign In</span>
                </>
              )}
            </Button>
            <div className="text-center text-sm">
              <span className="text-muted-foreground">New to the fleet? </span>
              <Link href="/sign-up" className="text-primary font-semibold hover:underline">
                Register new account
              </Link>
            </div>
          </Field>
        </FieldGroup>
      </form>
    </Card>
  );
}
