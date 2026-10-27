import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"


export default function RestaurantsPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="restaurants" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/restaurants", (await params).locale)
}
