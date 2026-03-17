'use client';

import { useRef, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LevelBadge } from '@/components/admin/level-badge';
import { XPBadge } from '@/components/admin/xp-badge';
import { ProgressBar } from '@/components/admin/progress-bar';

const XP_PER_LEVEL = 200;
const MAX_LEVEL = 10;

const CHAPTER_ICONS = ['🪐', '🛸', '⭐', '🌙', '🚀'] as const;

const SVG_W = 600;
const MAP_H = 920;

const NODE_CENTERS = [
  { x: 150, y: 105 },
  { x: 450, y: 285 },
  { x: 150, y: 465 },
  { x: 450, y: 645 },
  { x: 300, y: 825 },
] as const;

function buildPath(): string {
  return NODE_CENTERS.reduce<string>((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = NODE_CENTERS[i - 1];
    const midY = (prev.y + p.y) / 2;
    return `${acc} C ${prev.x} ${midY}, ${p.x} ${midY}, ${p.x} ${p.y}`;
  }, '');
}

const PATH_D = buildPath();

export interface MissionChapter {
  id: string;
  slug: string;
  order: number;
  title: string;
  description: string;
  totalLessons: number;
  completedLessons: number;
  isUnlocked: boolean;
}

export interface MissionUserStats {
  totalXp: number;
  level: number;
  name: string;
}

interface MissionMapProps {
  chapters: MissionChapter[];
  userStats: MissionUserStats | null;
}

type NodeStatus = 'complete' | 'in-progress' | 'locked';

function getStatus(chapter: MissionChapter): NodeStatus {
  if (!chapter.isUnlocked) return 'locked';
  if (chapter.totalLessons > 0 && chapter.completedLessons >= chapter.totalLessons) {
    return 'complete';
  }
  return 'in-progress';
}

interface MapHeaderProps {
  stats: MissionUserStats;
}

function MapHeader({ stats }: MapHeaderProps) {
  const isMaxLevel = stats.level >= MAX_LEVEL;
  const xpInLevel = stats.totalXp % XP_PER_LEVEL;
  const firstName = stats.name.split(' ')[0] ?? stats.name;

  return (
    <header className="border-b border-[#1e2d3d] bg-[#0B0F1A]/90 px-4 py-6 backdrop-blur-md sm:px-6">
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#1DCD9E]/60 uppercase">
            PyMission Control
          </span>
          <span className="h-px flex-1 bg-[#1e2d3d]" aria-hidden />
          <span className="font-mono text-[10px] tracking-wider text-slate-600 uppercase">
            Mapa de misión
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
              Bienvenido de vuelta, cadete
            </p>
            <h1 className="mt-0.5 text-xl font-bold text-slate-100">{firstName}</h1>
          </div>

          <div className="flex items-center gap-2">
            <LevelBadge level={stats.level} />
            <XPBadge xp={stats.totalXp} size="sm" />
          </div>
        </div>

        {isMaxLevel ? (
          <p className="font-mono text-xs font-semibold tracking-widest text-[#FFD040] uppercase">
            ⭐ Nivel máximo alcanzado — Estado comandante
          </p>
        ) : (
          <ProgressBar
            current={xpInLevel}
            max={XP_PER_LEVEL}
            label={`XP para nivel ${stats.level + 1}`}
          />
        )}
      </div>
    </header>
  );
}

function StatusBadge({ status }: { status: NodeStatus }) {
  if (status === 'complete') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-emerald-400 uppercase">
        ✓ Completado
      </span>
    );
  }
  if (status === 'in-progress') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-[#1DCD9E]/30 bg-[#1DCD9E]/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-[#1DCD9E] uppercase">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1DCD9E]" aria-hidden />
        En progreso
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/60 bg-slate-800/50 px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-slate-600 uppercase">
      <Lock className="h-2.5 w-2.5" aria-hidden />
      Bloqueado
    </span>
  );
}

interface NodeCircleProps {
  chapter: MissionChapter;
  status: NodeStatus;
  icon: string;
}

function NodeCircle({ chapter, status, icon }: NodeCircleProps) {
  return (
    <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
      {status === 'in-progress' && (
        <>
          <span
            className="absolute inset-0 animate-ping rounded-full opacity-30"
            style={{ backgroundColor: '#1DCD9E' }}
            aria-hidden
          />
          <span
            className="absolute -inset-1.5 animate-ping rounded-full opacity-15"
            style={{ backgroundColor: '#1DCD9E', animationDelay: '0.4s' }}
            aria-hidden
          />
        </>
      )}

      <div
        className={cn(
          'relative flex h-20 w-20 flex-col items-center justify-center rounded-full',
          'border-2 transition-all duration-300',
          status === 'complete' && 'border-emerald-500/70 bg-emerald-950/60',
          status === 'in-progress' && 'border-[#1DCD9E]/80 bg-[#0B1A15]',
          status === 'locked' && 'border-slate-700/50 bg-slate-900/80 grayscale'
        )}
        style={
          status === 'complete'
            ? { boxShadow: '0 0 20px 4px rgba(16,185,129,0.25)' }
            : status === 'in-progress'
              ? { boxShadow: '0 0 16px 3px rgba(29,205,158,0.3)' }
              : undefined
        }
      >
        <div
          className="pointer-events-none absolute inset-x-4 top-0 h-px rounded-full opacity-40"
          style={{ background: 'linear-gradient(to right, transparent, white, transparent)' }}
          aria-hidden
        />

        <span
          className={cn('text-2xl leading-none', status === 'locked' && 'opacity-40')}
          aria-hidden
        >
          {icon}
        </span>

        <span
          className={cn(
            'mt-0.5 font-mono text-[10px] font-bold tracking-widest',
            status === 'complete' && 'text-emerald-400',
            status === 'in-progress' && 'text-[#1DCD9E]',
            status === 'locked' && 'text-slate-600'
          )}
        >
          CH {String(chapter.order).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

interface NodeInfoProps {
  chapter: MissionChapter;
  status: NodeStatus;
}

function NodeInfo({ chapter, status }: NodeInfoProps) {
  return (
    <div className="mt-2.5 w-full space-y-1.5 text-center">
      <p
        className={cn(
          'text-xs leading-tight font-semibold',
          status === 'locked' ? 'text-slate-600' : 'text-slate-200'
        )}
      >
        {chapter.title}
      </p>

      {status !== 'locked' && (
        <p className="font-mono text-[10px] text-slate-500 tabular-nums">
          {chapter.completedLessons}/{chapter.totalLessons} lecciones
        </p>
      )}

      <div className="flex justify-center">
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

interface ChapterNodeProps {
  chapter: MissionChapter;
  status: NodeStatus;
  icon: string;
  center: (typeof NODE_CENTERS)[number];
  svgWidth: number;
  index: number;
  mounted: boolean;
}

function ChapterNode({
  chapter,
  status,
  icon,
  center,
  svgWidth,
  index,
  mounted,
}: ChapterNodeProps) {
  const leftPct = (center.x / svgWidth) * 100;
  const topPx = center.y - 40;

  const isClickable = status !== 'locked';
  const href = `/chapter/${chapter.slug}`;

  const nodeContent = (
    <>
      <NodeCircle chapter={chapter} status={status} icon={icon} />
      <NodeInfo chapter={chapter} status={status} />
    </>
  );

  const sharedWrapperClass = cn(
    'absolute w-40 transition-[opacity,transform] duration-500 ease-out',
    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
  );

  const sharedStyle: React.CSSProperties = {
    left: `${leftPct}%`,
    top: topPx,
    transform: 'translateX(-50%)',
    transitionDelay: `${index * 130}ms`,
  };

  if (isClickable) {
    return (
      <Link
        href={href}
        className={cn(
          sharedWrapperClass,
          'group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1DCD9E]/50 focus-visible:outline-none',
          'hover:-translate-y-1'
        )}
        style={sharedStyle}
        aria-label={`Capitulo ${chapter.order}: ${chapter.title} — ${status}`}
      >
        {nodeContent}
      </Link>
    );
  }

  return (
    <div
      className={cn(sharedWrapperClass, 'cursor-not-allowed')}
      style={sharedStyle}
      aria-label={`Capitulo ${chapter.order}: ${chapter.title} — bloqueado`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center pt-5"
        aria-hidden
      >
        <Lock className="h-4 w-4 text-slate-700" />
      </div>
      {nodeContent}
    </div>
  );
}

interface ConnectingPathProps {
  bgRef: React.RefObject<SVGPathElement | null>;
  fgRef: React.RefObject<SVGPathElement | null>;
}

function ConnectingPath({ bgRef, fgRef }: ConnectingPathProps) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${SVG_W} ${MAP_H}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <path
        ref={bgRef}
        d={PATH_D}
        fill="none"
        stroke="rgba(29,205,158,0.10)"
        strokeWidth="2"
        strokeDasharray="7 8"
        strokeLinecap="round"
      />

      <path
        ref={fgRef}
        d={PATH_D}
        fill="none"
        stroke="rgba(29,205,158,0.50)"
        strokeWidth="2"
        strokeDasharray="7 8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MissionMap({ chapters, userStats }: MissionMapProps) {
  const stats = userStats ?? { totalXp: 0, level: 1, name: 'Astronauta' };

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const bgPathRef = useRef<SVGPathElement>(null);
  const fgPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const entries: Array<[React.RefObject<SVGPathElement | null>, number, number]> = [
      [bgPathRef, 1.6, 0.1],
      [fgPathRef, 2.2, 0.3],
    ];

    entries.forEach(([ref, duration, delay]) => {
      const path = ref.current;
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
      requestAnimationFrame(() => {
        path.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;
        path.style.strokeDashoffset = '0';
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#060A12] text-slate-100">
      <div className="starfield pointer-events-none fixed inset-0 opacity-40" aria-hidden />

      <div className="relative z-10 flex flex-col">
        <MapHeader stats={stats} />

        <main className="mx-auto w-full max-w-2xl px-4 pb-20 sm:px-6">
          <div
            className="mb-2 h-px w-full"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(29,205,158,0.4), transparent)',
            }}
            aria-hidden
          />

          <div
            className="relative w-full"
            style={{ height: MAP_H }}
            role="region"
            aria-label="Mapa de progreso de capitulos"
          >
            <ConnectingPath bgRef={bgPathRef} fgRef={fgPathRef} />

            {chapters.slice(0, 5).map((chapter, i) => {
              const center = NODE_CENTERS[i];
              if (!center) return null;

              return (
                <ChapterNode
                  key={chapter.id}
                  chapter={chapter}
                  status={getStatus(chapter)}
                  icon={CHAPTER_ICONS[i] ?? '🪐'}
                  center={center}
                  svgWidth={SVG_W}
                  index={i}
                  mounted={mounted}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
