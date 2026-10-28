import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

const serviceIcons = [
  // SEO — magnifying glass
  <svg key="seo" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="5.5"/><line x1="12.5" y1="12.5" x2="16" y2="16"/></svg>,
  // Paid ads — target
  <svg key="ads" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="9" r="7"/><circle cx="9" cy="9" r="3.5"/><circle cx="9" cy="9" r="1" fill="currentColor" stroke="none"/></svg>,
  // Social media — heart
  <svg key="social" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 15s-6-4.35-6-8.5A4 4 0 0 1 9 4.57 4 4 0 0 1 15 6.5C15 10.65 9 15 9 15z"/></svg>,
  // Email marketing — envelope
  <svg key="email" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="14" height="10" rx="2"/><polyline points="2,4 9,10 16,4"/></svg>,
  // Content creation — pen/article
  <svg key="content" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6l-4-4z"/><polyline points="11,2 11,6 15,6"/><line x1="5" y1="9" x2="13" y2="9"/><line x1="5" y1="12" x2="10" y2="12"/></svg>,
];

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

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {siteConfig.services.map((service, index) => (
          <SectionReveal key={service.title} className="h-full" delay={index * 0.07}>
            <div className="group relative flex h-full flex-col rounded-[1.75rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-6 shadow-[0_12px_30px_rgba(22,36,58,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-terracotta)]/30 hover:shadow-[0_20px_50px_rgba(22,36,58,0.09)] overflow-hidden">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-terracotta)] to-[var(--color-terracotta)]/0 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta-deep)] transition group-hover:bg-[var(--color-terracotta)]/20">
                  {serviceIcons[index]}
                </div>
                <span className="text-sm font-bold text-[var(--color-terracotta-deep)]/60">0{index + 1}</span>
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
