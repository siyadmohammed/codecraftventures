import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_EMAIL, CONTACT_PHONE, FORMATTED_PHONE } from '../data/content';
import { ContactFormData } from '../types';

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
          colors: ['#00F0FF', '#6366F1', '#10B981'],
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
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-xs font-mono text-brand-cyan mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Engineering Consultation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let's Build Something Exceptional
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-light">
          Whether you need a high-concurrency web platform, autonomous agentic workflows, or an end-to-end digital product like PlusOne, we are ready.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact & Availability Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-brand-cyan/40 transition-all shadow-xl group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-200 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-brand-emerald" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                <span>Response Time: &lt; 24h</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brand-cyan hover:underline inline-flex items-center gap-1"
                >
                  Open Mail Client <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Contact Card */}
            <div className="p-6 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-brand-emerald/40 transition-all shadow-xl group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-brand-emerald transition-colors font-mono"
                    >
                      {FORMATTED_PHONE}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-surface-200 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-brand-emerald" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                <span>Available for Direct Calling</span>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="text-brand-emerald hover:underline inline-flex items-center gap-1"
                >
                  Call Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Engineering Assurance Card */}
            <div className="p-6 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-indigo">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality & Security</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every technical engagement begins under standard bilateral NDA protection. Your intellectual property, workflows, and proprietary algorithms remain strictly yours.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Founding partners review every inbound inquiry personally.</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Codecraft Ventures &bull; Kochi / Global Remote
          </div>
        </div>

        {/* Right Column: Working Interactive Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-surface-100/90 border border-white/10 p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-brand-emerald flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Your technical brief has been received. Our engineering lead will review your scope and follow up within 24 hours.
                </p>

                {/* Direct Action */}
                <div className="p-4 rounded-xl bg-surface-200/80 border border-white/5 mb-6 w-full max-w-md text-left">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Inquiry Summary
                  </div>
                  <div className="text-xs text-slate-200 space-y-1 font-mono">
                    <div>Email: <span className="text-white">{formData.email}</span></div>
                    <div>Discipline: <span className="text-brand-cyan">{formData.projectType}</span></div>
                    <div>Budget: <span className="text-brand-emerald">{formData.budgetRange}</span></div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={directMailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-slate-950 font-bold text-xs shadow-lg"
                  >
                    <span>Send via Email Client</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-200 text-slate-300 hover:text-white text-xs border border-white/10"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Main Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                  <span className="text-xs font-mono text-slate-400">Step 1 of 1</span>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm transition-colors"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#080B12] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Scope / Discipline */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2.5">
                    What discipline does your project involve?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypeOptions.map((opt) => {
                      const isSelected = formData.projectType === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: opt })}
                          className={`p-3 rounded-xl text-left text-xs font-medium border transition-all ${
                            isSelected
                              ? 'bg-brand-cyan/15 border-brand-cyan text-white shadow-sm'
                              : 'bg-[#080B12] border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Project Overview / Technical Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what you want to build, current bottlenecks, target deadlines, or technical stack preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 focus:border-brand-cyan focus:outline-none text-white text-sm placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-emerald text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-brand-cyan/20 hover:shadow-brand-cyan/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-slate-400">
                    Prefer direct email? Write to{' '}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-brand-cyan underline hover:text-white"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
