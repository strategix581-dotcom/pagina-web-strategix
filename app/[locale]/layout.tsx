import { notFound } from "next/navigation"
import { isLocale, locales, type Language } from "@/lib/locales"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import { LanguageProvider } from "@/components/LanguageProvider"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/next"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider language={locale.toUpperCase() as Language}>
          {children}
          <Footer />
          <GoogleAnalytics />
        </LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://strategixcuracao.com/#organization",
          name: "Strategix",
          alternateName: "strategix growth",
          url: "https://strategixcuracao.com",
          logo: "https://strategixcuracao.com/logo-strategix.png",
          telephone: "+59996931075",
          areaServed: "Curaçao",
          sameAs: ["https://www.instagram.com/strategix_growth/", "https://www.facebook.com/profile.php?id=61556893602074"],
        }).replace(/</g, "\\u003c") }} />
        <Analytics />
      </body>
    </html>
  )
}
