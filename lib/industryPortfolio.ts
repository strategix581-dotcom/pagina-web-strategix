export type IndustryPortfolioKey =
  | "restaurants"
  | "beauty"
  | "clinics"
  | "dental"

export type PortfolioItem = {
  type: "image" | "video"
  src: string
  poster?: string
  title: string
  alt: string
}

// Add approved Strategix work here after placing the files in
// public/portfolio/<industry>/. Empty arrays render honest placeholders.
export const industryPortfolio: Record<
  IndustryPortfolioKey,
  PortfolioItem[]
> = {
  restaurants: [],
  beauty: [],
  clinics: [],
  dental: [],
}
