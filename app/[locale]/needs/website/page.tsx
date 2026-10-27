import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"


export default function WebsitePage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="website" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/needs/website", (await params).locale)
}
