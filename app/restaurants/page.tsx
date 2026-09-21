import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  alternates: { canonical: "/restaurants" },
  title: "Restaurant Marketing Curaçao | Strategix",
  description:
    "Restaurant marketing, food photography, video, social media and advertising for restaurants and food businesses in Curaçao.",
}

export default function RestaurantsPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="restaurants" />
    </>
  )
}
