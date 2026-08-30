import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  title: "Social Media Management | Strategix Curaçao",
  description:
    "Social media management, content planning, Instagram and Facebook management for businesses in Curaçao.",
}

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="social-media" />
    </>
  )
}
