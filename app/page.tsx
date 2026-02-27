import Cta from '@/components/landing/cta';
import Hero from '@/components/landing/hero';
import Story from '@/components/landing/story';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Story />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
