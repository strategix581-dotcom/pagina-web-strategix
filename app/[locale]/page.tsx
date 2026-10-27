import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import Navbar from "@/components/Navbar"
import SimpleHome from "@/components/SimpleHome"

export default function Home() {
  return <><Navbar /><SimpleHome /></>
}

export async function generateMetadata({ params }: LocalePageProps) {
  return pageMetadata("/", (await params).locale)
}
