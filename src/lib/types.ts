export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  summary: string;
  heroHeadline: string;
  heroSubheadline: string;
  industryContext: string;
  certifications: string[];
  typicalRoles: string[];
  salaryRange: {
    low: number;
    median: number;
    high: number;
    source: string;
  };
  industries: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  relatedBlogSlugs: string[];
  relatedLocations: string[];
}

export interface LocationData {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  stateSlug: string;
  tier: number;
  metro: string;
  population: number;
  coordinates: { lat: number; lng: number };
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  industryContext: string;
  keyIndustries: string[];
  majorEmployers: string[];
  laborMarketNotes: string;
  landmarks: string[];
  topTradesNeeded: string[];
}

export interface LocationsFile {
  tiers: Record<string, string>;
  locations: LocationData[];
}
