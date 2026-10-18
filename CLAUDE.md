# David's Personal Site — Project Starter

> Status: Phase 1 and Phase 2 are complete and approved. This project is now in Phase 3, Sprint 1.

## Instructions

You are building a personal-brand marketing site for David Muller.

The site has one job: convert kosher food business owners into retainer clients.

### Phase 3 — Build, sprint by sprint

**Stack:** Next.js (latest, App Router) + React + Tailwind CSS v4 (CSS-first `@theme` config) + Framer Motion, deployed on Vercel.

**Sprint 1:** Scaffold, design tokens in `globals.css`, fonts, layout, sticky header with "Let's talk" button, Hero + Final CTA/Contact with the working inquiry form.

**Craft rules:**
- Respect `prefers-reduced-motion`.
- Use real content only; no lorem ipsum.
- Mobile is not an afterthought.
- Performance: fonts via `next/font/google`, images via `next/image`, no layout shift.

## David's Answers

1. Name & domain: David Muller; domain: kosher-marketing.com.
2. Story: I help kosher brands reach their customers through SEO, paid ads, content, social, and email marketing.
3. Audience: kosher food brands, restaurants, and kosher experiences; primarily clients.
4. CTA: Reach out by email and tell me who they are and what they need.
5. Feel: simple, warm, fun, professional, and sleek.

## Design System

### Section list & order
1. Header
2. Hero
3. Logo strip
4. Services
5. Kosher Dad Eats proof
6. Work
7. At scale
8. About
9. FAQ
10. Testimonials (hidden behind a flag)
11. Final CTA / Contact
12. Footer

### Design tokens
- `--color-ink`: #16243A
- `--color-navy`: #24406A
- `--color-terracotta`: #C2532F
- `--color-terracotta-deep`: #A9441F
- `--color-cream`: #F6F0E6
- `--color-paper`: #FFFBF5
- `--color-stone`: #5B6474
- `--color-sand`: #E5DACA

### Type system
- Display: Bricolage Grotesque
- Body: Figtree

### Motion
- Hero settle
- Section reveal
- Card lift

### Approved copy
- Hero headline: I already reach your customers. Let’s get them to your door.
- Hero subhead: Helping brands find their customers, and customers find their brands.
- Primary CTA: Let’s talk about your brand
- Secondary CTA: Email me

### Contact form
- Fields: Name, Business name, Email, service needs, message.
- Delivery: mailto draft to dmuller91@gmail.com.
- Success: short confirmation in-site.
