import type { Metadata } from "next"
import { notFound } from "next/navigation"
import copy from "./seo-copy.json"
import { isLocale, localizedPath, locales } from "./locales"

export const siteUrl = "https://strategixcuracao.com"
export const pagePaths = Object.keys(copy)
export type LocalePageProps = { params: Promise<{ locale: string }> }

export function pageMetadata(path: string, locale: string): Metadata {
  if (!isLocale(locale)) notFound()
  const text = copy[path as keyof typeof copy][locale]
  const canonical = localizedPath(path, locale)
  return {
    ...text,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
      languages: { ...Object.fromEntries(locales.map(l => [l, localizedPath(path, l)])), "x-default": path },
    },
    openGraph: {
      ...text, type: "website", siteName: "Strategix", url: canonical,
      images: [{ url: "/share-image.png", width: 1200, height: 630, alt: "Strategix — Marketing · Photography · Video · Websites — Curaçao" }],
    },
    twitter: { card: "summary_large_image", ...text, images: ["/share-image.png"] },
  }
}
