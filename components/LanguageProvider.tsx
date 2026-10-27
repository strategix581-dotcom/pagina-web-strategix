"use client"

import { createContext, useContext } from "react"
import { localizedPath, type Language } from "@/lib/locales"
export type { Language } from "@/lib/locales"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children, language }: {
  children: React.ReactNode
  language: Language
}) {
  const setLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) return
    const { pathname, search, hash } = window.location
    window.location.assign(localizedPath(pathname + search + hash, nextLanguage))
  }
  return <LanguageContext.Provider value={{ language, setLanguage }}>
    {children}
  </LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
  return context
}
