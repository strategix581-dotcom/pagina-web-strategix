import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
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

export const metadata: Metadata = {
  metadataBase: new URL("https://strategixcuracao.com"),
  title: "Strategix | Marketing, contenido y soluciones digitales en Curaçao",
  description:
    "Contenido, redes sociales, diseño web, reservas y automatizaciones para negocios en Curaçao. Paquetes mensuales con precios claros y proyectos a medida.",
  keywords: [
    "marketing agency Curaçao",
    "social media Curaçao",
    "content creation Curaçao",
    "business photography Curaçao",
    "business video Curaçao",
    "Instagram management Curaçao",
    "Facebook advertising Curaçao",
    "website design Curaçao",
    "online bookings Curaçao",
  ],
  alternates: { canonical: "/" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>
          {children}
          <Footer />
          <GoogleAnalytics />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
