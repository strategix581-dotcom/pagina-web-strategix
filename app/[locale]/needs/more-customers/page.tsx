import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"


export default function MoreCustomersPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="more-customers" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/needs/more-customers", (await params).locale)
}
