export const siteConfig = {
  brand: "David Muller · Kosher Marketing",
  email: "dmuller91@gmail.com",
  instagramUrl: "https://www.instagram.com/kosherdadeats/",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Proof", href: "#proof" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "David Muller · Kosher Marketing",
    heading: "I already reach your customers. Let’s get them to your door.",
    subheading:
      "Helping kosher brands find their customers, and customers find their brands.",
    supportLine: "SEO · Paid ads · Social media · Email marketing",
  },
  metrics: [
    { label: "10+ years", value: "in digital marketing" },
    { label: "Kosher-first", value: "audience knowledge" },
    { label: "Client-ready", value: "monthly retainers" },
  ],
  services: [
    {
      title: "SEO",
      description:
        "Search strategy that helps people discover your restaurant, product, or experience at the exact moment they’re looking.",
    },
    {
      title: "Paid ads",
      description:
        "Smart Meta and Google campaigns built to reach the right kosher consumers without wasting spend.",
    },
    {
      title: "Social media",
      description:
        "Content and strategy that keeps your brand visible, relevant, and memorable in the kosher food world.",
    },
    {
      title: "Email marketing",
      description:
        "Customer journeys that turn attention into repeat visits, purchases, and lasting brand loyalty.",
    },
  ],
  proof: {
    label: "Kosher Dad Eats",
    stat: "Millions of views",
    detail: "Multiple reels over 100K views, with a growing audience of 8,300+ followers.",
    profileLabel: "Instagram profile",
  },
  brands: ["Jewlish", "Avenco", "My Parchment", "Muffin Boutique", "Aish"],
};

export type FormSelections =
  | "SEO"
  | "Paid ads"
  | "Email marketing"
  | "Social media"
  | "Consulting"
  | "Not sure yet";

export const formOptions: FormSelections[] = [
  "SEO",
  "Paid ads",
  "Email marketing",
  "Social media",
  "Consulting",
  "Not sure yet",
];
