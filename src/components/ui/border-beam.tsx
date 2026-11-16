import React from 'react';
import { cn } from './utils';

// Place inside a `relative` container with a border radius; the beam follows that radius.
export const BorderBeam: React.FC<{ className?: string; duration?: number }> = ({ className, duration = 8 }) => (
  <span
    aria-hidden="true"
    style={{ '--beam-duration': `${duration}s` } as React.CSSProperties}
    className={cn('pointer-events-none absolute inset-0 rounded-[inherit] mask-border border-beam', className)}
  />
);
