import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"


export default function BeautyPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="beauty" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/beauty", (await params).locale)
}
