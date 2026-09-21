import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  alternates: { canonical: "/clinics" },
  title: "Private Clinic Marketing Curaçao | Strategix",
  description:
    "Digital marketing, content, social media, websites and appointment systems for private clinics and medical practices in Curaçao.",
}

export default function ClinicsPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="clinics" />
    </>
  )
}
