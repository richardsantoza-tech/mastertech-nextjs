import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import servicesData from "../../../data/services.json";
import type { ServiceData } from "@/lib/types";

const services = servicesData as ServiceData[];

export function generateMetadata() {
  return buildMetadata({
    title: "Skilled Trades Staffing Services | MasterTech",
    description:
      "MasterTech staffs 10 skilled trade verticals: diesel mechanics, aviation, CNC, welding, HVAC, electrical, marine, heavy equipment, millwright, and rail.",
    path: "/services",
  });
}

function formatSalary(n: number) {
  return `$${(n / 1000).toFixed(0)}K`;
}

export default function ServicesHub() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Skilled Trades Staffing Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            MasterTech specializes in 10 trade verticals. Every recruiter on our
            team focuses on a specific skilled trade — so you get candidates who
            are vetted by someone who understands the work.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600">
                  {svc.shortName}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {svc.heroSubheadline}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                  <span>
                    {formatSalary(svc.salaryRange.low)} –{" "}
                    {formatSalary(svc.salaryRange.high)}
                  </span>
                  <span className="font-medium text-blue-600 group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Not Sure Which Service You Need?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Tell us what positions you&apos;re trying to fill and we&apos;ll match you with
            the right recruiting team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Talk to a Recruiter
          </Link>
        </div>
      </section>
    </>
  );
}
