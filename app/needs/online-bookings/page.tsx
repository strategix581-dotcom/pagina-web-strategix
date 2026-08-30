import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  title: "Online Booking Systems Curaçao | Strategix",
  description:
    "Online booking and appointment systems for salons, spas, clinics, dental practices and service businesses in Curaçao.",
}

export default function OnlineBookingsPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="online-bookings" />
    </>
  )
}
