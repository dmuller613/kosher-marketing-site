import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function ProofSection() {
  return (
    <section id="proof" className="bg-[var(--color-navy)] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionReveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
              {siteConfig.proof.label}
            </p>
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
          {siteConfig.proof.reels.map((reel) => (
            <SectionReveal key={reel.href} className="h-full">
              <a
                href={reel.href}
                target="_blank"
                rel="noreferrer"
                className="group block h-full overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="flex min-h-[220px] items-end justify-between bg-gradient-to-br from-[#2d4e72] via-[#1f3550] to-[#b65c3d] p-5">
                  <span className="inline-flex rounded-full bg-black/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    Reel
                  </span>
                  <span className="text-sm font-semibold text-white/80">{reel.views}</span>
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-lg font-semibold text-white">{reel.title}</p>
                  <p className="text-sm leading-6 text-white/75">{reel.subtitle}</p>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
