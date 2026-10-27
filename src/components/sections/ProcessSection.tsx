import { SectionReveal } from "@/components/sections/SectionReveal";

const steps = [
  {
    num: "01",
    title: "Tell me your goals",
    body: "Share who you are, what you're selling, and where you want more reach. One conversation is all it takes to start.",
  },
  {
    num: "02",
    title: "I map your strategy",
    body: "I'll identify the right channels and approach for your specific audience — no one-size-fits-all playbook.",
  },
  {
    num: "03",
    title: "We grow together",
    body: "Consistent execution, clear reporting, and ongoing optimization as your kosher audience grows.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-t border-[var(--color-sand)] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <SectionReveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
              Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
              Simple to start. Built to run.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-[var(--color-stone)]">
            Three steps from first conversation to consistent kosher growth.
          </p>
        </SectionReveal>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* connector line on desktop */}
          <div className="pointer-events-none absolute left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] top-8 hidden h-px bg-gradient-to-r from-[var(--color-sand)] via-[var(--color-terracotta)]/30 to-[var(--color-sand)] md:block" aria-hidden="true" />

          {steps.map((step, index) => (
            <SectionReveal key={step.num} delay={index * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-sand)] bg-[var(--color-paper)] shadow-[0_4px_16px_rgba(22,36,58,0.06)]">
                  <span className="font-display text-lg font-black tracking-[-0.06em] text-[var(--color-terracotta)]">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="text-base leading-7 text-[var(--color-stone)]">{step.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
