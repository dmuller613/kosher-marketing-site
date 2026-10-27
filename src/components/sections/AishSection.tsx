import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function AishSection() {
  return (
    <section className="bg-[var(--color-navy)] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionReveal className="mb-10 max-w-2xl">
          <a
            href="https://www.aish.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:text-white/90"
          >
            {siteConfig.atScale.eyebrow} ↗
          </a>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
            {siteConfig.atScale.heading}
          </h2>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.atScale.stats.map((stat, index) => (
            <SectionReveal key={stat.label} className="h-full" delay={index * 0.07}>
              <div className="h-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 shadow-[0_18px_40px_rgba(17,27,43,0.16)] transition hover:border-white/25 hover:bg-white/8">
                <div className="h-0.5 w-full bg-gradient-to-r from-[var(--color-terracotta)] to-[var(--color-terracotta)]/0" />
                <div className="p-5">
                  <div className="text-4xl font-black tracking-[-0.06em] text-white">{stat.value}</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{stat.label}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
