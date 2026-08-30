import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  title: "Dental Marketing Curaçao | Strategix",
  description:
    "Dental marketing, photography, video, social media, advertising and appointment systems for dental clinics in Curaçao.",
}

export default function DentalPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="dental" />
    </>
  )
}
