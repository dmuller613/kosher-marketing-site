import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function TestimonialsSection() {
  if (!siteConfig.testimonials.enabled || siteConfig.testimonials.items.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <SectionReveal className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
          Testimonials
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
          Kind words from people who’ve worked together.
        </h2>
      </SectionReveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteConfig.testimonials.items.map((item) => (
          <SectionReveal key={item.author} className="h-full">
            <blockquote className="flex h-full flex-col justify-between rounded-[1.75rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-6 shadow-[0_12px_30px_rgba(22,36,58,0.04)]">
              <p className="text-lg leading-8 text-[var(--color-ink)]">“{item.quote}”</p>
              <footer className="mt-6 border-t border-[var(--color-sand)] pt-4">
                <div className="font-semibold text-[var(--color-ink)]">{item.author}</div>
                <div className="text-sm text-[var(--color-stone)]">{item.role}</div>
              </footer>
            </blockquote>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
