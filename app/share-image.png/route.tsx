import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "70px 80px", background: "#0c0913", color: "#ffffff" }}>
      <div style={{ display: "flex", fontSize: 28, color: "#ba94f0", letterSpacing: 7 }}>CURAÇAO</div>
      <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -5 }}>STRATEGIX</div>
      <div style={{ display: "flex", fontSize: 34 }}>Marketing · Photography · Video · Websites</div>
      <div style={{ display: "flex", fontSize: 26, color: "#ba94f0" }}>strategixcuracao.com</div>
    </div>,
    { width: 1200, height: 630 },
  )
}
