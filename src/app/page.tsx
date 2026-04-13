import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Skilled Trades Recruitment Agency | MasterTech",
    description:
      "MasterTech is a specialized skilled trades staffing agency. We recruit diesel mechanics, aviation techs, CNC machinists, welders, HVAC techs, and electricians nationwide.",
    path: "/",
  });
}

const trades = [
  { slug: "diesel-mechanics", name: "Diesel Mechanics", desc: "Heavy duty diesel technicians for fleet maintenance and trucking" },
  { slug: "aviation-maintenance", name: "Aviation Maintenance", desc: "FAA-certificated A&P mechanics and avionics technicians" },
  { slug: "cnc-machining", name: "CNC Machining", desc: "CNC operators, programmers, and setup technicians" },
  { slug: "welding", name: "Welding", desc: "Certified MIG, TIG, stick, and pipe welders" },
  { slug: "hvac", name: "HVAC", desc: "HVAC installers, service techs, and controls specialists" },
  { slug: "electrical", name: "Electrical", desc: "Licensed journeyman and master electricians" },
  { slug: "marine-mechanics", name: "Marine Mechanics", desc: "Marine diesel mechanics and shipyard technicians" },
  { slug: "heavy-equipment", name: "Heavy Equipment", desc: "Cat, Deere, Komatsu, and Volvo equipment technicians" },
  { slug: "millwright", name: "Millwright", desc: "Precision alignment, rigging, and machinery installation" },
  { slug: "rail-maintenance", name: "Rail Maintenance", desc: "Locomotive mechanics, signal techs, and track workers" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Skilled Trades Recruitment Agency
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            MasterTech connects employers with qualified tradespeople across 10
            specialized verticals. From diesel mechanics to aviation maintenance
            technicians, we reduce your time-to-fill by up to 50%.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-zinc-600 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-zinc-400 hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900">
            10 Specialized Trade Verticals
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            We&apos;re not a generalist staffing agency. Every recruiter at
            MasterTech specializes in a specific skilled trade.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={`/services/${trade.slug}`}
                className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600">
                  {trade.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{trade.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Can&apos;t Find Qualified Tradespeople?</h2>
          <p className="mt-4 text-lg text-blue-100">
            The average skilled trades position takes 45+ days to fill. MasterTech
            cuts that in half with our pre-vetted network of certified technicians.
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
