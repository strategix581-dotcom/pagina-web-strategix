"use client"

import Link from "next/link"
import { useLanguage, type Language } from "@/components/LanguageProvider"

type Need = {
  number: string
  title: string
  description: string
  slug: string
}

const translations: Record<
  Language,
  {
    label: string
    status: string
    title1: string
    title2: string
    title3: string
    intro: string
    scroll: string
    start: string
    question: string
    bottom: string
    needs: Need[]
  }
> = {
  EN: {
    label: "CREATIVE MARKETING AGENCY · CURAÇAO",
    status: "AVAILABLE FOR PROJECTS",
    title1: "Your business",
    title2: "deserves to be",
    title3: "noticed.",
    intro:
      "Marketing shouldn't be complicated. Tell us what your business needs and we'll help you find the right solution.",
    scroll: "SCROLL TO EXPLORE",
    start: "START HERE",
    question: "What does your business need?",
    bottom: "FOOD · BEAUTY · HEALTHCARE",
    needs: [
      {
        number: "01",
        title: "I need more customers",
        description: "More people discovering and choosing my business.",
        slug: "more-customers",
      },
      {
        number: "02",
        title: "I need better content",
        description: "Professional photos, videos and Reels that stand out.",
        slug: "better-content",
      },
      {
        number: "03",
        title: "I need help with social media",
        description: "Someone to take care of my social presence.",
        slug: "social-media",
      },
      {
        number: "04",
        title: "I want to advertise",
        description: "Reach the right people through Facebook and Instagram.",
        slug: "advertising",
      },
      {
        number: "05",
        title: "I need a website",
        description: "A professional online presence for my business.",
        slug: "website",
      },
      {
        number: "06",
        title: "I want online bookings",
        description: "Make it easier for customers to book with me.",
        slug: "online-bookings",
      },
    ],
  },

  ES: {
    label: "AGENCIA DE MARKETING CREATIVO · CURAÇAO",
    status: "DISPONIBLES PARA PROYECTOS",
    title1: "Tu negocio",
    title2: "merece ser",
    title3: "notado.",
    intro:
      "El marketing no tiene por qué ser complicado. Cuéntanos qué necesita tu negocio y te ayudaremos a encontrar la solución adecuada.",
    scroll: "EXPLORA",
    start: "EMPIEZA AQUÍ",
    question: "¿Qué necesita tu negocio?",
    bottom: "FOOD · BEAUTY · HEALTHCARE",
    needs: [
      {
        number: "01",
        title: "Necesito más clientes",
        description: "Quiero que más personas descubran y elijan mi negocio.",
        slug: "more-customers",
      },
      {
        number: "02",
        title: "Necesito mejor contenido",
        description: "Fotos, videos y Reels profesionales que destaquen.",
        slug: "better-content",
      },
      {
        number: "03",
        title: "Necesito ayuda con mis redes",
        description: "Alguien que se encargue de mi presencia en redes sociales.",
        slug: "social-media",
      },
      {
        number: "04",
        title: "Quiero hacer publicidad",
        description: "Llegar a las personas correctas en Facebook e Instagram.",
        slug: "advertising",
      },
      {
        number: "05",
        title: "Necesito una página web",
        description: "Una presencia online profesional para mi negocio.",
        slug: "website",
      },
      {
        number: "06",
        title: "Quiero recibir reservas online",
        description: "Facilitar que mis clientes puedan reservar conmigo.",
        slug: "online-bookings",
      },
    ],
  },

  PAP: {
    label: "AGENSIA DI MARKETING KREATIVO · KÒRSOU",
    status: "DISPONÍ PA PROYEKTONAN",
    title1: "Bo negoshi",
    title2: "meresé pa",
    title3: "wordó.",
    intro:
      "Marketing no mester ta kompliká. Konta nos kiko bo negoshi tin mester i nos lo yuda bo haña e solushon ku ta bon pa bo.",
    scroll: "MIRA MAS",
    start: "KUMINSÁ AKÍ",
    question: "Kiko bo negoshi tin mester?",
    bottom: "KOMIDA · BEAUTY · HEALTHCARE",
    needs: [
      {
        number: "01",
        title: "Mi tin mester di mas kliente",
        description: "Mas hende ku ta deskubrí i skohe pa bo negoshi.",
        slug: "more-customers",
      },
      {
        number: "02",
        title: "Mi tin mester di mihó kontenido",
        description: "Foto, video i Reels profesional ku ta destaká.",
        slug: "better-content",
      },
      {
        number: "03",
        title: "Mi tin mester di yudansa ku social media",
        description: "Alguén ku ta kuida bo presensia online.",
        slug: "social-media",
      },
      {
        number: "04",
        title: "Mi ke hasi propaganda",
        description:
          "Alkansá e personanan korekto riba Facebook i Instagram.",
        slug: "advertising",
      },
      {
        number: "05",
        title: "Mi tin mester di un website",
        description: "Un presensia profesional online pa bo negoshi.",
        slug: "website",
      },
      {
        number: "06",
        title: "Mi ke risibí reservashonnan online",
        description: "Hasi e proseso pa bo klientenan reserva mas fásil.",
        slug: "online-bookings",
      },
    ],
  },
}

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="hero-new">
      <div className="hero-new-glow" />

      <div className="hero-new-top">
        <div className="hero-new-label">{t.label}</div>

        <div className="hero-new-status">
          <span />
          {t.status}
        </div>
      </div>

      <div className="hero-new-heading">
        <div className="hero-title-block">
          <h1>
            {t.title1}
            <br />
            {t.title2}
            <br />
            <span>{t.title3}</span>
          </h1>
        </div>

        <div className="hero-new-intro">
          <p>{t.intro}</p>

          <div className="hero-new-scroll">
            <span>{t.scroll}</span>
            <div className="scroll-line" />
          </div>
        </div>
      </div>

      <div className="needs-wrapper" id="needs">
        <div className="needs-heading">
          <span>{t.start}</span>
          <h2>{t.question}</h2>
        </div>

        <div className="needs-grid">
          {t.needs.map((need) => (
            <Link
              href={`/needs/${need.slug}`}
              className="need-card"
              key={need.number}
            >
              <div className="need-top">
                <span>{need.number}</span>
                <span className="need-arrow">↗</span>
              </div>

              <div className="need-content">
                <h3>{need.title}</h3>
                <p>{need.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="hero-bottom">
        <span>{t.bottom}</span>
        <span>STRATEGIX®</span>
      </div>
    </section>
  )
}
