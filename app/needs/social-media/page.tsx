import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/social-media" },
  title: "Manejo de redes sociales en Curaçao | Strategix",
  description:
    "¿No tienes tiempo para publicar en Instagram y Facebook? Planificamos y creamos contenido para tu negocio en Curaçao. Paquetes desde 900 XCG al mes.",
}

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="social-media" />
    </>
  )
}
