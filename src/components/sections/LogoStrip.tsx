import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function LogoStrip() {
  return (
    <SectionReveal className="border-y border-[var(--color-sand)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-stone)]">
          Brands I&apos;ve worked with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold tracking-[0.06em] text-[var(--color-stone)] sm:gap-6">
          {siteConfig.brands.map((brand) => (
            <div
              key={brand}
              className="rounded-full border border-[var(--color-sand)] bg-white px-4 py-2"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
