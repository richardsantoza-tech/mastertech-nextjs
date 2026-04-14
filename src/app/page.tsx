import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import VacancyCostEstimator from "@/components/VacancyCostEstimator";

export function generateMetadata() {
  return buildMetadata({
    title: "Skilled Trades Recruitment Agency | MasterTech",
    description:
      "MasterTech is a specialized skilled trades staffing agency. We recruit diesel mechanics, aviation techs, CNC machinists, welders, HVAC techs, and electricians nationwide.",
    path: "/",
  });
}

const trades = [
  {
    slug: "diesel-mechanics",
    name: "Heavy Duty Diesel",
    desc: "Trucks, trailers, heavy equipment & cranes serving construction, mining, forestry and more.",
    gradient: "from-amber-900 to-zinc-900",
  },
  {
    slug: "aviation-maintenance",
    name: "Aviation",
    desc: "Airframe, powerplant, avionics, turbine, aerospace & production maintenance, and GSE services.",
    gradient: "from-sky-900 to-zinc-900",
  },
  {
    slug: "cnc-machining",
    name: "CNC Machining",
    desc: "Machinist, programmer, operator, grinding, plasma/water jet/laser cutting, and more.",
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    slug: "welding",
    name: "Welder / Fabricator",
    desc: "MIG, TIG, stick, flux, plasma arc, stainless, cutting, punching, forming, shearing, and stamping.",
    gradient: "from-orange-900 to-zinc-900",
  },
  {
    slug: "hvac",
    name: "HVAC",
    desc: "Commercial, industrial, residential, production, and gas fitter technicians.",
    gradient: "from-cyan-900 to-zinc-900",
  },
  {
    slug: "electrical",
    name: "Electrician",
    desc: "Commercial, industrial, residential, and powerline electrical services & utilities.",
    gradient: "from-yellow-900 to-zinc-900",
  },
  {
    slug: "marine-mechanics",
    name: "Marine",
    desc: "Gas, diesel, inboard, outboard, pod drive, maintenance, generators, pumps, and marina services.",
    gradient: "from-blue-900 to-zinc-900",
  },
  {
    slug: "heavy-equipment",
    name: "Heavy Equipment",
    desc: "Cat, Deere, Komatsu, and Volvo mechanics for construction, mining, and equipment dealers.",
    gradient: "from-stone-700 to-zinc-900",
  },
  {
    slug: "millwright",
    name: "Industrial / Millwright",
    desc: "Stationary, contract, millwright, overhead crane, maintenance mechanic, PLC, and tool & die.",
    gradient: "from-slate-700 to-zinc-900",
  },
  {
    slug: "rail-maintenance",
    name: "Locomotive & Rail",
    desc: "Engineers, maintenance technicians, welders, diesel engine techs, signal, light rail, and freight.",
    gradient: "from-red-900 to-zinc-900",
  },
];

const stats = [
  { value: "50+", label: "Years Collective Experience" },
  { value: "10", label: "Trade Verticals" },
  { value: "30+", label: "US Metro Markets" },
  { value: "50%", label: "Faster Time-to-Fill" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Specialized Skilled Trades Staffing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Skilled Trades Recruitment Agency
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            We understand how difficult it is to attract, hire and retain staff.
            Let us do the heavy lifting. MasterTech connects employers with
            qualified tradespeople across 10 specialized verticals.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Hiring? Book a Call
            </Link>
            <a
              href="https://mastertech.zohorecruit.com/jobs/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              Search Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                Dedicated Skilled Trades Recruiting
              </h2>
              <p className="mt-6 text-base leading-7 text-zinc-600">
                With over 50 years of collective experience specializing in
                recruiting Skilled Trades Professionals across North America, we
                are able to help your organization source, qualify, and secure top
                industry talent to hire.
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                We are a dedicated Skilled Trades recruiting firm, tasked with
                bringing our industry knowledge to helping people with technical
                expertise find the right fit for their career. Unlike generalist
                staffing agencies, every recruiter at MasterTech specializes in a
                specific trade vertical.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="rounded-lg bg-zinc-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            {/* Placeholder image */}
            <div className="mt-10 lg:mt-0">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 flex flex-col items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-400">50+</p>
                  <p className="mt-2 text-sm font-medium text-zinc-400">
                    Years of Collective Experience
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Across 10 Skilled Trade Verticals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              What We Do
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
              10 Specialized Trade Verticals
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">
              We recruit across every major skilled trade category. Click any
              specialty to learn about our recruiting process, certifications we
              verify, and salary benchmarks.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={`/services/${trade.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                {/* Gradient background */}
                <div
                  className={`aspect-[3/2] bg-gradient-to-br ${trade.gradient} p-6 flex flex-col justify-end transition-all group-hover:scale-[1.02]`}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white">
                      {trade.name}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-zinc-300">
                      {trade.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                      Learn More
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why MasterTech */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Why Employers Choose MasterTech
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Faster Time-to-Fill
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                The average skilled trades position takes 45+ days to fill.
                MasterTech&apos;s pre-vetted network cuts that to 14-21 days for
                most positions.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Verified Certifications
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Every candidate&apos;s certifications are verified directly with
                issuing authorities. ASE, FAA, AWS, NIMS, EPA — we check them all
                before you interview.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Trade-Specific Recruiters
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Your recruiter understands the difference between a 6G pipe
                welder and a structural MIG welder. We don&apos;t send generic
                candidates — we send the right ones.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Nationwide Coverage
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Active recruiting networks in 30+ US metro markets, from Houston
                and Dallas to Chicago and Phoenix. We go where the trades work is.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Flexible Hiring Models
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Direct hire, temp-to-hire, or contract staffing. Emergency
                placements available in 5-7 days for urgent needs.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Vacancy Cost Estimator
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Our free calculator shows exactly how much each unfilled position
                costs your business per week — so you can justify staffing
                investment with real numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancy Cost Estimator */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8" id="vacancy-cost-estimator">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Free Calculator
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Skilled Trades Vacancy Cost Estimator
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">
              See exactly how much money you lose every week a skilled trades
              position stays vacant. Adjust the sliders to match your shop.
            </p>
          </div>
          <div className="mt-10">
            <VacancyCostEstimator />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/tools/vacancy-cost-estimator"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View full calculator with methodology &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="bg-zinc-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop Losing Revenue to Unfilled Positions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Every day a skilled trades position stays open costs your business
            money in lost productivity, overtime, and missed contracts. MasterTech
            cuts your time-to-fill in half with pre-vetted, certified candidates.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Get In Touch
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

      {/* Job seeker CTA */}
      <section className="bg-blue-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Looking for Your Next Opportunity?
            </h2>
            <p className="mt-2 text-base text-blue-100">
              Browse open positions across all 10 skilled trade verticals.
            </p>
          </div>
          <a
            href="https://mastertech.zohorecruit.com/jobs/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 lg:mt-0"
          >
            Search Open Positions
          </a>
        </div>
      </section>
    </>
  );
}
