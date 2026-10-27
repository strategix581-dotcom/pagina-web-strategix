import { serviceMessage } from "@/lib/locales"
import type { Language } from "@/components/LanguageProvider"

const whatsapp = "https://wa.me/59996931075"

const copy = {
  ES: {
    label: "SERVICIOS INDIVIDUALES",
    title: "¿Solo necesitas fotos o un video?",
    intro: "No necesitas contratar un paquete mensual. Elige una sesión o una pieza concreta y sabrás qué recibes antes de empezar.",
    cta: "Consultar este servicio",
    note: "Los precios están en XCG. Las producciones personalizadas y campañas especiales se cotizan según el alcance.",
    groups: [
      { title: "Fotografía profesional", description: "Para menús, productos, espacios, servicios y campañas.", items: [
        ["Sesión Content", "350", "15 fotos profesionales editadas"],
        ["Sesión de Marca", "550", "25 fotos profesionales editadas"],
        ["Campaña Fotográfica", "800", "30–40 fotos + dirección creativa"],
        ["Producto Mini", "400", "Hasta 5 productos · 10–15 fotos"],
      ] },
      { title: "Producción de video", description: "Una pieza individual para redes, lanzamientos o publicidad.", items: [
        ["Reel Básico", "200", "15–30 seg · edición limpia y textos sencillos"],
        ["Reel Pro", "275", "20–45 seg · storytelling, subtítulos y diseño sonoro"],
        ["Reel Cinemático", "450", "Producción premium y postproducción avanzada"],
        ["Reel Comercial", "Desde 650", "Concepto y producción para campañas"],
      ] },
    ],
  },
  EN: {
    label: "INDIVIDUAL SERVICES",
    title: "Only need photos or one video?",
    intro: "You do not need a monthly package. Choose one session or a specific deliverable and know what you will receive before we start.",
    cta: "Ask about this service",
    note: "Prices are in XCG. Custom productions and special campaigns are quoted by scope.",
    groups: [
      { title: "Professional photography", description: "For menus, products, spaces, services and campaigns.", items: [
        ["Content Session", "350", "15 professionally edited photos"],
        ["Brand Session", "550", "25 professionally edited photos"],
        ["Campaign Session", "800", "30–40 photos + creative direction"],
        ["Product Mini", "400", "Up to 5 products · 10–15 photos"],
      ] },
      { title: "Video production", description: "One deliverable for social media, launches or advertising.", items: [
        ["Basic Reel", "200", "15–30 sec · clean edit and simple text"],
        ["Pro Reel", "275", "20–45 sec · storytelling, captions and sound design"],
        ["Cinematic Reel", "450", "Premium production and advanced post-production"],
        ["Commercial Reel", "From 650", "Concept and production for campaigns"],
      ] },
    ],
  },
  PAP: {
    label: "SERVISIONAN INDIVIDUAL",
    title: "Bo tin mester solamente foto òf un video?",
    intro: "Bo no tin mester di un pakete mensual. Skohe un seshon òf un piesa spesífiko i sa kiko bo ta risibí promé ku nos kuminsá.",
    cta: "Pidi informashon",
    note: "Preisnan ta den XCG. Produkshon personalisá i kampañanan spesial ta haña kotisashon segun e proyekto.",
    groups: [
      { title: "Fotografia profesional", description: "Pa menú, produkto, espasio, servisio i kampaña.", items: [
        ["Seshon Content", "350", "15 foto profesional editá"],
        ["Seshon di Marka", "550", "25 foto profesional editá"],
        ["Seshon di Kampaña", "800", "30–40 foto + direkshon kreativo"],
        ["Produkto Mini", "400", "Te ku 5 produkto · 10–15 foto"],
      ] },
      { title: "Produkshon di video", description: "Un piesa pa red sosial, lansamentu òf publikidat.", items: [
        ["Reel Básiko", "200", "15–30 seg · edishon limpi i teksto simpel"],
        ["Reel Pro", "275", "20–45 seg · storytelling, subtítulo i diseño di zonido"],
        ["Reel Sinemátiko", "450", "Produkshon premium i postprodukshon avansá"],
        ["Reel Komersial", "For di 650", "Konsepto i produkshon pa kampaña"],
      ] },
    ],
  },
} satisfies Record<Language, {
  label: string
  title: string
  intro: string
  cta: string
  note: string
  groups: { title: string; description: string; items: string[][] }[]
}>

export default function IndividualServices({ language, mode = "home" }: { language: Language; mode?: "home" | "industry" }) {
  const t = copy[language]
  const content = (
    <div className="individual-services-content">
      <div className="individual-services-heading">
        <span className={mode === "industry" ? "industry-label" : "eyebrow"}>{t.label}</span>
        <h2>{t.title}</h2>
        <p>{t.intro}</p>
      </div>
      <div className="individual-services-grid">
        {t.groups.map((group) => (
          <article className="individual-service-group" key={group.title}>
            <div className="individual-service-group-heading"><h3>{group.title}</h3><p>{group.description}</p></div>
            <div className="individual-service-list">
              {group.items.map(([name, price, detail]) => (
                <div className="individual-service-row" key={name}>
                  <div><strong>{name}</strong><small>{detail}</small></div>
                  <span><b>XCG</b> {price}</span>
                </div>
              ))}
            </div>
            <a href={`${whatsapp}?text=${encodeURIComponent(serviceMessage(language, group.title))}`} target="_blank" rel="noopener noreferrer">{t.cta} ↗</a>
          </article>
        ))}
      </div>
      <p className="individual-services-note">{t.note}</p>
    </div>
  )

  if (mode === "industry") return <section className="industry-individual-services" id="individual-services"><div className="industry-section-number">03</div>{content}</section>
  return <section className="simple-section page-shell individual-services-section" id="individual-services">{content}</section>
}
