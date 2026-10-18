import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <SectionReveal className="mb-10 max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta-deep)]">
          Work
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
          The kind of growth work that moves people to act.
        </h2>
      </SectionReveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {siteConfig.work.map((project) => (
          <SectionReveal key={project.title} className="h-full">
            <article className="flex h-full flex-col rounded-[1.75rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-6 shadow-[0_12px_30px_rgba(22,36,58,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-ink)]">
                  {project.title}
                </h3>
                <span className="rounded-full bg-[var(--color-terracotta)]/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-terracotta-deep)]">
                  {project.tag}
                </span>
              </div>

              <p className="text-base leading-7 text-[var(--color-stone)]">
                <span className="font-semibold text-[var(--color-ink)]">Role:</span> {project.role}
              </p>

              <p className="mt-4 text-base leading-7 text-[var(--color-stone)]">
                <span className="font-semibold text-[var(--color-ink)]">Outcome:</span> {project.outcome}
              </p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
