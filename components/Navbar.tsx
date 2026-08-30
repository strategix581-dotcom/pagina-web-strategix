"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useLanguage, type Language } from "@/components/LanguageProvider"

const languages: { code: Language; name: string }[] = [
  { code: "ES", name: "Español" },
  { code: "EN", name: "English" },
  { code: "PAP", name: "Papiamentu" },
]

const navText = {
  EN: {
    work: "Work",
    services: "Services",
    about: "About",
    project: "Start a project ↗",
  },
  ES: {
    work: "Trabajo",
    services: "Servicios",
    about: "Nosotros",
    project: "Iniciar proyecto ↗",
  },
  PAP: {
    work: "Trabou",
    services: "Servisionan",
    about: "Tokante nos",
    project: "Kuminsá un proyekto ↗",
  },
}

export default function Navbar() {
  const { language, setLanguage } = useLanguage()

  const [open, setOpen] = useState(false)

  const languageRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const t = navText[language]

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node

      if (
        languageRef.current &&
        !languageRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    )

    document.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      )

      document.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }
  }, [open])

  const handleLanguageClick = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    setOpen(false)
  }

  return (
    <nav className="strategix-nav">

      {/* LOGO */}

      <Link
        href="/"
        className="nav-logo"
        aria-label="Strategix home"
      >
        <Image
          src="/logo-strategix.png"
          alt="Strategix"
          width={260}
          height={111}
          priority
          className="strategix-logo"
        />
      </Link>


      {/* RIGHT SIDE */}

      <div className="nav-right">

        {/* NAVIGATION */}

        <div className="nav-links">
          <Link href="/#needs">
            {t.work}
          </Link>

          <Link href="/#industries">
            {t.services}
          </Link>

          <Link href="/#about">
            {t.about}
          </Link>
        </div>


        {/* ACTIONS */}

        <div className="nav-actions">

          {/* LANGUAGE */}

          <div
            ref={languageRef}
            className="language-selector"
          >

            <button
              ref={buttonRef}
              type="button"
              className={`language-button ${
                open ? "is-open" : ""
              }`}
              aria-expanded={open}
              aria-haspopup="menu"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()

                setOpen((current) => !current)
              }}
            >
              <span>
                {language}
              </span>

              <span
                aria-hidden="true"
                className="language-chevron"
              >
                ⌄
              </span>
            </button>


            {/* LANGUAGE MENU */}

            {open && (
              <div
                className="language-menu"
                role="menu"
              >

                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    role="menuitem"
                    className={
                      language === lang.code
                        ? "active"
                        : ""
                    }
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()

                      handleLanguageClick(
                        lang.code
                      )
                    }}
                  >

                    <span>
                      {lang.code}
                    </span>

                    <small>
                      {lang.name}
                    </small>

                  </button>
                ))}

              </div>
            )}

          </div>


          {/* CTA */}

          <a
            href="https://wa.me/59996931075"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-project"
          >
            {t.project}
          </a>

        </div>

      </div>

    </nav>
  )
}
