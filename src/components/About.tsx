import React from 'react';
import { ShieldCheck, Cpu, Code2, Users, CheckCircle, Flame } from 'lucide-react';
import { COMPANY_NAME, TAGLINE } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-surface-100/50 border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Subtle accent glow */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Manifesto */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-200 border border-white/10 text-xs font-mono text-brand-indigo mb-5">
              <Flame className="w-3.5 h-3.5 text-brand-cyan" />
              <span>The Codecraft Standard</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Classical Rigor Meets Machine Agency
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              Modern software has splintered into two extremes: flashy AI prototypes that fail under production stress, and legacy web platforms that cannot adapt to autonomous workflows.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              At <strong>{COMPANY_NAME}</strong>, we close that divide. We believe the future belongs to software that is <strong>50% robust engineering foundation</strong> and <strong>50% autonomous intelligence</strong>. We write clean, type-safe, resilient code and embed agentic autonomy where it drives exponential leverage.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-200/60 border border-white/5">
                <div className="flex items-center gap-2.5 font-bold text-white text-sm mb-1.5">
                  <Code2 className="w-4 h-4 text-brand-cyan" />
                  <span>Deterministic Craft</span>
                </div>
                <p className="text-xs text-slate-400">
                  Zero sloppy wrappers. Handcrafted components, strict type schemas, and predictable runtime behavior.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-200/60 border border-white/5">
                <div className="flex items-center gap-2.5 font-bold text-white text-sm mb-1.5">
                  <Cpu className="w-4 h-4 text-brand-emerald" />
                  <span>Agentic Autonomy</span>
                </div>
                <p className="text-xs text-slate-400">
                  Purpose-built autonomous agents that plan, call tools, self-heal, and deliver tangible business outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architectural Stats Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#080B12] border border-white/10 shadow-xl">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Codecraft Philosophy</span>
                <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-white">Full-Stack Ownership</div>
                    <div className="text-xs text-slate-400">From front-end design to low-level distributed pipelines.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-indigo shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-white">Operator-in-the-Loop</div>
                    <div className="text-xs text-slate-400">Autonomous systems guarded by verifiable human approval boundaries.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-white">Enterprise Scalability</div>
                    <div className="text-xs text-slate-400">Architectures proven in real-world products like PlusOne.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <div className="text-xs font-mono text-slate-400">{TAGLINE}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
