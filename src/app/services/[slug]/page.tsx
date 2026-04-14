import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, jsonLd } from "@/lib/seo/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import servicesData from "../../../../data/services.json";
import type { ServiceData } from "@/lib/types";

const services = servicesData as ServiceData[];

const tradeGradients: Record<string, string> = {
  "diesel-mechanics": "from-amber-900 to-zinc-900",
  "aviation-maintenance": "from-sky-900 to-zinc-900",
  "cnc-machining": "from-zinc-700 to-zinc-900",
  welding: "from-orange-900 to-zinc-900",
  hvac: "from-cyan-900 to-zinc-900",
  electrical: "from-yellow-900 to-zinc-900",
  "marine-mechanics": "from-blue-900 to-zinc-900",
  "heavy-equipment": "from-stone-700 to-zinc-900",
  millwright: "from-slate-700 to-zinc-900",
  "rail-maintenance": "from-red-900 to-zinc-900",
};

export function generateStaticParams() {
  return services.map((svc) => ({ slug: svc.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const svc = services.find((s) => s.slug === slug);
    if (!svc) return {};
    return buildMetadata({
      title: svc.metaTitle,
      description: svc.metaDescription,
      path: `/services/${svc.slug}`,
    });
  });
}

function formatSalary(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is ServiceData => !!s);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const related = getRelatedServices(svc.relatedServices);
  const gradient = tradeGradients[svc.slug] || "from-zinc-800 to-zinc-900";
  const salaryMax = svc.salaryRange.high;

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: svc.name,
              description: svc.summary,
              slug: svc.slug,
              salaryRange: svc.salaryRange,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(svc.faqs)) }}
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: svc.shortName, href: `/services/${svc.slug}` },
          ]}
        />
      </div>

      {/* Hero — dark with trade gradient */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${gradient} px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            {svc.primaryKeyword}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {svc.heroHeadline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {svc.heroSubheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Request {svc.shortName}
            </Link>
            <a
              href="tel:+18883050102"
              className="w-full rounded-lg border border-zinc-500 px-8 py-3.5 text-sm font-semibold text-zinc-200 hover:border-zinc-300 hover:text-white sm:w-auto"
            >
              Call (888) 305-0102
            </a>
          </div>
        </div>
      </section>

      {/* AI extraction summary */}
      <section className="border-b border-zinc-200 bg-blue-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium leading-6 text-zinc-800">
            {svc.summary}
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Content — 2/3 */}
          <div className="lg:col-span-2">
            {/* Industry overview */}
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Industry Overview
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              {svc.industryContext}
            </p>

            {/* Roles — card grid */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Roles We Fill
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              MasterTech recruits across the full spectrum of{" "}
              {svc.shortName.toLowerCase()} positions. Whether you need a single
              specialist or an entire crew, our team sources pre-vetted candidates
              with verified credentials.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {svc.typicalRoles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white">
                    {role.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-zinc-800">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            {/* Industries — pill tags */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Industries We Serve
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Our {svc.shortName.toLowerCase()} candidates work across multiple
              sectors. We understand the specific requirements, safety standards,
              and certifications each industry demands.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {svc.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700"
                >
                  {ind}
                </span>
              ))}
            </div>

            {/* Certifications — checklist */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Certifications We Verify
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Every candidate placed by MasterTech has their certifications
              verified directly with the issuing authority. Here are the key
              credentials we look for:
            </p>
            <div className="mt-6 space-y-3">
              {svc.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 rounded-lg bg-zinc-50 px-4 py-3"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-sm text-zinc-700">{cert}</span>
                </div>
              ))}
            </div>

            {/* How we staff — process steps */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Our {svc.shortName} Staffing Process
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: "1",
                  title: "You Tell Us What You Need",
                  desc: `Share the ${svc.shortName.toLowerCase()} roles you're trying to fill — position details, certifications required, timeline, and location.`,
                },
                {
                  step: "2",
                  title: "We Search Our Network",
                  desc: `Our ${svc.shortName.toLowerCase()}-specialized recruiters tap into our pre-vetted candidate network and begin targeted outreach within 24 hours.`,
                },
                {
                  step: "3",
                  title: "Candidates Are Screened & Verified",
                  desc: "Every candidate goes through certification verification, technical assessment, background check, drug screening, and reference calls.",
                },
                {
                  step: "4",
                  title: "You Interview & Hire",
                  desc: "We present qualified candidates within 14-21 days. You interview, select, and hire — direct, temp-to-hire, or contract.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ section */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 divide-y divide-zinc-200">
              {svc.faqs.map((faq) => (
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

          {/* Sidebar — 1/3 */}
          <aside className="mt-12 space-y-6 lg:mt-0">
            {/* Salary range — visual bar */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Salary Range
              </h2>
              <div className="mt-5 space-y-4">
                {[
                  {
                    label: "Entry Level",
                    value: svc.salaryRange.low,
                    color: "bg-zinc-300",
                  },
                  {
                    label: "Median",
                    value: svc.salaryRange.median,
                    color: "bg-blue-600",
                  },
                  {
                    label: "Experienced",
                    value: svc.salaryRange.high,
                    color: "bg-zinc-900",
                  },
                ].map((tier) => (
                  <div key={tier.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-600">{tier.label}</span>
                      <span className="font-semibold text-zinc-900">
                        {formatSalary(tier.value)}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className={`h-full rounded-full ${tier.color}`}
                        style={{
                          width: `${(tier.value / salaryMax) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-zinc-400">
                Source: {svc.salaryRange.source}
              </p>
            </div>

            {/* CTA card */}
            <div className="rounded-lg bg-zinc-900 p-6 text-white">
              <h2 className="text-lg font-bold">Need {svc.shortName}?</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Tell us what you need and we&apos;ll present qualified, vetted
                candidates within 14 days.
              </p>
              <Link
                href="/contact"
                className="mt-5 block rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
              <a
                href="tel:+18883050102"
                className="mt-2 block text-center text-sm text-zinc-400 hover:text-white"
              >
                or call (888) 305-0102
              </a>
            </div>

            {/* Related services */}
            {related.length > 0 && (
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Related Services
                </h2>
                <div className="mt-4 space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/services/${r.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-zinc-100 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50"
                    >
                      <div>
                        <p className="text-sm font-medium text-zinc-900 group-hover:text-blue-600">
                          {r.shortName}
                        </p>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {formatSalary(r.salaryRange.low)} &ndash;{" "}
                          {formatSalary(r.salaryRange.high)}
                        </p>
                      </div>
                      <svg
                        className="h-4 w-4 text-zinc-400 group-hover:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* View Jobs link */}
            <a
              href="https://mastertech.zohorecruit.com/jobs/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 hover:border-blue-300 hover:text-blue-600"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              View Open {svc.shortName} Jobs
            </a>
          </aside>
        </div>
      </div>

      {/* Bottom CTA — dark */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stop Losing Revenue to Unfilled {svc.shortName} Positions
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every day a skilled trades position stays open costs your business
            money in lost productivity, overtime, and missed contracts. MasterTech
            cuts your time-to-fill by up to 50%.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Request Candidates
            </Link>
            <Link
              href="/services"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
