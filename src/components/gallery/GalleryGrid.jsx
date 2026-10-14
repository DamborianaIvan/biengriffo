import Reveal from "../ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function GalleryGrid({ items, onOpen }) {
  return (
    <div
      className={`gallery-grid ${items.length === 1 ? "gallery-grid--single" : ""}`}
    >
        {items.map((item) => (
          <Reveal as="button"
            key={item.id}
            type="button"
            className={`gallery-item ${item.shape}`}
            onClick={() => onOpen(item.id)}
            aria-label={`Ampliar: ${item.title}${item.placeholder ? " (imagen de muestra)" : ""}`}
          >
            <span className="gallery-surface">
              <span className="gallery-id">
                ARCHIVO / {item.id}
                <span>{item.category}</span>
              </span>
              <span className="gallery-image">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
                {item.placeholder && (
                  <span className="placeholder-badge">Espacio de muestra</span>
                )}
                <span className="gallery-open" aria-hidden="true">
                  <ArrowUpRight size={28} />
                </span>
              </span>
              <span className="gallery-caption">
                <span>
                  <small>
                    {item.placeholder ? "Fotografía pendiente" : item.category}
                  </small>
                  <strong>{item.title}</strong>
                </span>
                <ArrowUpRight size={23} aria-hidden="true" />
              </span>
            </span>
          </Reveal>
        ))}
    </div>
  );
}
