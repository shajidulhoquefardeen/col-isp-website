# Gemini.md — Project Memory: Chittagong Online Limited (COL)

> This file serves as continuous project memory. Update it as tasks are completed.

---

## 1. Project Context

| Field | Value |
|-------|-------|
| **Project Name** | Chittagong Online Limited (COL) — Corporate Website |
| **Creative North Star** | "The Trusted Hub" — reliability, technological sophistication, professional connectivity |
| **Industry** | Internet Service Provider (ISP) / Telecommunications |
| **Target Audience** | Corporate enterprises & residential customers in Chittagong, Bangladesh |
| **Language** | English only (v1) |
| **Hosting** | Vercel |
| **Repository** | `c:\Dev\COL` |

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.4 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| UI Components | shadcn/ui (Base UI) | Latest |
| CMS | Sanity.io (next-sanity) | v3 |
| Theming | next-themes | 0.4.6 |
| Forms | react-hook-form + zod | Latest |
| Icons | lucide-react | 1.11.0 |
| Carousel | embla-carousel-react + autoplay | 8.6.0 |
| Deployment | Vercel | — |

---

## 3. Design System: "The Trusted Hub"

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#051d40` | Navbar, footer, ticker bg, primary buttons, headers |
| `primary-foreground` | `#FFFFFF` | Text on primary backgrounds |
| `accent` | `#D71920` | CTAs, logo checkmark, critical alerts |
| `accent-foreground` | `#FFFFFF` | Text on accent backgrounds |
| `background` (light) | `#FFFFFF` | Page background |
| `background` (dark) | `#0a0f1a` | Page background (dark mode) |
| `foreground` (light) | `#1C1D20` | Primary text color |
| `foreground` (dark) | `#E8E8E8` | Primary text color (dark mode) |
| `muted` (light) | `#F8F9FA` | Section backgrounds, subtle fills |
| `muted` (dark) | `#131a2e` | Section backgrounds (dark mode) |
| `muted-foreground` | `#6C757D` | Secondary/meta text |
| `card` (light) | `#FFFFFF` | Card backgrounds |
| `card` (dark) | `#0f1729` | Card backgrounds (dark mode) |
| `border` (light) | `#E2E8F0` | Borders and dividers |
| `border` (dark) | `#1e293b` | Borders and dividers (dark mode) |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | Montserrat | Bold (700) |
| Body | Inter | Regular (400) |
| UI / Buttons | Inter | Semi-Bold (600) |

### Key Design Rules

- Navbar and footer always use `#051d40` background in both light and dark mode.
- The infinite scroll ticker also always uses `#051d40` background.
- Icons use thin-line style inside circular borders (matching ticker.png reference).
- Cards have subtle drop shadows with hover elevation.
- All interactive elements have smooth transitions (200–300ms).

---

## 4. Data Architecture (Sanity CMS)

### Document Schemas (Implemented)

| Schema | Key Fields | Notes |
|--------|-----------|-------|
| `internetPackage` | name, category (home/enterprise), speed, price, features[], isPopular, order | Radio layout for category |
| `newsArticle` | title, slug, publishedAt, mainImage, excerpt, body (Portable Text) | Supports inline images |
| `wifiZone` | zoneName, address, status (active/maintenance) | Radio layout for status |
| `careerJob` | title, department, location, employmentType, applyLink, applyEmail, description (Portable Text) | Supports full-time/contract/internship |
| `testimonial` | customerName, designation, image, reviewText, displayPage[] (landing/home/enterprise) | Multi-page targeting |
| `landingPage` | title, heroImages[] (array of images) | Global homepage settings |

---

## 5. Static Assets

| File | Location | Purpose |
|------|----------|---------|
| `logo.png` | `/public/images/logo.png` | Company logo (navbar, footer) |
| `herobg.png` | `/public/images/hero/herobg.png` | Hero slide 1 — English brand intro |
| `herobg2.jpg` | `/public/images/hero/herobg2.jpg` | Hero slide 2 — Bangla, two decades |
| `herobg3.jpg` | `/public/images/hero/herobg3.jpg` | Hero slide 3 — Bangla, 300 Mbps offer |
| `ticker.png` | `/public/images/ticker.png` | Reference for ticker design (not rendered) |
| `home.png` | `/public/images/packages/home.png` | AI-generated — Home Broadband package card |
| `enterprise.png` | `/public/images/packages/enterprise.png` | AI-generated — Enterprise Solutions package card |
| `expansion.png` | `/public/images/news/expansion.png` | AI-generated — Network expansion news card |
| `wifi-zones.png` | `/public/images/news/wifi-zones.png` | AI-generated — Wi-Fi zones news card |
| `awards.png` | `/public/images/news/awards.png` | AI-generated — Awards news card |

---

## 6. Wi-Fi Zones Strategy

**Approach**: Static map images with visual pin drops.
- High-quality pre-rendered map images showing coverage areas.
- Pin-drop markers overlaid on the images for each POP location.
- No interactive map API (Google Maps / Leaflet) in v1 — keeps performance high and avoids API costs.
- Responsive grid layout for multiple zone images.

---

## 7. V1 Scope Decisions

| Feature | Decision |
|---------|----------|
| Package detail pages | Not needed — home-page summary only |
| News detail pages | Not needed — card preview only |
| Complaint notifications | Log to Sanity only — no email/webhook |
| Wi-Fi Zones | Static map images with pin drops |
| Language | English only — no i18n |

---

## 8. Current Status

| Phase | Status |
|-------|--------|
| Phase 1: Setup & Initialization | ✅ Complete |
| Phase 2: Sanity CMS Schema Design | ✅ Complete |
| Phase 3: UI & Component Development | ✅ Complete (using dummy data) |
| Phase 4: Integration & Data Flow | ⬜ Not Started |

---

## 9. Completed Tasks

- [x] Initialize Next.js 16 project with TypeScript and Tailwind CSS 4
- [x] Configure Tailwind design tokens with Trusted Hub palette (globals.css)
- [x] Set up shadcn/ui (Base UI) and install core components
- [x] Set up next-themes with light/dark mode (ThemeProvider + ThemeToggle)
- [x] Organize static assets into public/images/
- [x] Build Navbar component (sticky, #051d40 bg, 7 links, mobile Sheet drawer, theme toggle)
- [x] Build HeroCarousel component (3 slides, embla-carousel autoplay, dot nav)
- [x] Build InfiniteScrollTicker component (5 items, CSS animation, edge fades, hover pause)
- [x] Build PackagesOverview component (Home & Enterprise cards, dummy data)
- [x] Build FeaturedNews component (3 news cards with AI-generated images, dummy data)
- [x] Build Footer component (4-column grid, contact info, social icons)
- [x] Scaffold all route pages: /for-family, /for-enterprise, /about, /career, /contact, /support, /wifi-zones
- [x] Build About Page (Hero, Who We Are, Impact Stats, Mission & Vision, Core Values, Why COL)
- [x] Build Career Page (Hero, Perks & Benefits, Open Positions Board, Callout)
- [x] Verify dark/light theme toggling across all components
- [x] Verify all navbar links resolve without 404 errors
- [x] Build For Enterprise Page (Hero, Marquee, Packages, CTA, FAQ, Testimonials)
- [x] Build For Family Page (Hero, Packages, CTA, FAQ, Testimonials)
- [x] Build Support Page (Combined Contact & Complaint Form with shadcn Tabs)
- [x] Build Wi-Fi Zones Page (Responsive grid with static map placeholders)
- [x] Install next-sanity, sanity, @sanity/image-url, @sanity/icons, @sanity/vision
- [x] Create sanity.config.ts and sanity.cli.ts at project root
- [x] Create embedded Studio route at /studio (app/studio/[[...tool]]/page.tsx + layout.tsx)
- [x] Create src/sanity/env.ts, lib/client.ts, lib/image.ts
- [x] Create 5 Sanity document schemas: internetPackage, newsArticle, wifiZone, careerJob, testimonial
- [x] Export all schemas via src/sanity/schemaTypes/index.ts
- [x] Add .env.local with real Sanity projectId and dataset
- [x] Fix Career page Hero button and live data integration (client.fetch)
- [x] Fix dark mode contrast and legibility across all sections (dark: variants)
- [x] Fix dark mode contrast for Testimonial cards in TestimonialCarousel
- [x] Create landingPage Sanity schema for Hero images
- [x] Integrate live Hero data in HeroCarousel component with local fallback

---

## 10. Pending Tasks

- [ ] Create GROQ queries for remaining content types (News, Packages, etc.)
- [/] Replace dummy data with Sanity-fetched content (Careers and Hero complete)
- [ ] Implement complaint submission API route
- [ ] Configure ISR revalidation for all content types
- [ ] Test responsive design across breakpoints
- [ ] Deploy to Vercel

---

## 11. Changelog

| Date | Change |
|------|--------|
| 2026-04-26 | Initial project memory created. Implementation plan drafted. |
| 2026-04-26 | Removed i18n — English-only for v1. Added Wi-Fi zones static map strategy. Simplified Sanity schemas to plain fields. |
| 2026-04-27 | Phase 1 complete. Phase 3 UI shell built with dummy data. All navbar routes scaffolded. Next.js 16 + Tailwind v4 + shadcn/ui (Base UI) confirmed. |
| 2026-04-27 | Restructured routing: Changed "Home" to "For Family" (/for-family) and "Enterprise" to "For Enterprise" (/for-enterprise). |
| 2026-04-27 | Phase 3 UI Development complete. Built out For Enterprise, For Family, Support, and Wi-Fi Zones pages. Combined Contact and Support into a single tabbed view. |
| 2026-04-29 | Phase 2 complete. Installed next-sanity + Sanity v3. Created 5 document schemas (internetPackage, newsArticle, wifiZone, careerJob, testimonial). Embedded Studio at /studio. Created client, env, and image helpers. |
| 2026-04-30 | Integrated live Sanity data for Careers. Remediated dark mode contrast issues across FAQ, Pricing, and Career sections. Fixed Career Hero button UI. |
| 2026-04-30 | Made Hero Carousel dynamic. Created landingPage schema and connected frontend HeroCarousel with Sanity data and local fallback. |
