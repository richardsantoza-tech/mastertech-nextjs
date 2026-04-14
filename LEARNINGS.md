# LEARNINGS.md — Mastertech.work Build Learnings

## What Works

### Data-Driven Page Generation
- services.json with embedded FAQs, keywords, certifications, salary ranges, and cross-links means one data file powers service pages, schema markup, AND content generation
- Same pattern applies to locations.json — genuinely unique local context per city prevents Google's doorway page penalty
- Always validate generated JSON with a script (count entries, check required fields) rather than eyeballing

### SEO Infrastructure First
- Building schema.ts and metadata.ts before any pages means every page gets correct SEO automatically
- Organization + EmploymentAgency schema in layout.tsx covers every page site-wide
- buildMetadata() helper enforces canonical URLs, OG tags, and Twitter cards consistently

### Session Continuity
- STATUS.md with a clear "Up Next" list prevents wasted time deciding what to build
- Decisions Log catches context that would otherwise be lost between sessions
- SEO Audit Tracker (18 issues) serves as both a checklist and progress tracker

## What Doesn't Work

### Google Fonts in Sandbox/CI
- Geist font fetch fails in sandbox environments — use system fonts as fallback
- On Richard's local machine and Vercel deployment, Google Fonts work fine
- If build fails with font errors, check network access first

### create-next-app Auto-Generated Files
- Creates CLAUDE.md and AGENTS.md with boilerplate — delete and replace with custom versions immediately
- Default page.tsx has dark mode styles in globals.css — strip those out

### Generic UI Without Design Reference
- First homepage build looked nothing like mastertech.work because no design reference was provided
- Fix: always include /docs/reference/current-site.html AND /docs/skills/frontend-design.md before building any page
- Without the design skill file, Claude Code defaults to generic centered layouts with Inter font

### Dual-Track Approach
- Maintaining Webflow + Next.js simultaneously was unnecessary complexity
- The Webflow site is fundamentally broken (18 SEO issues) — not worth patching
- Decision: single track, Next.js only, full rebuild

## Claude Code Tips

### Prompting Patterns
- "Read CLAUDE.md, STATUS.md, and [skill file]" at the start of every session ensures context
- "Run npm run build when done" at the end of every prompt catches TypeScript errors before they hit Vercel
- Referencing specific data files ("use /data/services.json") gets better output than describing the data verbally
- "Outline the plan first before writing code" prevents Claude from building the wrong thing

### File References
- Use exact paths: "/src/app/page.tsx" not "the homepage file"
- When asking for a redesign, always point to the design reference: "/docs/reference/current-site.html"
- For SEO checks, reference: "/docs/reference/seo-audit.md"

### Build Order That Works
1. SEO infrastructure (schema, metadata helpers) — done once, used everywhere
2. Layout (header, footer) — appears on every page
3. Homepage — the most visible page, sets the design tone
4. One template page (diesel-mechanics) — get it perfect before scaling
5. Generate remaining pages from template + data files
6. Technical SEO (robots.txt, sitemap, breadcrumbs, llms.txt)
7. Interactive tools (Vacancy Cost Estimator)
8. Blog migration

### Things to Watch
- Next.js App Router uses `src/app/` directory in this project (not root `app/`)
- TypeScript strict mode is on — Claude Code sometimes generates code that fails type checks
- The project has 16 existing blog posts on the current site that need to be migrated eventually
- GA4 tracking ID is G-H2Y941JWGG (already in current site, needs to be added to new site)
- Current site uses Montserrat + Varela + Lato fonts — new site uses Geist (deliberate simplification)