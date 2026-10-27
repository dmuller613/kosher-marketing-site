type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const siteConfig: {
  brand: string;
  email: string;
  instagramUrl: string;
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    supportLine: string;
  };
  metrics: { label: string; value: string }[];
  services: { title: string; description: string }[];
  proof: {
    label: string;
    heading: string;
    profileLabel: string;
    reels: { href: string; views: string; title: string; subtitle: string }[];
  };
  work: { title: string; tag: string; role: string; outcome: string }[];
  atScale: {
    eyebrow: string;
    heading: string;
    stats: { value: string; label: string }[];
  };
  about: { heading: string; paragraphs: string[] };
  faq: { question: string; answer: string }[];
  testimonials: { enabled: boolean; items: Testimonial[] };
  brands: string[];
} = {
  brand: "David Muller · Kosher Marketing",
  email: "dmuller91@gmail.com",
  instagramUrl: "https://www.instagram.com/kosherdadeats/",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
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
    heading: "Your customers already watch.",
    profileLabel: "Instagram profile",
    reels: [
      {
        href: "https://www.instagram.com/p/DdRIAUUAdE4/",
        views: "180K+ views",
        title: "Fast food + brand visibility",
        subtitle: "Short-form content designed to feel native, relevant, and worth sharing.",
      },
      {
        href: "https://www.instagram.com/p/DcXOFstgWY2/",
        views: "140K+ views",
        title: "A niche audience with momentum",
        subtitle: "Audience-first storytelling that turns scrolls into awareness and action.",
      },
      {
        href: "https://www.instagram.com/p/Dcvta1xAHwI/",
        views: "100K+ views",
        title: "Content that feels like culture",
        subtitle: "A proof point for discovery, engagement, and trust in the kosher food space.",
      },
    ],
  },
  work: [
    {
      title: "Jewlish",
      tag: "SEO",
      role: "SEO strategy and on-site optimization across the website, with reporting and data analysis behind the brand.",
      outcome: "Improved search discoverability and helped the brand market itself as a stronger kosher food presence online.",
    },
    {
      title: "Avenco / My Parchment",
      tag: "Social",
      role: "Social media strategy and content support for a kosher consumer brand growing on social and preparing for retail launch.",
      outcome: "Helped elevate brand visibility and social momentum in a crowded category while supporting a broader Walmart.ca launch effort.",
    },
    {
      title: "Muffin Boutique",
      tag: "Content",
      role: "Content partnership focused on creative promotion for a restaurant brand with an active content series.",
      outcome: "Built creative visibility that keeps the brand in front of the right customers in a scalable, ongoing way.",
    },
  ],
  atScale: {
    eyebrow: "Part of the team behind Aish's digital growth",
    heading: "Built for reach, performance, and long-term growth.",
    stats: [
      { value: "10M", label: "website sessions" },
      { value: "40%", label: "from organic search" },
      { value: "96M", label: "video views" },
      { value: "8.4M", label: "social engagements" },
    ],
  },
  about: {
    heading: "Marketing for the kosher food world, from someone who lives in it.",
    paragraphs: [
      "David works at the intersection of digital marketing and the kosher customer journey — helping restaurants, brands, and experiences reach people who are ready to buy, visit, and share.",
      "The advantage is simple: he speaks the language of the space, understands the audience, and builds strategy around how kosher customers actually discover and choose.",
    ],
  },
  faq: [
    {
      question: "Do you only work with kosher businesses?",
      answer:
        "Yes — the site is built for businesses in the kosher food ecosystem, whether that’s a restaurant, a brand, or a religious experience that needs more reach and more qualified attention.",
    },
    {
      question: "Do I need to already be on Instagram?",
      answer:
        "Not necessarily. Social media can help, but the best approach depends on where your audience already is and what you’re trying to grow next.",
    },
    {
      question: "What does a monthly retainer include?",
      answer:
        "It usually depends on the business, but the work can include channel strategy, campaign management, content direction, reporting, and ongoing optimization for growth.",
    },
    {
      question: "Do you work with US businesses from Israel?",
      answer:
        "Yes. The work is built for a modern, cross-border kosher audience and works well whether the brand is operating locally or reaching consumers across markets.",
    },
    {
      question: "How do we get started?",
      answer:
        "Send a quick note with who you are, what you’re selling, and what you want help with. That’s enough to start a focused conversation.",
    },
  ],
  testimonials: {
    enabled: false,
    items: [],
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
