'use client';

import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { COMPANY_NAME, TAGLINE, CONTACT_EMAIL, CONTACT_PHONE, FORMATTED_PHONE } from '@/data/content';

const LOGO_SRC = '/logo.svg';

const NAV_LINKS = [
  { name: 'Dual-Engine Services', href: '#services' },
  { name: 'System Architecture', href: '#architecture' },
  { name: 'Selected Works', href: '#works' },
  { name: 'Engineering Lifecycle', href: '#process' },
  { name: 'About & Standards', href: '#about' },
];

const linkClass = 'text-sm text-zinc-500 transition-colors hover:text-zinc-100';
const headingClass = 'mb-4 text-xs font-medium text-zinc-300';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-line px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={LOGO_SRC} alt="" className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight text-zinc-50">{COMPANY_NAME}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{TAGLINE}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              Engineering bespoke full-stack web platforms and autonomous agentic workflows.
              Crafting high-leverage software architectures for modern digital pioneers.
            </p>
          </div>

          <div>
            <h4 className={headingClass}>Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Featured Products</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="http://www.plusone.today" target="_blank" rel="noreferrer" className={`${linkClass} inline-flex items-center gap-1.5`}>
                  PlusOne (plusone.today)
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Direct Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} block truncate`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE}`} className={`${linkClass} font-mono`}>{FORMATTED_PHONE}</a>
              </li>
              <li className="pt-1 text-sm text-zinc-600">Kochi, India &middot; Serving Global Clients</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-zinc-600 sm:flex-row">
          <div>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. The Art of Intelligent Software.</div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-zinc-400 transition-colors hover:border-line-strong hover:text-zinc-100"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
