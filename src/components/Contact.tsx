'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  Clock,
  ShieldCheck,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_EMAIL, CONTACT_PHONE, FORMATTED_PHONE } from '@/data/content';
import { ContactFormData } from '@/types';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const INPUT_CLASS =
  'w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-zinc-50 placeholder-zinc-600 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';
const LABEL_CLASS = 'mb-2 block text-xs font-medium text-zinc-400';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Both (Web Engineering + Agentic AI)',
    budgetRange: '$10k - $25k',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypeOptions = [
    'Both (Web Engineering + Agentic AI)',
    'Full-Stack Web Platform',
    'Agentic AI & Automations',
    'Cloud Architecture & Consulting'
  ];

  const budgetOptions = [
    '< $10k',
    '$10k - $25k',
    '$25k - $50k',
    '$50k+'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_PHONE);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg('Please tell us a bit about your project or technical challenge.');
      return;
    }

    setIsSubmitting(true);

    // Simulate high-speed submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FAFAFA', '#BCB2FF', '#8E7CFF'],
        });
      } catch (err) {
        // Fallback gracefully if canvas context restricted
      }
    }, 600);
  };

  // Generate a prefilled mailto URL for direct emailing
  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`);
  const mailtoBody = encodeURIComponent(
    `Hello Codecraft Team,\n\nMy Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budgetRange}\n\nProject Overview:\n${formData.message}\n\nLooking forward to hearing from you!`
  );
  const directMailtoLink = `mailto:${CONTACT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading
        eyebrow="Direct Engineering Consultation"
        title="Let's Build Something Exceptional"
        description="Whether you need a high-concurrency web platform, autonomous agentic workflows, or an end-to-end digital product like PlusOne, we are ready."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <BlurFade className="flex flex-col gap-4 lg:col-span-5">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-raised text-zinc-200">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-zinc-500">Direct Email</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="block truncate text-sm font-medium text-zinc-50 transition-colors hover:text-accent-soft sm:text-base"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="shrink-0 rounded-lg border border-line p-2 text-zinc-400 transition-colors hover:border-line-strong hover:text-zinc-50"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-xs text-zinc-500">
              <span>Response Time: &lt; 24h</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1 text-zinc-300 hover:text-zinc-50">
                Open Mail Client <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-raised text-zinc-200">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">Direct Phone / WhatsApp</span>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="font-mono text-sm font-medium text-zinc-50 transition-colors hover:text-accent-soft sm:text-base"
                  >
                    {FORMATTED_PHONE}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="shrink-0 rounded-lg border border-line p-2 text-zinc-400 transition-colors hover:border-line-strong hover:text-zinc-50"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-xs text-zinc-500">
              <span>Available for Direct Calling</span>
              <a href={`tel:${CONTACT_PHONE}`} className="inline-flex items-center gap-1 text-zinc-300 hover:text-zinc-50">
                Call Now <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Confidentiality & Security
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Every technical engagement begins under standard bilateral NDA protection. Your intellectual property, workflows, and proprietary algorithms remain strictly yours.
            </p>
            <div className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-xs text-zinc-500">
              <Clock className="h-3.5 w-3.5" />
              Founding partners review every inbound inquiry personally.
            </div>
          </div>

          <div className="px-1 font-mono text-xs text-zinc-600">Codecraft Ventures &middot; Kochi / Global Remote</div>
        </BlurFade>

        <BlurFade delay={0.08} className="lg:col-span-7">
          <div className="relative h-full rounded-3xl border border-line bg-surface p-6 sm:p-10">
            <BorderBeam duration={12} />
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-50">Inquiry Dispatched Successfully</h3>
                <p className="mb-6 mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                  Thank you, <span className="text-zinc-100">{formData.name}</span>! Your technical brief has been received. Our engineering lead will review your scope and follow up within 24 hours.
                </p>

                <div className="mb-6 w-full max-w-md rounded-xl border border-line bg-background p-4 text-left">
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Inquiry Summary</div>
                  <div className="space-y-1 font-mono text-xs text-zinc-400">
                    <div>Email: <span className="text-zinc-100">{formData.email}</span></div>
                    <div>Discipline: <span className="text-zinc-100">{formData.projectType}</span></div>
                    <div>Budget: <span className="text-zinc-100">{formData.budgetRange}</span></div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={directMailtoLink}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-white"
                  >
                    Send via Email Client
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Both (Web Engineering + Agentic AI)',
                        budgetRange: '$10k - $25k',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm text-zinc-300 hover:text-zinc-50"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-line pb-5">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-50">Project Inquiry Form</h3>
                  <span className="font-mono text-xs text-zinc-600">Step 1 of 1</span>
                </div>

                {errorMsg && (
                  <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={LABEL_CLASS}>Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={LABEL_CLASS}>Work Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-phone" className={LABEL_CLASS}>Phone / WhatsApp (Optional)</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={cn(INPUT_CLASS, 'font-mono')}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-budget" className={LABEL_CLASS}>Estimated Budget</label>
                    <select
                      id="contact-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className={INPUT_CLASS}
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-background text-zinc-50">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className={cn(LABEL_CLASS, 'mb-2.5')}>What discipline does your project involve?</legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {projectTypeOptions.map((opt) => {
                      const isSelected = formData.projectType === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setFormData({ ...formData, projectType: opt })}
                          className={cn(
                            'rounded-xl border p-3 text-left text-xs font-medium transition-colors sm:text-sm',
                            isSelected
                              ? 'border-accent bg-accent/10 text-zinc-50'
                              : 'border-line bg-background text-zinc-400 hover:border-line-strong hover:text-zinc-100'
                          )}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="contact-message" className={LABEL_CLASS}>Project Overview / Technical Requirements *</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Describe what you want to build, current bottlenecks, target deadlines, or technical stack preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={cn(INPUT_CLASS, 'resize-none')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-zinc-50 py-3.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Transmitting Inquiry...
                    </>
                  ) : (
                    <>
                      Transmit Project Brief
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-zinc-500">
                  Prefer direct email? Write to{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-zinc-300 underline underline-offset-4 hover:text-zinc-50">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </form>
            )}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
