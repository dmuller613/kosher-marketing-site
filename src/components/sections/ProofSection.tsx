import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function ProofSection() {
  return (
    <section id="proof" className="bg-[var(--color-navy)] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionReveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                {siteConfig.proof.label}
              </p>
              <span className="rounded-full border border-[var(--color-terracotta)]/40 bg-[var(--color-terracotta)]/20 px-2.5 py-0.5 text-[11px] font-bold tracking-[0.06em] text-white/90">
                420K+ views
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
              {siteConfig.proof.heading}
            </h2>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {siteConfig.proof.profileLabel}
          </a>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.proof.reels.map((reel, index) => {
            const gradients = [
              "from-[#2d4e72] via-[#1f3550] to-[#9e4a2a]",
              "from-[#1a3d5c] via-[#2b5278] to-[#7a3a1e]",
              "from-[#3a5a7a] via-[#254460] to-[#b55c38]",
            ];
            return (
              <SectionReveal key={reel.href} className="h-full" delay={index * 0.08}>
                <a
                  href={reel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                >
                  <div className={`relative flex min-h-[200px] items-end justify-between bg-gradient-to-br ${gradients[index]} p-5`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/25 backdrop-blur-sm transition duration-300 group-hover:bg-white/25 group-hover:ring-white/40">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                          <polygon points="7,4 17,10 7,16" />
                        </svg>
                      </div>
                    </div>
                    <span className="inline-flex rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                      Reel
                    </span>
                    <span className="text-sm font-bold text-white/90">{reel.views}</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between space-y-3 p-5">
                    <div>
                      <p className="text-lg font-semibold text-white">{reel.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">{reel.subtitle}</p>
                    </div>
                    <span className="text-xs font-semibold tracking-[0.12em] text-white/40 uppercase transition group-hover:text-white/70">
                      View on Instagram →
                    </span>
                  </div>
                </a>
              </SectionReveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 hover:border-white/35"
          >
            Like what you see? Let&apos;s build yours
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
