import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  title: "Meta Ads & Digital Advertising | Strategix Curaçao",
  description:
    "Meta Ads and digital advertising campaigns designed to reach the right audience and generate enquiries, bookings and sales.",
}

export default function AdvertisingPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="advertising" />
    </>
  )
}
