import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, Terminal, Activity, ArrowRight, ShieldCheck, Database, Layout, Cpu } from 'lucide-react';

interface StageInfo {
  id: number;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  specs: string[];
  color: string;
}

const STAGES: StageInfo[] = [
  {
    id: 1,
    title: "Client & Web Tier",
    category: "Web Engineering",
    icon: Layout,
    description: "Modern responsive web applications with sub-second page loads, real-time client state, and encrypted WebSocket streams.",
    specs: ["Next.js App Router / React 19", "Optimistic UI Updates", "End-to-End Type Safety"],
    color: "cyan",
  },
  {
    id: 2,
    title: "Edge & API Gateway",
    category: "Cloud Infrastructure",
    icon: ShieldCheck,
    description: "Ultra-low latency edge compute gateway enforcing zero-trust authentication, token rate limiting, and request telemetry.",
    specs: ["Global Edge Workers (< 15ms)", "Distributed JWT Validation", "DDoS Mitigation & WAF"],
    color: "indigo",
  },
  {
    id: 3,
    title: "Agentic Orchestrator",
    category: "Agentic Intelligence",
    icon: Cpu,
    description: "Autonomous multi-agent swarms evaluating complex objectives, planning tool executions, and synthesizing answers with citation validation.",
    specs: ["Hierarchical Swarm Routing", "Dynamic Tool Invocation Loop", "Self-Correcting Reasoning"],
    color: "emerald",
  },
  {
    id: 4,
    title: "Data & Tool Execution",
    category: "Enterprise Systems",
    icon: Database,
    description: "High-throughput database mutations, vector memory retrieval, third-party ERP webhooks, and audit logging.",
    specs: ["PostgreSQL & pgvector Hybrid", "Atomic Transaction Guarantees", "Immutable Audit Ledger"],
    color: "violet",
  },
];

export const ArchitectureVisualizer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([
    "System standby. Click 'Trigger Pipeline Simulation' to trace an end-to-end request.",
  ]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);
    setLogs(["[00:00.000] >> Inbound user action initiated from Web Platform UI."]);

    const timeline = [
      { step: 1, delay: 600, log: "[00:00.024] [Web Tier] Optimistic state set, WebSocket packet serialized (Payload: 1.2KB)." },
      { step: 2, delay: 1300, log: "[00:00.051] [API Gateway] Edge worker authorized JWT signature. Inbound rate limit ok." },
      { step: 3, delay: 2100, log: "[00:00.098] [Agent Swarm] Agent Core decomposed intent into 2 sub-tasks: [VectorSearch, ToolCall]." },
      { step: 4, delay: 3000, log: "[00:00.142] [Execution Engine] Hybrid vector lookup completed (4 docs). Database state committed." },
      { step: 0, delay: 3800, log: "[00:00.185] << Cycle completed in 185ms. Reactive WebSocket broadcast dispatched to client UI." },
    ];

    timeline.forEach(({ step, delay, log }) => {
      setTimeout(() => {
        setSimulationStep(step);
        if (step > 0) setActiveStage(step);
        setLogs((prev) => [...prev, log]);
        if (step === 0) {
          setIsSimulating(false);
        }
      }, delay);
    });
  };

  const selectedStageData = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  return (
    <section id="architecture" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-[#0B0E17]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Background glow behind visualizer */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-indigo/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-emerald mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Architecture Pipeline</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Where Web Frontends Converge With Autonomous Agents
            </h2>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-lg ${
              isSimulating
                ? 'bg-surface-100 text-slate-400 border border-white/10 cursor-not-allowed'
                : 'bg-brand-cyan hover:bg-cyan-300 text-slate-950 shadow-brand-cyan/20 hover:scale-105 active:scale-95'
            }`}
          >
            {isSimulating ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin text-brand-cyan" />
                <span>Simulating Request Loop...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Trigger Pipeline Simulation</span>
              </>
            )}
          </button>
        </div>

        {/* 4 Connected Node Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 relative">
          {STAGES.map((stage) => {
            const isSelected = activeStage === stage.id;
            const isCurrentSim = simulationStep === stage.id;
            const StageIcon = stage.icon;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`text-left p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-surface-50/90 border-brand-cyan shadow-xl shadow-brand-cyan/10'
                    : 'bg-surface-200/50 border-white/5 hover:border-white/20'
                } ${isCurrentSim ? 'ring-2 ring-brand-emerald animate-pulse' : ''}`}
              >
                {/* Active Indicator Pulse */}
                {isCurrentSim && (
                  <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"></span>
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      Node 0{stage.id}
                    </span>
                    <StageIcon
                      className={`w-5 h-5 ${
                        stage.id === 1
                          ? 'text-brand-cyan'
                          : stage.id === 2
                          ? 'text-brand-indigo'
                          : stage.id === 3
                          ? 'text-brand-emerald'
                          : 'text-purple-400'
                      }`}
                    />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">{stage.title}</h3>
                  <span className="text-[11px] font-mono text-slate-400 block mb-3">
                    {stage.category}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{isSelected ? 'Inspecting Specs' : 'Click to View'}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Panel & Real-Time Console Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Selected Node Specifications */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-surface-200/70 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan inline-block" />
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan">
                  Node 0{selectedStageData.id} Specification
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {selectedStageData.title}
              </h4>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {selectedStageData.description}
              </p>

              <div className="space-y-2.5">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Core Engineering Capabilities:
                </span>
                {selectedStageData.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Security: Zero-Trust Encrypted</span>
              <span className="text-brand-emerald">Status: Healthy</span>
            </div>
          </div>

          {/* Right: Live Telemetry Terminal */}
          <div className="lg:col-span-6 rounded-2xl bg-[#07090E] border border-white/10 p-4 font-mono flex flex-col justify-between shadow-inner">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs text-slate-300 font-semibold">Live Trace Stream</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-brand-emerald/80" />
                </div>
              </div>

              <div className="space-y-2 text-xs max-h-56 overflow-y-auto pr-1">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      idx === logs.length - 1 ? 'text-brand-cyan font-bold' : 'text-slate-400'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span>Target Pipeline SLA: &lt; 200ms</span>
              <span className="text-brand-cyan">Streaming Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
