# PROJECT-CONTEXT.md — Everything Claude Code Needs to Know

Read this file once at the start of the project. It contains the full business context,
SEO strategy, competitor analysis, and build plan. For technical standards and coding
conventions, see CLAUDE.md. For current progress, see STATUS.md.

---

## Who You're Working With

Richard is the project architect. He describes what he wants, you write the code, he reviews and approves.

- He can read and understand code flow but cannot write code from scratch
- He knows: n8n, Supabase, Lovable, Claude API, Python (basic), Airtable
- He's learning: Next.js, TypeScript, Git, Claude Code — this is his first real codebase project
- Communication style: direct, no fluff, prefers specs and decision trees over essays
- He's on Windows, VS Code + Claude Code extension, 16GB RAM, RTX 4060
- Claude Max plan ($100/month)

**How to work with him:**
- Challenge his reasoning — provide tradeoffs, not validation
- When building: output code that works, with brief explanations
- When he asks conceptual questions: be concise, use analogies to n8n workflows or Supabase
- Before building anything complex: outline the plan first and get his approval
- No motivational content, no generic advice, no essay-style responses
- Don't assume he knows terminal commands — explain briefly when needed
- Don't add libraries unless specifically needed — keep dependencies minimal

---

## The Business

**MasterTech** (mastertech.work) is a skilled trades recruitment agency. They connect
employers (HR managers, fleet operators, plant managers) with qualified tradespeople
across the United States. It's one of the companies under Easy Outsource / BayStreet
Staffing where Richard works.

### 10 Trade Verticals
1. Heavy Duty Diesel Mechanics
2. Aviation Maintenance (A&P mechanics, avionics)
3. CNC Machining (operators, programmers, setup techs)
4. Welding (MIG, TIG, stick, pipe)
5. HVAC (service, install, controls, data center cooling)
6. Electrical (journeyman, master, industrial, PLC)
7. Marine Mechanics (diesel, outboard, shipyard)
8. Heavy Equipment (Cat, Deere, Komatsu field/shop techs)
9. Millwright (precision alignment, rigging, installation)
10. Rail Maintenance (locomotive, signal, track, transit)

### Contact Info
- Phone: +1 (888) 305-0102
- Email: info@mastertech.work
- LinkedIn: https://www.linkedin.com/company/mastertechwork
- Instagram: https://www.instagram.com/mastertech.work/
- Facebook: https://www.facebook.com/MasterTechWork-153519236811864
- Job board: https://mastertech.zohorecruit.com/jobs/apply
- GA4 ID: G-H2Y941JWGG

---

## Current Site Problems (Why We're Rebuilding)

The current Webflow site has **18 documented SEO issues** (full audit at /docs/reference/seo-audit.md).
The site has **zero organic visibility** for any non-branded search term.

### The Worst Problems
- **Two H1 tags on homepage** (one for hero, one for calculator)
- **Service pages are 50-80 words each** with body text wrapped in H3 tags instead of paragraphs
- **Zero schema markup** anywhere on the site
- **No meta descriptions** on any page
- **No alt text** on any image
- **Broken links** — Legal and Privacy Policy both point to #
- **Service cards duplicated** 2-3 times per page (carousel + grid + job board)
- **No location pages** at all — missing entire "[trade] + [city]" keyword category
- **No employer landing page**, no how-it-works page, no industry pages
- **URL inconsistency** — /service/ (singular) for services, /articles in nav but /blog/ for posts

### What's Actually Good (Preserve These)
- **16 blog posts** with strong content (1,500-3,000 words, data tables, external citations)
- **Vacancy Cost Estimator** interactive calculator — unique, no competitor has this
- Clean URL slugs on service pages
- Phone, email, social links are present
- GA4 tracking is active
- Visual design is decent — dark hero, card grids, professional B2B tone

---

## Competitor Landscape

### Enterprise Players (Can't Outrank on Broad Terms)
- **Aerotek** — largest skilled trades staffing firm, massive domain authority
- **Tradesmen International** — best SEO architecture (pages for every trade x state x industry)
- **PeopleReady Skilled Trades** — publicly traded parent company domain authority

### Beatable Niche Players (Our Direct Targets)
- **Skillwork** — strongest content marketing BUT no location pages, no interactive tools
- **Mechanics Hub** — 100% diesel mechanics since 1988 BUT dated website, thin content
- **DieselMechanicStaffing.com** — ranks purely from exact-match domain. Only 3 pages. Most vulnerable.
- **The Blue Collar Recruiter** — franchise model, 82+ Google reviews BUT limited content depth

### Gaps We Can Exploit
- Aviation mechanic recruiting — virtually uncontested
- CNC machinist, marine mechanic, rail mechanic content nearly nonexistent
- "[trade] + [city]" combinations — wide open
- Interactive tools — almost no competitor has calculators
- Schema markup — absent from most niche competitors

---

## Key Decisions (Don't Revisit Unless Richard Says So)

1. Single track — Next.js only. No Webflow maintenance.
2. Next.js + Vercel + GitHub. Stack is set.
3. Build one template page perfectly, then scale.
4. Match current site's visual design.
5. Frontend design skill required — read /docs/skills/frontend-design.md before building any page.
6. SEO correctness over visual polish.
7. GA4 ID: G-H2Y941JWGG
