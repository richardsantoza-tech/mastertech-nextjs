"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { slug: "diesel-mechanics", name: "Diesel Mechanics" },
  { slug: "aviation-maintenance", name: "Aviation Maintenance" },
  { slug: "cnc-machining", name: "CNC Machining" },
  { slug: "welding", name: "Welding" },
  { slug: "hvac", name: "HVAC" },
  { slug: "electrical", name: "Electrical" },
  { slug: "marine-mechanics", name: "Marine Mechanics" },
  { slug: "heavy-equipment", name: "Heavy Equipment" },
  { slug: "millwright", name: "Millwright" },
  { slug: "rail-maintenance", name: "Rail Maintenance" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900">
          Master<span className="text-blue-600">Tech</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg">
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="block px-4 py-2 text-sm text-zinc-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/locations" className="hover:text-blue-600">
            Locations
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-6 w-6 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 pb-4 pt-2 md:hidden">
          <Link
            href="/services"
            className="block py-2 text-sm font-medium text-zinc-700"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="block py-1.5 pl-4 text-sm text-zinc-600"
              onClick={() => setMobileOpen(false)}
            >
              {svc.name}
            </Link>
          ))}
          <Link
            href="/locations"
            className="block py-2 text-sm font-medium text-zinc-700"
            onClick={() => setMobileOpen(false)}
          >
            Locations
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-sm font-medium text-zinc-700"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="block py-2 text-sm font-medium text-zinc-700"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="mt-2 block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
