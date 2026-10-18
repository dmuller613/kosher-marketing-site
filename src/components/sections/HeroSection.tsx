import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <SectionReveal className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
            {siteConfig.hero.eyebrow}
          </p>

          <h1 className="max-w-xl font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
            {siteConfig.hero.heading}
          </h1>

          <p className="max-w-lg text-lg leading-8 text-[var(--color-stone)]">
            {siteConfig.hero.subheading}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--color-terracotta-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2"
            >
              Let&apos;s talk about your brand
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-sand)] bg-white px-6 py-3 text-base font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2"
            >
              Email me
            </a>
          </div>

          <p className="text-sm font-medium text-[var(--color-stone)]">
            {siteConfig.hero.supportLine}
          </p>
        </SectionReveal>

        <SectionReveal className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-4 shadow-[0_28px_80px_rgba(22,36,58,0.09)]">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[var(--color-navy)] via-[#2b4a73] to-[var(--color-terracotta)] p-6 text-white">
              <div className="mb-10 flex items-center justify-between">
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  Kosher Dad Eats
                </span>
                <span className="text-sm font-medium text-white/80">8,300+ followers</span>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-black tracking-[-0.06em]">Millions of views</div>
                <p className="max-w-xs text-sm leading-6 text-white/80">
                  Reels that make kosher food feel discoverable, timely, and worth sharing.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {siteConfig.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="text-xl font-bold tracking-[-0.04em]">{metric.label}</div>
                    <p className="mt-1 text-xs text-white/75">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
