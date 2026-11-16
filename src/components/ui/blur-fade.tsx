'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  offset?: number;
}

// Fades, un-blurs and lifts its children the first time they scroll into view.
export const BlurFade: React.FC<BlurFadeProps> = ({ children, className, delay = 0, offset = 12 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-64px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: offset, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};
