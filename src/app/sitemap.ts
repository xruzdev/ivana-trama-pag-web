import { SITE_URL } from "@/config";
import { treatments } from "@/data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/sobre-mi`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/tratamientos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contacto`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = Object.keys(treatments).map((slug) => ({
    url: `${SITE_URL}/tratamientos/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
