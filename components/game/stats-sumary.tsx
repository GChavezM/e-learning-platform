'use client';

import { useEffect, useState } from 'react';
import { Star, Shield, CheckCircle } from 'lucide-react';
import { SpaceCard } from '@/components/admin/space-card';

interface StatsSummaryProps {
  totalXp: number;
  level: number;
  lessonsCompleted: number;
  totalLessons: number;
}

function AnimatedCounter({ value, duration = 1000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setDisplayValue(Math.floor(value * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  return <>{displayValue.toLocaleString()}</>;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  animatedValue?: number;
  color: 'gold' | 'cyan' | 'purple';
}

function StatCard({ icon, label, value, animatedValue, color }: StatCardProps) {
  const colorClasses = {
    gold: 'text-[var(--xp-gold)]',
    cyan: 'text-[var(--primary)]',
    purple: 'text-[var(--lvl-purple)]',
  };

  const borderClasses = {
    gold: 'border-[rgba(255,215,0,0.3)]',
    cyan: 'border-[rgba(29,205,158,0.3)]',
    purple: 'border-[rgba(168,85,247,0.3)]',
  };

  const glowClasses = {
    gold: 'hover:shadow-[0_0_18px_2px_rgba(255,215,0,0.2)]',
    cyan: 'hover:shadow-[0_0_18px_2px_rgba(29,205,158,0.2)]',
    purple: 'hover:shadow-[0_0_18px_2px_rgba(168,85,247,0.2)]',
  };

  return (
    <SpaceCard
      className={`flex flex-col items-center justify-center gap-3 px-6 py-8 ${glowClasses[color]}`}
    >
      <div className={`${colorClasses[color]} transition-all duration-300`}>{icon}</div>
      <p className="text-sm font-medium text-gray-300">{label}</p>
      <div className={`${colorClasses[color]} text-2xl font-bold transition-colors duration-300`}>
        {animatedValue !== undefined ? (
          <AnimatedCounter value={animatedValue} duration={1000} />
        ) : (
          value
        )}
      </div>
    </SpaceCard>
  );
}

export function StatsSummary({
  totalXp,
  level,
  lessonsCompleted,
  totalLessons,
}: StatsSummaryProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard
        icon={<Star className="h-8 w-8" />}
        label="XP total"
        value={totalXp}
        animatedValue={totalXp}
        color="gold"
      />

      <StatCard
        icon={<Shield className="h-8 w-8" />}
        label="Nivel actual"
        value={level}
        animatedValue={level}
        color="cyan"
      />

      <StatCard
        icon={<CheckCircle className="h-8 w-8" />}
        label="Lecciones completadas"
        value={`${lessonsCompleted}/${totalLessons}`}
        color="purple"
      />
    </div>
  );
}
