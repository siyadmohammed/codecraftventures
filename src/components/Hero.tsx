import React from 'react';
import { ArrowRight, Sparkles, Terminal, Layers, Code, Shield } from 'lucide-react';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Interactive 3D Hero Background (Three.js WebGL) */}
      <ThreeHeroCanvas />

      {/* Floating radial soft gradient for legibility */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status / Category Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/80 border border-white/10 backdrop-blur-md mb-8 shadow-inner hover:border-brand-cyan/40 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
          </span>
          <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
            50% Full-Stack Engineering &bull; 50% Agentic Intelligence
          </span>
        </div>

        {/* Grand Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          <span className="block text-slate-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 font-mono tracking-normal">
            Codecraft
          </span>
          <span className="text-gradient-silver">The Art of </span>
          <span className="text-gradient-cyan-indigo">Intelligent Software</span>
        </h1>

        {/* Subtitle with balanced positioning */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
          We architect mission-critical web platforms and engineer self-governing autonomous agents. 
          Where classical software precision meets the frontier of machine cognition.
        </p>

        {/* Interactive CTA Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-emerald text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.02] active:scale-[0.99] transition-all group"
          >
            <span>Initiate Project Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-100/80 hover:bg-surface-50/90 text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all shadow-sm"
          >
            <Layers className="w-4 h-4 text-brand-cyan" />
            <span>Explore Dual Engine</span>
          </a>
        </div>

        {/* Quick Engineering Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <div className="glass-panel rounded-xl p-3.5 border border-white/5 hover:border-brand-cyan/30 transition-all">
            <div className="flex items-center gap-2 text-brand-cyan mb-1 font-mono text-xs">
              <Code className="w-3.5 h-3.5" />
              <span>Full-Stack Web</span>
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">Modern React & Next.js</div>
            <div className="text-slate-400 text-xs mt-0.5">Ultra-responsive platforms</div>
          </div>

          <div className="glass-panel rounded-xl p-3.5 border border-white/5 hover:border-brand-emerald/30 transition-all">
            <div className="flex items-center gap-2 text-brand-emerald mb-1 font-mono text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agentic Systems</span>
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">Autonomous Swarms</div>
            <div className="text-slate-400 text-xs mt-0.5">Goal-seeking tool callers</div>
          </div>

          <div className="glass-panel rounded-xl p-3.5 border border-white/5 hover:border-brand-indigo/30 transition-all">
            <div className="flex items-center gap-2 text-brand-indigo mb-1 font-mono text-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>Distributed APIs</span>
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">&lt; 90ms Latency</div>
            <div className="text-slate-400 text-xs mt-0.5">Real-time event streams</div>
          </div>

          <div className="glass-panel rounded-xl p-3.5 border border-white/5 hover:border-purple-400/30 transition-all">
            <div className="flex items-center gap-2 text-purple-400 mb-1 font-mono text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>Architecture</span>
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">99.99% Reliability</div>
            <div className="text-slate-400 text-xs mt-0.5">Zero-trust cloud infrastructure</div>
          </div>
        </div>

        {/* 3D Core Interactive Hint */}
        <div className="mt-8 flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-brand-cyan/60 inline-block animate-pulse" />
          <span>Interactive 3D Core: Move cursor or drag viewport to rotate model</span>
        </div>
      </div>
    </section>
  );
};
