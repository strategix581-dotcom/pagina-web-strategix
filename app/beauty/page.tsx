import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  alternates: { canonical: "/beauty" },
  title: "Marketing para salones de belleza en Curaçao | Strategix",
  description:
    "¿Tienes huecos en tu agenda? Creamos contenido, redes y opciones de reserva para salones, spas y negocios de belleza en Curaçao. Paquetes desde 900 XCG.",
}

export default function BeautyPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="beauty" />
    </>
  )
}
