# CLAUDE.md — Mastertech.work SEO-Optimized Website

## Project Overview
Mastertech.work is a skilled trades recruitment agency specializing in 10 trade verticals
(diesel mechanics, aviation maintenance, CNC machining, welding, HVAC, electrical,
marine mechanics, heavy equipment, millwright, rail maintenance). The company connects
employers with qualified tradespeople across the US.

This is a Next.js 14+ website deployed on Vercel, optimized for local SEO and GEO
(Generative Engine Optimization). The primary goal is to rank in top 3 for
trade-specific + location-based search terms in underserved markets.

## Business Context
- Primary audience: employers/HR managers/fleet operators searching for skilled trades staffing
- Secondary audience: tradespeople looking for job opportunities
- Competitive advantage: niche focus on specific trades (not a generalist staffing agency),
  interactive Vacancy Cost Estimator tool, deep location-specific content
- Key competitors to outrank: DieselMechanicStaffing.com, Mechanics Hub, Skillwork,
  Blue Collar Recruiter
- Parent company: Easy Outsource / BayStreet Staffing

## Technical Requirements

### SEO Standards (NON-NEGOTIABLE — check on every page)
- ONE H1 per page, always containing primary keyword
- Proper heading hierarchy: H1 → H2 → H3 (never skip levels)
- Custom meta title for every page: under 60 characters, primary keyword first
  Format: "[Primary Keyword] | MasterTech Skilled Trades Recruitment"
- Custom meta description for every page: under 155 characters, include CTA
- All images: descriptive alt text with natural keyword inclusion, WebP format, <200KB
- Schema markup (JSON-LD) on EVERY page:
  - Organization + EmploymentAgency (site-wide via layout.tsx)
  - Service (service pages)
  - FAQPage (any page with FAQ section)
  - BlogPosting (blog posts — headline, datePublished, dateModified, author, publisher)
  - BreadcrumbList (all interior pages)
  - LocalBusiness with areaServed (location pages)
  - JobPosting (if job listings exist)
- Internal linking: every page links to 2-3 related pages minimum
- FAQ section with FAQPage schema on every service and location page
- Self-referencing canonical tags on all pages
- Breadcrumbs on all interior pages (visual + schema)

### Content Standards
- Service pages: minimum 1,000 words of unique content
- Location pages: minimum 800 words with genuinely local information
  (landmarks, local industry context, labor market data, NOT just city-name swapping)
- Blog posts: minimum 1,500 words with data tables, citations, FAQ sections
- Every page needs a 40-70 word summary block at the top (optimized for AI extraction)
- Include statistics where possible (increases AI visibility by 22%)
- Include expert quotes where possible (increases AI visibility by 37%)

### Performance Standards
- Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1
- All images: lazy loaded (except hero/above-fold), WebP format, explicit width/height
- Minimize JavaScript bundles, defer non-critical scripts
- Target 90+ on Google PageSpeed Insights for both mobile and desktop

### URL Structure
- Lowercase, hyphenated, under 60 characters
- /services/ (hub) → /services/diesel-mechanics (role pages)
- /industries/ (hub) → /industries/manufacturing (industry pages)
- /locations/ (hub) → /locations/texas/houston (city pages)
- /blog/ (index) → /blog/how-to-hire-diesel-mechanic (posts)
- /resources/ → /resources/salary-guide-2026

### Tech Stack
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS
- Deployment: Vercel via GitHub
- Analytics: Google Search Console + Google Analytics 4
- CMS: MDX files in /content directory (blog posts and page content)
- Forms: Server actions or API routes → email notification

## File Organization
- /app — pages and routes (App Router)
- /components — reusable UI components (PascalCase: ServiceCard.tsx)
- /content — MDX content files organized by type (blog/, services/, locations/)
- /lib — utility functions (schema generators, data helpers)
- /lib/seo — SEO utility functions (generateMetadata, schema builders)
- /public — static assets (images, robots.txt, sitemap.xml, llms.txt)
- /data — JSON data files (services.json, locations.json, keywords.json)

## Coding Conventions
- TypeScript for all files
- Use Next.js generateMetadata() for page-level SEO
- Schema markup via reusable builder functions in /lib/seo/schema.ts
- Component naming: PascalCase (ServiceCard.tsx, LocationHero.tsx)
- File naming: kebab-case for content files, PascalCase for components
- Keep dependencies minimal — don't add libraries unless specifically needed

## Commands
- `npm run dev` — local development server
- `npm run build` — production build (ALWAYS test before pushing)
- `npm run lint` — check for errors
- `git add . && git commit -m "message" && git push` — deploy to Vercel

---

## Session Management

This project uses 3 files for continuity across sessions: CLAUDE.md (this file), STATUS.md, and LEARNINGS.md.

### STATUS.md — Living State Tracker
The single source of truth for where the project stands.
- **Read STATUS.md at the start of every session** to understand current state
- **Update STATUS.md at the end of every session** when prompted or when wrapping up

### LEARNINGS.md — Pattern Library
Captures reusable knowledge: what works, what fails, Claude Code tips.
- Update when something notable happens, not every session
- NOT a bug tracker — this is for patterns that future sessions should know

### Session Start Protocol
1. Read STATUS.md → understand current state
2. Read LEARNINGS.md if working on something that previously had issues
3. Ask what to work on, or suggest next task from STATUS.md

### Session End Protocol
1. Update STATUS.md with: what was completed, what's next, any new decisions or issues
2. If notable patterns discovered, update LEARNINGS.md
3. If Track A (Webflow) hasn't been synced in 7+ days, flag it

### Critical Habits
- Before building anything complex, outline the plan first and get approval
- Before generating any page, verify against this file: H1, meta tags, schema, internal links, word count minimums
- If a request conflicts with an earlier decision in STATUS.md, flag it
- After completing a major piece, suggest a checkpoint: build test + STATUS.md update

---

## Dual-Track Context

### Track A: Webflow (Production — Revenue Track)
- Mastertech.work is LIVE on Webflow right now
- Claude Code generates assets (schema JSON-LD, meta tags, content, FAQs) → Richard pastes into Webflow manually
- Track A is ALWAYS the priority — never neglect it for Track B
- If Track A hasn't been synced in 7+ days, remind Richard

### Track B: Next.js (Learning + Future Migration)
- This codebase — the Next.js rebuild deployed on Vercel
- Eventually becomes production once it reaches feature parity with Webflow
- Content created here feeds back into Track A

---

## When in Doubt
- Prioritize SEO correctness over visual polish
- Every page must be independently rankable for at least one target keyword
- Check heading hierarchy, meta tags, and schema on every new page
- Reference /data/keywords.json for target keywords per page
- Test with `npm run build` before committing — catch errors early
- Keep it simple — working code over perfect architecture