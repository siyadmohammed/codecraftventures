'use client';

import React, { useState } from 'react';
import {
  Bot,
  Cpu,
  Sparkles,
  Terminal,
  Globe,
  Server,
  ShieldCheck,
  Layers,
  Check,
  ArrowRight,
  Code2
} from 'lucide-react';
import { SERVICES } from '@/data/content';
import { ServiceCategory, ServiceItem } from '@/types';
import { BlurFade } from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Cpu,
  Sparkles,
  Terminal,
  Globe,
  Server,
  ShieldCheck,
  Layers,
};

// Bento rhythm on a 6-column grid: wide/narrow, narrow/wide, then halves. Repeats for longer lists.
const SPAN_PATTERN = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3'];

const FILTERS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: `All Disciplines (${SERVICES.length})` },
  { id: 'engineering', label: `Web & Cloud Platforms (${SERVICES.filter((s) => s.category === 'engineering').length})` },
  { id: 'agentic', label: `Agentic Automations (${SERVICES.filter((s) => s.category === 'agentic').length})` },
];

const ServiceCard: React.FC<{ service: ServiceItem; wide: boolean }> = ({ service, wide }) => {
  const IconComponent = ICON_MAP[service.iconName] || Code2;
  const isAgentic = service.category === 'agentic';

  return (
    <MagicCard className="h-full">
      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-raised text-zinc-200">
            <IconComponent className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            {isAgentic ? 'Agentic Systems' : 'Web Engineering'}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-zinc-50">{service.title}</h3>
        <p className="mt-1 text-sm text-accent-soft/80">{service.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{service.description}</p>

        <ul className="mb-8 mt-6 grid gap-y-2.5">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2.5 text-[13px] text-zinc-300">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              <span>{cap}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-t border-line pt-5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Benchmark</div>
            <div className={cn('mt-1 font-medium text-zinc-100', wide ? 'text-2xl tracking-tight' : 'text-sm')}>{service.metrics}</div>
          </div>
          <a
            href="#contact"
            className="group/btn inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-50"
          >
            Scope This
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </MagicCard>
  );
};

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  return (
    <section id="services" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading
        eyebrow="Equally Balanced Architecture"
        title="50% Web Engineering. 50% Agentic Intelligence."
        description="High-performing AI agents require rock-solid web infrastructure to thrive. At Codecraft, we bridge front-end beauty, cloud microservices, and self-governing autonomous agents into unified, production-grade solutions."
        className="mb-10"
      />

      <BlurFade className="mb-10 flex justify-center">
        <div role="tablist" className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-line bg-surface p-1">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'rounded-full px-4 py-2 text-xs font-medium transition-colors sm:text-sm',
                activeFilter === filter.id ? 'bg-zinc-50 text-zinc-950' : 'text-zinc-400 hover:text-zinc-100'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        {filteredServices.map((service, i) => {
          const span = SPAN_PATTERN[i % SPAN_PATTERN.length];
          return (
            <BlurFade key={`${activeFilter}-${service.id}`} delay={Math.min(i, 4) * 0.05} className={span}>
              <ServiceCard service={service} wide={span === 'lg:col-span-4'} />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
};
