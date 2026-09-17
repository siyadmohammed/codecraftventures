import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu, Phone } from 'lucide-react';
import { CONTACT_PHONE, FORMATTED_PHONE } from '../data/content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Selected Works', href: '#works' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100 border border-white/15 overflow-hidden group-hover:border-brand-cyan/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-brand-indigo/20 to-brand-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Codecraft
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono -mt-1">
              Intelligent Software
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-200/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Phone button */}
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-emerald transition-colors px-3 py-2 rounded-lg bg-surface-100/50 border border-white/5 hover:border-brand-emerald/30 font-mono"
            title="Direct Engineering Line"
          >
            <Phone className="w-3.5 h-3.5 text-brand-emerald" />
            <span>{FORMATTED_PHONE}</span>
          </a>

          {/* Consultation CTA */}
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 bg-surface-100 hover:bg-surface-50 border border-brand-cyan/40 hover:border-brand-cyan rounded-lg shadow-sm hover:shadow-brand-cyan/20 hover:shadow-lg group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-brand-indigo/10 to-brand-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0C0F17]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-brand-cyan py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-slate-300 hover:text-brand-emerald"
            >
              <Phone className="w-3.5 h-3.5 text-brand-emerald" />
              {FORMATTED_PHONE}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-indigo text-slate-950 font-bold text-xs shadow-lg shadow-brand-cyan/20"
            >
              <span>Schedule Architecture Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
