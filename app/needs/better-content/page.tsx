import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  title: "Business Content Creation | Strategix Curaçao",
  description:
    "Professional business photography, Reels, video and creative content for businesses in Curaçao.",
}

export default function BetterContentPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="better-content" />
    </>
  )
}
