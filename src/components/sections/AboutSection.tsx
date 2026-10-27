import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionReveal className="overflow-hidden rounded-[2rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-5 shadow-[0_18px_50px_rgba(22,36,58,0.05)]">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[var(--color-terracotta)]/15 via-[var(--color-paper)] to-[var(--color-navy)]/10 p-6 text-[var(--color-ink)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-navy)] font-display text-xl font-bold text-white shadow-[0_6px_20px_rgba(36,64,106,0.35)]">
                D
              </span>
              <div className="flex flex-col items-end gap-1.5">
                <span className="rounded-full border border-[var(--color-sand)] bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
                  Kosher marketer
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Taking new clients
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                David Muller
              </h3>
              <p className="text-sm leading-6 text-[var(--color-stone)]">
                Digital marketer for the kosher food world.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[var(--color-sand)] bg-white/70 p-3 backdrop-blur-sm">
                <div className="font-display text-xl font-bold tracking-[-0.04em] text-[var(--color-ink)]">10+</div>
                <p className="mt-0.5 text-[11px] leading-4 text-[var(--color-stone)]">years in digital marketing</p>
              </div>
              <div className="rounded-2xl border border-[var(--color-sand)] bg-white/70 p-3 backdrop-blur-sm">
                <div className="font-display text-xl font-bold tracking-[-0.04em] text-[var(--color-ink)]">8.3K</div>
                <p className="mt-0.5 text-[11px] leading-4 text-[var(--color-stone)]">kosher followers reached</p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-ink)]"
            >
              Get in touch →
            </a>
          </div>
        </SectionReveal>

        <SectionReveal className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta-deep)]">
            About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
            {siteConfig.about.heading}
          </h2>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-stone)]">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
