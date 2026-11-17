import React from 'react';
import { ExternalLink, ArrowUpRight, MessageSquare, Compass, Calendar, Zap } from 'lucide-react';
import { CASE_STUDIES } from '@/data/content';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { NumberTicker } from '@/components/ui/number-ticker';
import { SectionHeading } from '@/components/ui/section-heading';
import { ShineButton } from '@/components/ui/shine-button';

const PLUSONE_FEATURES = [
  { icon: Compass, title: 'Discover', note: 'Nightlife Events' },
  { icon: Zap, title: 'Intents', note: 'Instant Matching' },
  { icon: MessageSquare, title: 'Messages', note: 'Real-Time Chat' },
  { icon: Calendar, title: 'Plans', note: 'Verified Members' },
];

const MOCK_EVENTS = [
  { badge: '+1', title: 'Rooftop Lounge & Jazz Night', meta: 'Looking for 1 companion • Tonight 9 PM', status: 'Active' },
  { badge: 'LIVE', title: 'Techno & Warehouse Sessions', meta: 'Match radius: 5km • 4 intents pending', status: 'Matching' },
];

export const Portfolio: React.FC = () => {
  const flagship = CASE_STUDIES.find((cs) => cs.isFlagship);

  return (
    <section id="works" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading
        eyebrow="Proven Production Deployments"
        title="Selected Works & Digital Products"
        description="From our own proprietary digital ventures to enterprise client platforms, explore how Codecraft blends craftsmanship with autonomous systems."
      />

      {flagship && (
        <BlurFade>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface">
            <BorderBeam duration={10} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
            />

            <div className="relative grid items-center gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:p-14">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 font-medium text-accent-soft">Codecraft Product</span>
                  <span className="rounded-full border border-line px-2.5 py-1 text-zinc-400">Social Discovery & Event Matching</span>
                </div>

                <h3 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">PlusOne</h3>
                <p className="mt-2 text-lg text-zinc-300">&ldquo;Find your plus one for the night&rdquo;</p>

                <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Designed, architected, and engineered from the ground up by Codecraft. <span className="text-zinc-200">PlusOne</span> empowers
                  members to discover local nightlife, spontaneous social events, and connect with verified companions in real time.
                  Engineered with high-speed intent routing, instant messaging streams, and seamless mobile-first PWA responsiveness.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
                  {PLUSONE_FEATURES.map(({ icon: Icon, title, note }) => (
                    <div key={title} className="bg-surface p-4">
                      <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                      <div className="mt-3 text-sm font-medium text-zinc-100">{title}</div>
                      <div className="text-xs text-zinc-500">{note}</div>
                    </div>
                  ))}
                </div>

                <dl className="mt-8 grid grid-cols-3 gap-4">
                  {flagship.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse">
                      <dt className="mt-1 text-xs text-zinc-500">{m.label}</dt>
                      <dd className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                        <NumberTicker value={m.value} />
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <ShineButton href={flagship.url} target="_blank" rel="noopener noreferrer">
                    Visit PlusOne Live
                    <ExternalLink className="h-4 w-4" />
                  </ShineButton>
                  <ShineButton href="#contact" variant="ghost">
                    Build A Product Like This
                    <ArrowUpRight className="h-4 w-4" />
                  </ShineButton>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-line-strong bg-background p-4 shadow-2xl shadow-black/50">
                  <div className="mb-4 flex items-center justify-between border-b border-line pb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-medium text-zinc-100">+1 plusone</span>
                      <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300">
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    </div>
                    <a
                      href={flagship.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 font-mono text-[11px] text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      plusone.today
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="space-y-2">
                    {MOCK_EVENTS.map((event) => (
                      <div key={event.title} className="flex items-center justify-between rounded-xl border border-line bg-surface p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-50 text-[11px] font-semibold text-zinc-950">
                            {event.badge}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-zinc-100">{event.title}</div>
                            <div className="text-[10px] text-zinc-500">{event.meta}</div>
                          </div>
                        </div>
                        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                          {event.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-line p-3">
                    <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                      <span>Engineered by Codecraft</span>
                      <span className="text-zinc-300">99.98% SLA</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {flagship.techStack.map((tech) => (
                        <span key={tech} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      )}
    </section>
  );
};
