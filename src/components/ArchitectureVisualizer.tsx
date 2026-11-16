import React, { useRef, useState } from 'react';
import { Check, ShieldCheck, Database, Layout, Cpu } from 'lucide-react';
import { AnimatedBeam } from './ui/animated-beam';
import { BlurFade } from './ui/blur-fade';
import { SectionHeading } from './ui/section-heading';
import { cn } from './ui/utils';

interface StageInfo {
  id: number;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  specs: string[];
}

const STAGES: StageInfo[] = [
  {
    id: 1,
    title: "Client & Web Tier",
    category: "Web Engineering",
    icon: Layout,
    description: "Modern responsive web applications with sub-second page loads, real-time client state, and encrypted WebSocket streams.",
    specs: ["Next.js App Router / React 19", "Optimistic UI Updates", "End-to-End Type Safety"],
  },
  {
    id: 2,
    title: "Edge & API Gateway",
    category: "Cloud Infrastructure",
    icon: ShieldCheck,
    description: "Ultra-low latency edge compute gateway enforcing zero-trust authentication, token rate limiting, and request telemetry.",
    specs: ["Global Edge Workers (< 15ms)", "Distributed JWT Validation", "DDoS Mitigation & WAF"],
  },
  {
    id: 3,
    title: "Agentic Orchestrator",
    category: "Agentic Intelligence",
    icon: Cpu,
    description: "Autonomous multi-agent swarms evaluating complex objectives, planning tool executions, and synthesizing answers with citation validation.",
    specs: ["Hierarchical Swarm Routing", "Dynamic Tool Invocation Loop", "Self-Correcting Reasoning"],
  },
  {
    id: 4,
    title: "Data & Tool Execution",
    category: "Enterprise Systems",
    icon: Database,
    description: "High-throughput database mutations, vector memory retrieval, third-party ERP webhooks, and audit logging.",
    specs: ["PostgreSQL & pgvector Hybrid", "Atomic Transaction Guarantees", "Immutable Audit Ledger"],
  },
];

export const ArchitectureVisualizer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const selectedStageData = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  return (
    <section id="architecture" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading
        eyebrow="Interactive Architecture Pipeline"
        title="Where Web Frontends Converge With Autonomous Agents"
      />

      <BlurFade>
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <div ref={containerRef} className="relative px-6 py-12 sm:px-12 sm:py-16">
            {nodeRefs.slice(1).map((toRef, i) => (
              <AnimatedBeam
                key={i}
                containerRef={containerRef}
                fromRef={nodeRefs[i]}
                toRef={toRef}
                duration={2.4}
                delay={i * 0.8}
              />
            ))}

            <div className="relative flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-6">
              {STAGES.map((stage, i) => {
                const StageIcon = stage.icon;
                const isSelected = activeStage === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    aria-pressed={isSelected}
                    className="group flex w-44 flex-col items-center text-center focus-visible:outline-none"
                  >
                    <div
                      ref={nodeRefs[i]}
                      className={cn(
                        'relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border bg-background transition-all duration-300',
                        isSelected
                          ? 'border-accent text-zinc-50 shadow-[0_0_40px_-6px_rgba(142,124,255,0.6)]'
                          : 'border-line-strong text-zinc-400 group-hover:text-zinc-100 group-focus-visible:border-accent'
                      )}
                    >
                      <StageIcon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <span className="relative z-10 mt-4 bg-surface px-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      Node 0{stage.id}
                    </span>
                    <span className={cn('relative z-10 mt-1 bg-surface px-1.5 text-sm font-medium transition-colors', isSelected ? 'text-zinc-50' : 'text-zinc-400')}>
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 border-t border-line bg-background/40 p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-soft">
                {selectedStageData.category}
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50">{selectedStageData.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{selectedStageData.description}</p>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <ul className="space-y-3">
                {selectedStageData.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-sm text-zinc-200">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line-strong">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] text-zinc-500">
                <span>Security: Zero-Trust Encrypted</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Status: Healthy
                </span>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
