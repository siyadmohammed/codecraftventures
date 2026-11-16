import React from 'react';
import { Cpu, Mail, Phone, ExternalLink, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME, TAGLINE, CONTACT_EMAIL, CONTACT_PHONE, FORMATTED_PHONE } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#06080D] pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-surface-100 border border-white/15 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-xs font-mono text-brand-cyan mb-3">
              {TAGLINE}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              Engineering bespoke full-stack web platforms and autonomous agentic workflows. 
              Crafting high-leverage software architectures for modern digital pioneers.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>All Systems Operational &bull; 99.99% Uptime</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-brand-cyan transition-colors">
                  Dual-Engine Services
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-brand-cyan transition-colors">
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-brand-cyan transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-cyan transition-colors">
                  Engineering Lifecycle
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-cyan transition-colors">
                  About & Standards
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Works & Products */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Featured Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="http://www.plusone.today"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5"
                >
                  <span>PlusOne (plusone.today)</span>
                  <ExternalLink className="w-3 h-3 text-brand-cyan" />
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-brand-cyan transition-colors">
                  AetherFlow Agent Hub
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-brand-cyan transition-colors">
                  Synthetix Trading Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                  <span className="truncate">{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="hover:text-brand-emerald transition-colors flex items-center gap-2 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>{FORMATTED_PHONE}</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="text-[11px] font-mono text-slate-400">
                  Kochi, India &bull; Serving Global Clients
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. The Art of Intelligent Software.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Enterprise Grade Security</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface-100 hover:bg-surface-200 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
