import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring } from 'motion/react';
import { formatMetric, parseMetric } from './parse-metric';
import { cn } from './utils';

// Counts the number inside a metric string up from zero when it scrolls into view.
// Strings without a number, and users who prefer reduced motion, get the static text.
export const NumberTicker: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const parsed = parseMetric(value);
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 40, stiffness: 110 });

  useEffect(() => {
    if (inView && parsed) motionValue.set(parsed.value);
  }, [inView, parsed?.value, motionValue]);

  useMotionValueEvent(spring, 'change', (latest) => {
    if (ref.current && parsed) ref.current.textContent = formatMetric(parsed, latest);
  });

  if (!parsed || reduceMotion) return <span className={className}>{value}</span>;

  return (
    <span className={cn('tabular-nums', className)}>
      <span ref={ref} aria-hidden="true">{formatMetric(parsed, 0)}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
};
