import React, { useEffect, useId, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  duration?: number;
  delay?: number;
}

interface BeamGeometry {
  width: number;
  height: number;
  start: { x: number; y: number };
  end: { x: number; y: number };
  d: string;
}

// Draws a faint connector between the centres of two elements and sends a pulse of light along it.
// Geometry is recomputed whenever the container resizes, so it works in row and column layouts.
export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 3,
  delay = 0,
}) => {
  const id = useId().replace(/:/g, '');
  const reduceMotion = useReducedMotion();
  const [geometry, setGeometry] = useState<BeamGeometry | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const from = fromRef.current;
      const to = toRef.current;
      if (!from || !to) return;
      const box = container.getBoundingClientRect();
      const a = from.getBoundingClientRect();
      const b = to.getBoundingClientRect();
      const start = { x: a.left - box.left + a.width / 2, y: a.top - box.top + a.height / 2 };
      const end = { x: b.left - box.left + b.width / 2, y: b.top - box.top + b.height / 2 };
      const mid = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 - curvature };
      setGeometry({
        width: box.width,
        height: box.height,
        start,
        end,
        d: `M ${start.x},${start.y} Q ${mid.x},${mid.y} ${end.x},${end.y}`,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, [containerRef, fromRef, toRef, curvature]);

  if (!geometry) return null;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      width={geometry.width}
      height={geometry.height}
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      className="pointer-events-none absolute left-0 top-0"
    >
      <path d={geometry.d} stroke="rgba(255,255,255,0.1)" strokeWidth={1.5} strokeLinecap="round" />
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1={geometry.start.x}
          y1={geometry.start.y}
          x2={geometry.end.x}
          y2={geometry.end.y}
        >
          <stop stopColor="#8E7CFF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      {!reduceMotion && (
        <motion.path
          d={geometry.d}
          stroke={`url(#${id})`}
          strokeWidth={2}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="0.18 1"
          initial={{ strokeDashoffset: 0.18 }}
          animate={{ strokeDashoffset: -1 }}
          transition={{ duration, delay, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
        />
      )}
    </svg>
  );
};
