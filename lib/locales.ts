export const locales = ["es", "en", "pap"] as const
export type Locale = (typeof locales)[number]
export type Language = "ES" | "EN" | "PAP"

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value)
}

export function localizedPath(path: string, language: Language | Locale) {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  const locale = language.toLowerCase()
  const unprefixed = path.replace(/^\/(es|en|pap)(?=\/|\?|#|$)/, "") || "/"
  const suffix = unprefixed.startsWith("/") ? unprefixed : `/${unprefixed}`
  return locale === "es" ? suffix : `/${locale}${suffix === "/" ? "" : suffix}`
}

export function serviceMessage(language: Language, service: string) {
  return {
    ES: `Hola, quiero información sobre ${service} de Strategix.`,
    EN: `Hi, I would like more information about ${service} from Strategix.`,
    PAP: `Bon dia, mi ke mas informashon tokante ${service} di Strategix.`,
  }[language]
}

export function packageMessage(language: Language, name: string, sector: string) {
  return {
    ES: `Hola, me interesa el paquete ${name} para ${sector} de Strategix.`,
    EN: `Hi, I am interested in the ${name} package for ${sector} from Strategix.`,
    PAP: `Bon dia, mi tin interes den e pakete ${name} pa ${sector} di Strategix.`,
  }[language]
}

export const projectMessage: Record<Language, string> = {
  ES: "Hola, quiero cotizar un proyecto web o una automatización con Strategix.",
  EN: "Hi, I would like a quote for a website or automation project with Strategix.",
  PAP: "Bon dia, mi ke un kotisashon pa un website òf un proyekto di automashon ku Strategix.",
}
