import { notoSans } from '@/lib/fonts';
import { Terminal } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="bg-background grid-bg relative overflow-hidden px-4 py-20">
      <div className="relative z-10 mx-auto w-full max-w-240">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="text-primary flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
              <Terminal size={18} />
              Mission Briefing
            </div>

            <h2 className="text-4xl leading-tight font-bold text-white md:text-5xl">The Story</h2>

            <p className={`${notoSans.className} text-lg leading-relaxed text-slate-300`}>
              The guidance navigation system is down. We&apos;ve lost contact with the main vessel.
              You are the flight engineer, and your Python scripts are the only thing that can
              reboot the engines.
            </p>

            <div className="bg-surface-dark border-border group relative overflow-hidden rounded-lg border p-6 font-mono text-sm text-slate-300">
              <div className="via-primary absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent to-transparent opacity-50" />

              <div className="border-border mb-3 flex gap-2 border-b pb-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <p className="mb-2 text-red-400">&gt; ERROR: Oxygen_Levels_Critical</p>
              <p className="mb-2 text-slate-400">&gt; System: Initiating manual override...</p>
              <p className="text-primary mb-2">
                &gt; <span className="text-white">def</span>{' '}
                <span className="text-yellow-300">restore_oxygen</span>(pressure):
              </p>
              <p className="text-primary mb-2 pl-4">
                &gt; <span className="text-white">if</span> pressure &lt; 20:
              </p>
              <p className="text-primary pl-8">
                &gt; <span className="text-purple-400">return</span>{' '}
                <span className="text-green-300">&quot;Emergency Boost&quot;</span>
              </p>

              <div className="bg-primary absolute right-4 bottom-4 h-4 w-2 animate-pulse" />
            </div>
          </div>

          <div className="relative">
            <div className="from-primary absolute -inset-1 rounded-xl bg-linear-to-r to-blue-600 opacity-20 blur" />

            <div className="bg-surface-dark border-surface-dark relative aspect-4/3 overflow-hidden rounded-xl border">
              <div className="absolute inset-0 bg-[url('/images/astronaut.webp')] bg-cover bg-center" />

              <div className="from-background absolute inset-0 bg-linear-to-t via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <div className="mb-2 flex items-center gap-3">
                  <div className="h-2 w-2 animate-ping rounded-full bg-red-500" />
                  <span className="text-xs font-bold tracking-wider text-red-400 uppercase">
                    Connection Unstable
                  </span>
                </div>

                <p className="font-medium text-white">Cadet, do you copy? We need that code now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
