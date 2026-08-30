import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/LanguageProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Strategix | Marketing & Creative Agency Curaçao",
  description:
    "Strategix helps restaurants, beauty businesses and local brands get more customers through content, social media, advertising, websites and online bookings.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
