import type { MetadataRoute } from "next";
import servicesData from "../../data/services.json";
import locationsFile from "../../data/locations.json";
import { getAllPosts } from "@/lib/blog";
import type { ServiceData, LocationsFile } from "@/lib/types";

const SITE_URL = "https://mastertech.work";

const services = servicesData as ServiceData[];
const locations = (locationsFile as LocationsFile).locations;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static top-level pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/employers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/tools/vacancy-cost-estimator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((svc) => ({
    url: `${SITE_URL}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Location pages — tier 1 gets higher priority
  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${SITE_URL}/locations/${loc.stateSlug}/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: loc.tier === 1 ? 0.8 : loc.tier === 2 ? 0.7 : 0.6,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
