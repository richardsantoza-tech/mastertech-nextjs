import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, jsonLd } from "@/lib/seo/schema";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateMetadata() {
  return buildMetadata({
    title: "How MasterTech Works | Skilled Trades Staffing Process",
    description:
      "Our 5-step skilled trades staffing process. From initial call to candidate placement — transparent timeline, verified certifications, and no wasted interviews.",
    path: "/how-it-works",
  });
}

const processFaqs = [
  {
    question: "How long does the MasterTech staffing process take?",
    answer:
      "Most positions fill within 14-21 days from initial discovery call to signed offer. Emergency placements can close in 5-7 business days. Highly specialized roles (rare certifications, cleared positions) may take 30+ days.",
  },
  {
    question: "What happens after I submit a request?",
    answer:
      "You'll get an initial response within one business day, followed by a discovery call with a trade-specific recruiter. We gather requirements, then present qualified candidates within 7-14 days. You interview, decide, and we handle onboarding logistics.",
  },
  {
    question: "How many candidates will I see?",
    answer:
      "Typically 3-5 pre-vetted candidates per position. We don't flood you with resumes — we curate. Every candidate we present has been certification-verified, reference-checked, and screened for the specific requirements of your role.",
  },
  {
    question: "What if a candidate doesn't work out?",
    answer:
      "Direct hire placements typically include a 90-day replacement guarantee. If a candidate leaves or doesn't perform during that window, we replace them at no additional fee. Temp-to-hire arrangements have built-in evaluation periods before permanent commitment.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(processFaqs)) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "How It Works", href: "/how-it-works" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Our Staffing Process
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            How MasterTech Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A transparent 5-step process designed to fill your positions fast
            with verified, qualified candidates. No mystery, no surprises.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "You Tell Us What You Need",
                time: "Day 0",
                desc:
                  "Call us or submit the contact form. We'll schedule a 20-30 minute discovery call to understand the role, required certifications, timeline, location, and cultural fit requirements.",
                details: [
                  "Position details and seniority level",
                  "Certifications and experience requirements",
                  "Location and shift preferences",
                  "Compensation range and benefits",
                  "Hiring model (direct, temp-to-hire, contract)",
                ],
              },
              {
                step: "2",
                title: "We Activate Our Network",
                time: "Days 1-7",
                desc:
                  "Our trade-specialized recruiters tap into our pre-vetted candidate database and begin targeted outreach within 24 hours. We work our existing network before posting publicly.",
                details: [
                  "Pre-vetted database search",
                  "Direct outreach to known qualified candidates",
                  "Referral requests from our recruiter network",
                  "Targeted posting to niche trade boards if needed",
                ],
              },
              {
                step: "3",
                title: "Candidates Are Screened and Verified",
                time: "Days 5-14",
                desc:
                  "Every candidate goes through full vetting before you see them. No unfiltered resumes, no unverified claims.",
                details: [
                  "Certification verification with issuing authorities",
                  "Technical skills assessment (where applicable)",
                  "Employment history verification",
                  "Reference calls with direct supervisors",
                  "Background check and drug screening",
                  "Cultural fit and motivation interview",
                ],
              },
              {
                step: "4",
                title: "You Interview and Hire",
                time: "Days 10-21",
                desc:
                  "We present 3-5 pre-vetted candidates with detailed profiles. You interview the ones who fit, select your hire, and we handle the offer logistics.",
                details: [
                  "Curated candidate slate (3-5 per position)",
                  "Interview scheduling and coordination",
                  "Offer preparation and negotiation support",
                  "Counter-offer management",
                  "Start date coordination",
                ],
              },
              {
                step: "5",
                title: "Onboarding and Support",
                time: "Day 21+",
                desc:
                  "Our involvement doesn't end at signing. We support onboarding, check in during the first 90 days, and guarantee replacement if something doesn't work out.",
                details: [
                  "Pre-start communication and prep",
                  "30/60/90-day check-ins",
                  "90-day replacement guarantee (direct hire)",
                  "Ongoing relationship for future hires",
                ],
              },
            ].map((item) => (
              <div
                key={item.step}
                className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                      {item.title}
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-7 text-zinc-600">
                    {item.desc}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-zinc-700">
                        <svg
                          className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline comparison */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            MasterTech vs. Traditional Recruiting
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Why specialized trades recruiting beats generalist approaches every
            time.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse rounded-lg border border-zinc-200 bg-white">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900">
                    Factor
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900">
                    Traditional Recruiting
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-blue-600">
                    MasterTech
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {[
                  ["Time to Fill", "45-60 days", "14-21 days"],
                  ["Recruiter Expertise", "Generalist", "Trade-specific specialist"],
                  ["Certification Verification", "Often skipped", "Always verified with authority"],
                  ["Candidate Network", "Built per search", "Pre-vetted and maintained"],
                  ["Emergency Placements", "Rarely offered", "5-7 business days"],
                  ["Technical Assessment", "Optional", "Hands-on testing where applicable"],
                  ["Replacement Guarantee", "Varies", "90 days standard (direct hire)"],
                ].map(([factor, traditional, mastertech]) => (
                  <tr key={factor}>
                    <td className="px-4 py-3 text-sm font-medium text-zinc-900">
                      {factor}
                    </td>
                    <td className="px-4 py-3 text-sm text-zinc-600">{traditional}</td>
                    <td className="px-4 py-3 text-sm font-medium text-zinc-900">
                      {mastertech}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-zinc-200">
            {processFaqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-base font-semibold text-zinc-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Hiring?
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Tell us about your position. We&apos;ll have a trade-specific
            recruiter on your call within one business day.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Get Started
            </Link>
            <a
              href="tel:+18883050102"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              Call (888) 305-0102
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
