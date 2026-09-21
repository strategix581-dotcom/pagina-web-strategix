import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/better-content" },
  title: "Fotografía y Reels para negocios en Curaçao | Strategix",
  description:
    "¿Tus fotos no muestran la calidad de tu negocio? Creamos fotografía, video y Reels en Curaçao. Reels desde 200 XCG y fotos desde 350 XCG.",
}

export default function BetterContentPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="better-content" />
    </>
  )
}
