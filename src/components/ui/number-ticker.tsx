'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring } from 'motion/react';
import { formatMetric, parseMetric } from './parse-metric';
import { cn } from '@/lib/utils';

// Counts the number inside a metric string up from zero when it scrolls into view.
// Strings without a number render as static text; reduced-motion users see the final value without counting.
export const NumberTicker: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const parsed = parseMetric(value);
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 40, stiffness: 110 });

  useEffect(() => {
    if (!inView || !parsed) return;
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = value;
    } else {
      motionValue.set(parsed.value);
    }
  }, [inView, parsed?.value, reduceMotion, value, motionValue]);

  useMotionValueEvent(spring, 'change', (latest) => {
    if (ref.current && parsed) ref.current.textContent = formatMetric(parsed, latest);
  });

  if (!parsed) return <span className={className}>{value}</span>;

  // Same markup on server and client; the reduced-motion preference is only known in the browser,
  // so it decides how the number is revealed rather than what is rendered.

  return (
    <span className={cn('tabular-nums', className)}>
      <span ref={ref} aria-hidden="true">{formatMetric(parsed, 0)}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
};
