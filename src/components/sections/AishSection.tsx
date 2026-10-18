import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function AishSection() {
  return (
    <section className="bg-[var(--color-navy)] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionReveal className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            {siteConfig.atScale.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
            {siteConfig.atScale.heading}
          </h2>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.atScale.stats.map((stat) => (
            <SectionReveal key={stat.label} className="h-full">
              <div className="h-full rounded-[1.5rem] border border-white/15 bg-white/5 p-5 shadow-[0_18px_40px_rgba(17,27,43,0.16)]">
                <div className="text-3xl font-black tracking-[-0.06em] text-white">{stat.value}</div>
                <p className="mt-3 text-sm leading-6 text-white/75">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
