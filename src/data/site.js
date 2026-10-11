// Client-editable content. Empty contact values never generate external links.
export const site = {
  name: "Biengriffo",
  description: "Asesoramiento técnico en cultivo",
  whatsapp: "", // International digits only, e.g. country + area + number.
  instagram: "", // Full https://www.instagram.com/username/ URL.
  hero: {
    src: "/images/hero.webp",
    mobile: "/images/hero-mobile.webp",
    alt: "Detalle de una planta de cannabis; fotografía ilustrativa, no corresponde a un trabajo de Biengriffo.",
  },
  advisor: {
    name: "",
    bio: "", // Confirmed personal presentation; do not add unverified credentials.
    photo: "",
    photoAlt: "",
  },
};

export const navigation = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
];
