import React from 'react';
import { Cpu, Code2, Check } from 'lucide-react';
import { COMPANY_NAME, TAGLINE } from '../data/content';
import { BlurFade } from './ui/blur-fade';
import { DotPattern } from './ui/dot-pattern';

const VALUES = [
  {
    icon: Code2,
    title: 'Deterministic Craft',
    body: 'Zero sloppy wrappers. Handcrafted components, strict type schemas, and predictable runtime behavior.',
  },
  {
    icon: Cpu,
    title: 'Agentic Autonomy',
    body: 'Purpose-built autonomous agents that plan, call tools, self-heal, and deliver tangible business outcomes.',
  },
];

const PRINCIPLES = [
  { title: 'Full-Stack Ownership', body: 'From front-end design to low-level distributed pipelines.' },
  { title: 'Operator-in-the-Loop', body: 'Autonomous systems guarded by verifiable human approval boundaries.' },
  { title: 'Enterprise Scalability', body: 'Architectures proven in real-world products like PlusOne.' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-28 sm:px-6 sm:py-36">
      <BlurFade>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-12 lg:p-16">
          <DotPattern className="[mask-image:radial-gradient(ellipse_at_top_right,white_10%,transparent_55%)]" />

          <div className="relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">The Codecraft Standard</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.08]">
                Classical Rigor Meets Machine Agency
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
                Modern software has splintered into two extremes: flashy AI prototypes that fail under production stress, and legacy web platforms that cannot adapt to autonomous workflows.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                At <span className="text-zinc-200">{COMPANY_NAME}</span>, we close that divide. We believe the future belongs to software that is{' '}
                <span className="text-zinc-200">50% robust engineering foundation</span> and{' '}
                <span className="text-zinc-200">50% autonomous intelligence</span>. We write clean, type-safe, resilient code and embed agentic autonomy where it drives exponential leverage.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {VALUES.map(({ icon: Icon, title, body }) => (
                  <div key={title}>
                    <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-100">
                      <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                      {title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <div className="rounded-2xl border border-line bg-background/70 p-6 backdrop-blur">
                <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Codecraft Philosophy</div>
                <ul className="mt-6 space-y-6">
                  {PRINCIPLES.map(({ title, body }) => (
                    <li key={title} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line-strong">
                        <Check className="h-3 w-3 text-accent" />
                      </span>
                      <div>
                        <div className="text-sm font-medium text-zinc-100">{title}</div>
                        <div className="mt-1 text-sm text-zinc-500">{body}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-line pt-5 text-center font-mono text-xs text-zinc-500">{TAGLINE}</div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
