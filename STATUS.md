# STATUS.md — Mastertech.work Build Progress

## Current Phase
Week 1: Track A Webflow Quick Wins + Track B Foundation

## Last Updated
2026-04-13

---

## Completed
- [x] Next.js project scaffolded with TypeScript, Tailwind CSS, App Router
- [x] Git initialized and pushed to GitHub (richardsantoza-tech/mastertech-nextjs)
- [x] CLAUDE.md created with project guidelines (updated with dual-track, session management)
- [x] Data files created (services.json, locations.json, keywords.json)
- [x] STATUS.md and LEARNINGS.md initialized

### Track A: Webflow Deliverables (Days 3-4)
- [x] Organization + EmploymentAgency schema JSON-LD (for Webflow head code)
- [x] Meta titles & descriptions for all 10 service pages (all under 60/155 char limits)
- [x] llms.txt file content (for mastertech.work/llms.txt)
- [x] Diesel Mechanics FAQ: HTML content + FAQPage schema JSON-LD

### Track B: Next.js Foundation
- [x] /lib/seo/schema.ts — 7 schema generators (Organization, Service, FAQ, BlogPosting, Breadcrumb, LocalBusiness, jsonLd helper)
- [x] /lib/seo/metadata.ts — buildMetadata() helper + rootMetadata config
- [x] /components/Header.tsx — responsive nav with services dropdown, mobile menu
- [x] /components/Footer.tsx — 4-column footer with services, company links, contact info, LinkedIn
- [x] /app/layout.tsx — global layout with Header, Footer, Organization+EmploymentAgency schema in <head>
- [x] /app/page.tsx — homepage with single H1, services grid, CTA section
- [x] globals.css cleaned up (removed dark mode)
- [x] npm run build — passes clean, verified: schema in HTML, single H1, nav links, footer phone

## In Progress
- [ ] Richard pasting Track A deliverables into Webflow

## Up Next

### Track A: Webflow (Priority)
- [ ] FAQ content + schema for remaining 9 service pages
- [ ] Service page content expansion (100 words → 1,000+ words each)
- [ ] Homepage H1 fix (currently has two H1 tags)
- [ ] Fix H3 tag abuse on service pages (body text in H3 instead of <p>)
- [ ] Alt text for all images
- [ ] Fix broken Legal/Privacy Policy links

### Track B: Next.js
- [ ] Individual service pages (/services/[slug]) with data from services.json
- [ ] Services hub page (/services)
- [ ] Service schema + FAQ schema on each service page
- [ ] Breadcrumbs component + schema
- [ ] Location pages (/locations/[state]/[city]) — Tier 1 cities first
- [ ] Blog infrastructure

---

## Phase Roadmap

### Phase 1: Foundation (Current — mostly complete)
- Project setup, data files, layout components, SEO utilities

### Phase 2: Core Pages
- Services hub, 10 service pages, Employers page, How It Works

### Phase 3: Location Pages
- Tier 1 cities (9 metros), location hub page

### Phase 4: Blog & Content
- Blog infrastructure, first 4-6 posts targeting highest-priority keywords

### Phase 5: Advanced Features
- Vacancy Cost Estimator tool, contact forms, analytics integration

---

## Decisions Log
| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-04-13 | Dual-track approach (Webflow + Next.js) | Webflow is live/revenue; Next.js is learning + future migration |
| 2026-04-13 | Track A always priority over Track B | Revenue-generating site comes first |
| 2026-04-13 | No dark mode | B2B professional site, unnecessary complexity |
| 2026-04-13 | Schema via dangerouslySetInnerHTML in layout | Organization schema needs to be on every page via root layout |
| 2026-04-13 | Services dropdown in header (hover desktop, expand mobile) | All 10 trades visible in nav for SEO internal linking |

## Technical SEO Audit Tracker (18 issues from audit)
| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Two H1 tags on homepage | CRITICAL | Fixed in Next.js (single H1) |
| 2 | Body text in H3 tags | CRITICAL | Will fix in service pages |
| 3 | Thin service pages (<100 words) | CRITICAL | Will fix with 1,000+ word pages |
| 4 | Zero schema markup | CRITICAL | Fixed — Org schema in layout |
| 5 | No meta descriptions | CRITICAL | Fixed — buildMetadata() on all pages |
| 6 | No alt text on images | CRITICAL | Will fix as images added |
| 7 | Broken legal/privacy links | HIGH | Will create /privacy-policy, /terms |
| 8 | Duplicate content blocks | HIGH | Fixed — clean single grid |
| 9 | Service cards link to # | HIGH | Fixed — all links to real pages |
| 10 | No internal linking | HIGH | Will build with related content sections |
| 11 | URL inconsistency | HIGH | Fixed — /services/ (plural) |
| 12 | No location pages | HIGH | Pending Phase 3 |
| 13 | No employer landing page | MEDIUM | Pending Phase 2 |
| 14 | No industry pages | MEDIUM | Pending Phase 2 |
| 15 | Blog missing metadata | MEDIUM | Pending Phase 4 |
| 16 | Images not optimized | MEDIUM | Will use next/image WebP |
| 17 | No llms.txt | MEDIUM | Generated for Track A Webflow |
| 18 | No Google Business Profile | MEDIUM | External task for Richard |
