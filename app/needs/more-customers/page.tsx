import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/more-customers" },
  title: "Marketing para atraer clientes en Curaçao | Strategix",
  description:
    "¿Tu negocio se ve en redes pero no recibe suficientes consultas? Unimos contenido, redes, anuncios y web según el problema real de tu negocio en Curaçao.",
}

export default function MoreCustomersPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="more-customers" />
    </>
  )
}
