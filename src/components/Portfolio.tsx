import React from 'react';
import { ExternalLink, Sparkles, Zap, Shield, ArrowUpRight, CheckCircle2, MessageSquare, Compass, Calendar, Users } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';

export const Portfolio: React.FC = () => {
  const flagship = CASE_STUDIES.find((cs) => cs.isFlagship);
  const otherStudies = CASE_STUDIES.filter((cs) => !cs.isFlagship);

  return (
    <section id="works" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-cyan mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proven Production Deployments</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Selected Works & Digital Products
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-light">
          From our own proprietary digital ventures to enterprise client platforms, explore how Codecraft blends craftsmanship with autonomous systems.
        </p>
      </div>

      {/* FLAGSHIP PRODUCT SPOTLIGHT: PLUSONE */}
      {flagship && (
        <div className="relative rounded-3xl bg-gradient-to-b from-surface-100/90 to-[#0C0F17]/90 border-2 border-brand-cyan/40 p-6 sm:p-10 lg:p-12 mb-16 shadow-2xl shadow-brand-cyan/10 overflow-hidden group">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-indigo/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Product Narrative */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan font-mono text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Codecraft Product
                </span>
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Social Discovery & Event Matching
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                PlusOne
              </h3>
              <p className="text-lg font-medium text-gradient-cyan-indigo mb-5 font-mono">
                "Find your plus one for the night"
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Designed, architected, and engineered from the ground up by Codecraft. 
                <strong> PlusOne</strong> empowers members to discover local nightlife, spontaneous social events, and connect with verified companions in real time. 
                Engineered with high-speed intent routing, instant messaging streams, and seamless mobile-first PWA responsiveness.
              </p>

              {/* Feature Points of PlusOne */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center">
                  <Compass className="w-5 h-5 text-brand-cyan mb-1" />
                  <span className="text-xs font-bold text-white">Discover</span>
                  <span className="text-[10px] text-slate-400">Nightlife Events</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center">
                  <Zap className="w-5 h-5 text-brand-emerald mb-1" />
                  <span className="text-xs font-bold text-white">Intents</span>
                  <span className="text-[10px] text-slate-400">Instant Matching</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center">
                  <MessageSquare className="w-5 h-5 text-brand-indigo mb-1" />
                  <span className="text-xs font-bold text-white">Messages</span>
                  <span className="text-[10px] text-slate-400">Real-Time Chat</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col items-center text-center">
                  <Calendar className="w-5 h-5 text-purple-400 mb-1" />
                  <span className="text-xs font-bold text-white">Plans</span>
                  <span className="text-[10px] text-slate-400">Verified Members</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pb-8 mb-8 border-b border-white/10">
                {flagship.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-brand-cyan/25 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Visit PlusOne Live</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-200/80 hover:bg-surface-100 text-slate-200 text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <span>Build A Product Like This</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Visual UI Card Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#090C13] border border-white/15 p-5 shadow-2xl overflow-hidden group-hover:border-brand-cyan/50 transition-colors">
                {/* Simulated App Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white font-mono tracking-wide">+1 plusone</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan font-mono">
                      Live
                    </span>
                  </div>
                  <a
                    href="http://www.plusone.today"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-brand-cyan transition-colors text-[11px] font-mono flex items-center gap-1"
                  >
                    plusone.today
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Simulated App Content */}
                <div className="space-y-3">
                  {/* Event Mock Card 1 */}
                  <div className="p-3.5 rounded-xl bg-surface-200/80 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center font-bold text-slate-950 text-xs">
                        +1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Rooftop Lounge & Jazz Night</div>
                        <div className="text-[10px] text-slate-400">Looking for 1 companion &bull; Tonight 9 PM</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-brand-emerald/10 border border-brand-emerald/20 text-[10px] font-mono text-brand-emerald">
                      Active
                    </span>
                  </div>

                  {/* Event Mock Card 2 */}
                  <div className="p-3.5 rounded-xl bg-surface-200/80 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-indigo to-purple-500 flex items-center justify-center font-bold text-white text-xs">
                        LIVE
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Techno & Warehouse Sessions</div>
                        <div className="text-[10px] text-slate-400">Match radius: 5km &bull; 4 intents pending</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan">
                      Matching
                    </span>
                  </div>

                  {/* Architecture Badges */}
                  <div className="p-3 rounded-xl bg-surface-300/90 border border-white/5 mt-4">
                    <div className="text-[11px] font-mono text-slate-300 mb-2 flex items-center justify-between">
                      <span>Engineered by Codecraft</span>
                      <span className="text-brand-emerald">99.98% SLA</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {flagship.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADDITIONAL CASE STUDIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-2xl bg-surface-100/70 border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {study.category}
                </span>
                <span className="text-xs font-mono text-brand-cyan">
                  {study.pillar}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                {study.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-3">
                {study.subtitle}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {study.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {study.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-3">
              {study.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-base font-bold text-white font-mono">{m.value}</div>
                  <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
