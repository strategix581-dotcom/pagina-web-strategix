import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"


export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="social-media" />
    </>
  )
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/needs/social-media", (await params).locale)
}
