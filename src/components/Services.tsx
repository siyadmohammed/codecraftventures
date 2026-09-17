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
  CheckCircle2, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceCategory, ServiceItem } from '../types';

// Map icon names to Lucide components
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

// Interactive Spotlight Card Component
const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const IconComponent = ICON_MAP[service.iconName] || Code2;
  const isAgentic = service.category === 'agentic';

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl p-6 sm:p-8 bg-[#0D111A]/80 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group flex flex-col justify-between shadow-xl"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${
                isAgentic ? 'rgba(0, 240, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
              }, transparent 80%)`
            : '',
        }}
      />

      {/* Top Details */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${
              isAgentic
                ? 'bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan'
                : 'bg-brand-indigo/10 border-brand-indigo/30 text-brand-indigo'
            }`}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              isAgentic
                ? 'bg-brand-cyan/5 border-brand-cyan/20 text-brand-cyan'
                : 'bg-brand-indigo/5 border-brand-indigo/20 text-brand-indigo'
            }`}
          >
            {isAgentic ? 'Agentic Systems' : 'Web Engineering'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-3">
          {service.subtitle}
        </p>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Capability Checkpoints */}
        <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2
                className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                  isAgentic ? 'text-brand-emerald' : 'text-brand-cyan'
                }`}
              />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Metrics & CTA */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Benchmark</span>
          <span className="text-xs font-bold text-white font-mono">{service.metrics}</span>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white group/btn"
        >
          <span>Scope This</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 text-brand-cyan transition-transform" />
        </a>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-cyan mb-4">
          <Code2 className="w-3.5 h-3.5" />
          <span>Equally Balanced Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
          50% Web Engineering &bull; 50% Agentic Intelligence
        </h2>
        <p className="max-w-3xl text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          High-performing AI agents require rock-solid web infrastructure to thrive. 
          At Codecraft, we bridge front-end beauty, cloud microservices, and self-governing autonomous agents into unified, production-grade solutions.
        </p>

        {/* Interactive Filter Switcher */}
        <div className="mt-8 inline-flex p-1 rounded-xl bg-surface-200 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-white border border-brand-cyan/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Disciplines ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveFilter('engineering')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'engineering'
                ? 'bg-gradient-to-r from-brand-indigo/20 to-brand-cyan/20 text-brand-indigo border border-brand-indigo/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Web & Cloud Platforms (4)
          </button>
          <button
            onClick={() => setActiveFilter('agentic')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'agentic'
                ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-emerald/20 text-brand-cyan border border-brand-cyan/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Agentic Automations (4)
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
