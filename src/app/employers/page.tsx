import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, jsonLd } from "@/lib/seo/schema";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateMetadata() {
  return buildMetadata({
    title: "Skilled Trades Staffing for Employers | MasterTech",
    description:
      "Hire skilled tradespeople faster with MasterTech. Direct hire, temp-to-hire, and emergency staffing for diesel mechanics, welders, electricians, and more.",
    path: "/employers",
  });
}

const employerFaqs = [
  {
    question: "What types of skilled trades staffing does MasterTech provide?",
    answer:
      "We offer direct hire placement, temp-to-hire staffing, and contract staffing across 10 skilled trade verticals: diesel mechanics, aviation maintenance, CNC machining, welding, HVAC, electrical, marine mechanics, heavy equipment, millwright, and rail maintenance. Emergency placements are available in 5-7 business days.",
  },
  {
    question: "How much does it cost to hire through a skilled trades staffing agency?",
    answer:
      "Direct hire fees typically range from 20-30% of the candidate's first-year salary. Temp-to-hire and contract staffing use a bill rate markup of 30-50%. Rates vary based on position level, trade specialty, location, and urgency. The cost is typically offset by reduced time-to-fill and lower risk of a bad hire.",
  },
  {
    question: "How fast can MasterTech fill a position?",
    answer:
      "Most positions fill in 14-21 days — roughly half the national average of 45-60 days. Emergency placements can complete in 5-7 business days for common roles in markets where we have deep candidate networks. Highly specialized positions (NDT Level III, specific OEM certifications) may take longer.",
  },
  {
    question: "What industries does MasterTech serve?",
    answer:
      "We serve transportation (trucking, fleet operations), manufacturing, aviation/aerospace, marine, energy (oil & gas, power generation), construction, defense, data centers, rail and transit, and mining. Each industry has specific certification requirements we understand and verify.",
  },
  {
    question: "Do you staff nationwide or just specific regions?",
    answer:
      "We recruit nationwide with active networks in 30+ US metro markets. Our location pages detail the markets where we have the deepest candidate pools: Houston, Dallas-Fort Worth, Phoenix, Atlanta, Chicago, Indianapolis, Columbus, Charlotte, San Antonio, and many more.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(employerFaqs)) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Employers", href: "/employers" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Skilled Trades Staffing for Employers
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Stop Losing Revenue to Unfilled Positions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Every day a skilled trades position stays open costs your business
            money. MasterTech cuts your time-to-fill in half with pre-vetted,
            certified candidates sourced by recruiters who specialize in your
            trade.
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

      {/* The problem */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            The Real Cost of an Unfilled Position
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600">
            A vacant skilled trades position costs more than just the unpaid
            salary. The real cost compounds daily:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-5">
              <p className="text-3xl font-bold text-blue-600">$5,000</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Lost revenue per week</p>
              <p className="mt-1 text-xs text-zinc-500">Per unfilled diesel technician position</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-5">
              <p className="text-3xl font-bold text-blue-600">45-60 days</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">National average time-to-fill</p>
              <p className="mt-1 text-xs text-zinc-500">For most skilled trades positions</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-5">
              <p className="text-3xl font-bold text-blue-600">75-150%</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Cost of turnover</p>
              <p className="mt-1 text-xs text-zinc-500">As percentage of annual salary</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-5">
              <p className="text-3xl font-bold text-blue-600">3:1</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">Demand vs. supply</p>
              <p className="mt-1 text-xs text-zinc-500">In major logistics corridors</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              How MasterTech Helps You Hire
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">
              Three hiring models. Whichever fits your situation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Direct Hire</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                We find, vet, and present qualified candidates. You interview and
                hire them as your employee immediately. Best for permanent
                positions with clear long-term need.
              </p>
              <p className="mt-4 text-xs font-medium text-zinc-500">
                Typical fill: 14-21 days &middot; Fee: 20-30% of salary
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Temp-to-Hire</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Evaluate the candidate on the job for 90-180 days before making a
                permanent offer. Best when you want to verify fit before
                committing or volume needs are uncertain.
              </p>
              <p className="mt-4 text-xs font-medium text-zinc-500">
                Typical fill: 10-14 days &middot; Markup: 30-50% on bill rate
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Contract / Emergency
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Project-based staffing, turnaround events, or urgent fills. We
                can deploy candidates in 5-7 business days for common roles.
                Best for shutdowns, seasonal surges, or gap coverage.
              </p>
              <p className="mt-4 text-xs font-medium text-zinc-500">
                Typical fill: 5-7 days &middot; Custom project pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MasterTech */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900">
            What You Get With MasterTech
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trade-Specific Recruiters",
                desc: "Your recruiter knows the difference between a 6G pipe welder and a structural MIG welder. They speak your candidates' language.",
              },
              {
                title: "Pre-Vetted Candidate Networks",
                desc: "We don't start from zero when you call. Our candidate database is maintained, updated, and ready to activate.",
              },
              {
                title: "Certification Verification",
                desc: "Every cert checked directly with issuing authorities: ASE, FAA, AWS, ASME, API, NIMS, EPA. No unverified claims.",
              },
              {
                title: "Background + Drug Screening",
                desc: "Complete pre-employment checks so you can focus on skill fit, not basic qualifications.",
              },
              {
                title: "Reference Calls With Supervisors",
                desc: "We talk to the people who actually supervised the candidate's work — not just whoever they list.",
              },
              {
                title: "Technical Skills Assessment",
                desc: "Hands-on technical testing where appropriate. Code-specific weld tests, diagnostic scenarios, machine setup exercises.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-zinc-200">
            {employerFaqs.map((faq) => (
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
            Ready to Fill Your Open Positions?
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Tell us what you&apos;re hiring for. We&apos;ll match you with a
            recruiter who knows your trade.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/how-it-works"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
