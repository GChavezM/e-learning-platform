import { BarChart3, Terminal, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function Features() {
  type Feature = {
    icon: React.ReactNode;
    title: string;
    desc: string;
  };

  const features: Feature[] = [
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: 'Gamification',
      desc: 'Earn XP, unlock badges, and level up as you complete coding challenges and missions.',
    },
    {
      icon: <Terminal className="w-6 h-6 text-primary" />,
      title: 'Coding Editor',
      desc: 'A friendly, powerful browser-based editor. Write real Python code and see instant feedback on your progress.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: 'Progress Tracking',
      desc: 'Detailed mission logs. Visualize concepts mastered and track your journey.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border border-white/20 p-8 rounded-xl bg-background dark:bg-slate-900/50 hover:border-primary/50 transition-colors group"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-bold mb-3">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
