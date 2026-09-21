import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  alternates: { canonical: "/restaurants" },
  title: "Marketing y contenido para restaurantes en Curaçao | Strategix",
  description:
    "¿Tu restaurante no se ve tan bien en redes como en persona? Fotografía gastronómica, Reels y manejo de redes en Curaçao. Paquetes desde 900 XCG al mes.",
}

export default function RestaurantsPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="restaurants" />
    </>
  )
}
