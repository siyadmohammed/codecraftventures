import React from 'react';
import { cn } from './utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  repeat?: number;
}

// Infinite horizontal scroller. Copies after the first are hidden from screen readers.
export const Marquee: React.FC<MarqueeProps> = ({ children, className, repeat = 3 }) => (
  <div className={cn('group flex overflow-hidden [--duration:40s] [--gap:2.5rem] [gap:var(--gap)]', className)}>
    {Array.from({ length: repeat }, (_, i) => (
      <div
        key={i}
        aria-hidden={i > 0}
        className="flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]"
      >
        {children}
      </div>
    ))}
  </div>
);
