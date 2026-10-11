import { useState } from "react";
import { gallery } from "../data/gallery";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import GalleryFilters from "../components/gallery/GalleryFilters";
import GalleryGrid from "../components/gallery/GalleryGrid";
import Lightbox from "../components/gallery/Lightbox";

export default function Gallery() {
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const items =
    active === "Todos"
      ? gallery
      : gallery.filter((item) => item.category === active);
  return (
    <section id="trabajos" className="section gallery">
      <div className="container">
        <Reveal className="section-header-row">
          <SectionHeading
            number="03"
            eyebrow="Trabajos / Archivo visual"
            title={
              <>
                El proceso también
                <br />
                se cuenta en imágenes.
              </>
            }
          />
          <p className="section-side-copy">
            Un espacio para compartir cultivos, instalaciones y seguimientos.
          </p>
        </Reveal>
        <div className="gallery-toolbar">
          <GalleryFilters active={active} onChange={setActive} />
          <span className="gallery-count" aria-live="polite">
            {items.length} {items.length === 1 ? "imagen" : "imágenes"}
          </span>
        </div>
        {gallery.some((item) => item.placeholder) && (
          <p className="provisional-note">
            Galería en preparación. Las imágenes de muestra se reemplazarán por
            trabajos propios.
          </p>
        )}
        <GalleryGrid items={items} onOpen={setSelected} />
        {items.length === 0 && (
          <p className="gallery-empty">
            Todavía no hay imágenes en esta categoría.
          </p>
        )}
        {selected && (
          <Lightbox
            items={items}
            selectedId={selected}
            onSelect={setSelected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  );
}
