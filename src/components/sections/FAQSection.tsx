import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function FAQSection() {
  return (
    <section className="bg-[var(--color-paper)] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <SectionReveal className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
            Questions people ask before they hire.
          </h2>
        </SectionReveal>

        <div className="space-y-4">
          {siteConfig.faq.map((item) => (
            <SectionReveal key={item.question} className="h-full">
              <details className="group rounded-[1.5rem] border border-[var(--color-sand)] bg-white p-5 text-left shadow-[0_10px_25px_rgba(22,36,58,0.04)]" open={item.question === siteConfig.faq[0].question}>
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-ink)]">
                  {item.question}
                </summary>
                <p className="mt-4 text-base leading-7 text-[var(--color-stone)]">{item.answer}</p>
              </details>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
