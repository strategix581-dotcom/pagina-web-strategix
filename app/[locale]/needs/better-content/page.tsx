import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"


export default function BetterContentPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="better-content" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/needs/better-content", (await params).locale)
}
