import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kosher-marketing.com"),
  title: "David Muller | Kosher Marketing",
  description:
    "Helping kosher restaurants, brands, and experiences reach the right customers through SEO, paid ads, and a strategy built for the kosher food world.",
  openGraph: {
    title: "David Muller | Kosher Marketing",
    description:
      "Helping kosher restaurants, brands, and experiences reach the right customers through SEO, paid ads, and a strategy built for the kosher food world.",
    url: "https://kosher-marketing.com",
    siteName: "David Muller | Kosher Marketing",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)]">{children}</body>
    </html>
  );
}
