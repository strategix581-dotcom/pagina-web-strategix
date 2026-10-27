import { permanentRedirect } from "next/navigation"
import { localizedPath, type Locale } from "@/lib/locales"
import type { LocalePageProps } from "@/lib/seo"

export default async function HealthcarePage({ params }: LocalePageProps) {
  permanentRedirect(localizedPath("/clinics", (await params).locale as Locale))
}
