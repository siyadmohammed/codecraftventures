import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { CONTACT_PHONE, FORMATTED_PHONE } from '../data/content';
import { cn } from './ui/utils';

// Relative so it resolves under any GitHub Pages base path (vite base is "./").
const LOGO_SRC = './logo.svg';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300',
          scrolled || mobileMenuOpen
            ? 'border-line bg-background/70 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        )}
      >
        <a href="#" className="flex items-center gap-2.5 pl-1">
          <img src={LOGO_SRC} alt="" className="h-8 w-8" />
          <span className="text-[15px] font-semibold tracking-tight text-zinc-50">Codecraft</span>
        </a>

        <nav className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-50"
            title="Direct Engineering Line"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{FORMATTED_PHONE}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            Start Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full p-2 text-zinc-300 hover:text-zinc-50 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-line bg-background/95 p-3 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-zinc-50"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center justify-center gap-2 rounded-full border border-line py-2.5 font-mono text-xs text-zinc-300"
            >
              <Phone className="h-3.5 w-3.5" />
              {FORMATTED_PHONE}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-zinc-50 py-2.5 text-sm font-medium text-zinc-950"
            >
              Schedule Architecture Review
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
