import { siteConfig } from "@/lib/data";

export function LogoStrip() {
  const brands = [...siteConfig.brands, ...siteConfig.brands];

  return (
    <div className="border-y border-[var(--color-sand)] bg-[var(--color-paper)] py-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-stone)]">
        Brands I&apos;ve worked with
      </p>

      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-3 text-sm font-semibold tracking-[0.06em] text-[var(--color-stone)]">
          {brands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="whitespace-nowrap rounded-full border border-[var(--color-sand)] bg-white px-5 py-2 shadow-[0_2px_8px_rgba(22,36,58,0.04)]"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
