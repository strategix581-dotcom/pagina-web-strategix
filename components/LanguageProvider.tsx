"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Language = "ES" | "EN" | "PAP"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] = useState<Language>("EN")

  useEffect(() => {
    const saved = localStorage.getItem("strategix-language")

    if (saved === "ES" || saved === "EN" || saved === "PAP") {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    localStorage.setItem("strategix-language", nextLanguage)
  }

  useEffect(() => {
    document.documentElement.lang =
      language === "ES" ? "es" : language === "PAP" ? "pap" : "en"

    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<Language>

      if (
        customEvent.detail === "ES" ||
        customEvent.detail === "EN" ||
        customEvent.detail === "PAP"
      ) {
        setLanguage(customEvent.detail)
      }
    }

    window.addEventListener("strategix-set-language", handler)

    return () => {
      window.removeEventListener("strategix-set-language", handler)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return context
}
