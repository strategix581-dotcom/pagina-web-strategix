import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/website" },
  title: "Diseño de páginas web en Curaçao | Strategix",
  description:
    "¿Tus clientes no encuentran una explicación clara de tus servicios y precios? Diseñamos webs fáciles de usar en Curaçao. Landing desde 1.000 XCG.",
}

export default function WebsitePage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="website" />
    </>
  )
}
