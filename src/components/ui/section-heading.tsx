import React from 'react';
import { BlurFade } from './blur-fade';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description, align = 'center', className }) => (
  <BlurFade
    className={cn(
      'flex flex-col mb-14',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      className
    )}
  >
    <span className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">{eyebrow}</span>
    <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.08]">
      {title}
    </h2>
    {description && (
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>
    )}
  </BlurFade>
);
