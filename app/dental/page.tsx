import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  alternates: { canonical: "/dental" },
  title: "Marketing para clínicas dentales en Curaçao | Strategix",
  description:
    "Ayudamos a clínicas dentales en Curaçao a explicar sus servicios y facilitar el contacto con web, contenido, redes sociales y sistemas de citas.",
}

export default function DentalPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="dental" />
    </>
  )
}
