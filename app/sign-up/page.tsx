import SignUpForm from '@/components/sign-up/sign-up-form';
import { Rocket } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="text-foreground relative flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="bg-primary/20 pointer-events-none absolute -right-1/4 -bottom-1/2 h-200 w-200 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#111716]/80 to-transparent" />
      </div>
      <main className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-8">
        <div className="flex w-full max-w-120 flex-col gap-6">
          <div className="mb-6 flex flex-col items-center justify-center gap-2">
            <div className="bg-primary/10 border-primary/30 relative mb-1 flex h-24 w-24 items-center justify-center rounded-xl border-2">
              <Rocket className="text-primary h-14 w-14 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>
            <div className="text-center">
              <h1 className="text-primary text-4xl font-black tracking-tight uppercase drop-shadow-[0_0_10px_hsl(var(--primary)/0.4)]">
                PyMission
              </h1>
              <p className="text-muted-foreground mt-1 text-sm font-bold tracking-[0.3em] uppercase">
                Control
              </p>
            </div>
          </div>
          <SignUpForm />
        </div>
      </main>
    </div>
  );
}
