"use client"

import { useLanguage } from "@/components/LanguageProvider"

const footerText = {
  EN: {
    follow: "Follow our work",
    rights: "Creative marketing agency in Curaçao",
  },
  ES: {
    follow: "Sigue nuestro trabajo",
    rights: "Agencia de marketing creativo en Curaçao",
  },
  PAP: {
    follow: "Sigui nos trabou",
    rights: "Agensia di marketing kreativo na Kòrsou",
  },
}

export default function Footer() {
  const { language } = useLanguage()
  const t = footerText[language]

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <strong>STRATEGIX®</strong>
          <span>{t.rights}</span>
        </div>

        <div className="site-footer-socials">
          <span>{t.follow}</span>

          <div>
            <a
              href="https://www.instagram.com/strategix_growth/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.follow} — Instagram`}
            >
              Instagram ↗
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61556893602074&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.follow} — Facebook`}
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
