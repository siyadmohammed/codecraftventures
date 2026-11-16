'use client';

import { MotionConfig } from 'motion/react';

// Client boundary so the server-rendered layout can apply the reduced-motion preference to every animation.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
