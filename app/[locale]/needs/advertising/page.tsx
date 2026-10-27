import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"


export default function AdvertisingPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="advertising" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/needs/advertising", (await params).locale)
}
