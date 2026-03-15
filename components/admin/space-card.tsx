import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface SpaceCardProps extends React.ComponentProps<typeof Card> {
  className?: string;
  glowing?: boolean;
  children: React.ReactNode;
}

export function SpaceCard({ className, glowing = false, children, ...props }: SpaceCardProps) {
  return (
    <Card
      className={cn(
        // Layout & shape
        'rounded-xl',
        'bg-[#131929]',
        'border border-[rgba(29,205,158,0.2)]',
        'transition-shadow duration-300 ease-in-out',
        !glowing && 'hover:shadow-[0_0_18px_2px_rgba(29,205,158,0.18)]',
        glowing && 'shadow-[0_0_28px_4px_rgba(29,205,158,0.35)]',
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
