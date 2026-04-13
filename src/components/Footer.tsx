import Link from "next/link";

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

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/locations", label: "Locations" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Master<span className="text-blue-400">Tech</span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Specialized skilled trades recruitment agency. Connecting employers
              with qualified tradespeople across 10 verticals nationwide.
            </p>
            <div className="mt-4 text-sm">
              <a href="tel:+18883050102" className="block hover:text-white">
                +1 (888) 305-0102
              </a>
              <a href="mailto:info@mastertech.work" className="block hover:text-white">
                info@mastertech.work
              </a>
            </div>
          </div>

          {/* Services col 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-3 space-y-2">
              {services.slice(0, 5).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-sm hover:text-white"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              More Services
            </h3>
            <ul className="mt-3 space-y-2">
              {services.slice(5).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-sm hover:text-white"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/company/mastertech-work"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MasterTech on LinkedIn"
                className="hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} MasterTech. All rights reserved. A
          division of Easy Outsource / BayStreet Staffing.
        </div>
      </div>
    </footer>
  );
}
