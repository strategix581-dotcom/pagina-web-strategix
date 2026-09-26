"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage, type Language } from "@/components/LanguageProvider"
import { industryPortfolio } from "@/lib/industryPortfolio"

type IndustryKey = "restaurants" | "beauty" | "clinics" | "dental"

type IndustryContent = {
  eyebrow: string
  title: string
  intro: string
  problemTitle: string
  problemText: string
  servicesTitle: string
  services: string[]
  ctaTitle: string
  ctaText: string
  back: string
  priceNote?: string
}

const content: Record<
  IndustryKey,
  Record<Language, IndustryContent>
> = {
  restaurants: {
    EN: {
      eyebrow: "RESTAURANTS & FOOD · CURAÇAO",
      title: "Your food should make people stop scrolling.",
      intro:
        "Strategix helps restaurants and food businesses turn great food into content, visibility and customers.",
      problemTitle: "Your restaurant may be great. People still need a reason to notice it.",
      problemText:
        "A beautiful plate, a busy kitchen and a great experience are not enough if people don't see them. We create visual content and marketing strategies designed around how restaurants actually attract attention and bring people through the door.",
      servicesTitle: "What we can help with",
      services: [
        "Restaurant photography",
        "Food photography",
        "Reels & short-form video",
        "Social media management",
        "Meta Ads",
        "Restaurant websites",
        "Online reservations",
      ],
      ctaTitle: "Let's make people hungry.",
      ctaText:
        "Tell us about your restaurant, what you want to improve and where you feel stuck. We'll take it from there.",
      back: "Back to Strategix",
      priceNote: "Content packages from XCG 900/month · see prices",
    },

    ES: {
      eyebrow: "RESTAURANTES Y COMIDA · CURAÇAO",
      title: "¿Tu restaurante luce mejor en persona que en redes?",
      intro:
        "Un cliente que aún no te conoce mira fotos, videos y reseñas antes de decidir dónde comer. Creamos fotografía gastronómica, Reels y contenido para mostrar tu menú y facilitar que te contacten o reserven.",
      problemTitle:
        "Si el plato se ve mejor en la mesa que en Instagram, estás perdiendo una oportunidad.",
      problemText:
        "Mostramos platos, ambiente y experiencia con fotos y video que puedes usar en redes, anuncios y tu web. Elegimos contigo el paquete según cuánto contenido necesitas cada mes.",
      servicesTitle: "En qué podemos ayudarte",
      services: [
        "Fotografía para restaurantes",
        "Fotografía gastronómica",
        "Reels y video corto",
        "Manejo de redes sociales",
        "Meta Ads",
        "Páginas web para restaurantes",
        "Reservas online",
      ],
      ctaTitle: "Hagamos que la gente tenga hambre.",
      ctaText:
        "Cuéntanos sobre tu restaurante, qué quieres mejorar y qué sientes que no está funcionando. Nosotros nos encargamos del resto.",
      back: "Volver a Strategix",
      priceNote: "Paquetes de contenido desde 900 XCG/mes · ver precios",
    },

    PAP: {
      eyebrow: "RESTORANT I KOMIDA · KÒRSOU",
      title: "Bo kuminda mester hasi hende para di scroll.",
      intro:
        "Strategix ta yuda restorant i negoshi di komida bira mihó visibilidat, kontenido i mas kliente.",
      problemTitle:
        "Bo restorant por ta perfekto. Hende ainda mester haña un motibu pa deskubrí bo.",
      problemText:
        "Un bon plato, un kushina yen di bida i un bon eksperensia no ta basta si hende no ta mira nan. Nos ta krea kontenido visual i strategia di marketing segun e manera ku restorant ta atraé atenshon i kliente.",
      servicesTitle: "Den kiko nos por yuda",
      services: [
        "Fotografia pa restorant",
        "Fotografia di komida",
        "Reels i video kòrtiku",
        "Maneho di social media",
        "Meta Ads",
        "Website pa restorant",
        "Reservashon online",
      ],
      ctaTitle: "Laga nos hasi hende habrí gana.",
      ctaText:
        "Konta nos tokante bo restorant, kiko bo ke mehorá i unda bo ta sinti ku bo tin problema. Nos lo yuda bo ku e siguiente paso.",
      back: "Bai bek na Strategix",
      priceNote: "Paketnan di kontenido for di 900 XCG/luna · mira preisnan",
    },
  },

  beauty: {
    EN: {
      eyebrow: "BEAUTY & WELLNESS · CURAÇAO",
      title: "Your work is beautiful. Your marketing should show it.",
      intro:
        "We help salons, spas, nail salons, barbershops and wellness businesses turn their work into visibility and bookings.",
      problemTitle: "People can't book what they never discover.",
      problemText:
        "Your clients already know how good your work is. The challenge is getting new people to see it, trust it and take the next step. We build content and marketing around your services, your aesthetic and the experience you provide.",
      servicesTitle: "What we can help with",
      services: [
        "Beauty photography",
        "Reels & video",
        "Social media management",
        "Meta Ads",
        "Content planning",
        "Website design",
        "Online booking systems",
      ],
      ctaTitle: "Let's turn attention into bookings.",
      ctaText:
        "Tell us about your beauty business and what you want more of: visibility, bookings, clients or all three.",
      back: "Back to Strategix",
      priceNote: "Content packages from XCG 900/month · see prices",
    },

    ES: {
      eyebrow: "BEAUTY & WELLNESS · CURAÇAO",
      title: "¿Tu agenda tiene huecos aunque tu trabajo es bueno?",
      intro:
        "Quien busca un salón quiere ver resultados, precios y una forma fácil de pedir cita. Creamos fotos, Reels y contenido para salones, spas, uñas y barberías en Curaçao.",
      problemTitle: "Las personas pueden admirar tu trabajo y aun así no saber cómo reservar.",
      problemText:
        "Mostramos servicios y resultados con claridad, mantenemos las redes activas y podemos conectar una web con un sistema de citas. Así cada persona entiende qué ofreces y cuál es el siguiente paso.",
      servicesTitle: "En qué podemos ayudarte",
      services: [
        "Fotografía para beauty",
        "Reels y video",
        "Manejo de redes sociales",
        "Meta Ads",
        "Planificación de contenido",
        "Diseño web",
        "Sistemas de reservas online",
      ],
      ctaTitle: "Convirtamos atención en reservas.",
      ctaText:
        "Cuéntanos sobre tu negocio de beauty y qué quieres conseguir: más visibilidad, más reservas, más clientes o las tres.",
      back: "Volver a Strategix",
      priceNote: "Paquetes de contenido desde 900 XCG/mes · ver precios",
    },

    PAP: {
      eyebrow: "BEAUTY & WELLNESS · KÒRSOU",
      title: "Bo trabou ta bunita. Bo marketing mester mustra esaki.",
      intro:
        "Nos ta yuda salon, spa, nail salon, barberia i negoshi di wellness haña mas visibilidat i reservashon.",
      problemTitle: "Hende no por reserva loke nan no ta deskubrí.",
      problemText:
        "Bo klientenan sa kaba kuantu bon bo trabou ta. E reto ta pa logra ku mas hende deskubrí bo, konfia den bo i tuma e siguiente paso. Nos ta traha kontenido i marketing segun bo servisio, bo estilo i e eksperensia ku bo ta ofresé.",
      servicesTitle: "Den kiko nos por yuda",
      services: [
        "Fotografia pa beauty",
        "Reels i video",
        "Maneho di social media",
        "Meta Ads",
        "Planifikashon di kontenido",
        "Diseño di website",
        "Sistema di reservashon online",
      ],
      ctaTitle: "Laga nos bira atenshon den reservashon.",
      ctaText:
        "Konta nos tokante bo negoshi di beauty i kiko bo ke mas: visibilidat, reservashon, kliente òf tur tres.",
      back: "Bai bek na Strategix",
      priceNote: "Paketnan di kontenido for di 900 XCG/luna · mira preisnan",
    },
  },

  clinics: {
    EN: {
      eyebrow: "PRIVATE CLINICS & MEDICAL PRACTICES · CURAÇAO",
      title: "Trust starts before the first appointment.",
      intro:
        "We help private clinics and medical practices communicate expertise, trust and a professional patient experience.",
      problemTitle: "People need to trust you before they choose you.",
      problemText:
        "For a clinic, marketing is not only about visibility. People want to understand who you are, what you offer and whether they feel comfortable putting their care in your hands. Your digital presence should answer those questions clearly.",
      servicesTitle: "What we can help with",
      services: [
        "Professional clinic photography",
        "Educational video content",
        "Social media management",
        "Meta Ads",
        "Website design",
        "Patient-focused content",
        "Online appointment systems",
      ],
      ctaTitle: "Let's build trust before the first visit.",
      ctaText:
        "Tell us about your clinic, your services and the kind of patients you want to reach.",
      back: "Back to Strategix",
    },

    ES: {
      eyebrow: "CLÍNICAS PRIVADAS Y PRÁCTICAS MÉDICAS · CURAÇAO",
      title: "La confianza empieza antes de la primera cita.",
      intro:
        "Ayudamos a clínicas privadas y prácticas médicas a comunicar experiencia, confianza y una experiencia profesional para el paciente.",
      problemTitle: "Las personas necesitan confiar en ti antes de elegirte.",
      problemText:
        "Para una clínica, el marketing no se trata solamente de visibilidad. Las personas quieren saber quién eres, qué ofreces y si se sienten cómodas poniendo su atención en tus manos. Tu presencia digital debe responder esas preguntas con claridad.",
      servicesTitle: "En qué podemos ayudarte",
      services: [
        "Fotografía profesional para clínicas",
        "Contenido educativo en video",
        "Manejo de redes sociales",
        "Meta Ads",
        "Diseño web",
        "Contenido orientado al paciente",
        "Sistemas de citas online",
      ],
      ctaTitle: "Construyamos confianza antes de la primera visita.",
      ctaText:
        "Cuéntanos sobre tu clínica, tus servicios y el tipo de pacientes que quieres atraer.",
      back: "Volver a Strategix",
    },

    PAP: {
      eyebrow: "KLINIKA PRIVÁ I PRAKTIKA MÉDIKO · KÒRSOU",
      title: "Konfiansa ta kuminsá promé ku e promé sita.",
      intro:
        "Nos ta yuda klinika privá i praktika médiko komuniká eksperensia, konfiansa i un eksperensia profesional pa pasientenan.",
      problemTitle:
        "Hende mester konfia den bo promé ku nan skohe pa bo.",
      problemText:
        "Pa un klinika, marketing no ta solamente visibilidat. Hende ke sa ken bo ta, kiko bo ta ofresé i si nan ta sinti konfortabel pa pone nan kuido den bo man. Bo presensia digital mester kontestá e preguntanan ei kla.",
      servicesTitle: "Den kiko nos por yuda",
      services: [
        "Fotografia profesional pa klinika",
        "Kontenido edukativo den video",
        "Maneho di social media",
        "Meta Ads",
        "Diseño di website",
        "Kontenido pa pasientenan",
        "Sistema di sita online",
      ],
      ctaTitle: "Laga nos traha konfiansa promé ku e promé bishita.",
      ctaText:
        "Konta nos tokante bo klinika, bo servisio i e tipo di pasiente ku bo ke yega.",
      back: "Bai bek na Strategix",
    },
  },

  dental: {
    EN: {
      eyebrow: "DENTAL · CURAÇAO",
      title: "A great smile deserves a brand people trust.",
      intro:
        "We help dental clinics communicate expertise, care and results through content, social media and digital marketing.",
      problemTitle: "Choosing a dentist is personal.",
      problemText:
        "Patients want more than a list of treatments. They want to understand the experience, the people behind the clinic and why they should trust you. We help turn those answers into a digital presence that feels professional and human.",
      servicesTitle: "What we can help with",
      services: [
        "Dental photography",
        "Treatment photography",
        "Short-form video",
        "Social media management",
        "Meta Ads",
        "Dental website design",
        "Online appointment systems",
      ],
      ctaTitle: "Let's make the first impression count.",
      ctaText:
        "Tell us about your dental practice and the services or treatments you want more people to discover.",
      back: "Back to Strategix",
    },

    ES: {
      eyebrow: "ODONTOLOGÍA · CURAÇAO",
      title: "Una gran sonrisa merece una marca en la que las personas confíen.",
      intro:
        "Ayudamos a clínicas odontológicas a comunicar experiencia, cuidado y resultados mediante contenido, redes sociales y marketing digital.",
      problemTitle: "Elegir un dentista es una decisión personal.",
      problemText:
        "Los pacientes quieren más que una lista de tratamientos. Quieren conocer la experiencia, a las personas detrás de la clínica y por qué deberían confiar en ti. Ayudamos a convertir esas respuestas en una presencia digital profesional y humana.",
      servicesTitle: "En qué podemos ayudarte",
      services: [
        "Fotografía odontológica",
        "Fotografía de tratamientos",
        "Video corto",
        "Manejo de redes sociales",
        "Meta Ads",
        "Diseño web para odontología",
        "Sistemas de citas online",
      ],
      ctaTitle: "Hagamos que la primera impresión cuente.",
      ctaText:
        "Cuéntanos sobre tu clínica odontológica y los servicios o tratamientos que quieres que más personas descubran.",
      back: "Volver a Strategix",
    },

    PAP: {
      eyebrow: "ODONTOLOGIA · KÒRSOU",
      title: "Un bunita sonrisa meresé un marka ku hende por konfia den dje.",
      intro:
        "Nos ta yuda klinika dental komuniká eksperensia, kuido i resultado ku kontenido, social media i marketing digital.",
      problemTitle: "Skohe un dentista ta algu personal.",
      problemText:
        "Pasientenan ke mas ku un lista di tratamiento. Nan ke konosé e eksperensia, e hende tras di e klinika i dikon nan mester konfia den bo. Nos ta yuda bo mustra esaki den un presensia digital profesional i humano.",
      servicesTitle: "Den kiko nos por yuda",
      services: [
        "Fotografia dental",
        "Fotografia di tratamentu",
        "Video kòrtiku",
        "Maneho di social media",
        "Meta Ads",
        "Diseño di website dental",
        "Sistema di sita online",
      ],
      ctaTitle: "Laga nos hasi e promé impresion konta.",
      ctaText:
        "Konta nos tokante bo klinika dental i e servisio òf tratamentu ku bo ke mas hende deskubrí.",
      back: "Bai bek na Strategix",
    },
  },
}

const portfolioText: Record<
  Language,
  {
    label: string
    title: string
    intro: string
  }
> = {
  EN: {
    label: "SELECTED WORK",
    title: "See what we create for businesses like yours.",
    intro: "Photography, video and campaigns created for our clients.",
  },
  ES: {
    label: "TRABAJO SELECCIONADO",
    title: "Descubre lo que creamos para negocios como el tuyo.",
    intro: "Fotografías, videos y campañas creadas para nuestros clientes.",
  },
  PAP: {
    label: "TRABOU SELEKTÁ",
    title: "Mira kiko nos ta krea pa negoshi manera di bo.",
    intro: "Fotografia, video i kampaña krea pa nos klientenan.",
  },
}

const serviceRoutes: Record<IndustryKey, string[]> = {
  restaurants: [
    "/needs/better-content", "/needs/better-content", "/needs/better-content",
    "/needs/social-media", "/needs/advertising", "/needs/website",
    "/needs/online-bookings",
  ],
  beauty: [
    "/needs/better-content", "/needs/better-content", "/needs/social-media",
    "/needs/advertising", "/needs/social-media", "/needs/website",
    "/needs/online-bookings",
  ],
  clinics: [
    "/needs/better-content", "/needs/better-content", "/needs/social-media",
    "/needs/advertising", "/needs/website", "/needs/better-content",
    "/needs/online-bookings",
  ],
  dental: [
    "/needs/better-content", "/needs/better-content", "/needs/better-content",
    "/needs/social-media", "/needs/advertising", "/needs/website",
    "/needs/online-bookings",
  ],
}

type IndustryQuestion = {
  question: string
  answer: string
  link: string
  href: string
}

const questions: Record<"restaurants" | "beauty", Record<Language, IndustryQuestion[]>> = {
  restaurants: {
    ES: [
      {
        question: "¿Cuánto cuesta crear contenido para un restaurante en Curaçao?",
        answer: "El paquete Esencial cuesta 900 XCG al mes e incluye 4 Reels básicos, 15 fotos profesionales, 1 diseño promocional, 3 historias por semana, manejo de Instagram y Facebook y 1 sesión de contenido al mes. Hay otros paquetes según la cantidad y el tipo de contenido que necesites.",
        link: "Comparar paquetes para restaurantes",
        href: "/?sector=food#packages",
      },
      {
        question: "¿La publicidad de Meta está incluida en el precio?",
        answer: "El paquete Esencial ofrece una campaña de Meta Ads opcional; los paquetes Pro y Premium incluyen campañas. El dinero que se invierte en los anuncios se paga aparte del paquete.",
        link: "Ver opciones de publicidad",
        href: "/needs/advertising",
      },
      {
        question: "¿También pueden crear una web con reservas para mi restaurante?",
        answer: "Sí. Podemos diseñar una web que muestre tu menú y facilite las reservas. La web y el sistema de reservas se presupuestan según las funciones necesarias; el rango de referencia para web con reservas es de 2.500 a 3.500 XCG.",
        link: "Cómo funcionan las reservas online",
        href: "/needs/online-bookings",
      },
    ],
    EN: [
      {
        question: "How much does restaurant content cost in Curaçao?",
        answer: "The Essential package costs XCG 900 per month and includes 4 basic Reels, 15 professional photos, 1 promotional design, 3 stories per week, Instagram and Facebook management, and 1 monthly content session. Other packages cover different content needs.",
        link: "Compare restaurant packages",
        href: "/?sector=food#packages",
      },
      {
        question: "Is Meta advertising included in the package price?",
        answer: "An optional Meta Ads campaign is available with Essential; Pro and Premium include campaigns. The amount spent on ads is paid separately.",
        link: "Explore advertising",
        href: "/needs/advertising",
      },
      {
        question: "Can you build a restaurant website with reservations?",
        answer: "Yes. We can create a site that presents your menu and makes it easier to book. Website and booking features depend on your needs; a website with bookings has a reference range of XCG 2,500–3,500.",
        link: "Explore online bookings",
        href: "/needs/online-bookings",
      },
    ],
    PAP: [
      {
        question: "Kuantu kontenido pa un restorant na Kòrsou ta kosta?",
        answer: "E pakete Esencial ta kosta 900 XCG pa luna i ta inkluí 4 Reel básiko, 15 potrèt profesional, 1 diseño promosional, 3 story pa siman, maneho di Instagram i Facebook i 1 seshon di kontenido pa luna. Tin otro pakete segun kuantu kontenido bo mester.",
        link: "Kompará paketnan pa restorant",
        href: "/?sector=food#packages",
      },
      {
        question: "E preis ta inkluí anunsionan di Meta?",
        answer: "Esencial tin un kampaña di Meta Ads opshonal; Pro i Premium ta inkluí kampañanan. E presupuesto pa paga e anunsionan ta aparte.",
        link: "Mira opshonnan di anunsio",
        href: "/needs/advertising",
      },
      {
        question: "Boso por traha un website ku reservashon pa mi restorant?",
        answer: "Sí. Nos por traha un website pa mustra bo menú i fasilitá reservashon. E funshonnan ta dependé di bo nesesidat; un website ku reservashon tin un rango di referensia di 2.500–3.500 XCG.",
        link: "Mira reservashon online",
        href: "/needs/online-bookings",
      },
    ],
  },
  beauty: {
    ES: [
      {
        question: "¿Cuánto cuesta el contenido para un salón de belleza en Curaçao?",
        answer: "El paquete Esencial cuesta 900 XCG al mes e incluye 4 Reels básicos, 5 fotos profesionales, 4 diseños promocionales, 3 historias por semana, manejo de Instagram y Facebook y 1 sesión de contenido al mes. También hay paquetes para salones de uñas con entregables diferentes.",
        link: "Comparar paquetes de belleza y uñas",
        href: "/?sector=beauty#packages",
      },
      {
        question: "¿Pueden ayudarme a recibir citas sin responder cada mensaje a mano?",
        answer: "Sí. Podemos crear una web con un proceso de reservas adaptado a tus servicios y horarios. El rango de referencia para web con reservas es de 2.500 a 3.500 XCG; las funciones concretas se definen antes de darte el precio final.",
        link: "Ver sistemas de reservas",
        href: "/needs/online-bookings",
      },
      {
        question: "¿El paquete incluye anuncios para conseguir reservas?",
        answer: "En Esencial, una campaña de Meta Ads es opcional. Pro incluye una campaña y Premium hasta dos. El presupuesto que se paga a Meta por mostrar los anuncios es aparte.",
        link: "Ver opciones de publicidad",
        href: "/needs/advertising",
      },
    ],
    EN: [
      {
        question: "How much does content for a beauty salon cost in Curaçao?",
        answer: "The Essential package costs XCG 900 per month and includes 4 basic Reels, 5 professional photos, 4 promotional designs, 3 stories per week, Instagram and Facebook management, and 1 monthly content session. Nail salons have separate package details.",
        link: "Compare beauty and nail packages",
        href: "/?sector=beauty#packages",
      },
      {
        question: "Can clients book without sending me a message?",
        answer: "Yes. We can build a website with a booking process adapted to your services and schedule. The reference range for a website with bookings is XCG 2,500–3,500; the final price depends on the features you need.",
        link: "Explore booking systems",
        href: "/needs/online-bookings",
      },
      {
        question: "Does the package include ads for more bookings?",
        answer: "A Meta Ads campaign is optional with Essential. Pro includes one campaign and Premium up to two. Ad spend paid to Meta is separate.",
        link: "Explore advertising",
        href: "/needs/advertising",
      },
    ],
    PAP: [
      {
        question: "Kuantu kontenido pa un salon di belleza na Kòrsou ta kosta?",
        answer: "E pakete Esencial ta kosta 900 XCG pa luna i ta inkluí 4 Reel básiko, 5 potrèt profesional, 4 diseño promosional, 3 story pa siman, maneho di Instagram i Facebook i 1 seshon di kontenido pa luna. Salon di uña tin paketnan ku otro entregabelnan.",
        link: "Kompará paketnan di belleza i uña",
        href: "/?sector=beauty#packages",
      },
      {
        question: "Mi klientenan por reserva sin manda mi un mensahe?",
        answer: "Sí. Nos por traha un website ku un proseso di reservashon adaptá na bo servisionan i orario. E rango di referensia pa website ku reservashon ta 2.500–3.500 XCG; e preis final ta dependé di e funshonnan nesesario.",
        link: "Mira sistemanan di reservashon",
        href: "/needs/online-bookings",
      },
      {
        question: "E pakete ta inkluí anunsionan pa haña reservashon?",
        answer: "Den Esencial, un kampaña di Meta Ads ta opshonal. Pro ta inkluí un kampaña i Premium te ku dos. E presupuesto pa paga Meta ta aparte.",
        link: "Mira opshonnan di anunsio",
        href: "/needs/advertising",
      },
    ],
  },
}

export default function IndustryPage({
  industry,
}: {
  industry: IndustryKey
}) {
  const { language } = useLanguage()
  const t = content[industry][language]
  const portfolio = portfolioText[language]
  const portfolioItems = industryPortfolio[industry]
  const sectorQuestions = industry === "restaurants" || industry === "beauty"
    ? questions[industry][language]
    : null

  return (
    <main className="industry-page">
      <div className="industry-page-glow" />

      <div className="industry-page-inner">
        <Link href="/" className="industry-back">
          ← {t.back}
        </Link>

        <div className="industry-hero">
          <span className="industry-eyebrow">{t.eyebrow}</span>

          <h1>{t.title}</h1>

          <p className="industry-intro">{t.intro}</p>
          {t.priceNote && <Link href={industry === "beauty" ? "/?sector=beauty#packages" : "/?sector=food#packages"} className="industry-price-link">{t.priceNote} →</Link>}
        </div>

        <section className="industry-problem">
          <div className="industry-section-number">01</div>

          <div>
            <span className="industry-label">
              {language === "ES"
                ? "EL RETO"
                : language === "PAP"
                  ? "E RETO"
                  : "THE CHALLENGE"}
            </span>

            <h2>{t.problemTitle}</h2>

            <p>{t.problemText}</p>
          </div>
        </section>

        <section className="industry-services">
          <div className="industry-section-number">02</div>

          <div className="industry-services-content">
            <span className="industry-label">{t.servicesTitle}</span>

            <div className="industry-service-list">
              {t.services.map((service, index) => (
                <Link
                  href={serviceRoutes[industry][index]}
                  className="industry-service"
                  key={service}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{service}</strong>

                  <span>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {portfolioItems.length > 0 && <section className="industry-work" id="industry-work">
          <div className="industry-section-number">03</div>

          <div>
            <span className="industry-label">{portfolio.label}</span>
            <h2>{portfolio.title}</h2>
            <p className="industry-work-intro">{portfolio.intro}</p>

              <div className="industry-work-grid">
                {portfolioItems.map((item) => (
                  <article
                    className={`industry-work-card${item.orientation === "landscape" ? " industry-work-card--landscape" : ""}`}
                    key={item.src}
                  >
                    <div className="industry-work-media">
                      {item.type === "image" ? (
                        <Image
                          src={item.src}
                          alt={item.alt[language]}
                          fill
                          sizes="(max-width: 700px) 100vw, 33vw"
                        />
                      ) : (
                        <video
                          controls
                          playsInline
                          preload="none"
                          poster={item.poster}
                          aria-label={item.alt[language]}
                        >
                          <source src={item.src} type="video/mp4" />
                          {language === "ES" ? "Tu navegador no puede reproducir este video." : language === "PAP" ? "Bo browser no por reproduci e video aki." : "Your browser cannot play this video."}
                        </video>
                      )}
                    </div>
                    <div className="industry-work-caption">
                      <h3>{item.title[language]}</h3>
                      <p>{item.description[language]}</p>
                    </div>
                  </article>
                ))}
              </div>
          </div>
        </section>}

        {sectorQuestions && (
          <section className="industry-questions" aria-labelledby="industry-questions-title">
            <div className="industry-section-number">{portfolioItems.length > 0 ? "04" : "03"}</div>
            <div>
              <span className="industry-label">
                {language === "ES" ? "PREGUNTAS FRECUENTES" : language === "PAP" ? "PREGUNTANAN FREKUENTE" : "COMMON QUESTIONS"}
              </span>
              <h2 id="industry-questions-title">
                {language === "ES" ? "Precios y respuestas claras antes de empezar." : language === "PAP" ? "Preisnan i kontesta kla promé ku kuminsá." : "Clear answers before you begin."}
              </h2>
              <div className="industry-question-list">
                {sectorQuestions.map(({ question, answer, link, href }) => (
                  <article className="industry-question" key={question}>
                    <h3>{question}</h3>
                    <p>{answer}</p>
                    <Link href={href}>{link} ↗</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="industry-cta">
          <span className="industry-label">
            {String(3 + Number(portfolioItems.length > 0) + Number(Boolean(sectorQuestions))).padStart(2, "0")} / {language === "ES" ? "HABLEMOS" : language === "PAP" ? "LAGA NOS PAPIA" : "LET'S TALK"}
          </span>

          <h2>{t.ctaTitle}</h2>

          <p>{t.ctaText}</p>

          <div className="industry-cta-actions">
            <a
              href="https://wa.me/59996931075"
              target="_blank"
              rel="noreferrer"
              className="industry-button primary"
            >
              WhatsApp ↗
            </a>

            <a
              href="mailto:strategix581@gmail.com"
              className="industry-button"
            >
              Email ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
