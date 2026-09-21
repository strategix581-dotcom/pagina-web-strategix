"use client"

import { useState } from "react"
import type { Language } from "@/components/LanguageProvider"

type Sector = "food" | "beauty" | "nails"
type Plan = {
  name: string
  price: string
  reels: string
  photos: string
  designs: number
  stories: string
  ads: string
  sessions?: string
  optimized?: string
}

const sectorPlans: Record<Sector, Plan[]> = {
  food: [
    { name: "essential", price: "900", reels: "4-basic", photos: "15", designs: 1, stories: "3", ads: "optional", sessions: "1" },
    { name: "growth", price: "1.300", reels: "3-basic-2-pro", photos: "20", designs: 2, stories: "4", ads: "optional", sessions: "up-to-2" },
    { name: "pro", price: "1.750", reels: "2-basic-3-pro-1-cinematic", photos: "25", designs: 3, stories: "5", ads: "1", sessions: "up-to-2" },
    { name: "premium", price: "2.300", reels: "2-basic-4-pro-2-cinematic", photos: "30", designs: 4, stories: "6-7", ads: "up-to-2", sessions: "up-to-3" },
  ],
  beauty: [
    { name: "essential", price: "900", reels: "4-basic", photos: "5", designs: 4, stories: "3", ads: "optional", sessions: "1" },
    { name: "growth", price: "1.300", reels: "3-basic-2-pro", photos: "6", designs: 6, stories: "4", ads: "optional", sessions: "up-to-2" },
    { name: "pro", price: "1.750", reels: "2-basic-3-pro-1-cinematic", photos: "8", designs: 8, stories: "5", ads: "1", sessions: "up-to-2" },
    { name: "premium", price: "2.300", reels: "2-basic-4-pro-2-cinematic", photos: "10", designs: 10, stories: "6-7", ads: "up-to-2", sessions: "up-to-3" },
  ],
  nails: [
    { name: "essential", price: "900", reels: "4-basic", photos: "up-to-5", optimized: "up-to-8", designs: 4, stories: "3", ads: "optional" },
    { name: "growth", price: "1.300", reels: "3-basic-2-pro", photos: "5", optimized: "up-to-10", designs: 6, stories: "4", ads: "optional" },
    { name: "pro", price: "1.750", reels: "2-basic-3-pro-1-cinematic", photos: "5", optimized: "up-to-15", designs: 8, stories: "5", ads: "1" },
    { name: "premium", price: "2.300", reels: "2-basic-4-pro-2-cinematic", photos: "8", optimized: "up-to-20", designs: 10, stories: "6-7", ads: "up-to-2" },
  ],
}

const content = {
  ES: {
    sectors: { food: "Restaurantes", beauty: "Belleza y estética", nails: "Salones de uñas" },
    intros: {
      food: "Más fotografía de platos, productos y ambiente.",
      beauty: "Más diseños para ofertas y contenido educativo; menos fotos.",
      nails: "Más video y diseños, con optimización de fotos tomadas por el salón.",
    },
    names: { essential: "Esencial", growth: "Crecimiento", pro: "Pro", premium: "Premium" },
    month: "/ mes",
    reels: { "4-basic": "4 reels básicos", "3-basic-2-pro": "3 reels básicos + 2 Pro", "2-basic-3-pro-1-cinematic": "2 básicos + 3 Pro + 1 cinemático", "2-basic-4-pro-2-cinematic": "2 básicos + 4 Pro + 2 cinemáticos" },
    photos: (n: string) => n.startsWith("up-to-") ? `Hasta ${n.slice(6)} fotos profesionales` : `${n} fotos profesionales`,
    optimized: (n: string) => `Hasta ${n.slice(6)} fotos del cliente optimizadas`,
    designs: (n: number) => `${n} ${n === 1 ? "diseño promocional" : "diseños promocionales"}`,
    stories: (n: string) => `${n} historias por semana`,
    ads: { optional: "1 campaña Meta Ads opcional", "1": "1 campaña Meta Ads", "up-to-2": "Hasta 2 campañas Meta Ads" },
    sessions: { "1": "1 sesión de contenido al mes", "up-to-2": "Hasta 2 sesiones de contenido", "up-to-3": "Hasta 3 sesiones de contenido" },
    management: "Manejo de Instagram + Facebook",
    cta: "Consultar paquete",
    note: "El presupuesto publicitario se paga aparte. Contenido adicional y producciones especiales se cotizan por separado.",
  },
  EN: {
    sectors: { food: "Restaurants", beauty: "Beauty & aesthetics", nails: "Nail salons" },
    intros: {
      food: "More photography for dishes, products and atmosphere.",
      beauty: "More promotional and educational designs; fewer photos.",
      nails: "More video and designs, plus editing of salon supplied photos.",
    },
    names: { essential: "Essential", growth: "Growth", pro: "Pro", premium: "Premium" },
    month: "/ month",
    reels: { "4-basic": "4 basic reels", "3-basic-2-pro": "3 basic reels + 2 Pro", "2-basic-3-pro-1-cinematic": "2 basic + 3 Pro + 1 cinematic", "2-basic-4-pro-2-cinematic": "2 basic + 4 Pro + 2 cinematic" },
    photos: (n: string) => n.startsWith("up-to-") ? `Up to ${n.slice(6)} professional photos` : `${n} professional photos`,
    optimized: (n: string) => `Up to ${n.slice(6)} client photos optimized`,
    designs: (n: number) => `${n} promotional ${n === 1 ? "design" : "designs"}`,
    stories: (n: string) => `${n} stories per week`,
    ads: { optional: "1 optional Meta Ads campaign", "1": "1 Meta Ads campaign", "up-to-2": "Up to 2 Meta Ads campaigns" },
    sessions: { "1": "1 content session per month", "up-to-2": "Up to 2 content sessions", "up-to-3": "Up to 3 content sessions" },
    management: "Instagram + Facebook management",
    cta: "Ask about this package",
    note: "Ad spend is separate. Extra content and special productions are quoted separately.",
  },
  PAP: {
    sectors: { food: "Restorantnan", beauty: "Beleza i estétika", nails: "Salòn di uña" },
    intros: {
      food: "Mas potrèt di plachinan, produktonan i ambiente.",
      beauty: "Mas diseño pa oferta i edukashon; ménos potrèt.",
      nails: "Mas video i diseño, ku optimisashon di potrètnan di e salòn.",
    },
    names: { essential: "Esencial", growth: "Kresementu", pro: "Pro", premium: "Premium" },
    month: "/ luna",
    reels: { "4-basic": "4 reels básiko", "3-basic-2-pro": "3 reels básiko + 2 Pro", "2-basic-3-pro-1-cinematic": "2 básiko + 3 Pro + 1 sinemátiko", "2-basic-4-pro-2-cinematic": "2 básiko + 4 Pro + 2 sinemátiko" },
    photos: (n: string) => n.startsWith("up-to-") ? `Te ku ${n.slice(6)} potrèt profesional` : `${n} potrèt profesional`,
    optimized: (n: string) => `Te ku ${n.slice(6)} potrèt di kliente optimisá`,
    designs: (n: number) => `${n} diseño promosional`,
    stories: (n: string) => `${n} stories pa siman`,
    ads: { optional: "1 kampaña Meta Ads opshonal", "1": "1 kampaña Meta Ads", "up-to-2": "Te ku 2 kampaña Meta Ads" },
    sessions: { "1": "1 seshon di kontenido pa luna", "up-to-2": "Te ku 2 seshon di kontenido", "up-to-3": "Te ku 3 seshon di kontenido" },
    management: "Maneho di Instagram + Facebook",
    cta: "Pidi informashon di pakete",
    note: "Presupuesto di anunsio ta aparte. Kontenido adishonal i produkshon spesial ta risibí kotisashon aparte.",
  },
} as const

const whatsapp = "https://wa.me/59996931075"

export default function PackageComparison({ language }: { language: Language }) {
  const [sector, setSector] = useState<Sector>("food")
  const t = content[language]
  const plans = sectorPlans[sector]

  return <>
    <div className="sector-tabs" role="group" aria-label="Sector">
      {(Object.keys(t.sectors) as Sector[]).map(key => <button key={key} type="button" className={sector === key ? "active" : ""} aria-pressed={sector === key} onClick={() => setSector(key)}>{t.sectors[key]}</button>)}
    </div>
    <p className="sector-intro">{t.intros[sector]}</p>
    <div className="package-grid">
      {plans.map(plan => {
        const name = t.names[plan.name as keyof typeof t.names]
        const details = [
          t.reels[plan.reels as keyof typeof t.reels],
          t.photos(plan.photos),
          ...(plan.optimized ? [t.optimized(plan.optimized)] : []),
          t.designs(plan.designs),
          t.stories(plan.stories),
          t.management,
          t.ads[plan.ads as keyof typeof t.ads],
          ...(plan.sessions ? [t.sessions[plan.sessions as keyof typeof t.sessions]] : []),
        ]
        return <article className={`package-card ${plan.name === "pro" ? "featured" : ""}`} key={plan.name}>
          <h3>{name}</h3>
          <div className="package-price"><span>XCG</span><strong>{plan.price}</strong><small>{t.month}</small></div>
          <ul className="package-inclusions">{details.map(item => <li key={item}>{item}</li>)}</ul>
          <a href={`${whatsapp}?text=${encodeURIComponent(`Hola, me interesa el paquete ${name} para ${t.sectors[sector]} de Strategix.`)}`} target="_blank" rel="noopener noreferrer">{t.cta} <span aria-hidden="true">↗</span></a>
        </article>
      })}
    </div>
    <p className="package-note">{t.note}</p>
  </>
}
