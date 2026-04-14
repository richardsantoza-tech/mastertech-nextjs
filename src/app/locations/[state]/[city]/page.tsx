import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  localBusinessSchema,
  faqSchema,
  jsonLd,
} from "@/lib/seo/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import locationsFile from "../../../../../data/locations.json";
import servicesData from "../../../../../data/services.json";
import type { LocationsFile, LocationData, ServiceData } from "@/lib/types";

const data = locationsFile as LocationsFile;
const locations = data.locations;
const services = servicesData as ServiceData[];

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return locations.map((loc) => ({
    state: loc.stateSlug,
    city: loc.slug,
  }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  return params.then(({ city }) => {
    const loc = locations.find((l) => l.slug === city);
    if (!loc) return {};
    return buildMetadata({
      title: loc.metaTitle,
      description: loc.metaDescription,
      path: `/locations/${loc.stateSlug}/${loc.slug}`,
    });
  });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getTradeServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is ServiceData => !!s);
}

function formatPop(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} million`;
  return `${(n / 1_000).toFixed(0)},000`;
}

function buildLocationFaqs(loc: LocationData, topServices: ServiceData[]) {
  const tradeList = topServices.map((s) => s.shortName.toLowerCase()).join(", ");
  return [
    {
      question: `What skilled trades does MasterTech staff in ${loc.city}, ${loc.stateAbbr}?`,
      answer: `MasterTech provides staffing for ${tradeList} in the ${loc.city} metro area. We recruit across all 10 of our trade verticals, with particular focus on the trades most in demand in ${loc.city}'s key industries: ${loc.keyIndustries.slice(0, 3).join(", ")}.`,
    },
    {
      question: `How fast can MasterTech fill a skilled trades position in ${loc.city}?`,
      answer: `For most positions in the ${loc.metro} metro, MasterTech presents qualified candidates within 14-21 days. Emergency placements can be completed in 5-7 business days depending on the trade, certification requirements, and specific location within the metro.`,
    },
    {
      question: `What industries does MasterTech serve in ${loc.city}, ${loc.stateAbbr}?`,
      answer: `In ${loc.city}, we serve employers across ${loc.keyIndustries.join(", ")}. Our recruiters understand the specific certifications, safety standards, and workforce demands of each industry in the ${loc.city} market.`,
    },
    {
      question: `Does MasterTech have an office in ${loc.city}?`,
      answer: `MasterTech serves the ${loc.metro} metro through our nationwide recruiting network. While we may not have a physical office in ${loc.city}, our trade-specialized recruiters work directly with ${loc.city}-area employers and maintain active candidate networks in the region.`,
    },
    {
      question: `What are the typical salary ranges for skilled trades in ${loc.city}?`,
      answer: `Salary ranges in the ${loc.city} metro vary by trade and experience level. ${topServices[0]?.shortName || "Diesel mechanic"} positions typically range from ${topServices[0] ? `$${(topServices[0].salaryRange.low / 1000).toFixed(0)}K to $${(topServices[0].salaryRange.high / 1000).toFixed(0)}K` : "$45K to $78K"} annually. Contact MasterTech for current salary benchmarks specific to ${loc.city}.`,
    },
  ];
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function LocationPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { city: citySlug } = await params;
  const loc = locations.find((l) => l.slug === citySlug);
  if (!loc) notFound();

  const topServices = getTradeServices(loc.topTradesNeeded);
  const faqs = buildLocationFaqs(loc, topServices);

  // Find nearby locations in same state or neighboring tier
  const nearby = locations
    .filter(
      (l) =>
        l.slug !== loc.slug &&
        (l.stateSlug === loc.stateSlug || l.tier === loc.tier)
    )
    .slice(0, 4);

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            localBusinessSchema({
              city: loc.city,
              state: loc.state,
              stateAbbr: loc.stateAbbr,
              slug: loc.slug,
              stateSlug: loc.stateSlug,
              description: loc.metaDescription,
              coordinates: loc.coordinates,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }}
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Locations", href: "/locations" },
            {
              name: `${loc.city}, ${loc.stateAbbr}`,
              href: `/locations/${loc.stateSlug}/${loc.slug}`,
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            {loc.primaryKeyword}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Skilled Trades Staffing in {loc.city}, {loc.stateAbbr}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            MasterTech recruits qualified tradespeople for employers across the{" "}
            {loc.metro} metro area. From {topServices[0]?.shortName.toLowerCase() || "diesel mechanics"} to{" "}
            {topServices[topServices.length - 1]?.shortName.toLowerCase() || "electricians"}, we source
            pre-vetted, certified candidates for your operation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Hire in {loc.city}
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

      {/* Metro stats bar */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {formatPop(loc.population)}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Metro Population
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {loc.keyIndustries.length}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Key Industries
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {loc.majorEmployers.length}+
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Major Employers
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {loc.topTradesNeeded.length}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                In-Demand Trades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI summary */}
      <section className="border-b border-zinc-200 bg-blue-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium leading-6 text-zinc-800">
            MasterTech provides skilled trades staffing services across the{" "}
            {loc.metro} metropolitan area. We recruit{" "}
            {topServices.map((s) => s.shortName.toLowerCase()).join(", ")} for
            employers in {loc.keyIndustries.slice(0, 3).join(", ")}, and more.
            With a metro population of {formatPop(loc.population)},{" "}
            {loc.city} is one of the most active skilled trades markets in the US.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Content — 2/3 */}
          <div className="lg:col-span-2">
            {/* Industry context */}
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              {loc.city}&apos;s Skilled Trades Market
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              {loc.industryContext}
            </p>

            {/* Labor market */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Labor Market Overview
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              {loc.laborMarketNotes}
            </p>

            {/* Key industries */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Key Industries in {loc.city}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {loc.keyIndustries.map((ind) => (
                <div
                  key={ind}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-zinc-900 text-xs font-bold text-white">
                    {ind.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-zinc-800">
                    {ind}
                  </span>
                </div>
              ))}
            </div>

            {/* Major employers */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Major Employers in the {loc.city} Area
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              The {loc.metro} metro is home to major employers across multiple
              industries, each requiring skilled trades professionals for
              operations, maintenance, and construction.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {loc.majorEmployers.map((emp) => (
                <span
                  key={emp}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700"
                >
                  {emp}
                </span>
              ))}
            </div>

            {/* Landmarks / areas */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Key {loc.city} Industrial Areas &amp; Landmarks
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              MasterTech serves employers across the entire {loc.metro} metro,
              including these major industrial zones and employment centers:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {loc.landmarks.map((lm) => (
                <div
                  key={lm}
                  className="flex items-center gap-3 rounded-lg bg-zinc-50 px-4 py-3"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm text-zinc-700">{lm}</span>
                </div>
              ))}
            </div>

            {/* Trades we staff here */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Trades We Staff in {loc.city}
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              While MasterTech covers all 10 trade verticals, these are the
              most in-demand skilled trades in the {loc.city} market:
            </p>
            <div className="mt-6 space-y-4">
              {topServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                >
                  <div>
                    <p className="font-semibold text-zinc-900 group-hover:text-blue-600">
                      {svc.shortName}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {svc.heroSubheadline}
                    </p>
                  </div>
                  <svg
                    className="h-5 w-5 text-zinc-400 group-hover:text-blue-600"
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

            {/* FAQ */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 divide-y divide-zinc-200">
              {faqs.map((faq) => (
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

          {/* Sidebar */}
          <aside className="mt-12 space-y-6 lg:mt-0">
            {/* CTA card */}
            <div className="rounded-lg bg-zinc-900 p-6 text-white">
              <h2 className="text-lg font-bold">
                Hiring in {loc.city}?
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Tell us what positions you need filled and we&apos;ll present
                qualified candidates from the {loc.metro} area within 14 days.
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

            {/* In-demand trades quick links */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                In-Demand Trades
              </h2>
              <div className="mt-4 space-y-2">
                {topServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {svc.shortName}
                    <span className="text-xs text-zinc-400">
                      ${(svc.salaryRange.median / 1000).toFixed(0)}K avg
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Nearby locations */}
            {nearby.length > 0 && (
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Nearby Locations
                </h2>
                <div className="mt-4 space-y-2">
                  {nearby.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/locations/${n.stateSlug}/${n.slug}`}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {n.city}, {n.stateAbbr}
                      <svg
                        className="h-4 w-4 text-zinc-400"
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

            {/* View Jobs */}
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
              View Jobs in {loc.city}
            </a>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Hire Skilled Tradespeople in {loc.city}?
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            MasterTech&apos;s pre-vetted network of certified technicians in the{" "}
            {loc.metro} metro means you interview qualified candidates — not
            unfiltered applicants.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 sm:w-auto"
            >
              Get In Touch
            </Link>
            <Link
              href="/locations"
              className="w-full rounded-lg border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-zinc-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
