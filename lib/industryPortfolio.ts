export type IndustryPortfolioKey =
  | "restaurants"
  | "beauty"
  | "clinics"
  | "dental"

export type PortfolioItem = {
  type: "image" | "video"
  src: string
  poster?: string
  orientation?: "portrait" | "landscape"
  title: Record<Language, string>
  description: Record<Language, string>
  alt: Record<Language, string>
}

// Optimized media is stored in public/portfolio/<industry>/.
export const industryPortfolio: Record<
  IndustryPortfolioKey,
  PortfolioItem[]
> = {
  restaurants: [
    {
      type: "video",
      src: "/portfolio/restaurants/tomahawk-restaurante-curacao.mp4",
      poster: "/portfolio/restaurants/tomahawk-restaurante-curacao.webp",
      orientation: "portrait",
      title: { ES: "Tomahawk a la parrilla", EN: "Tomahawk on the grill", PAP: "Tomahawk na gril" },
      description: {
        ES: "Del fuego al plato: producción de video gastronómico para restaurantes en Curaçao.",
        EN: "From the grill to the plate: food video production for restaurants in Curaçao.",
        PAP: "For di gril te na plato: video di kuminda pa restorant na Kòrsou.",
      },
      alt: {
        ES: "Preparación y presentación de un tomahawk a la parrilla",
        EN: "Grilling and plating a tomahawk steak",
        PAP: "Preparashon i presentashon di un tomahawk na gril",
      },
    },
    {
      type: "video",
      src: "/portfolio/restaurants/ceviche-angus-restaurante-curacao.mp4",
      poster: "/portfolio/restaurants/ceviche-angus-restaurante-curacao.webp",
      orientation: "portrait",
      title: { ES: "Ceviche en Angus", EN: "Ceviche at Angus", PAP: "Ceviche na Angus" },
      description: {
        ES: "Del corte de los ingredientes al ceviche servido: una historia desde la cocina de Angus.",
        EN: "From preparing the ingredients to the finished ceviche: a story from the Angus kitchen.",
        PAP: "For di preparashon di ingredientenan te na e ceviche kla: un storia for di kushina di Angus.",
      },
      alt: {
        ES: "Chef de Angus prepara y presenta un ceviche",
        EN: "Angus chef prepares and presents a ceviche",
        PAP: "Chef di Angus ta prepará i presentá un ceviche",
      },
    },
    {
      type: "video",
      src: "/portfolio/restaurants/pasta-siciliana-restaurante-curacao.mp4",
      poster: "/portfolio/restaurants/pasta-siciliana-restaurante-curacao.webp",
      orientation: "portrait",
      title: { ES: "Pasta en Siciliana", EN: "Pasta at Siciliana", PAP: "Pasta na Siciliana" },
      description: {
        ES: "Cocina, movimiento y emplatado en un video corto para Siciliana.",
        EN: "Cooking, motion and plating in a short video for Siciliana.",
        PAP: "Kushina, movimiento i presentashon di plato den un video kòrtiku pa Siciliana.",
      },
      alt: {
        ES: "Preparación y emplatado de pasta en Siciliana",
        EN: "Preparing and plating pasta at Siciliana",
        PAP: "Preparashon i presentashon di pasta na Siciliana",
      },
    },
    {
      type: "video",
      src: "/portfolio/restaurants/lanzamiento-flakos-beach-station-curacao.mp4",
      poster: "/portfolio/restaurants/lanzamiento-flakos-beach-station-curacao.webp",
      orientation: "landscape",
      title: { ES: "Nueva sede de Flakos Grill", EN: "Flakos Grill's new location", PAP: "Sede nobo di Flakos Grill" },
      description: {
        ES: "Un tráiler horizontal presenta la apertura de Flakos Grill en Beach Station.",
        EN: "A landscape trailer introduces the new Flakos Grill location at Beach Station.",
        PAP: "Un trailer horizontal ta presentá e sede nobo di Flakos Grill na Beach Station.",
      },
      alt: {
        ES: "Tráiler de lanzamiento de Flakos Grill en Beach Station",
        EN: "Launch trailer for Flakos Grill at Beach Station",
        PAP: "Trailer di apertura di Flakos Grill na Beach Station",
      },
    },
  ],
  beauty: [
    {
      type: "video",
      src: "/portfolio/beauty/video-educativo-estetica-curacao.mp4",
      poster: "/portfolio/beauty/video-educativo-estetica-curacao.webp",
      orientation: "portrait",
      title: { ES: "Contenido educativo para Grateful", EN: "Educational content for Grateful", PAP: "Kontenido edukativo pa Grateful" },
      description: {
        ES: "Una especialista explica preocupaciones de la piel con rótulos y productos en pantalla.",
        EN: "A specialist discusses skin concerns with on-screen captions and product visuals.",
        PAP: "Un spesialista ta splika problemanan di piel ku teksto i produkto riba pantaya.",
      },
      alt: {
        ES: "Especialista de Grateful habla sobre el cuidado de la piel",
        EN: "Grateful specialist discusses skin care",
        PAP: "Spesialista di Grateful ta papia tokante kuido di piel",
      },
    },
    {
      type: "video",
      src: "/portfolio/beauty/aniversario-dynailsty-video-curacao.mp4",
      poster: "/portfolio/beauty/aniversario-dynailsty-video-curacao.webp",
      orientation: "portrait",
      title: { ES: "10 años de Dynailsty", EN: "10 years of Dynailsty", PAP: "10 aña di Dynailsty" },
      description: {
        ES: "La dueña celebra el aniversario y comunica una oferta en un video directo a cámara.",
        EN: "The owner marks the anniversary and shares an offer in a direct-to-camera video.",
        PAP: "E doño ta selebrá e aniversario i ta konta tokante un oferta den un video na kamera.",
      },
      alt: {
        ES: "Dueña de Dynailsty celebra diez años del negocio",
        EN: "Dynailsty owner celebrates ten years in business",
        PAP: "Doño di Dynailsty ta selebrá dies aña di negoshi",
      },
    },
  ],
  clinics: [],
  dental: [],
}
import type { Language } from "@/components/LanguageProvider"
