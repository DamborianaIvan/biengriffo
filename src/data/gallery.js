export const categories = [
  "Todos",
  "Cultivos",
  "Instalaciones",
  "Seguimientos",
];

// Layout placeholders, not actual projects. Replace src, alt, title and category;
// set placeholder=false only for client-owned/authorized work.
export const gallery = [
  {
    id: "01",
    category: "Cultivos",
    title: "Una mirada al cultivo",
    src: "/images/placeholder-cultivos.svg",
    alt: "Ilustración abstracta de archivo. Espacio reservado para una fotografía de cultivo.",
    width: 900,
    height: 1120,
    shape: "portrait",
    placeholder: true,
  },
  {
    id: "02",
    category: "Instalaciones",
    title: "El espacio de trabajo",
    src: "/images/placeholder-instalaciones.svg",
    alt: "Ilustración de una estructura. Espacio reservado para una fotografía de instalación.",
    width: 1100,
    height: 760,
    shape: "landscape",
    placeholder: true,
  },
  {
    id: "03",
    category: "Seguimientos",
    title: "El registro del proceso",
    src: "/images/placeholder-seguimientos.svg",
    alt: "Ilustración abstracta de registros. Espacio reservado para una fotografía de seguimiento.",
    width: 1100,
    height: 760,
    shape: "landscape",
    placeholder: true,
  },
];
