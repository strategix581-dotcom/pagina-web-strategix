import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/website" },
  title: "Website Design Curaçao | Strategix",
  description:
    "Strategic website design and development for restaurants, beauty businesses, clinics and local businesses in Curaçao.",
}

export default function WebsitePage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="website" />
    </>
  )
}
