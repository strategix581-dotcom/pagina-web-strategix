import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  title: "Healthcare & Dental Marketing Curaçao | Strategix",
  description:
    "Marketing, content, social media, advertising, websites and appointment systems for private clinics, medical practices and dental businesses in Curaçao.",
}

export default function HealthcarePage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="clinics" />
    </>
  )
}
