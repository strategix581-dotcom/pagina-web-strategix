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
    {
      type: "image",
      src: "/portfolio/restaurants/fotografia-postre-chocolate-curacao.jpg",
      orientation: "portrait",
      title: { ES: "Fotografía de postres", EN: "Dessert photography", PAP: "Fotografia di dessert" },
      description: {
        ES: "Fotografía gastronómica que destaca textura, presentación y ambiente.",
        EN: "Food photography focused on texture, presentation and atmosphere.",
        PAP: "Fotografia di kuminda ku ta mustra tekstura, presentashon i ambiente.",
      },
      alt: {
        ES: "Porción de pastel de chocolate presentada en un restaurante",
        EN: "Slice of chocolate cake presented in a restaurant",
        PAP: "Pida bolo di chukulati presentá den un restorant",
      },
    },
    {
      type: "image",
      src: "/portfolio/restaurants/fotografia-menu-angus-curacao.jpg",
      orientation: "portrait",
      title: { ES: "Menú de Angus", EN: "Angus menu", PAP: "Menú di Angus" },
      description: {
        ES: "Una composición de platos muestra la variedad y presentación del restaurante.",
        EN: "A composed table spread shows the restaurant's variety and presentation.",
        PAP: "Un komposishon di platonan ta mustra e variedat i presentashon di e restorant.",
      },
      alt: {
        ES: "Selección de carnes, ceviche, salmón y ensalada del restaurante Angus",
        EN: "Selection of steak, ceviche, salmon and salad from Angus restaurant",
        PAP: "Selekshon di karni, ceviche, salmon i salada di restorant Angus",
      },
    },
    {
      type: "image",
      src: "/portfolio/restaurants/fotografia-producto-pizza-curacao.jpg",
      orientation: "portrait",
      title: { ES: "Producto en acción", EN: "Product in action", PAP: "Produkto den akshon" },
      description: {
        ES: "Una toma de preparación convierte un producto cotidiano en contenido visual.",
        EN: "An action shot turns an everyday product into engaging visual content.",
        PAP: "Un toma di preparashon ta konvertí un produkto diario den kontenido visual.",
      },
      alt: {
        ES: "Salsa vertiéndose sobre una pizza recién preparada",
        EN: "Sauce being poured over a freshly prepared pizza",
        PAP: "Saus ta wordu basha riba un pizza resien prepará",
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
    {
      type: "image",
      src: "/portfolio/beauty/fotografia-servicio-unas-dynailsty-curacao.jpg",
      orientation: "portrait",
      title: { ES: "Servicio de uñas en Dynailsty", EN: "Nail service at Dynailsty", PAP: "Servisio di uña na Dynailsty" },
      description: {
        ES: "Fotografía de proceso que muestra al equipo, el espacio y la experiencia del servicio.",
        EN: "Process photography showing the team, the space and the service experience.",
        PAP: "Fotografia di proseso ku ta mustra e tim, e espasio i e eksperensia di servisio.",
      },
      alt: {
        ES: "Técnica de Dynailsty realizando un servicio de uñas",
        EN: "Dynailsty technician providing a nail service",
        PAP: "Tekniko di Dynailsty ta hasi un servisio di uña",
      },
    },
    {
      type: "image",
      src: "/portfolio/beauty/fotografia-tratamiento-facial-grateful-curacao.jpg",
      orientation: "portrait",
      title: { ES: "Tratamiento facial en Grateful", EN: "Facial treatment at Grateful", PAP: "Tratamentu fasial na Grateful" },
      description: {
        ES: "Una imagen de servicio que comunica cuidado, técnica y confianza.",
        EN: "A service image that communicates care, technique and trust.",
        PAP: "Un imágen di servisio ku ta komuniká kuido, téknika i konfiansa.",
      },
      alt: {
        ES: "Clienta recibe un tratamiento facial en Grateful Laser & Beauty Studio",
        EN: "Client receives a facial treatment at Grateful Laser & Beauty Studio",
        PAP: "Kliente ta risibí un tratamentu fasial na Grateful Laser & Beauty Studio",
      },
    },
    {
      type: "image",
      src: "/portfolio/beauty/fotografia-producto-dynailsty-curacao.jpg",
      orientation: "portrait",
      title: { ES: "Campaña de producto para Dynailsty", EN: "Product campaign for Dynailsty", PAP: "Kampaña di produkto pa Dynailsty" },
      description: {
        ES: "Retrato creativo para presentar una colección de colores de uñas.",
        EN: "A creative portrait presenting a colorful nail product collection.",
        PAP: "Un retrato kreativo pa presentá un kolekshon kolorido di produkto pa uña.",
      },
      alt: {
        ES: "Retrato creativo de Dynailsty rodeado de esmaltes de colores",
        EN: "Creative Dynailsty portrait surrounded by colorful nail polish",
        PAP: "Retrato kreativo di Dynailsty rondó di esmalte di diferente koló",
      },
    },
  ],
  clinics: [],
  dental: [],
}
import type { Language } from "@/components/LanguageProvider"
