import type { MetadataRoute } from "next";
import { serviceCatalog } from "../lib/commercialData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aps-pa.com";
  const routes = ["", "/services", "/commercial-work", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8
    })),
    ...serviceCatalog.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: service.slug === "exterior-facilities-maintenance" ? 0.9 : 0.7
    }))
  ];
}

