import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"


export default function DentalPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="dental" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/dental", (await params).locale)
}
