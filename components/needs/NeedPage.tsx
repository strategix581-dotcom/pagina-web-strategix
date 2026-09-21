"use client"

import Link from "next/link"
import { useLanguage, type Language } from "@/components/LanguageProvider"

const WHATSAPP = "https://wa.me/59996931075"
const EMAIL = "mailto:strategix581@gmail.com"

type NeedKey =
  | "more-customers"
  | "better-content"
  | "social-media"
  | "advertising"
  | "website"
  | "online-bookings"

type WorkItem = {
  number: string
  type: string
  title: string
  description: string
}

type NeedContent = {
  eyebrow: string
  title: string
  intro: string
  benefits: string[]
  visualLabel: string
  workItems: WorkItem[]
  processLabel: string
  processTitle: string
  processSteps: string[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

const content: Record<Language, Record<NeedKey, NeedContent>> = {
  EN: {
    "more-customers": {
      eyebrow: "GROWTH · CUSTOMER ACQUISITION",
      title: "I need more customers.",
      intro:
        "Your business deserves to be discovered by the right people. We build marketing systems designed to increase visibility, attention and action.",
      benefits: [
        "Increase your visibility",
        "Reach the right audience",
        "Turn attention into customers",
      ],
      visualLabel: "CAMPAIGNS · CONTENT · RESULTS",
      workItems: [
        {
          number: "01",
          type: "CAMPAIGNS",
          title: "Campaigns that get attention",
          description:
            "Creative campaigns designed to put your business in front of the right people.",
        },
        {
          number: "02",
          type: "CONTENT",
          title: "Content that attracts customers",
          description:
            "Photography, Reels and visual content built around what makes your business worth choosing.",
        },
        {
          number: "03",
          type: "RESULTS",
          title: "Marketing built around action",
          description:
            "Creative and media working together to turn attention into enquiries, bookings and sales.",
        },
      ],
      processLabel: "OUR APPROACH",
      processTitle: "From attention to action.",
      processSteps: [
        "Understand your business and audience",
        "Create content that gets attention",
        "Launch campaigns that drive action",
      ],
      ctaTitle: "Ready to attract more customers?",
      ctaText:
        "Tell us about your business and let's identify the right strategy.",
      ctaButton: "START A PROJECT ↗",
    },

    "better-content": {
      eyebrow: "CREATIVE · PHOTO · VIDEO",
      title: "I need better content.",
      intro:
        "Strong content makes your brand easier to remember. We create photography, video and Reels designed to make your business look as good as it actually is.",
      benefits: [
        "Professional photography",
        "Short-form video & Reels",
        "Content built around your brand",
      ],
      visualLabel: "PHOTOGRAPHY · VIDEO · REELS",
      workItems: [
        {
          number: "01",
          type: "PHOTOGRAPHY",
          title: "Professional photography",
          description:
            "Visuals that make your products, spaces and services look their best.",
        },
        {
          number: "02",
          type: "REELS",
          title: "Content for social media",
          description:
            "Short-form videos designed to stop the scroll and create attention.",
        },
        {
          number: "03",
          type: "VIDEO",
          title: "Commercial video",
          description:
            "Cinematic and commercial video created around your brand and message.",
        },
      ],
      processLabel: "OUR APPROACH",
      processTitle: "Content with a purpose.",
      processSteps: [
        "Define the visual direction",
        "Produce photography and video",
        "Create content ready for your channels",
      ],
      ctaTitle: "Your next piece of content could be better.",
      ctaText:
        "Let's create visuals that make people stop, look and remember your brand.",
      ctaButton: "TALK TO US ↗",
    },

    "social-media": {
      eyebrow: "SOCIAL MEDIA · MANAGEMENT",
      title: "I need help with social media.",
      intro:
        "Your social media should not become another task on your to-do list. We help businesses build a consistent, intentional and professional presence.",
      benefits: [
        "Consistent content",
        "Strategic social media management",
        "A stronger digital presence",
      ],
      visualLabel: "STRATEGY · CONTENT · COMMUNITY",
      workItems: [
        {
          number: "01",
          type: "STRATEGY",
          title: "Content strategy",
          description:
            "A clear direction for what your brand should communicate and why.",
        },
        {
          number: "02",
          type: "CONTENT",
          title: "Social media content",
          description:
            "Photography, Reels and creative formats built for your channels.",
        },
        {
          number: "03",
          type: "COMMUNITY",
          title: "Consistent presence",
          description:
            "A professional social presence that stays active, relevant and intentional.",
        },
      ],
      processLabel: "OUR APPROACH",
      processTitle: "A social presence that works.",
      processSteps: [
        "Build your content strategy",
        "Create and organize your content",
        "Publish, manage and optimize",
      ],
      ctaTitle: "Let's take social media off your plate.",
      ctaText:
        "Tell us where your brand is today and where you want it to go.",
      ctaButton: "START A PROJECT ↗",
    },

    advertising: {
      eyebrow: "PAID MEDIA · META ADS",
      title: "I want to advertise.",
      intro:
        "Advertising is more than putting money behind a post. We create campaigns designed to reach the right people and move them toward action.",
      benefits: [
        "Meta advertising campaigns",
        "Audience targeting",
        "Creative testing & optimization",
      ],
      visualLabel: "META ADS · CAMPAIGNS · PERFORMANCE",
      workItems: [
        {
          number: "01",
          type: "CAMPAIGNS",
          title: "Meta advertising",
          description:
            "Paid campaigns designed around a clear business objective.",
        },
        {
          number: "02",
          type: "CREATIVE",
          title: "Campaign creatives",
          description:
            "Visual concepts and ad creatives designed to earn attention.",
        },
        {
          number: "03",
          type: "PERFORMANCE",
          title: "Optimization",
          description:
            "Testing, measurement and optimization focused on improving performance.",
        },
      ],
      processLabel: "OUR APPROACH",
      processTitle: "Creative meets performance.",
      processSteps: [
        "Define the audience and objective",
        "Develop campaign creatives",
        "Launch, measure and optimize",
      ],
      ctaTitle:
        "Ready to put your brand in front of more people?",
      ctaText:
        "Let's build an advertising campaign around a clear business objective.",
      ctaButton: "PLAN A CAMPAIGN ↗",
    },

    website: {
      eyebrow: "WEB · DIGITAL PRESENCE",
      title: "I need a website.",
      intro:
        "Your website is often the first serious interaction someone has with your business. We build digital experiences that communicate clearly and create trust.",
      benefits: [
        "Professional digital presence",
        "Mobile-first experience",
        "Clear paths toward conversion",
      ],
      visualLabel: "WEB DESIGN · EXPERIENCE · CONVERSION",
      workItems: [
        {
          number: "01",
          type: "WEB DESIGN",
          title: "Brand websites",
          description:
            "Websites designed to communicate your brand clearly and professionally.",
        },
        {
          number: "02",
          type: "EXPERIENCE",
          title: "Digital experiences",
          description:
            "Interfaces designed around how people actually navigate and make decisions.",
        },
        {
          number: "03",
          type: "CONVERSION",
          title: "Conversion journeys",
          description:
            "Clear paths that guide visitors toward contacting, booking or buying.",
        },
      ],
      processLabel: "OUR APPROACH",
      processTitle: "Designed to communicate.",
      processSteps: [
        "Define the structure and user journey",
        "Design the visual experience",
        "Build and prepare the website for launch",
      ],
      ctaTitle:
        "Your website should work as hard as your business.",
      ctaText:
        "Let's create a digital presence that represents your brand properly.",
      ctaButton: "START A PROJECT ↗",
    },

    "online-bookings": {
      eyebrow: "BOOKINGS · CONVERSION",
      title: "I want online bookings.",
      intro:
        "Make it easier for customers to take the next step. We help businesses create clearer booking experiences that reduce friction and turn interest into appointments.",
      benefits: [
        "Simpler booking journeys",
        "Clear calls to action",
        "More opportunities to convert",
      ],
      visualLabel: "BOOKINGS · UX · CONVERSION",
      workItems: [
        {
          number: "01",
          type: "BOOKINGS",
          title: "Booking experiences",
          description:
            "Clearer systems that make it easier for customers to choose a time and take action.",
        },
        {
          number: "02",
          type: "UX",
          title: "Customer journeys",
          description:
            "Simplified journeys designed to remove unnecessary friction.",
        },
        {
          number: "03",
          type: "CONVERSION",
          title: "Calls to action",
          description:
            "Clear touchpoints that turn interest into appointments and enquiries.",
        },
      ],
      processLabel: "OUR APPROACH",
      processTitle: "Make booking easier.",
      processSteps: [
        "Understand how customers currently book",
        "Design a simpler customer journey",
        "Connect the experience to your booking system",
      ],
      ctaTitle: "Let's make it easier for customers to book.",
      ctaText:
        "Tell us how your current booking process works and we'll find opportunities to improve it.",
      ctaButton: "TALK TO US ↗",
    },
  },

  ES: {
    "more-customers": {
      eyebrow: "CRECIMIENTO · CAPTACIÓN",
      title: "¿Te ven, pero no llegan clientes?",
      intro:
        "Si publicas y recibes pocas consultas, primero revisamos dónde se pierde el interés. Combinamos contenido, redes, anuncios o una web más clara según lo que necesite tu negocio en Curaçao.",
      benefits: [
        "Detectar qué frena las consultas",
        "Elegir los canales adecuados",
        "Facilitar el contacto o la reserva",
      ],
      visualLabel: "CAMPAÑAS · CONTENIDO · RESULTADOS",
      workItems: [
        {
          number: "01",
          type: "CAMPAÑAS",
          title: "Campañas que generan atención",
          description:
            "Campañas creativas diseñadas para poner tu negocio frente a las personas correctas.",
        },
        {
          number: "02",
          type: "CONTENIDO",
          title: "Contenido que atrae clientes",
          description:
            "Fotografía, Reels y contenido visual construido alrededor de lo que hace especial a tu negocio.",
        },
        {
          number: "03",
          type: "RESULTADOS",
          title: "Marketing orientado a resultados",
          description:
            "Creatividad y medios trabajando juntos para convertir atención en consultas, reservas y ventas.",
        },
      ],
      processLabel: "NUESTRO ENFOQUE",
      processTitle: "De la atención a la acción.",
      processSteps: [
        "Entender tu negocio y tu audiencia",
        "Crear contenido que genere atención",
        "Lanzar campañas que impulsen acciones",
      ],
      ctaTitle: "¿Listo para atraer más clientes?",
      ctaText:
        "Cuéntanos sobre tu negocio y encontremos la estrategia adecuada.",
      ctaButton: "INICIAR PROYECTO ↗",
    },

    "better-content": {
      eyebrow: "CREATIVIDAD · FOTO · VIDEO",
      title: "¿Tus fotos no muestran la calidad de tu negocio?",
      intro:
        "Hacemos fotografía y Reels para que un cliente pueda ver tus productos, tu espacio y tu trabajo antes de escribirte. Producimos el contenido en Curaçao y lo entregamos listo para tus redes.",
      benefits: [
        "Fotos de productos, espacios o servicios",
        "Reels listos para publicar",
        "Contenido fiel a tu negocio",
      ],
      visualLabel: "FOTOGRAFÍA · VIDEO · REELS",
      workItems: [
        {
          number: "01",
          type: "FOTOGRAFÍA",
          title: "Fotografía profesional",
          description:
            "Imágenes que hacen que tus productos, espacios y servicios se vean en su mejor versión.",
        },
        {
          number: "02",
          type: "REELS",
          title: "Contenido para redes",
          description:
            "Videos cortos diseñados para detener el scroll y generar atención.",
        },
        {
          number: "03",
          type: "VIDEO",
          title: "Video comercial",
          description:
            "Video comercial y cinematográfico creado alrededor de tu marca y mensaje.",
        },
      ],
      processLabel: "NUESTRO ENFOQUE",
      processTitle: "Contenido con propósito.",
      processSteps: [
        "Definir la dirección visual",
        "Producir fotografía y video",
        "Crear contenido listo para tus canales",
      ],
      ctaTitle: "Tu próximo contenido puede ser mejor.",
      ctaText:
        "Creemos juntos imágenes que hagan que las personas se detengan, miren y recuerden tu marca.",
      ctaButton: "HABLEMOS ↗",
    },

    "social-media": {
      eyebrow: "REDES SOCIALES · GESTIÓN",
      title: "¿No tienes tiempo para llevar tus redes?",
      intro:
        "Si Instagram y Facebook pasan semanas sin publicaciones, tus clientes encuentran una imagen incompleta de tu negocio. Planificamos, creamos y organizamos el contenido para mantener tus redes activas con una oferta clara.",
      benefits: [
        "Plan de publicaciones",
        "Reels, fotos e historias según paquete",
        "Gestión de Instagram y Facebook",
      ],
      visualLabel: "ESTRATEGIA · CONTENIDO · COMUNIDAD",
      workItems: [
        {
          number: "01",
          type: "ESTRATEGIA",
          title: "Estrategia de contenido",
          description:
            "Una dirección clara sobre qué debe comunicar tu marca y por qué.",
        },
        {
          number: "02",
          type: "CONTENIDO",
          title: "Contenido para redes",
          description:
            "Fotografía, Reels y formatos creativos pensados para tus canales.",
        },
        {
          number: "03",
          type: "COMUNIDAD",
          title: "Presencia consistente",
          description:
            "Una presencia social profesional, activa, relevante e intencional.",
        },
      ],
      processLabel: "NUESTRO ENFOQUE",
      processTitle: "Una presencia social que funciona.",
      processSteps: [
        "Construir tu estrategia de contenido",
        "Crear y organizar el contenido",
        "Publicar, gestionar y optimizar",
      ],
      ctaTitle: "Deja las redes sociales en nuestras manos.",
      ctaText:
        "Cuéntanos dónde está hoy tu marca y hacia dónde quieres llevarla.",
      ctaButton: "INICIAR PROYECTO ↗",
    },

    advertising: {
      eyebrow: "PUBLICIDAD · META ADS",
      title: "¿Tus anuncios reciben vistas, pero pocas consultas?",
      intro:
        "Antes de invertir más, definimos a quién quieres llegar y qué acción esperas: un mensaje, una consulta o una reserva. Creamos anuncios para Instagram y Facebook y revisamos lo que ocurre después del clic.",
      benefits: [
        "Objetivo claro para cada campaña",
        "Anuncios y audiencia definidos",
        "Medición de consultas y resultados",
      ],
      visualLabel: "META ADS · CAMPAÑAS · PERFORMANCE",
      workItems: [
        {
          number: "01",
          type: "CAMPAÑAS",
          title: "Publicidad en Meta",
          description:
            "Campañas pagadas construidas alrededor de un objetivo comercial claro.",
        },
        {
          number: "02",
          type: "CREATIVIDAD",
          title: "Piezas de campaña",
          description:
            "Conceptos visuales y anuncios diseñados para ganar atención.",
        },
        {
          number: "03",
          type: "PERFORMANCE",
          title: "Optimización",
          description:
            "Pruebas, medición y optimización enfocadas en mejorar el rendimiento.",
        },
      ],
      processLabel: "NUESTRO ENFOQUE",
      processTitle: "Creatividad y resultados.",
      processSteps: [
        "Definir audiencia y objetivo",
        "Desarrollar las piezas de campaña",
        "Lanzar, medir y optimizar",
      ],
      ctaTitle:
        "¿Listo para poner tu marca frente a más personas?",
      ctaText:
        "Construyamos una campaña publicitaria alrededor de un objetivo claro.",
      ctaButton: "PLANEAR CAMPAÑA ↗",
    },

    website: {
      eyebrow: "WEB · PRESENCIA DIGITAL",
      title: "¿Tus clientes no encuentran una web clara?",
      intro:
        "Cuando alguien busca tus servicios, necesita entender qué ofreces, cuánto cuesta y cómo contactarte. Diseñamos páginas web para negocios en Curaçao que presentan esa información de forma sencilla, especialmente en el móvil.",
      benefits: [
        "Servicios y precios fáciles de entender",
        "Diseño cómodo en el móvil",
        "Contacto o reserva visibles",
      ],
      visualLabel: "DISEÑO WEB · EXPERIENCIA · CONVERSIÓN",
      workItems: [
        {
          number: "01",
          type: "ESTRUCTURA",
          title: "Servicios fáciles de entender",
          description:
            "Organizamos servicios, precios y respuestas a las preguntas que un cliente hace antes de contactarte.",
        },
        {
          number: "02",
          type: "MÓVIL",
          title: "Diseño cómodo para el móvil",
          description:
            "Hacemos que leer, comparar y avanzar sea sencillo desde el teléfono.",
        },
        {
          number: "03",
          type: "CONTACTO",
          title: "Un siguiente paso visible",
          description:
            "Ponemos el contacto o la reserva donde la persona lo necesita, sin obligarla a buscarlo.",
        },
      ],
      processLabel: "NUESTRO ENFOQUE",
      processTitle: "Diseñada para comunicar.",
      processSteps: [
        "Definir estructura y recorrido del usuario",
        "Diseñar la experiencia visual",
        "Construir y preparar el sitio para lanzamiento",
      ],
      ctaTitle:
        "Tu página web debería trabajar tanto como tu negocio.",
      ctaText:
        "Creemos una presencia digital que represente correctamente tu marca.",
      ctaButton: "INICIAR PROYECTO ↗",
    },

    "online-bookings": {
      eyebrow: "RESERVAS · CONVERSIÓN",
      title: "¿Pierdes citas entre mensajes y llamadas?",
      intro:
        "Cuando una persona quiere una cita, debería poder encontrar el servicio y dar el siguiente paso sin esperar una cadena de mensajes. Creamos una web con un proceso de reservas claro, adaptado a cómo trabaja tu negocio.",
      benefits: [
        "Servicios y horarios claros",
        "Menos pasos para solicitar una cita",
        "Flujo adaptado a tu agenda",
      ],
      visualLabel: "RESERVAS · UX · CONVERSIÓN",
      workItems: [
        {
          number: "01",
          type: "SERVICIOS",
          title: "Servicios y opciones claras",
          description:
            "El cliente entiende qué puede reservar y qué información necesita dejar.",
        },
        {
          number: "02",
          type: "RESERVA",
          title: "Menos mensajes para agendar",
          description:
            "Diseñamos los pasos para solicitar una cita sin repetir preguntas por varios canales.",
        },
        {
          number: "03",
          type: "AGENDA",
          title: "Flujo adaptado a tu operación",
          description:
            "Acordamos contigo cómo se muestran horarios, solicitudes y confirmaciones según tu forma de trabajar.",
        },
      ],
      processLabel: "NUESTRO ENFOQUE",
      processTitle: "Reservar debe ser fácil.",
      processSteps: [
        "Entender cómo reservan actualmente tus clientes",
        "Diseñar un recorrido más sencillo",
        "Conectar la experiencia con tu sistema de reservas",
      ],
      ctaTitle: "Hagamos que reservar sea más fácil.",
      ctaText:
        "Cuéntanos cómo funciona actualmente tu proceso de reservas y encontremos oportunidades de mejora.",
      ctaButton: "HABLEMOS ↗",
    },
  },

  PAP: {
    "more-customers": {
      eyebrow: "KRESEMENTU · MAS KLIENTE",
      title: "Mi tin mester di mas kliente.",
      intro:
        "Bo negoshi meresé pa mas hende deskubr'é. Nos ta traha marketing ku ta yuda bo haña mas visibilidat, atenshon i aksion.",
      benefits: [
        "Mas visibilidat",
        "Alkansá e audiencia korekto",
        "Konvertí atenshon den kliente",
      ],
      visualLabel: "KAMPAÑA · KONTENIDO · RESULTADO",
      workItems: [
        {
          number: "01",
          type: "KAMPAÑA",
          title: "Kampañanan ku ta hala atenshon",
          description:
            "Kreatividat pa pone bo negoshi dilanti di e personanan korekto.",
        },
        {
          number: "02",
          type: "KONTENIDO",
          title: "Kontenido ku ta atraé kliente",
          description:
            "Foto, Reels i kontenido visual ku ta mustra kiko ta hasi bo negoshi speshal.",
        },
        {
          number: "03",
          type: "RESULTADO",
          title: "Marketing ku ta trese aksion",
          description:
            "Kreatividat i media trahando huntu pa trese mas interes, reserva i venta.",
        },
      ],
      processLabel: "NOS ENFOQUE",
      processTitle: "Di atenshon pa aksion.",
      processSteps: [
        "Komprondé bo negoshi i bo audiencia",
        "Krea kontenido ku ta hala atenshon",
        "Lansa kampañanan ku ta trese aksion",
      ],
      ctaTitle: "Bo ta kla pa haña mas kliente?",
      ctaText:
        "Konta nos tokante bo negoshi i nos lo buska e strategia korekto.",
      ctaButton: "KUMINSÁ UN PROYEKTO ↗",
    },

    "better-content": {
      eyebrow: "KREATIVIDAT · FOTO · VIDEO",
      title: "Mi tin mester di mihó kontenido.",
      intro:
        "Bon kontenido ta hasi bo marka mas fásil pa rekordá. Nos ta krea foto, video i Reels pa mustra bo negoshi den su mihó forma.",
      benefits: [
        "Fotografia profesional",
        "Video i Reels",
        "Kontenido pensá pa bo marka",
      ],
      visualLabel: "FOTO · VIDEO · REELS",
      workItems: [
        {
          number: "01",
          type: "FOTOGRAFIA",
          title: "Fotografia profesional",
          description:
            "Visualnan pa mustra bo produkto, espasio i servisio na nan mihó.",
        },
        {
          number: "02",
          type: "REELS",
          title: "Kontenido pa social media",
          description:
            "Video kòrtiku ku ta hasi hende para i wak.",
        },
        {
          number: "03",
          type: "VIDEO",
          title: "Video komersial",
          description:
            "Video krea alrededor di bo marka i bo mensahe.",
        },
      ],
      processLabel: "NOS ENFOQUE",
      processTitle: "Kontenido ku propósito.",
      processSteps: [
        "Definí e direkshon visual",
        "Produci foto i video",
        "Krea kontenido kla pa bo kanalanan",
      ],
      ctaTitle: "Bo siguiente kontenido por ta mihó.",
      ctaText:
        "Nos por krea visualnan ku ta hasi hende para, wak i rekordá bo marka.",
      ctaButton: "KONTA NOS ↗",
    },

    "social-media": {
      eyebrow: "SOCIAL MEDIA · MANEHO",
      title: "Mi tin mester di yudansa ku social media.",
      intro:
        "Social media no mester bira un tarea mas riba bo lista. Nos ta yuda bo traha un presensia konsistente, strategiko i profesional.",
      benefits: [
        "Kontenido konsistente",
        "Maneho strategiko di social media",
        "Un presensia digital mas fuerte",
      ],
      visualLabel: "STRATEGIA · KONTENIDO · KOMUNIDAT",
      workItems: [
        {
          number: "01",
          type: "STRATEGIA",
          title: "Strategia di kontenido",
          description:
            "Un direkshon kla pa sa kiko bo marka mester komuniká.",
        },
        {
          number: "02",
          type: "KONTENIDO",
          title: "Kontenido pa social media",
          description:
            "Foto, Reels i kreatividat pensá pa bo kanalanan.",
        },
        {
          number: "03",
          type: "KOMUNIDAT",
          title: "Presensia konsistente",
          description:
            "Un presensia profesional, aktivo i relevante.",
        },
      ],
      processLabel: "NOS ENFOQUE",
      processTitle: "Un presensia social ku ta traha.",
      processSteps: [
        "Traba bo strategia di kontenido",
        "Krea i organiza bo kontenido",
        "Publika, maneha i optimiza",
      ],
      ctaTitle: "Laga social media na nos man.",
      ctaText:
        "Konta nos unda bo marka ta awe i unda bo ke bai.",
      ctaButton: "KUMINSÁ UN PROYEKTO ↗",
    },

    advertising: {
      eyebrow: "PROPAGANDA · META ADS",
      title: "Mi ke hasi propaganda.",
      intro:
        "Propaganda ta mas ku pone placa tras di un post. Nos ta krea kampañanan pa alkansá e personanan korekto i yeba nan pa aksion.",
      benefits: [
        "Kampañanan di Meta",
        "Segmentashon di audiencia",
        "Test i optimisashon kreativo",
      ],
      visualLabel: "META ADS · KAMPAÑA · PERFORMANCE",
      workItems: [
        {
          number: "01",
          type: "KAMPAÑA",
          title: "Propaganda na Meta",
          description:
            "Kampañanan pagá ku un meta di negoshi kla.",
        },
        {
          number: "02",
          type: "KREATIVIDAT",
          title: "Piesanan di kampaña",
          description:
            "Konseptonan visual pa hala atenshon.",
        },
        {
          number: "03",
          type: "PERFORMANCE",
          title: "Optimisashon",
          description:
            "Test, midi i optimiza pa mehora resultado.",
        },
      ],
      processLabel: "NOS ENFOQUE",
      processTitle: "Kreatividat i resultado.",
      processSteps: [
        "Definí audiencia i meta",
        "Desaroya e kreatividat di kampaña",
        "Lansa, midi i optimiza",
      ],
      ctaTitle:
        "Bo ta kla pa pone bo marka dilanti di mas hende?",
      ctaText:
        "Nos por traha un kampaña alrededor di un meta di negoshi kla.",
      ctaButton: "PLANEA KAMPAÑA ↗",
    },

    website: {
      eyebrow: "WEB · PRESENSIA DIGITAL",
      title: "Mi tin mester di un website.",
      intro:
        "Bo website ta hopi biaha e promé kontakto serio ku un hende tin ku bo negoshi. Nos ta krea eksperensianan digital ku ta komuniká i trese konfiansa.",
      benefits: [
        "Presensia digital profesional",
        "Eksperensia pa mobile",
        "Kaminanan kla pa konvershon",
      ],
      visualLabel: "WEB DESIGN · EKSPERENSIA · KONVERSHON",
      workItems: [
        {
          number: "01",
          type: "WEB DESIGN",
          title: "Website di marka",
          description:
            "Website ku ta komuniká bo marka di forma kla i profesional.",
        },
        {
          number: "02",
          type: "EKSPERENSIA",
          title: "Eksperensia digital",
          description:
            "Interfás ku ta pensa riba kon hende ta navigá i skohe.",
        },
        {
          number: "03",
          type: "KONVERSHON",
          title: "Kaminanan pa aksion",
          description:
            "Kaminanan kla pa kontakto, reserva òf compra.",
        },
      ],
      processLabel: "NOS ENFOQUE",
      processTitle: "Diseñá pa komuniká.",
      processSteps: [
        "Definí struktura i user journey",
        "Diseñá e eksperensia visual",
        "Konstrui i prepara e website",
      ],
      ctaTitle:
        "Bo website mester traha mes fuerte ku bo negoshi.",
      ctaText:
        "Nos por krea un presensia digital ku ta representá bo marka bon.",
      ctaButton: "KUMINSÁ UN PROYEKTO ↗",
    },

    "online-bookings": {
      eyebrow: "RESERVASHON · KONVERSHON",
      title: "Mi ke risibí reservashonnan online.",
      intro:
        "Hasi e siguiente paso mas fásil pa bo klientenan. Nos ta yuda bo krea un eksperensia di reserva ku ta redusí frikshon i konvertí interes den sita.",
      benefits: [
        "Reservashon mas simpel",
        "CTA kla",
        "Mas oportunidat pa konvertí",
      ],
      visualLabel: "RESERVASHON · UX · KONVERSHON",
      workItems: [
        {
          number: "01",
          type: "RESERVASHON",
          title: "Eksperensia di reserva",
          description:
            "Un sistema ku ta hasi reserva mas fásil pa bo klientenan.",
        },
        {
          number: "02",
          type: "UX",
          title: "Customer journey",
          description:
            "Un kaminu mas simpel ku ta redusí frikshon.",
        },
        {
          number: "03",
          type: "KONVERSHON",
          title: "CTA i aksion",
          description:
            "Punto kla pa konvertí interes den reserva.",
        },
      ],
      processLabel: "NOS ENFOQUE",
      processTitle: "Reservá mester ta fásil.",
      processSteps: [
        "Komprondé kon bo klientenan ta reserva",
        "Diseñá un kaminu mas simpel",
        "Konektá e eksperensia ku bo sistema di reserva",
      ],
      ctaTitle: "Hasi reserva mas fásil pa bo klientenan.",
      ctaText:
        "Konta nos kon bo sistema ta traha awor i nos lo mira unda nos por mehora.",
      ctaButton: "KONTA NOS ↗",
    },
  },
}

const priceByNeed: Record<Language, Record<NeedKey, string>> = {
  ES: {
    "more-customers": "Paquetes desde 900 XCG/mes · estrategia según necesidades",
    "better-content": "Reels desde 200 XCG · fotos desde 350 XCG",
    "social-media": "Paquetes mensuales desde 900 XCG",
    advertising: "Precio según campaña · inversión publicitaria aparte",
    website: "Landing 1.000–1.500 XCG · web 1.800–2.500 XCG",
    "online-bookings": "Web + reservas 2.500–3.500 XCG · automatizaciones a medida",
  },
  EN: {
    "more-customers": "Packages from XCG 900/month · strategy based on your needs",
    "better-content": "Reels from XCG 200 · photos from XCG 350",
    "social-media": "Monthly packages from XCG 900",
    advertising: "Quoted by campaign · ad spend is separate",
    website: "Landing page XCG 1,000–1,500 · website XCG 1,800–2,500",
    "online-bookings": "Website + booking XCG 2,500–3,500 · custom automation",
  },
  PAP: {
    "more-customers": "Paketnan for di 900 XCG/luna · strategia segun bo nesesidat",
    "better-content": "Reels for di 200 XCG · foto for di 350 XCG",
    "social-media": "Paketnan mensual for di 900 XCG",
    advertising: "Preis segun kampaña · presupuesto di anunsio aparte",
    website: "Landing 1.000–1.500 XCG · website 1.800–2.500 XCG",
    "online-bookings": "Website + reserva 2.500–3.500 XCG · automashon personalisá",
  },
}

export default function NeedPage({ slug }: { slug: string }) {
  const { language } = useLanguage()

  const languageContent = content[language]
  const data =
    languageContent[slug as NeedKey] ??
    content.EN[slug as NeedKey]

  if (!data) {
    return (
      <main className="need-page">
        <section className="need-page-hero">
          <div className="need-page-container">
            <p>Page not found.</p>
            <Link href="/">← Back home</Link>
          </div>
        </section>
      </main>
    )
  }

  const isSpanish = language === "ES"
  const isPapiamento = language === "PAP"

  const backText = isSpanish
    ? "Volver"
    : isPapiamento
      ? "Bai bek"
      : "Back"

  const processIntro = isSpanish
    ? "No empezamos creando piezas. Primero entendemos qué necesita tu negocio y qué debe conseguir cada acción."
    : isPapiamento
      ? "Nos no ta kuminsá ku krea pieza. Promé nos ta komprondé kiko bo negoshi mester logra."
      : "We don't start by making content. We first understand what your business needs and what each action should achieve."

  return (
    <main className="need-page">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="need-page-hero">
        <div className="need-page-glow" />

        <div className="need-page-container">

          <div className="need-page-top">
            <Link href="/" className="need-back">
              ← {backText}
            </Link>

            <span>{data.eyebrow}</span>
          </div>

          <div className="need-page-heading">
            <h1>{data.title}</h1>

            <div className="need-page-intro">
              <p>{data.intro}</p>
              <p className="need-price">{priceByNeed[language][slug as NeedKey]}</p>
            </div>
          </div>

          {/* Estos ya NO son botones.
              Son mensajes de refuerzo. */}
          <div className="need-benefits">
            {data.benefits.map((benefit, index) => (
              <div
                className="need-benefit"
                key={benefit}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{benefit}</strong>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          MAIN OPTIONS
          LAS ÚNICAS 3 OPCIONES GRANDES INTERACTIVAS
      ========================================================== */}
      <section
        className="need-work-section"
        id="work-examples"
      >
        <div className="need-page-container">

          <div className="need-section-header">

            <div className="need-section-label">
              <span>01</span>

              <span>
                {isSpanish
                  ? "QUÉ PODEMOS HACER"
                  : isPapiamento
                    ? "KIKO NOS POR HASI"
                    : "WHAT WE CAN DO"}
              </span>
            </div>

            <p>
              {isSpanish
                ? "Estas son las partes del servicio. El alcance exacto se acuerda contigo antes de comenzar."
                : isPapiamento
                  ? "Esakinan ta e partinan di e servisio. Nos ta akordá e alkanse eksakto ku bo promé ku kuminsá."
                  : "These are the parts of the service. We agree on the exact scope with you before work begins."}
            </p>

          </div>


          {/* LAS TRES TARJETAS GRANDES */}
          <div className="need-work-grid">

            {data.workItems.map((item, index) => (
              <article
                className={`need-work-card ${
                  index === 0
                    ? "need-work-card-large"
                    : ""
                }`}
                key={item.number}
              >

                <div className="need-work-image">

                  <div className="need-work-visual">

                    <span className="need-work-number">
                      {item.number}
                    </span>

                    <span className="need-work-category">
                      {item.type}
                    </span>

                    <strong>
                      {item.title}
                    </strong>

                  </div>

                </div>


                <div className="need-work-info">

                  <span className="need-work-info-type">
                    {item.type}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </article>
            ))}

          </div>


        </div>
      </section>


      {/* =========================================================
          APPROACH
          REFUERZO — NO REPITE LOS SERVICIOS
      ========================================================== */}
      <section className="need-process-section">
        <div className="need-page-container">

          <div className="need-section-label">

            <span>02</span>

            <span>
              {data.processLabel}
            </span>

          </div>


          <div className="need-process-heading">

            <h2>
              {data.processTitle}
            </h2>

            <p>
              {processIntro}
            </p>

          </div>


          <div className="need-process-grid">

            {data.processSteps.map((step, index) => (
              <div
                className="need-process-card"
                key={step}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{step}</p>

                <span>↗</span>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="need-cta-section">

        <div className="need-page-container">

          <div className="need-cta">

            <span className="need-cta-label">
              STRATEGIX®
            </span>

            <h2>
              {data.ctaTitle}
            </h2>

            <p>
              {data.ctaText}
            </p>


            <div className="need-cta-actions">

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="need-cta-primary"
              >
                {data.ctaButton}
              </a>

              <a
                href={EMAIL}
                className="need-cta-secondary"
              >
                {isSpanish
                  ? "ENVIAR EMAIL ↗"
                  : isPapiamento
                    ? "MANDA EMAIL ↗"
                    : "SEND AN EMAIL ↗"}
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
