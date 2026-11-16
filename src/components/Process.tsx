import React from 'react';
import { Compass, Code2, Cpu, Activity, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  Code2,
  Cpu,
  Activity,
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-emerald mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Deterministic Delivery</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          How We Engineer
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-light">
          A disciplined, 4-stage engineering lifecycle transforming complex business challenges into production-hardened web platforms and autonomous systems.
        </p>
      </div>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step) => {
          const StepIcon = ICON_MAP[step.icon] || Code2;
          return (
            <div
              key={step.step}
              className="rounded-2xl bg-surface-100/60 border border-white/10 p-6 sm:p-7 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group shadow-lg hover:shadow-brand-cyan/5"
            >
              <div>
                {/* Header with Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-slate-400 group-hover:text-brand-cyan transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-surface-200 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <StepIcon className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-brand-emerald mb-1 block">
                  {step.phase}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Key Artifacts:
                </span>
                {step.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
