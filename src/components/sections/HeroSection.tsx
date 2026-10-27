import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[var(--color-terracotta)]/6 blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[var(--color-navy)]/5 blur-[80px]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <SectionReveal className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
            {siteConfig.hero.eyebrow}
          </p>

          <h1 className="max-w-xl font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
            I already{" "}
            <span className="relative whitespace-nowrap text-[var(--color-terracotta)]">
              reach your customers
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path d="M2 6 Q75 2 150 5 Q225 8 298 4" stroke="var(--color-terracotta)" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </span>
            .{" "}Let&apos;s get them to your door.
          </h1>

          <p className="max-w-lg text-lg leading-8 text-[var(--color-stone)]">
            {siteConfig.hero.subheading}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-base font-semibold text-white shadow-[0_6px_24px_rgba(194,83,47,0.32)] transition hover:bg-[var(--color-terracotta-deep)] hover:shadow-[0_8px_28px_rgba(194,83,47,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2"
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

          <div className="flex flex-wrap gap-2">
            {siteConfig.hero.supportLine.split(" · ").map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-[var(--color-sand)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-stone)]"
              >
                {item}
              </span>
            ))}
          </div>
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
                {siteConfig.metrics.map((metric, i) => (
                  <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/8 p-3 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/12">
                    <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-terracotta)]/30">
                      {i === 0 && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="6" cy="6" r="5"/><polyline points="6,3 6,6 8,7.5"/></svg>}
                      {i === 1 && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="6,1.5 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5"/></svg>}
                      {i === 2 && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="2,6.5 4.5,9 10,3"/></svg>}
                    </div>
                    <div className="text-xl font-bold tracking-[-0.04em] text-white">{metric.label}</div>
                    <p className="mt-1 text-[11px] leading-4 text-white/70">{metric.value}</p>
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
