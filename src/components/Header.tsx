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
    <header className="sticky top-0 z-50 bg-zinc-900">
      {/* Top bar — contact + social */}
      <div className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <a href="tel:+18883050102" className="hover:text-white">
              +1 (888) 305-0102
            </a>
            <a href="mailto:info@mastertech.work" className="hidden hover:text-white sm:inline">
              info@mastertech.work
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/mastertech.work/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/mastertechwork"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/mastertechwork"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-zinc-400 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          Master<span className="text-blue-400">Tech</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-white"
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
              <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-lg border border-zinc-700 bg-zinc-800 py-2 shadow-lg">
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/employers" className="hover:text-white">
            Employers
          </Link>
          <Link href="/how-it-works" className="hover:text-white">
            How It Works
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/blog" className="hover:text-white">
            Articles
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <a
            href="https://mastertech.zohorecruit.com/jobs/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-500 px-4 py-2 text-blue-400 hover:bg-blue-600 hover:text-white"
          >
            View Jobs
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-6 w-6 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <div className="border-t border-zinc-800 bg-zinc-900 px-4 pb-4 pt-2 md:hidden">
          <Link href="/" className="block py-2 text-sm font-medium text-zinc-300" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="block py-2 text-sm font-medium text-zinc-300" onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="block py-1.5 pl-4 text-sm text-zinc-400"
              onClick={() => setMobileOpen(false)}
            >
              {svc.name}
            </Link>
          ))}
          <Link href="/employers" className="block py-2 text-sm font-medium text-zinc-300" onClick={() => setMobileOpen(false)}>
            Employers
          </Link>
          <Link href="/how-it-works" className="block py-2 text-sm font-medium text-zinc-300" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/about" className="block py-2 text-sm font-medium text-zinc-300" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/blog" className="block py-2 text-sm font-medium text-zinc-300" onClick={() => setMobileOpen(false)}>
            Articles
          </Link>
          <Link href="/contact" className="block py-2 text-sm font-medium text-zinc-300" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="https://mastertech.zohorecruit.com/jobs/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-blue-500 px-4 py-2 text-center text-sm font-medium text-blue-400"
              onClick={() => setMobileOpen(false)}
            >
              View Jobs
            </a>
            <Link
              href="/contact"
              className="block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
