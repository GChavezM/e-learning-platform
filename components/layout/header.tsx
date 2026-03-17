import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 flex items-center justify-between border-b border-solid px-6 py-4 whitespace-nowrap backdrop-blur-md lg:px-10">
      <div className="flex items-center gap-3 text-white">
        <div className="bg-primary/20 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
          <Rocket size={20} />
        </div>
        <h2 className="text-xl leading-tight font-bold tracking-tight text-white">
          PyMission Control
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="bg-surface-dark hover:border-primary/50 dark:bg-surface-dark dark:hover:border-primary/50 hidden h-9 min-w-21 sm:flex"
          asChild
        >
          <Link href="/sign-in">Iniciar sesión</Link>
        </Button>
        <Button
          className="bg-primary hover:bg-primary text-background flex h-9 min-w-21 shadow-[0_0_25px_rgba(29,205,158,0.3)] hover:shadow-[0_0_25px_rgba(29,205,158,0.5)]"
          asChild
        >
          <Link href="/sign-up">Registrarse</Link>
        </Button>
      </div>
    </header>
  );
}
