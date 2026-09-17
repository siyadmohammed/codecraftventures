import React, { useEffect, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Cursor Spotlight Follower */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          transform: 'translate3d(0,0,0)',
        }}
      />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />

      {/* Ambient gradient auras */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-brand-cyan/10 rounded-full blur-[160px] animate-ambient-1" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-brand-indigo/15 rounded-full blur-[180px] animate-ambient-2" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-brand-emerald/10 rounded-full blur-[170px] animate-ambient-1" />

      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07090E]/40 to-[#07090E]" />
    </div>
  );
};
