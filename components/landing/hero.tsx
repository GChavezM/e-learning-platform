import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Hero() {
  return (
    <Card className="max-w-3xl w-full p-8 md:p-16 rounded-xl border border-dashed border-white/30 bg-primary/5 text-center relative overflow-hidden">
      <CardHeader>
        <CardTitle className="text-4xl md:text-6xl font-bold mb-6">
          Master Python <br />
          <span className="text-primary">Explore the Galaxy</span>{' '}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
          The gamified space adventure where students learn real-world coding skills through
          interactive challenges and missions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="w-full sm:w-auto px-8 py-4 font-bold" asChild>
            <Link className="uppercase" href="/sign-up">
              Sign Up
            </Link>
          </Button>
          <Button className="w-full sm:w-auto px-8 py-4 font-bold" variant="outline" asChild>
            <Link className="uppercase" href="/sign-in">
              Sign In
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
