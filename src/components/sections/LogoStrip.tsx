import { siteConfig } from "@/lib/data";

const extraBrands = ["Aish.com", "Jewlish", "My Parchment", "Avenco", "Muffin Boutique"];
const allBrands = [...siteConfig.brands, ...extraBrands, ...siteConfig.brands, ...extraBrands];

export function LogoStrip() {
  return (
    <div className="border-y border-[var(--color-sand)] bg-[var(--color-paper)] py-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-stone)]">
        Brands I&apos;ve worked with
      </p>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-3 text-sm font-semibold tracking-[0.06em] text-[var(--color-stone)]">
          {allBrands.map((brand, i) => (
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
