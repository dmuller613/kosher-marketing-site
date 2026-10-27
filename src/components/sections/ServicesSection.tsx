import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <SectionReveal className="mb-10 max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta-deep)]">
          Services
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
          Help that makes people more likely to choose you.
        </h2>
      </SectionReveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {siteConfig.services.map((service, index) => (
          <SectionReveal key={service.title} className="h-full" delay={index * 0.07}>
            <div className="group flex h-full flex-col rounded-[1.75rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-6 shadow-[0_12px_30px_rgba(22,36,58,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-terracotta)]/30 hover:shadow-[0_20px_50px_rgba(22,36,58,0.09)]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-terracotta)]/10 text-sm font-bold text-[var(--color-terracotta-deep)] transition group-hover:bg-[var(--color-terracotta)]/20">
                0{index + 1}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-stone)]">
                {service.description}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
