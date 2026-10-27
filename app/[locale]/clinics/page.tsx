import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"


export default function ClinicsPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="clinics" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/clinics", (await params).locale)
}
