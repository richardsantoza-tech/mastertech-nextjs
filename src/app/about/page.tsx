import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateMetadata() {
  return buildMetadata({
    title: "About MasterTech | Skilled Trades Recruitment Agency",
    description:
      "MasterTech is a specialized skilled trades recruitment agency with 50+ years of collective experience. Learn about our approach, team, and parent company.",
    path: "/about",
  });
}

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About MasterTech
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            50+ Years of Skilled Trades Recruiting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            We&apos;re not a generalist staffing agency trying to fill skilled
            trades roles as a side business. Every recruiter at MasterTech
            specializes in a specific trade vertical — which is why our clients
            actually fill positions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              MasterTech was built to solve a problem that traditional staffing
              agencies couldn&apos;t. Skilled trades recruiting requires genuine
              industry knowledge — you can&apos;t effectively recruit a 6G pipe
              welder if you don&apos;t know what 6G means. You can&apos;t vet a
              diesel mechanic if you don&apos;t understand the difference between
              ASE T4 and T5 certifications.
            </p>
            <p>
              With over 50 years of collective experience specializing in
              recruiting Skilled Trades Professionals across North America, we
              help organizations source, qualify, and secure top industry talent.
              Our recruiters come from the trades, have worked in the industries
              they now serve, and understand the specific requirements of each
              certification, each trade specialty, each regional labor market.
            </p>
            <p>
              We&apos;re a dedicated Skilled Trades recruiting firm, tasked with
              bringing our industry knowledge to helping people with technical
              expertise find the right fit for their career. That works both
              ways — employers get qualified candidates, and tradespeople get
              placed in roles where they can actually build a career.
            </p>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              What Makes MasterTech Different
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Trade-Specific Expertise
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Each of our recruiters focuses on a specific trade. They know the
                certifications, the OEM training requirements, the real skill
                differences between titles that sound similar on paper.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Verified Credentials
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Every candidate&apos;s certifications are verified directly with
                issuing authorities. ASE, FAA, AWS, NIMS, EPA — we check them
                all before you interview anyone.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Nationwide Reach
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Active recruiting networks in 30+ US metro markets. From Houston
                energy operations to Chicago rail hubs to Phoenix semiconductor
                fabs — we go where the trades work is.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Faster Time-to-Fill
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                We maintain pre-vetted candidate networks, so we don&apos;t start
                recruiting from zero when you call. Most positions fill in 14-21
                days; emergency placements in 5-7.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Flexible Hiring Models
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Direct hire, temp-to-hire, or contract staffing — whatever fits
                your needs. We help you evaluate candidates on the job before
                committing to permanent placement.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Data-Driven Approach
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Our Vacancy Cost Estimator and salary benchmarking tools help
                clients make informed hiring decisions. We believe in showing our
                work — not just pitching services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent company */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Part of Something Bigger
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600">
            MasterTech is a division of Easy Outsource / BayStreet Staffing, a
            specialized staffing group focused on technical and skilled
            workforce solutions. This relationship gives us access to broader
            infrastructure — legal, accounting, compliance — while preserving
            our singular focus on skilled trades.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Our clients range from Fortune 500 fleet operators and manufacturers
            to regional shops and equipment dealers. What unites them: every one
            needs qualified tradespeople, and every one values working with a
            recruiter who knows the difference between a Class A CDL and a 6G
            weld cert.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Work With Specialists?
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Tell us what positions you&apos;re trying to fill. We&apos;ll show
            you the difference a trade-specific recruiter makes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
