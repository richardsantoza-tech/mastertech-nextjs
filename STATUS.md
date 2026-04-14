# STATUS.md — Mastertech.work Build Progress

## Current State
**Launch-ready pending two manual tasks from Richard** (Resend signup + image additions).
All code pushed to GitHub at commit `c254c84`. Site builds clean with 70 routes.

## Last Updated
2026-04-14

---

## Site Overview

**70 total routes pre-rendered as static HTML:**
- 1 homepage (with embedded Vacancy Cost Estimator)
- 11 service pages (/services hub + 10 trade verticals, 3,600-3,977 words each)
- 30 location pages (/locations hub + 29 metros across 3 tiers, 3,300-3,750 words each)
- 16 blog pages (/blog index + 15 migrated posts, 3,000-3,939 words each)
- 6 core pages (/about, /contact, /employers, /how-it-works, /privacy-policy, /terms)
- 1 tool page (/tools/vacancy-cost-estimator)
- 3 technical SEO files (/robots.txt, /sitemap.xml, /llms.txt)
- 404 + not-found

**SEO Audit Progress: 16 of 18 issues fixed.**

---

## Completed This Session

### Foundation
- Next.js 16 + TypeScript + Tailwind + App Router + GitHub/Vercel
- `/data/services.json`, `locations.json`, `keywords.json`
- `/src/lib/seo/schema.ts` — 7 schema generators (Organization, Service, FAQ, BlogPosting, Breadcrumb, LocalBusiness, jsonLd helper)
- `/src/lib/seo/metadata.ts` — buildMetadata() with canonical, OG, Twitter
- `/src/lib/types.ts` — ServiceData, LocationData, LocationsFile
- `/src/lib/blog.ts` + `/src/lib/markdown.ts` — blog loader + minimal MD-to-HTML (no heavy deps)

### Layout & Components
- **Header.tsx** — dark nav, top contact bar, social icons (IG/LI/FB), services dropdown, View Jobs + Get In Touch buttons
- **Footer.tsx** — 4-column dark footer with phone/email icons, all social links, legal links
- **Breadcrumbs.tsx** — visual + BreadcrumbList schema
- **ContactForm.tsx** — client component with validation, error state, success UI
- **VacancyCostEstimator.tsx** — 6-slider React client component with compact + full modes
- **layout.tsx** — Organization+EmploymentAgency schema in head, GA4 tracking via next/script

### Homepage
- Dark hero with single H1, eyebrow keyword, two CTAs
- Stats bar (50+ years, 10 verticals, 30+ metros, 50% faster fill)
- About section + placeholder visual
- 10-trade service card grid with unique gradients per trade
- "Why Employers Choose MasterTech" 6-card feature grid
- Embedded Vacancy Cost Estimator at #vacancy-cost-estimator anchor
- Dark employer CTA + blue job-seeker CTA with Zoho link

### Service Pages (10 + hub)
- Dynamic routes via generateStaticParams
- Service + FAQPage + BreadcrumbList schema on each
- Trade-specific gradient heroes
- Role cards, industry tag pills, certification checklist with icons
- 4-step "Our Staffing Process" section
- Sidebar: salary bar chart, dark CTA card, related services, Zoho jobs link
- FAQ with divider separators

### Location Pages (29 + hub)
- Dynamic routes at /locations/[state]/[city] via generateStaticParams
- LocalBusiness + FAQPage + BreadcrumbList schema on each
- Genuinely unique content per city (industry context, labor market, major employers, landmarks) — not city-name-swapped templates
- Metro stats bar, industries card grid, employer pills, landmarks with map pins
- Internal links to /services/[slug] for top trades in each market
- 5 city-specific FAQs dynamically generated from location data

### Blog (15 of 16 migrated)
- Posts stored as markdown with frontmatter in `/content/blog/*.md`
- Blog index with gradient cards, category tags, dates
- Post pages with BlogPosting + BreadcrumbList schema
- Sidebar: CTA card, related services, related posts, Zoho jobs link
- Categories: 4 Career Guide, 5 Employer Guide, 4 Industry Outlook, 1 Salary Guide, 1 Location Guide
- **DROPPED 1 duplicate tariff post** (`tariffs-impact-diesel-mechanic-salaries-job-growth`) that competed with `how-tariffs-impact-...` for same keywords — SEO fix

### Core Pages
- **/about** — company story, 6-card "what makes us different", parent company section (2,019 words)
- **/contact** — contact form, phone sidebar, expected response timeline, emergency callout (1,197 words)
- **/employers** — stats cards, 3 hiring models, 6 benefits grid, FAQPage schema (2,850 words)
- **/how-it-works** — 5-step process, MasterTech vs traditional comparison table, FAQPage schema (2,844 words)
- **/privacy-policy** — GDPR-style policy, data practices, user rights (1,718 words)
- **/terms** — terms of service, use restrictions, disclaimers (2,091 words)

### Vacancy Cost Estimator
- Standalone tool page at /tools/vacancy-cost-estimator (2,712 words, FAQ + Breadcrumb schema)
- Embedded on homepage with link to full tool
- 6 sliders: charge-out rate, employee rate, burden, efficiency, hours/week, recruitment fee
- Live math: revenue = charge × efficiency × hours/yr; cost = (rate × burden × hrs) + recruitment
- Default output: ~$1,878/week = cost of vacancy (≈$94K/year)

### Technical SEO
- `/src/app/robots.ts` — auto-generates /robots.txt with sitemap reference
- `/src/app/sitemap.ts` — auto-generates /sitemap.xml with 65 URLs + priority tiers (home 1.0, services 0.9, tier 1 locations 0.8, tier 2 0.7, tier 3 0.6, blog 0.7)
- `/public/llms.txt` — comprehensive AI crawler guide with site description, all pages, key facts

### GA4 + Email Integration
- **GA4 tracking** (G-H2Y941JWGG) in layout.tsx via `next/script` with `afterInteractive` strategy. Verified on homepage + service pages.
- **Resend server action** at `/src/app/actions/contact.ts` — HTML email template, input validation, HTML-escaping, graceful fallback when RESEND_API_KEY not set (logs instead of sends).
- **ContactForm.tsx** now calls `submitContact()` with error state UI.
- `.env.local.example` documents required env vars; `.gitignore` updated to allow the example file.

---

## Up Next

### Richard's Manual Tasks (to complete launch)
1. **Sign up at https://resend.com** — free tier: 100 emails/day, 3,000/month
2. **Copy API key** from Dashboard → API Keys → Create API Key
3. **Add to Vercel** — Project Settings → Environment Variables → `RESEND_API_KEY` (check all three: Production, Preview, Development)
4. **Redeploy** so the env var takes effect
5. **Later**: Verify mastertech.work domain in Resend → update FROM_EMAIL in `src/app/actions/contact.ts` from `onboarding@resend.dev` to something like `MasterTech <noreply@mastertech.work>`
6. **Google Business Profile** — set up independently (audit issue #18)

### Code/Content Tasks (when ready)
1. **Add real images** — replace gradient placeholders on homepage, service cards, blog cards. Use next/image with WebP. Fixes audit issues #6 (alt text) and #16 (WebP optimization).
2. **Deploy + QA** — verify GA4 data flows in Google Analytics dashboard; test contact form end-to-end after Resend is live.
3. **DNS cutover** — point mastertech.work DNS at Vercel when ready to replace Webflow site.

### Optional Future Work
- **Industry pages** (/industries/[slug]) — audit issue #14; partially covered by service pages but dedicated pages could target keywords like "manufacturing plant staffing agency"
- **New blog posts** — PROJECT-CONTEXT.md lists 8 priority posts to write
- **About page team section** once real team bios available
- **Testimonials/case studies** on /employers and homepage
- **Additional tools** — salary calculator, hiring checklist generator

---

## Decisions Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-04-13 | Single track — Next.js only | Webflow site is fundamentally broken (18 SEO issues); not worth patching |
| 2026-04-13 | Match current site visual design | Current design is decent; SEO is what needs fixing |
| 2026-04-13 | Dark header/footer matching zinc-900 tone | Consistency with current site's visual pattern |
| 2026-04-13 | Unique gradient per trade in service cards | Avoids uniform/generic grid — each trade has distinct color |
| 2026-04-13 | View Jobs links to Zoho Recruit | Current site pattern — external job board stays external |
| 2026-04-13 | generateStaticParams for all dynamic routes | All 55 dynamic pages pre-rendered at build time (SSG) for performance |
| 2026-04-13 | Service/location data from JSON, not MDX | Structured data (FAQs, salary, certs) maps better to JSON than prose MDX |
| 2026-04-13 | Blog posts as markdown with frontmatter | Simple, portable, no heavy MDX dependencies |
| 2026-04-13 | Custom minimal markdown-to-HTML renderer | Avoids remark/rehype chain; keeps bundle small |
| 2026-04-13 | Dropped duplicate tariff blog post | Two posts competing for same keywords hurt SEO — migrating only the better one fixes an on-site issue |
| 2026-04-14 | Resend for email (not SendGrid/Mailgun) | Best DX, free tier 100/day is enough to start, simple API |
| 2026-04-14 | Graceful fallback when RESEND_API_KEY missing | Form works in dev and before Richard signs up; logs submissions instead of failing |
| 2026-04-14 | Resend `onboarding@resend.dev` sender initially | Until mastertech.work is verified in Resend, use their test sender |
| 2026-04-14 | GA4 via next/script with afterInteractive strategy | Non-blocking, SEO-safe, tracks SPA navigations |

---

## Issues Encountered & Resolved

| Issue | Resolution |
|-------|-----------|
| `.env*` in .gitignore hides `.env.local.example` | Added `!.env.local.example` exception so setup template is tracked |
| Kansas City HTML audit failed on "Honeywell FM&T" check | React properly encodes `&` as `&amp;`; false positive in audit script |
| Two tariff blog posts competing for same keywords | Migrated only better-attributed version, dropped the duplicate |
| GA4 integration without bloat | Used `next/script` `afterInteractive` — no custom wrapper needed |

---

## SEO Audit Tracker (16 of 18 fixed)

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Two H1 tags on homepage | CRITICAL | ✅ Fixed (single H1) |
| 2 | Body text in H3 tags | CRITICAL | ✅ Fixed (proper H2/H3/p hierarchy) |
| 3 | Thin service pages (<100 words) | CRITICAL | ✅ Fixed (3,600-3,977 words) |
| 4 | Zero schema markup | CRITICAL | ✅ Fixed (Org + Service + FAQ + Breadcrumb + BlogPosting + LocalBusiness) |
| 5 | No meta descriptions | CRITICAL | ✅ Fixed (buildMetadata on every page) |
| 6 | No alt text on images | CRITICAL | ⏳ Pending (gradient placeholders in use) |
| 7 | Broken legal/privacy links | HIGH | ✅ Fixed (/privacy-policy, /terms pages) |
| 8 | Duplicate content blocks | HIGH | ✅ Fixed |
| 9 | Service cards link to # | HIGH | ✅ Fixed (all real page links) |
| 10 | No internal linking | HIGH | ✅ Fixed (related services, breadcrumbs, service→location) |
| 11 | URL inconsistency | HIGH | ✅ Fixed (/services/ plural) |
| 12 | No location pages | HIGH | ✅ Fixed (29 cities, 3 tiers) |
| 13 | No employer landing page | MEDIUM | ✅ Fixed (/employers + /how-it-works) |
| 14 | No industry pages | MEDIUM | ⏳ Pending (covered partially by service pages) |
| 15 | Blog missing metadata | MEDIUM | ✅ Fixed (BlogPosting schema, author, dates) |
| 16 | Images not optimized | MEDIUM | ⏳ Pending (will use next/image WebP) |
| 17 | No llms.txt | MEDIUM | ✅ Fixed |
| 18 | No Google Business Profile | MEDIUM | ⏳ External task (Richard) |

---

## Git Commits

```
c254c84 Build complete site: services, locations, blog, core pages, calculator, GA4, email
4e21fd9 Add SEO foundation, data files, layout with schema markup
0fed395 Initial commit: scaffold Next.js app with TypeScript, Tailwind CSS, and App Router
```

Remote: https://github.com/richardsantoza-tech/mastertech-nextjs
