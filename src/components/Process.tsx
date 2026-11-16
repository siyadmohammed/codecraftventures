import React from 'react';
import { Compass, Code2, Cpu, Activity } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/content';
import { BlurFade } from '@/components/ui/blur-fade';
import { SectionHeading } from '@/components/ui/section-heading';

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  Code2,
  Cpu,
  Activity,
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-28 sm:px-6 sm:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              align="left"
              eyebrow="Deterministic Delivery"
              title="How We Engineer"
              description="A disciplined, 4-stage engineering lifecycle transforming complex business challenges into production-hardened web platforms and autonomous systems."
              className="mb-0"
            />
          </div>
        </div>

        <ol className="relative lg:col-span-8">
          <div aria-hidden="true" className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-accent/60 via-line-strong to-transparent" />
          {PROCESS_STEPS.map((step, i) => {
            const StepIcon = ICON_MAP[step.icon] || Code2;
            return (
              <li key={step.step} className="relative pb-14 pl-16 last:pb-0">
                {/* Outside BlurFade: its transform would otherwise become this icon's positioning context. */}
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-background text-zinc-300">
                  <StepIcon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <BlurFade delay={i * 0.05}>
                  <div className="flex items-baseline gap-3 font-mono text-xs">
                    <span className="text-zinc-500">{step.step}</span>
                    <span className="uppercase tracking-wider text-accent-soft">{step.phase}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">{step.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <li key={item} className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-zinc-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </BlurFade>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
