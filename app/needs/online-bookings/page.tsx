import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/online-bookings" },
  title: "Sistemas de reservas online en Curaçao | Strategix",
  description:
    "¿Pierdes citas entre mensajes y llamadas? Creamos webs con reservas para que tus clientes puedan dar el siguiente paso. Desde 2.500 XCG según alcance.",
}

export default function OnlineBookingsPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="online-bookings" />
    </>
  )
}
