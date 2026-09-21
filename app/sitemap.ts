import type { MetadataRoute } from "next"

const siteUrl = "https://strategixcuracao.com"

const paths = [
  "/",
  "/needs/better-content",
  "/needs/social-media",
  "/needs/advertising",
  "/needs/website",
  "/needs/online-bookings",
  "/needs/more-customers",
  "/restaurants",
  "/beauty",
  "/clinics",
  "/dental",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${siteUrl}${path}` }))
}
