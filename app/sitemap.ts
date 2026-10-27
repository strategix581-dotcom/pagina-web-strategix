import type { MetadataRoute } from "next"
import { pagePaths, siteUrl } from "@/lib/seo"
import { locales, localizedPath } from "@/lib/locales"

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.flatMap(path => locales.map(locale => ({
    url: siteUrl + localizedPath(path, locale),
    alternates: { languages: Object.fromEntries(locales.map(l => [l, siteUrl + localizedPath(path, l)])) },
  })))
}
