"use client"

import Link from "next/link"
import { useLanguage, type Language } from "@/components/LanguageProvider"

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
    },

    ES: {
      eyebrow: "RESTAURANTES Y COMIDA · CURAÇAO",
      title: "Tu comida debería hacer que la gente deje de hacer scroll.",
      intro:
        "Strategix ayuda a restaurantes y negocios de comida a convertir lo que hacen bien en contenido, visibilidad y clientes.",
      problemTitle:
        "Tu restaurante puede ser excelente. Las personas todavía necesitan una razón para descubrirlo.",
      problemText:
        "Un buen plato, una cocina activa y una gran experiencia no sirven de mucho si nadie los ve. Creamos contenido visual y estrategias de marketing pensadas específicamente para cómo los restaurantes atraen atención y llevan personas a sus puertas.",
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
    },

    ES: {
      eyebrow: "BEAUTY & WELLNESS · CURAÇAO",
      title: "Tu trabajo es hermoso. Tu marketing debería demostrarlo.",
      intro:
        "Ayudamos a salones, spas, nail salons, barberías y negocios de wellness a convertir su trabajo en visibilidad y reservas.",
      problemTitle: "Nadie puede reservar lo que nunca descubre.",
      problemText:
        "Tus clientes ya saben lo bueno que es tu trabajo. El reto es conseguir que nuevas personas lo vean, confíen en ti y den el siguiente paso. Creamos contenido y marketing alrededor de tus servicios, tu estética y la experiencia que ofreces.",
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

export default function IndustryPage({
  industry,
}: {
  industry: IndustryKey
}) {
  const { language } = useLanguage()
  const t = content[industry][language]

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
                <div className="industry-service" key={service}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{service}</strong>

                  <span>↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-cta">
          <span className="industry-label">03 / LET&apos;S TALK</span>

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
