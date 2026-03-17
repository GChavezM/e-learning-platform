import { notoSans } from '@/lib/fonts';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Cta() {
  return (
    <section className="to-background relative overflow-hidden bg-linear-to-t from-[#0a0f0e] px-4 py-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="bg-primary h-150 w-150 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-180 text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Listo para despegar?</h2>
        <p className={`${notoSans.className} mb-8 text-lg text-slate-300`}>
          Los motores estan listos. La tripulacion espera. Tu viaje para dominar Python comienza en
          3... 2... 1...
        </p>
        <Button
          size="lg"
          className="bg-primary text-background inline-flex h-14 transform items-center justify-center gap-2 px-10 text-lg font-bold shadow-[0_0_30px_rgba(29,205,158,0.5)] hover:scale-105 hover:bg-white"
          asChild
        >
          <Link href="/sign-up">
            Iniciar secuencia de lanzamiento
            <ArrowRight size={20} />
          </Link>
        </Button>
        <p className="mt-4 text-xs text-slate-500">No se requiere tarjeta de credito.</p>
      </div>
    </section>
  );
}
