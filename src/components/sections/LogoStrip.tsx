import Image from "next/image";

const logos = [
  { name: "Jewlish", src: "/logos/jewlish.svg", width: 80, height: 11, invert: false },
  { name: "Avenco", src: "/logos/avenco.avif", width: 90, height: 36, invert: false },
  { name: "Abu Avi Bagels", src: "/logos/abu-avi-bagels.jpg", width: 56, height: 56, invert: false, rounded: true },
  { name: "Muffin Boutique", src: "/logos/muffin-boutique.png", width: 64, height: 64, invert: false },
  { name: "Jerusalem Brewery", src: "/logos/jerusalem-brewery.avif", width: 80, height: 36, invert: false },
  { name: "Salon Yivani", src: "/logos/salon-yivani.avif", width: 80, height: 36, invert: false },
];

const allLogos = [...logos, ...logos];

export function LogoStrip() {
  return (
    <div className="border-y border-[var(--color-sand)] bg-[var(--color-paper)] py-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-stone)]">
        Brands I&apos;ve worked with
      </p>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-8">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center justify-center rounded-2xl border border-[var(--color-sand)] bg-white px-5 py-3 shadow-[0_2px_8px_rgba(22,36,58,0.04)]"
              style={{ minWidth: "120px", height: "72px" }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className={`max-h-10 w-auto object-contain${logo.rounded ? " rounded-full" : ""}`}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
