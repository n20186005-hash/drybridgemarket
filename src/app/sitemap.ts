import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { nearby, nearbyLocales, nearbyPath } from "@/data/nearby";

const origin = "https://www.drybridgemarket.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const visitorPages = ["/", "/opening-hours", "/photos", "/blog"];
  const editorialPages = blogs.map(({ slug }) => `/blog/${slug}`);

  return nearbyLocales.flatMap((locale) => {
    const prefix = locale === "en" ? "" : `/${locale}`;
    const localizedPages = [...visitorPages, ...editorialPages].map((path) =>
      prefix ? prefix + (path === "/" ? "" : path) : path
    );

    return [...localizedPages, ...nearby.map(({ slug }) => nearbyPath(locale, slug))]
      .map((path) => ({ url: origin + path }));
  });
}
