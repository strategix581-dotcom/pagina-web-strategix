import { NextResponse, type NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (/^\/(es|en|pap)(\/|$)/.test(pathname)) return NextResponse.next()
  const url = request.nextUrl.clone()
  // Keep rewrites on the incoming host, including local previews.
  const host = request.headers.get("host")
  if (host) url.host = host
  // Preserve existing Spanish URLs; render their locale on the server.
  url.pathname = `/es${pathname === "/" ? "" : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ["/((?!api/|_next/|_vercel/|.*\\..*).*)"],
}
