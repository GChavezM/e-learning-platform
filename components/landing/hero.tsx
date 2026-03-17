import { Button } from '../ui/button';
import { Rocket } from 'lucide-react';
import { notoSans } from '@/lib/fonts';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-150 flex-col items-center justify-center overflow-hidden px-4 py-12 lg:min-h-[80vh] lg:py-12">
      <div className="absolute inset-0 z-0">
        <div className="via-background/50 to-background absolute inset-0 z-10 bg-linear-to-b from-transparent" />
        <div className="absolute inset-0 bg-[url('/images/hero-background.webp')] bg-cover bg-center opacity-60" />
      </div>

      <div className="relative z-20 flex w-full max-w-240 flex-col items-center gap-8 text-center">
        <h1 className="max-w-4xl text-5xl leading-none font-black tracking-tight text-white drop-shadow-xl md:text-7xl">
          PyMission Control: Rescata al Astronauta. <br />
          <span className="from-primary neon-text bg-linear-to-r to-emerald-400 bg-clip-text text-transparent">
            Aprende Python Paso a Paso.
          </span>
        </h1>

        <p
          className={`${notoSans.className} max-w-2xl text-lg leading-relaxed font-normal text-slate-300 md:text-xl`}
        >
          Inicia tu aventura en Python y únete a la misión para traer a salvo a un astronauta
          perdido, mientras desarrollas tus habilidades de programación paso a paso.
        </p>

        <div className="mt-4 flex w-full flex-col items-center gap-3">
          <Button
            size="lg"
            className="bg-primary text-background flex h-12 transform items-center gap-2 rounded-lg px-8 text-base font-bold shadow-[0_0_20px_rgba(29,205,158,0.4)] transition-all hover:scale-105 hover:bg-emerald-400 sm:h-14 sm:text-lg"
            asChild
          >
            <Link href="/sign-up">
              <Rocket className="h-5 w-5" />
              Inicia tu misión
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-[#1DCD9E]/70 bg-[#0B1421]/70 px-8 font-semibold text-[#1DCD9E] hover:bg-[#0B1421] hover:text-emerald-300"
            asChild
          >
            <Link href="/try-it-now">Pruébalo ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
