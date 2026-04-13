import type { Metadata } from "next";

const SITE_URL = "https://mastertech.work";
const SITE_NAME = "MasterTech Skilled Trades Recruitment";
const DEFAULT_DESCRIPTION =
  "MasterTech is a specialized skilled trades staffing agency. We recruit diesel mechanics, aviation techs, CNC machinists, welders, HVAC techs, electricians, and more.";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

/**
 * Build a Next.js Metadata object for any page.
 *
 * Usage in a page file:
 *   export function generateMetadata() {
 *     return buildMetadata({ title: "…", description: "…", path: "/services" });
 *   }
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}

/**
 * Root-level metadata for the site (used in layout.tsx).
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};
