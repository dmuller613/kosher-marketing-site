import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
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
  keywords: [
    "kosher marketing",
    "kosher food marketing",
    "restaurant marketing",
    "SEO for kosher brands",
    "paid ads for kosher businesses",
  ],
  openGraph: {
    title: "David Muller | Kosher Marketing",
    description:
      "Helping kosher restaurants, brands, and experiences reach the right customers through SEO, paid ads, and a strategy built for the kosher food world.",
    url: "https://kosher-marketing.com",
    siteName: "David Muller | Kosher Marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Muller | Kosher Marketing",
    description:
      "Helping kosher restaurants, brands, and experiences reach the right customers through SEO, paid ads, and a strategy built for the kosher food world.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f0e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)]">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
