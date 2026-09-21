"use client"

import { useLanguage } from "@/components/LanguageProvider"
import PackageComparison from "@/components/PackageComparison"

type Language = "ES" | "EN" | "PAP"

const copy = {
  ES: {
    kicker: "MARKETING Y SOLUCIONES DIGITALES · CURAÇAO",
    title: "Haz que te encuentren, te elijan y reserven contigo.",
    intro: "Contenido, redes y herramientas digitales para que tu negocio crezca. Mira los precios y elige por dónde empezar.",
    seePrices: "Ver paquetes y precios",
    talk: "Hablar por WhatsApp",
    servicesLabel: "ELIGE LO QUE NECESITAS",
    serviceCta: "Consultar servicio",
    servicesTitle: "Todo claro desde el principio.",
    servicesIntro: "Elige lo que necesitas. Podemos trabajar por servicio, con un paquete mensual o con una solución personalizada.",
    services: [
      ["Contenido audiovisual", "Reels, fotografía profesional y piezas gráficas para mostrar tu negocio.", "Reels desde 200 XCG · Fotos desde 350 XCG"],
      ["Redes sociales y anuncios", "Planificación, publicaciones y campañas en Meta para llegar a más clientes.", "Paquetes desde 900 XCG/mes"],
      ["Diseño web", "Páginas rápidas y claras que presentan tu oferta y facilitan el contacto.", "Landing 1.000–1.500 XCG · Web 1.800–2.500 XCG"],
      ["Reservas y automatizaciones", "Sistemas de citas, formularios y flujos que ahorran tiempo a tu equipo.", "Web + reservas 2.500–3.500 XCG · Automatizaciones a medida"],
    ],
    packagesLabel: "PAQUETES MENSUALES",
    packagesTitle: "Precios visibles. Alcance claro.",
    packagesIntro: "Elige tu sector y compara qué incluye cada paquete antes de contactarnos.",
    month: "/ mes",
    packages: [
      ["Essential", "900", "Para mantener una presencia activa.", "4 reels · 1 sesión de contenido · gestión de Instagram y Facebook"],
      ["Growth", "1.300", "Para publicar con más fuerza y constancia.", "5 reels · 1–2 sesiones · más contenido y diseños"],
      ["Pro", "1.750", "Para crecer con producción y estrategia.", "6 reels, incluido 1 cinematográfico · hasta 2 sesiones · 1 campaña Meta Ads"],
      ["Premium", "2.300", "Para una presencia creativa completa.", "8 reels, incluidos 2 cinematográficos · hasta 3 sesiones · hasta 2 campañas Meta Ads"],
    ],
    packageNote: "Las fotos, stories y diseños incluidos varían según el sector: restaurantes, belleza o uñas. El presupuesto de anuncios se paga aparte. Antes de empezar te enviamos el detalle exacto del paquete.",
    customLabel: "PROYECTOS A MEDIDA",
    customTitle: "¿Necesitas una web o un sistema específico?",
    customBody: "Las webs y reservas tienen rangos de precios visibles arriba. Menús digitales, pedidos, integraciones y automatizaciones se cotizan según las funciones necesarias. Siempre recibirás el precio final antes de empezar.",
    customPrice: "Precio según alcance",
    customCta: "Pedir una cotización",
    contactLabel: "SIGUIENTE PASO",
    contactTitle: "Cuéntanos qué necesita tu negocio.",
    contactBody: "En una conversación breve identificamos el servicio o paquete adecuado y te enviamos una propuesta clara.",
  },
  EN: {
    kicker: "MARKETING & DIGITAL SOLUTIONS · CURAÇAO",
    title: "Help customers find you, choose you and book with you.",
    intro: "Content, social media and digital tools to help your business grow. See the prices and choose where to start.",
    seePrices: "See packages and prices",
    talk: "Chat on WhatsApp",
    servicesLabel: "CHOOSE WHAT YOU NEED",
    serviceCta: "Ask about this service",
    servicesTitle: "Clear from the start.",
    servicesIntro: "Choose what you need: a single service, a monthly package or a custom solution.",
    services: [
      ["Photo & video content", "Reels, professional photography and design that show your business at its best.", "Reels from XCG 200 · Photos from XCG 350"],
      ["Social media & ads", "Planning, publishing and Meta campaigns to reach more customers.", "Packages from XCG 900/month"],
      ["Website design", "Fast, clear websites that explain your offer and make contact easy.", "Landing XCG 1,000–1,500 · Website XCG 1,800–2,500"],
      ["Bookings & automation", "Booking systems, forms and workflows that save your team time.", "Website + booking XCG 2,500–3,500 · Custom automation"],
    ],
    packagesLabel: "MONTHLY PACKAGES",
    packagesTitle: "Visible prices. Clear scope.",
    packagesIntro: "Choose your industry and compare exactly what each package includes.",
    month: "/ month",
    packages: [
      ["Essential", "900", "Keep your business visible.", "4 reels · 1 content session · Instagram and Facebook management"],
      ["Growth", "1,300", "Publish more consistently.", "5 reels · 1–2 sessions · more content and designs"],
      ["Pro", "1,750", "Grow with stronger production and strategy.", "6 reels, including 1 cinematic · up to 2 sessions · 1 Meta Ads campaign"],
      ["Premium", "2,300", "A complete creative presence.", "8 reels, including 2 cinematic · up to 3 sessions · up to 2 Meta Ads campaigns"],
    ],
    packageNote: "Included photos, stories and designs vary by industry: restaurants, beauty or nails. Ad spend is separate. We send the exact package scope before work starts.",
    customLabel: "CUSTOM PROJECTS",
    customTitle: "Need a website or a specific system?",
    customBody: "Website and booking price ranges are shown above. Digital menus, online orders, integrations and automation are quoted by scope. You receive a final price before work starts.",
    customPrice: "Price based on scope",
    customCta: "Request a quote",
    contactLabel: "NEXT STEP",
    contactTitle: "Tell us what your business needs.",
    contactBody: "In a short conversation, we identify the right service or package and send you a clear proposal.",
  },
  PAP: {
    kicker: "MARKETING I SOLUSHON DIGITAL · KÒRSOU",
    title: "Yuda kliente haña bo, skohe bo i reservá serka bo.",
    intro: "Kontenido, rednan sosial i herramientanan digital pa yuda bo negoshi krese. Mira e preisnan i skohe unda pa kuminsá.",
    seePrices: "Mira paketnan i preisnan",
    talk: "Papía via WhatsApp",
    servicesLabel: "SKOHE LOKE BO TIN MESTER",
    serviceCta: "Pidi informashon",
    servicesTitle: "Tur kos kla for di kuminsamentu.",
    servicesIntro: "Skohe loke bo tin mester: un servisio, un pakete mensual òf un solushon personalisá.",
    services: [
      ["Kontenido audiovisual", "Reels, potrèt profesional i diseño pa mustra bo negoshi.", "Reels for di 200 XCG · Foto for di 350 XCG"],
      ["Rednan sosial i anunsio", "Planifikashon, publikashon i kampañanan di Meta pa yega mas kliente.", "Paketnan for di 900 XCG/luna"],
      ["Diseño di website", "Páginanan lihé i kla ku ta presentá bo oferta i hasi kontakto fásil.", "Landing 1.000–1.500 XCG · Website 1.800–2.500 XCG"],
      ["Reservashon i automashon", "Sistema di sita, formulario i proseso ku ta spar tempu.", "Website + reservashon 2.500–3.500 XCG · Automashon personalisá"],
    ],
    packagesLabel: "PAKETNAN MENSUAL",
    packagesTitle: "Preisnan visibel. Kontenido kla.",
    packagesIntro: "Skohe bo sektór i kompará kiko kada pakete ta inkluí.",
    month: "/ luna",
    packages: [
      ["Essential", "900", "Pa mantené bo negoshi visibel.", "4 reels · 1 seshon di kontenido · maneho di Instagram i Facebook"],
      ["Growth", "1.300", "Pa publiká ku mas konstansia.", "5 reels · 1–2 seshon · mas kontenido i diseño"],
      ["Pro", "1.750", "Pa krese ku mihó produkshon i strategia.", "6 reels, inkluí 1 sinemátiko · te ku 2 seshon · 1 kampaña Meta Ads"],
      ["Premium", "2.300", "Un presensia kreativo kompleto.", "8 reels, inkluí 2 sinemátiko · te ku 3 seshon · te ku 2 kampaña Meta Ads"],
    ],
    packageNote: "Fotos, stories i diseñonan inkluí ta varia segun sektór. Presupuesto di anunsio ta aparte. Promé ku nos kuminsá, bo ta risibí e detaye eksakto.",
    customLabel: "PROYEKTONAN PERSONALISÁ",
    customTitle: "Bo tin mester di un website òf sistema spesífiko?",
    customBody: "Rangonan di preis pa website i reservashon ta mustrá ariba. Menu digital, pedido, integrashon i automashon ta haña kotisashon segun e proyekto. Bo ta haña e preis final promé ku kuminsá.",
    customPrice: "Preis segun e proyekto",
    customCta: "Pidi un kotisashon",
    contactLabel: "SIGUIENTE PASO",
    contactTitle: "Konta nos kiko bo negoshi tin mester.",
    contactBody: "Den un kòmbersashon kortiku nos ta haña e servisio òf pakete adekuá i manda bo un proposishon kla.",
  },
} satisfies Record<Language, {
  kicker: string; title: string; intro: string; seePrices: string; talk: string;
  servicesLabel: string; serviceCta: string; servicesTitle: string; servicesIntro: string; services: string[][];
  packagesLabel: string; packagesTitle: string; packagesIntro: string; month: string; packages: string[][];
  packageNote: string; customLabel: string; customTitle: string; customBody: string;
  customPrice: string; customCta: string; contactLabel: string; contactTitle: string; contactBody: string;
}>

const whatsapp = "https://wa.me/59996931075"

export default function SimpleHome() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <main className="simple-home">
      <section className="simple-hero page-shell">
        <div className="simple-hero-copy">
          <span className="eyebrow">{t.kicker}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className="simple-actions">
            <a className="button-primary" href="#packages">{t.seePrices} <span aria-hidden="true">↘</span></a>
            <a className="button-secondary" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.talk} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="simple-section page-shell" id="services">
        <div className="section-heading"><span className="eyebrow">{t.servicesLabel}</span><h2>{t.servicesTitle}</h2><p>{t.servicesIntro}</p></div>
        <div className="service-grid">
          {t.services.map(([title, description, price], index) => (
            <article className="service-card" key={title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <strong className="service-price">{price}</strong>
              <a className="service-link" href={`${whatsapp}?text=${encodeURIComponent(`Hola, quiero saber más sobre ${title} de Strategix.`)}`} target="_blank" rel="noopener noreferrer">{t.serviceCta} ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-section packages-section" id="packages">
        <div className="page-shell">
          <div className="section-heading"><span className="eyebrow">{t.packagesLabel}</span><h2>{t.packagesTitle}</h2><p>{t.packagesIntro}</p></div>
          <PackageComparison language={language} />
        </div>
      </section>

      <section className="simple-section page-shell custom-section" id="custom">
        <div><span className="eyebrow">{t.customLabel}</span><h2>{t.customTitle}</h2><p>{t.customBody}</p></div>
        <div className="custom-price"><span>{t.customPrice}</span><a className="button-primary" href={`${whatsapp}?text=${encodeURIComponent("Hola, quiero cotizar un proyecto web o una automatización con Strategix.")}`} target="_blank" rel="noopener noreferrer">{t.customCta} ↗</a></div>
      </section>

      <section className="simple-contact page-shell" id="contact">
        <div className="contact-copy">
          <span className="eyebrow">{t.contactLabel}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <a className="button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">{t.talk} ↗</a>
        </div>
        <div className="marketing-visual" aria-hidden="true">
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" fill="none">
            <defs>
              <linearGradient id="marketing-line" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#7251bd" /><stop offset="1" stopColor="#c5a4ff" /></linearGradient>
              <linearGradient id="marketing-bars" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7b51d0" stopOpacity=".05" /><stop offset="1" stopColor="#a981fa" stopOpacity=".5" /></linearGradient>
            </defs>
            <g stroke="#8a6eaa" strokeOpacity=".2" strokeWidth="1">
              <path d="M30 320H575M30 250H575M30 180H575M30 110H575" />
              <path d="M95 75V330M185 75V330M275 75V330M365 75V330M455 75V330M545 75V330" />
            </g>
            <g fill="url(#marketing-bars)">
              <rect x="74" y="270" width="32" height="50" rx="5" /><rect x="144" y="238" width="32" height="82" rx="5" />
              <rect x="214" y="258" width="32" height="62" rx="5" /><rect x="284" y="210" width="32" height="110" rx="5" />
              <rect x="354" y="178" width="32" height="142" rx="5" /><rect x="424" y="193" width="32" height="127" rx="5" />
              <rect x="494" y="125" width="32" height="195" rx="5" />
            </g>
            <path d="M42 275C95 270 118 240 166 251S230 227 273 211 346 222 387 165 473 170 553 91" stroke="url(#marketing-line)" strokeWidth="4" strokeLinecap="round" />
            <g fill="#b48cff" stroke="#20142d" strokeWidth="5">
              <circle cx="166" cy="251" r="7" /><circle cx="273" cy="211" r="7" /><circle cx="387" cy="165" r="7" /><circle cx="553" cy="91" r="8" />
            </g>
            <g stroke="#b48cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".8">
              <circle cx="502" cy="62" r="25" strokeOpacity=".35" />
              <path d="M493 65l7 6 12-16" />
              <circle cx="121" cy="132" r="22" strokeOpacity=".3" />
              <path d="M111 129c0-7 10-9 12-2 2-7 12-5 12 2 0 7-12 14-12 14s-12-7-12-14Z" />
            </g>
          </svg>
        </div>
      </section>
    </main>
  )
}
