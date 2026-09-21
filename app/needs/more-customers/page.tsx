import Navbar from "@/components/Navbar"
import NeedPage from "@/components/needs/NeedPage"

export const metadata = {
  alternates: { canonical: "/needs/more-customers" },
  title: "Get More Customers | Strategix Curaçao",
  description:
    "Marketing strategies, content, social media and advertising designed to help businesses attract more customers in Curaçao.",
}

export default function MoreCustomersPage() {
  return (
    <>
      <Navbar />
      <NeedPage slug="more-customers" />
    </>
  )
}
