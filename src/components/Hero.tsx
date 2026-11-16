import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ThreeHeroCanvas } from '@/components/ThreeHeroCanvas';
import { CASE_STUDIES } from '@/data/content';
import { BlurFade } from '@/components/ui/blur-fade';
import { DotPattern } from '@/components/ui/dot-pattern';
import { Marquee } from '@/components/ui/marquee';
import { ShineButton } from '@/components/ui/shine-button';

const HIGHLIGHTS = [
  { label: 'Full-Stack Web', value: 'Modern React & Next.js', note: 'Ultra-responsive platforms' },
  { label: 'Agentic Systems', value: 'Autonomous Swarms', note: 'Goal-seeking tool callers' },
  { label: 'Distributed APIs', value: '< 90ms Latency', note: 'Real-time event streams' },
  { label: 'Architecture', value: '99.99% Reliability', note: 'Zero-trust cloud infrastructure' },
];

const TECH = Array.from(new Set(CASE_STUDIES.flatMap((study) => study.techStack)));

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      <DotPattern />
      <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_42%,black_20%,transparent_75%)]">
        <ThreeHeroCanvas />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <BlurFade>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-zinc-300 backdrop-blur transition-colors hover:border-line-strong"
          >
            <span className="rounded-full bg-accent/15 px-2 py-0.5 font-medium text-accent-soft">Codecraft</span>
            <span>50% Full-Stack Engineering &middot; 50% Agentic Intelligence</span>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5" />
          </a>
        </BlurFade>

        <BlurFade delay={0.08}>
          <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-zinc-50 sm:text-7xl md:text-[5.5rem]">
            The Art of
            <br />
            <span className="bg-[linear-gradient(90deg,#FAFAFA,#BCB2FF,#8E7CFF,#BCB2FF,#FAFAFA)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-pan">
              Intelligent Software
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.16}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            We architect mission-critical web platforms and engineer self-governing autonomous agents.
            Where classical software precision meets the frontier of machine cognition.
          </p>
        </BlurFade>

        <BlurFade delay={0.24} className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <ShineButton href="#contact" className="w-full sm:w-auto">
            Initiate Project Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ShineButton>
          <ShineButton href="#services" variant="ghost" className="w-full sm:w-auto">
            Explore Dual Engine
          </ShineButton>
        </BlurFade>
      </div>

      <BlurFade delay={0.32} className="relative z-10 mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-background/60 backdrop-blur md:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.label}
              className={`p-5 text-left ${i % 2 === 1 ? 'border-l border-line' : ''} ${i >= 2 ? 'border-t border-line md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''}`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{item.label}</dt>
              <dd className="mt-2 text-sm font-medium text-zinc-100 sm:text-base">{item.value}</dd>
              <dd className="mt-0.5 text-xs text-zinc-500">{item.note}</dd>
            </div>
          ))}
        </dl>
      </BlurFade>

      <div className="relative z-10 mt-20 border-y border-line bg-background/40 py-6">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          The stack behind our products
        </p>
        <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <Marquee>
            {TECH.map((tech) => (
              <span key={tech} className="whitespace-nowrap text-sm font-medium text-zinc-500">
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
