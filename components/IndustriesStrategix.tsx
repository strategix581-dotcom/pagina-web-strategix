"use client"

import Link from "next/link"
import { useLanguage, type Language } from "@/components/LanguageProvider"

type Industry = {
  number: string
  title: string
  description: string
  tags: string
  href: string
}

const content: Record<
  Language,
  {
    eyebrow: string
    title: string
    intro: string
    industries: Industry[]
  }
> = {
  EN: {
    eyebrow: "WHO WE WORK WITH",
    title: "We understand the business behind the brand.",
    intro:
      "Marketing works differently when you understand the people, the pace and the reality of the business. These are the industries we know best.",
    industries: [
      {
        number: "01",
        title: "Restaurants & Food",
        description:
          "Restaurants, cafés, bakeries, food trucks and food businesses that need attention, stronger content and more customers.",
        tags: "RESTAURANTS · CAFÉS · BAKERIES · FOOD TRUCKS",
        href: "/restaurants",
      },
      {
        number: "02",
        title: "Beauty & Wellness",
        description:
          "Beauty salons, spas, nail salons, barbershops and wellness businesses that depend on visibility, trust and consistent bookings.",
        tags: "SALONS · SPAS · NAIL SALONS · BARBERS",
        href: "/beauty",
      },
      {
        number: "03",
        title: "Healthcare & Dental",
        description:
          "Private clinics, medical practices and dental businesses that need trust, authority and a digital presence that turns attention into appointments.",
        tags: "CLINICS · MEDICAL · DENTAL · PRIVATE PRACTICES",
        href: "/healthcare",
      },
    ],
  },

  ES: {
    eyebrow: "CON QUIÉNES TRABAJAMOS",
    title: "Entendemos el negocio detrás de la marca.",
    intro:
      "El marketing funciona diferente cuando entiendes a las personas, el ritmo y la realidad del negocio. Estos son los sectores que conocemos mejor.",
    industries: [
      {
        number: "01",
        title: "Restaurantes y Comida",
        description:
          "Restaurantes, cafés, panaderías, food trucks y negocios de comida que necesitan llamar la atención, mejor contenido y más clientes.",
        tags: "RESTAURANTES · CAFÉS · PANADERÍAS · FOOD TRUCKS",
        href: "/restaurants",
      },
      {
        number: "02",
        title: "Beauty & Wellness",
        description:
          "Salones de belleza, spas, nail salons, barberías y negocios de wellness que dependen de la visibilidad, la confianza y las reservas constantes.",
        tags: "SALONES · SPAS · NAIL SALONS · BARBERÍAS",
        href: "/beauty",
      },
      {
        number: "03",
        title: "Healthcare & Dental",
        description:
          "Clínicas privadas, centros médicos y negocios de odontología que necesitan transmitir confianza, autoridad y convertir atención en citas.",
        tags: "CLÍNICAS · MÉDICOS · ODONTOLOGÍA · CONSULTORIOS",
        href: "/healthcare",
      },
    ],
  },

  PAP: {
    eyebrow: "KEN NOS TA TRABOU KU",
    title: "Nos ta komprondé e negoshi tras di e marka.",
    intro:
      "Marketing ta traha diferente ora bo ta komprondé e hende, e ritmo i e realidat di e negoshi. Esakinan ta e sektor nan ku nos konosé mihó.",
    industries: [
      {
        number: "01",
        title: "Restorant i Komida",
        description:
          "Restorant, café, panaderia, food truck i negoshi di komida ku tin mester di atenshon, mihó kontenido i mas kliente.",
        tags: "RESTORANT · CAFÉ · PANADERIA · FOOD TRUCK",
        href: "/restaurants",
      },
      {
        number: "02",
        title: "Beauty & Wellness",
        description:
          "Salon di belleza, spa, nail salon, barberia i negoshi di wellness ku ta depende di visibilidat, konfiansa i reservashonnan.",
        tags: "SALON · SPA · NAIL SALON · BARBERIA",
        href: "/beauty",
      },
      {
        number: "03",
        title: "Healthcare & Dental",
        description:
          "Klinika privá, sentro médiko i negoshi di odontologia ku tin mester di konfiansa, autoridad i un presensia digital fuerte.",
        tags: "KLINIKA · MÉDIKO · ODONTOLOGIA · KONSULTORIO",
        href: "/healthcare",
      },
    ],
  },
}

export default function IndustriesStrategix() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section className="industries-strategix" id="industries">
      <div className="industries-header">
        <div className="industries-title">
          <span className="industries-eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>

        <p>{t.intro}</p>
      </div>

      <div className="industries-grid">
        {t.industries.map((industry) => (
          <Link
            href={industry.href}
            className="industry-card"
            key={industry.number}
          >
            <div className="industry-top">
              <span>{industry.number}</span>
              <span className="industry-arrow">↗</span>
            </div>

            <div className="industry-main">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>

            <div className="industry-bottom">
              <span>{industry.tags}</span>
              <span>EXPLORE ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
