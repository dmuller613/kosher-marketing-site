import { SectionReveal } from "@/components/sections/SectionReveal";

const stats = [
  { value: "10M+", label: "website sessions", href: "#work" },
  { value: "96M", label: "video views", href: "#proof" },
  { value: "8.3K", label: "kosher followers", href: "#proof" },
  { value: "5+", label: "brands served", href: "#work" },
];

export function StatsStrip() {
  return (
    <div className="border-t border-[var(--color-sand)] bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionReveal>
          <div className="grid grid-cols-2 divide-x divide-[var(--color-sand)] md:grid-cols-4">
            {stats.map((stat) => (
              <a
                key={stat.value}
                href={stat.href}
                className="group flex flex-col items-center gap-0.5 px-6 py-7 text-center transition hover:bg-[var(--color-terracotta)]/3"
              >
                <span className="font-display text-3xl font-black tracking-[-0.06em] text-[var(--color-ink)] transition group-hover:text-[var(--color-terracotta)]">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-[var(--color-stone)]">{stat.label}</span>
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
