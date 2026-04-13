# Project Status

## Current Sprint
Week 1, Days 3-4: Track A Webflow quick wins + Track B foundation

## Last Completed
- [2026-04-13] Environment setup: Node.js, Git, VS Code + Claude Code, GitHub, Vercel
- [2026-04-13] Next.js 14 project initialized with TypeScript + Tailwind CSS
- [2026-04-13] CLAUDE.md created with full project standards
- [2026-04-13] Data files generated: services.json (10 verticals), locations.json (29 metros), keywords.json (85 keywords)
- [2026-04-13] Directory structure created: /components, /content/blog, /content/services, /content/locations, /lib/seo, /public/images

## Next Up
- [ ] Track A: Generate Organization + EmploymentAgency schema JSON-LD for Webflow
- [ ] Track A: Generate optimized meta titles/descriptions for all 15-16 Webflow pages
- [ ] Track A: Generate FAQ content + FAQPage schema for service pages → Webflow
- [ ] Track A: Create llms.txt → upload to Webflow
- [ ] Track A: Set up Google Search Console + Google Business Profile
- [ ] Track B: Build /lib/seo/schema.ts (reusable schema generators)
- [ ] Track B: Build /lib/seo/metadata.ts (generateMetadata helpers)
- [ ] Track B: Build base layout (header, footer, nav) in /app/layout.tsx
- [ ] Track B: Build homepage /app/page.tsx

## Decisions Made
- [2026-04-13] Dual-track: Webflow stays production, Next.js is learning + future migration
- [2026-04-13] Stack: Next.js 14 + TypeScript + Tailwind + Vercel + GitHub
- [2026-04-13] No SaaS build until formula proven on 2-3 clients
- [2026-04-13] Content quality over quantity — no thin auto-generated pages
- [2026-04-13] System fonts for now, Google Fonts added later for production styling
- [2026-04-13] 29 locations created (NY-NJ metro deferred to Tier 3 buildout)

## Known Issues / Blockers
- (none yet)

## Architecture Notes
- services.json contains full content data per vertical: slug, meta tags, keywords, summary, FAQs (5 each), certifications, salary ranges, related services/blogs/locations
- locations.json organized by tier (1/2/3) with genuinely unique local context per city — not template content
- keywords.json maps all 85 keywords to target pages with competition level and priority
- Layout uses system fonts — swap to Inter/Geist when deploying to production (Google Fonts fetch fails in sandbox environments)

## Track A (Webflow) Status
- Last synced: NOT STARTED
- Pending: schema markup, meta titles/descriptions, expanded service page content, FAQ sections, llms.txt, Google Business Profile setup