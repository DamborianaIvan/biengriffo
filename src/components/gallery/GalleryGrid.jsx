import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function GalleryGrid({ items, onOpen }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      layout={!reduced}
      className={`gallery-grid ${items.length === 1 ? "gallery-grid--single" : ""}`}
    >
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.button
            key={item.id}
            layout={!reduced}
            type="button"
            className={`gallery-item ${item.shape}`}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -12 }}
            transition={{ duration: reduced ? 0 : 0.35 }}
            onClick={() => onOpen(item.id)}
            aria-label={`Ampliar: ${item.title}${item.placeholder ? " (imagen de muestra)" : ""}`}
          >
            <span className="gallery-paper">
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
          </motion.button>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
