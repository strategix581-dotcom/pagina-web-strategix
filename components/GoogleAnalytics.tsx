"use client"

import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./LanguageProvider"

const ID = "G-M55SDM9MHK"
const KEY = "strategix-analytics-consent"
type Choice = "accepted" | "rejected"
type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  "ga-disable-G-M55SDM9MHK"?: boolean
}

export default function GoogleAnalytics() {
  const { language } = useLanguage()
  const [choice, setChoice] = useState<Choice | null>(null)
  const [ready, setReady] = useState(false)
  const [open, setOpen] = useState(false)
  const initialized = useRef(false)
  const es = language === "ES"

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let saved: string | null = null
      try { saved = localStorage.getItem(KEY) } catch { /* Storage may be disabled. */ }
      setChoice(saved === "accepted" || saved === "rejected" ? saved : null)
      setReady(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (choice !== "accepted") return
    const w = window as AnalyticsWindow
    w["ga-disable-G-M55SDM9MHK"] = false
    w.dataLayer = w.dataLayer || []
    w.gtag = w.gtag || function () {
      // Google expects the standard gtag arguments object in the queue.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments)
    }
    if (!initialized.current) {
      w.gtag("consent", "default", {
        analytics_storage: "granted", ad_storage: "denied",
        ad_user_data: "denied", ad_personalization: "denied",
      })
      w.gtag("js", new Date())
      w.gtag("config", ID, { allow_google_signals: false, allow_ad_personalization_signals: false })
      initialized.current = true
    }
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null
      if (!(link instanceof HTMLAnchorElement)) return
      const url = new URL(link.href, window.location.href)
      if (url.hostname !== "wa.me" && url.hostname !== "api.whatsapp.com") return
      // Record placement only; never send phone numbers or prefilled messages.
      const section = link.closest("section[id], [id=services], [id=packages], [id=custom]")?.id
      w.gtag?.("event", "whatsapp_click", {
        page_path: window.location.pathname,
        placement: ["services", "packages", "custom"].includes(section || "") ? section : "general",
      })
    }
    document.addEventListener("click", click, true)
    return () => document.removeEventListener("click", click, true)
  }, [choice])

  const save = (next: Choice) => {
    try { localStorage.setItem(KEY, next) } catch { /* Consent still works for this visit. */ }
    if (next === "rejected") {
      const w = window as AnalyticsWindow
      w["ga-disable-G-M55SDM9MHK"] = true
      for (const item of document.cookie.split(";")) {
        const name = item.split("=")[0].trim()
        if (name !== "_ga" && !name.startsWith("_ga_")) continue
        for (const domain of ["", `;domain=${location.hostname}`, ";domain=.strategixcuracao.com"]) {
          document.cookie = `${name}=;Max-Age=0;path=/${domain};SameSite=Lax`
        }
      }
    }
    setChoice(next)
    setOpen(false)
  }

  return <>
    {choice === "accepted" && <Script src={`https://www.googletagmanager.com/gtag/js?id=${ID}`} strategy="afterInteractive" />}
    {ready && (choice === null || open) ? <aside className="analytics-choice" aria-label={es ? "Preferencias de privacidad" : "Privacy preferences"}>
      <strong>{es ? "¿Nos ayudas a mejorar la web?" : "Help us improve our website?"}</strong>
      <p>{es ? "Con tu permiso, Google Analytics usa cookies para medir visitas y clics de contacto. Puedes rechazarlo o cambiar tu elección cuando quieras. No lo usamos para personalizar anuncios." : "With your permission, Google Analytics uses cookies to measure visits and contact clicks. You can decline or change your choice at any time. We do not use it to personalize ads."}</p>
      <details><summary>{es ? "Más información" : "More information"}</summary>
        <p>{es ? "STRATEGIX utiliza estos datos para entender qué páginas ayudan a sus visitantes. Vercel también recoge estadísticas de visitas sin cookies. No enviamos el contenido de tus mensajes en el evento de contacto." : "STRATEGIX uses these data to understand which pages help visitors. Vercel also collects cookieless visit statistics. Our contact event does not send your message contents."} <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">{es ? "Cómo utiliza Google los datos" : "How Google uses data"}</a>.</p>
      </details>
      <div><button type="button" onClick={() => save("rejected")}>{es ? "Rechazar" : "Decline"}</button><button type="button" onClick={() => save("accepted")}>{es ? "Aceptar analítica" : "Accept analytics"}</button></div>
    </aside> : ready && <button className="analytics-settings" type="button" onClick={() => setOpen(true)}>{es ? "Privacidad" : "Privacy"}</button>}
    <style>{`.analytics-choice{position:fixed;bottom:18px;left:18px;z-index:1000;width:min(440px,calc(100vw - 36px));max-height:70vh;overflow:auto;background:#171120;color:#f6f3fb;border:1px solid #685078;border-radius:14px;padding:20px;box-shadow:0 8px 32px #0008;font:14px/1.5 Arial,sans-serif}.analytics-choice p{margin:10px 0}.analytics-choice strong{font-size:17px}.analytics-choice a{color:#d4b5ff;text-decoration:underline}.analytics-choice summary{cursor:pointer}.analytics-choice div{display:flex;gap:10px;margin-top:15px;flex-wrap:wrap}.analytics-choice button{border:1px solid #bd91ff;background:transparent;color:#f6f3fb;border-radius:7px;padding:10px 15px;cursor:pointer}.analytics-choice button:last-child{background:#bd91ff;color:#110c1c}.analytics-settings{position:fixed;bottom:10px;left:12px;z-index:900;border:1px solid #685078;background:#171120;color:#e5d5f6;border-radius:5px;font:12px Arial,sans-serif;padding:6px 10px;cursor:pointer}`}</style>
  </>
}
