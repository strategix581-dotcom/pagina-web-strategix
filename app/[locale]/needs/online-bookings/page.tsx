import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"


export default function OnlineBookingsPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="online-bookings" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/needs/online-bookings", (await params).locale)
}
