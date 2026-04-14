import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import locationsFile from "../../../data/locations.json";
import type { LocationsFile } from "@/lib/types";

const data = locationsFile as LocationsFile;
const locations = data.locations;

export function generateMetadata() {
  return buildMetadata({
    title: "Skilled Trades Staffing Locations | MasterTech",
    description:
      "MasterTech recruits skilled tradespeople in 30+ US metros. Find diesel mechanics, welders, electricians, and HVAC techs in your city. Contact us.",
    path: "/locations",
  });
}

const tierLabels: Record<number, string> = {
  1: "Primary Markets",
  2: "Regional Markets",
  3: "Emerging Markets",
};

function formatPop(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  return `${(n / 1_000).toFixed(0)}K`;
}

export default function LocationsHub() {
  const tiers = [1, 2, 3];

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Locations", href: "/locations" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Nationwide Coverage
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Skilled Trades Staffing Locations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            MasterTech has active recruiting networks in 30+ US metro markets.
            We go where the trades work is — from energy hubs to manufacturing
            corridors to logistics centers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {locations.length}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Metro Markets
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {new Set(locations.map((l) => l.stateSlug)).size}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-600">States</p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {(
                  locations.reduce((sum, l) => sum + l.population, 0) / 1_000_000
                ).toFixed(0)}
                M+
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                Metro Population Covered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location tiers */}
      {tiers.map((tier) => {
        const tierLocs = locations.filter((l) => l.tier === tier);
        if (tierLocs.length === 0) return null;
        return (
          <section
            key={tier}
            className={`px-4 py-16 sm:px-6 lg:px-8 ${tier % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                {tierLabels[tier]}
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                {data.tiers[String(tier)]}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tierLocs.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.stateSlug}/${loc.slug}`}
                    className="group rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-blue-300 hover:bg-blue-50"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600">
                          {loc.city}, {loc.stateAbbr}
                        </h3>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {loc.metro} &middot; Pop. {formatPop(loc.population)}
                        </p>
                      </div>
                      <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">
                        Tier {loc.tier}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {loc.keyIndustries.slice(0, 3).map((ind) => (
                        <span
                          key={ind}
                          className="rounded bg-zinc-50 px-2 py-0.5 text-xs text-zinc-600"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-blue-600 font-medium group-hover:underline">
                      View staffing details &rarr;
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Don&apos;t See Your City?
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We recruit nationwide. Even if your metro isn&apos;t listed, MasterTech
            can source qualified tradespeople for your location.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
          >
            Tell Us Where You Need Workers
          </Link>
        </div>
      </section>
    </>
  );
}
