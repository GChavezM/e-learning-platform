import Features from '@/components/landing/features';
import Hero from '@/components/landing/hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow container mx-auto px-6 py-16 flex flex-col items-center justify-center">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
