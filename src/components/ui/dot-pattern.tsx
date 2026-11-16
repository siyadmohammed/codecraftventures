import React, { useId } from 'react';
import { cn } from '@/lib/utils';

// Faint dot grid that fades out toward the edges via a radial mask.
export const DotPattern: React.FC<{ className?: string }> = ({ className }) => {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-white/[0.09]',
        '[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]',
        className
      )}
    >
      <defs>
        <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};
