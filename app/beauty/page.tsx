import Navbar from "@/components/Navbar"
import IndustryPage from "@/components/industries/IndustryPage"

export const metadata = {
  alternates: { canonical: "/beauty" },
  title: "Beauty & Wellness Marketing Curaçao | Strategix",
  description:
    "Marketing, content, social media, advertising and booking systems for beauty salons, spas, nail salons and barbershops in Curaçao.",
}

export default function BeautyPage() {
  return (
    <>
      <Navbar />
      <IndustryPage industry="beauty" />
    </>
  )
}
