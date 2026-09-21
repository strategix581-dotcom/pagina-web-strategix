import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  alternates: { canonical: "/clinics" },
  title: "Marketing para clínicas privadas en Curaçao | Strategix",
  description:
    "Una web clara, contenido profesional y citas fáciles de solicitar para clínicas privadas en Curaçao. Estrategia digital según las necesidades de tu práctica.",
}

export default function ClinicsPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="clinics" />
    </>
  )
}
