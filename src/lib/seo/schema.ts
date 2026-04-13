/**
 * Schema.org JSON-LD generators for MasterTech SEO.
 *
 * Usage: call a builder, spread the result into a <script type="application/ld+json"> tag.
 * Every page should include organizationSchema() via the root layout.
 * Service pages add serviceSchema() + faqSchema().
 * Blog posts add blogPostingSchema().
 * Location pages add localBusinessSchema().
 * Interior pages add breadcrumbSchema().
 */

const SITE_URL = "https://mastertech.work";
const SITE_NAME = "MasterTech";
const LOGO_URL = `${SITE_URL}/images/mastertech-logo.png`;
const LINKEDIN_URL = "https://www.linkedin.com/company/mastertech-work";

// ---------------------------------------------------------------------------
// Organization + EmploymentAgency (site-wide, injected in root layout)
// ---------------------------------------------------------------------------

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EmploymentAgency"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: "MasterTech Skilled Trades Recruitment",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
          width: 300,
          height: 60,
        },
        description:
          "MasterTech is a specialized skilled trades recruitment agency connecting employers with qualified tradespeople across 10 verticals: diesel mechanics, aviation maintenance, CNC machining, welding, HVAC, electrical, marine mechanics, heavy equipment, millwright, and rail maintenance.",
        parentOrganization: {
          "@type": "Organization",
          name: "Easy Outsource / BayStreet Staffing",
        },
        sameAs: [LINKEDIN_URL],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-888-305-0102",
          email: "info@mastertech.work",
          contactType: "customer service",
          availableLanguage: "English",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        knowsAbout: [
          "Diesel Mechanic Staffing",
          "Aviation Maintenance Recruiting",
          "CNC Machinist Staffing",
          "Welder Staffing",
          "HVAC Technician Recruiting",
          "Electrician Staffing",
          "Marine Mechanic Staffing",
          "Heavy Equipment Mechanic Recruiting",
          "Millwright Staffing",
          "Rail Maintenance Technician Staffing",
        ],
        serviceType: [
          "Direct Hire Placement",
          "Temp-to-Hire Staffing",
          "Contract Staffing",
          "Emergency Skilled Trades Placement",
        ],
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Service schema (one per service page)
// ---------------------------------------------------------------------------

interface ServiceSchemaInput {
  name: string;
  description: string;
  slug: string;
  salaryRange?: { low: number; median: number; high: number };
}

export function serviceSchema({
  name,
  description,
  slug,
  salaryRange,
}: ServiceSchemaInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: `${name} Staffing & Recruiting`,
  };

  if (salaryRange) {
    schema.offers = {
      "@type": "AggregateOffer",
      lowPrice: salaryRange.low,
      highPrice: salaryRange.high,
      priceCurrency: "USD",
      description: `Annual salary range for ${name} positions`,
    };
  }

  return schema;
}

// ---------------------------------------------------------------------------
// FAQPage schema
// ---------------------------------------------------------------------------

interface FAQ {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// BlogPosting schema
// ---------------------------------------------------------------------------

interface BlogPostSchemaInput {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
}

export function blogPostingSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName = "MasterTech Team",
  imageUrl,
}: BlogPostSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList schema
// ---------------------------------------------------------------------------

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ---------------------------------------------------------------------------
// LocalBusiness schema (location pages)
// ---------------------------------------------------------------------------

interface LocationSchemaInput {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  stateSlug: string;
  description: string;
  coordinates: { lat: number; lng: number };
}

export function localBusinessSchema({
  city,
  state,
  stateAbbr,
  slug,
  stateSlug,
  description,
  coordinates,
}: LocationSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: `MasterTech Skilled Trades Staffing — ${city}, ${stateAbbr}`,
    description,
    url: `${SITE_URL}/locations/${stateSlug}/${slug}`,
    telephone: "+1-888-305-0102",
    email: "info@mastertech.work",
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: state,
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    },
    parentOrganization: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

// ---------------------------------------------------------------------------
// Helper: render schema as a <script> tag string (for dangerouslySetInnerHTML)
// ---------------------------------------------------------------------------

export function jsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
