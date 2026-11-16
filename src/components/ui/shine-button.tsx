import React from 'react';
import { cn } from '@/lib/utils';

interface ShineButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost';
}

// Pill link-button. The primary variant has a light streak sweeping across it.
export const ShineButton: React.FC<ShineButtonProps> = ({ variant = 'primary', className, children, ...props }) => (
  <a
    {...props}
    className={cn(
      'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      variant === 'primary'
        ? 'bg-zinc-50 text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(142,124,255,0.45)] hover:bg-white'
        : 'border border-line-strong bg-white/[0.03] text-zinc-200 hover:bg-white/[0.07] hover:text-white',
      className
    )}
  >
    {variant === 'primary' && (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shine"
      />
    )}
    <span className="relative inline-flex items-center gap-2">{children}</span>
  </a>
);
