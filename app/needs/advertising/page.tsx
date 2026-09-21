import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/advertising" },
  title: "Anuncios de Instagram y Facebook en Curaçao | Strategix",
  description:
    "¿Tus anuncios reciben vistas pero pocas consultas? Creamos campañas de Meta Ads con objetivo, contenido y medición claros. Presupuesto publicitario aparte.",
}

export default function AdvertisingPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="advertising" />
    </>
  )
}
