# STATUS.md — Mastertech.work Build Progress

## Current Phase
Phase 9: GA4 tracking live + contact form wired to Resend. Ready for launch (pending Resend signup).

## Last Updated
2026-04-13

---

## Completed
- [x] Next.js project scaffolded with TypeScript, Tailwind CSS, App Router
- [x] Git + GitHub + Vercel connected (auto-deploys on push)
- [x] Data files: services.json (10 verticals), locations.json (29 metros), keywords.json (85 keywords)
- [x] SEO infrastructure: schema.ts (7 generators), metadata.ts (buildMetadata helper)
- [x] Technical SEO audit documented (18 issues in /docs/reference/seo-audit.md)
- [x] Frontend design skill file (/docs/skills/frontend-design.md)

### Layout & Navigation
- [x] Header.tsx — dark nav bar matching current site, top contact bar, social icons (IG/LI/FB), services dropdown, View Jobs + Get In Touch buttons
- [x] Footer.tsx — 4-column dark footer with contact info, phone/email with icons, all social links, services split, company links, legal links
- [x] Organization + EmploymentAgency schema in layout.tsx <head>
- [x] Breadcrumbs.tsx — visual + BreadcrumbList schema

### Homepage (Redesigned)
- [x] Dark hero with H1 "Skilled Trades Recruitment Agency", subtitle from current site
- [x] Two CTA buttons: "Hiring? Book a Call" (→ /contact) + "Search Open Positions" (→ Zoho)
- [x] Stats bar: 50+ years, 10 verticals, 30+ metros, 50% faster fill
- [x] About section with current site copy + placeholder visual
- [x] 10-trade service card grid with unique gradient backgrounds per trade
- [x] "Why Employers Choose MasterTech" 6-card feature grid
- [x] Dark employer CTA section with phone number
- [x] Blue job-seeker CTA bar with Zoho link
- [x] Verified: single H1, Org schema, all 10 service links, phone, social links, Zoho links

### Service Pages (10/10 built + refined)
- [x] /services hub — all 10 trades with salary ranges, breadcrumbs
- [x] /services/[slug] — dynamic routes via generateStaticParams
- [x] Each page: Service schema + FAQPage schema + BreadcrumbList schema
- [x] Each page: 3,600-3,977 words (up from 2,700 after refinement)
- [x] Proper heading hierarchy (H1 → H2 → H3, body text in <p>)
- [x] Trade-specific gradient hero (unique color per vertical)
- [x] Role cards (styled grid, not plain bullets)
- [x] Industry tags (pill format)
- [x] Certification checklist with shield icons
- [x] 4-step "Our Staffing Process" section
- [x] Salary bar chart in sidebar (visual bars, not plain numbers)
- [x] Dark CTA sidebar card
- [x] Related services with salary ranges and arrow links
- [x] "View Open [Trade] Jobs" Zoho link in sidebar
- [x] FAQ with divider separators
- [x] PROJECT-CONTEXT.md saved to project root

### Location Pages (29/29 built)
- [x] /locations hub — all 29 cities grouped by tier, stats bar, search CTA
- [x] /locations/[state]/[city] — dynamic routes via generateStaticParams
- [x] Each page: LocalBusiness (EmploymentAgency) schema + FAQPage schema + BreadcrumbList schema
- [x] Each page: 3,300-3,750 words with genuinely unique local content
- [x] Unique content per city: industry context, labor market notes, major employers, landmarks
- [x] Metro stats bar (population, industries, employers, in-demand trades)
- [x] Key industries card grid, major employers pill tags, landmarks with map pins
- [x] Top trades linked to /services/[slug] pages (internal linking)
- [x] 5 city-specific FAQs generated from location data
- [x] Sidebar: CTA card, in-demand trades with median salary, nearby locations, Zoho jobs link
- [x] AI extraction summary block
- [x] LocationData + LocationsFile TypeScript types added

### Blog Infrastructure (built) + Posts (4/16 migrated)
- [x] /lib/blog.ts — getAllPosts(), getPostBySlug() with gray-matter frontmatter parsing
- [x] /lib/markdown.ts — minimal markdown-to-HTML converter (headings, lists, tables, bold, links, blockquotes)
- [x] /app/blog/page.tsx — blog index with post grid, category tags, dates
- [x] /app/blog/[slug]/page.tsx — dynamic post page with BlogPosting schema, author, sidebar
- [x] Each post: BlogPosting schema + BreadcrumbList schema + related services + related posts
- [x] Content stored as markdown with frontmatter in /content/blog/*.md
### Blog Posts Migrated (15/15 unique)
- [x] 5-must-have-skills-high-paying-industrial-electrician-job (3,018 words)
- [x] future-marine-diesel-technicians-job-outlook-skills (3,241 words)
- [x] heavy-equipment-mechanic-salary-2025 (3,164 words)
- [x] strategies-for-retaining-skilled-trades-workers (3,140 words)
- [x] the-truth-about-the-skilled-trades-shortage (3,085 words)
- [x] why-becoming-a-cnc-mechanic-in-2025-is-a-smart-career-move (3,210 words)
- [x] wc-fab-calibrated-power-acquisition-diesel-mechanic-jobs (3,050 words)
- [x] leasing-vs-buying-fleet-impacts-mechanic-staffing (3,178 words)
- [x] volvo-plant-ridgeville-sc-jobs-guide (3,174 words)
- [x] what-is-a-skills-gap-analysis-for-mechanics (3,502 words)
- [x] how-tariffs-impact-diesel-mechanic-salaries-job-growth (3,359 words)
- [x] best-practices-for-hiring-skilled-trades-professionals (3,526 words)
- [x] challenges-faced-in-skilled-trades-recruitment-and-how-to-overcome-them (3,387 words)
- [x] effective-skilled-trades-recruitment-strategies-2025 (3,939 words)
- [x] john-deere-right-to-repair-lawsuit-farmers-guide (3,665 words)

### Blog Migration Decisions
- DROPPED duplicate tariff post: `tariffs-impact-diesel-mechanic-salaries-job-growth` (competed with `how-tariffs-impact-diesel-mechanic-salaries-job-growth` for same keywords — SEO fix)
- All posts: 3,000-3,900 words, BlogPosting + BreadcrumbList schema, cross-linked to /services/[slug]
- Categories spread: 4 Career Guide, 5 Employer Guide, 4 Industry Outlook, 1 Salary Guide, 1 Location Guide

### Technical SEO (complete)
- [x] /src/app/robots.ts — auto-generates /robots.txt with sitemap reference
- [x] /src/app/sitemap.ts — auto-generates /sitemap.xml with all 47 URLs (home, hubs, 10 services, 29 locations, blog index, 4 posts)
- [x] /public/llms.txt — comprehensive AI crawler guide with site description, all pages, key facts, contact info
- [x] Priority tiers: homepage 1.0, service pages 0.9, tier 1 locations 0.8, tier 2 locations 0.7, tier 3 locations 0.6, blog 0.7

### Core Pages (complete)
- [x] /about — company story, what makes MasterTech different, parent company (2,019 words)
- [x] /contact — contact form client component, phone/email sidebar, emergency staffing callout (1,197 words)
- [x] /employers — employer-focused landing page with FAQPage schema, 3 hiring models, stats (2,850 words)
- [x] /how-it-works — 5-step process, MasterTech vs traditional table, FAQ schema (2,844 words)
- [x] /privacy-policy — GDPR-style privacy policy, data practices, user rights (1,718 words)
- [x] /terms — terms of service, use restrictions, disclaimers, limitation of liability (2,091 words)
- [x] ContactForm.tsx client component with validation, submission states, success UI (TODO: connect to email service)
- [x] Sitemap updated to include all 6 new pages (64 URLs total)

### Vacancy Cost Estimator (complete)
- [x] /components/VacancyCostEstimator.tsx — client component with 6 sliders, live calculation, compact + full modes
- [x] /app/tools/vacancy-cost-estimator/page.tsx — standalone tool page (2,712 words, FAQPage schema, BreadcrumbList)
- [x] Homepage embed at #vacancy-cost-estimator anchor with link to full tool
- [x] Math: revenue = charge × efficiency × hours/yr; cost = (rate × burden × hrs) + recruitment; profit = revenue - cost
- [x] Validates current site defaults (charge $150, rate $40, burden 20%, efficiency 101%, 20 hrs/wk, recruitment 20%)
- [x] Sample output: ~$1,878/week = cost of vacancy (≈$94K/year)
- [x] Sitemap updated (65 URLs)

### GA4 + Email Integration (complete)
- [x] GA4 tracking (ID G-H2Y941JWGG) added to layout.tsx via next/script with afterInteractive strategy
- [x] Verified GA4 scripts load on every page (homepage + service pages)
- [x] Resend server action at /src/app/actions/contact.ts with validation, HTML email template, graceful no-key fallback
- [x] ContactForm.tsx now calls submitContact() server action with error state UI
- [x] .env.local.example file created with setup instructions
- [x] .gitignore updated to track .env.local.example (but still ignore .env.local)

### Richard's Action Items (to complete launch)
- [ ] Sign up at https://resend.com (free tier — 100 emails/day)
- [ ] Get API key from Resend dashboard
- [ ] Add RESEND_API_KEY to Vercel (Project Settings > Environment Variables — add to Production, Preview, Development)
- [ ] (Later) Verify mastertech.work domain in Resend, then update FROM_EMAIL in src/app/actions/contact.ts

## Up Next (in order)
1. **Add real images** — fix audit issues #6 (alt text) and #16 (WebP optimization)
2. **Deploy + QA** — push to Vercel, verify GA4 data flows, test contact form end-to-end
3. **DNS cutover** — point mastertech.work at Vercel when ready to replace Webflow site

---

## Decisions Log
| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-04-13 | Single track — Next.js only, no Webflow maintenance | Simpler execution, Webflow site is fundamentally broken |
| 2026-04-13 | Match current site visual design | Current design is decent, just rebuild with proper SEO |
| 2026-04-13 | Dark header/footer matching current zinc-900 tone | Matches current site's dark nav + dark footer pattern |
| 2026-04-13 | Unique gradient per trade in service cards | Avoids uniform/generic grid, each trade has distinct color |
| 2026-04-13 | View Jobs links to Zoho Recruit | Current site pattern — external job board stays external |
| 2026-04-13 | generateStaticParams for service pages | All 10 pre-rendered at build time (SSG) |
| 2026-04-13 | Service data from JSON, not MDX | Structured data maps better to JSON |
| 2026-04-13 | GA4 ID: G-H2Y941JWGG | From current site, needs to be added to layout |

## SEO Audit Tracker (18 issues)
| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Two H1 tags on homepage | CRITICAL | ✅ Fixed |
| 2 | Body text in H3 tags | CRITICAL | ✅ Fixed |
| 3 | Thin service pages (<100 words) | CRITICAL | ✅ Fixed (2,600-3,100 words) |
| 4 | Zero schema markup | CRITICAL | ✅ Fixed (Org+Service+FAQ+BC) |
| 5 | No meta descriptions | CRITICAL | ✅ Fixed (buildMetadata) |
| 6 | No alt text on images | CRITICAL | Pending (gradient placeholders for now) |
| 7 | Broken legal/privacy links | HIGH | ✅ Fixed (/privacy-policy, /terms pages live) |
| 8 | Duplicate content blocks | HIGH | ✅ Fixed |
| 9 | Service cards link to # | HIGH | ✅ Fixed |
| 10 | No internal linking | HIGH | ✅ Fixed (related services, breadcrumbs) |
| 11 | URL inconsistency | HIGH | ✅ Fixed (/services/) |
| 12 | No location pages | HIGH | ✅ Fixed (29 cities, 3 tiers) |
| 13 | No employer landing page | MEDIUM | ✅ Fixed (/employers + /how-it-works) |
| 14 | No industry pages | MEDIUM | Pending (covered partially by service pages) |
| 15 | Blog missing metadata | MEDIUM | ✅ Fixed (BlogPosting schema, author, dates) |
| 16 | Images not optimized | MEDIUM | Pending (next/image WebP) |
| 17 | No llms.txt | MEDIUM | ✅ Fixed (comprehensive AI crawler guide) |
| 18 | No Google Business Profile | MEDIUM | External task |
