import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
export default function GalleryGrid({ items, onOpen }) {
  const reduced = useReducedMotion();
  return (
    <motion.div layout={!reduced} className="gallery-grid">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.button
            key={item.id}
            layout={!reduced}
            type="button"
            className={`gallery-item ${item.shape}`}
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            onClick={() => onOpen(item.id)}
            aria-label={`Ampliar: ${item.title}${item.placeholder ? " (imagen de muestra)" : ""}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
            />
            <span className="gallery-id">
              {item.id} / {item.category}
            </span>
            {item.placeholder && (
              <span className="placeholder-badge">Espacio de muestra</span>
            )}
            <span className="gallery-caption">
              <span>
                <small>
                  {item.placeholder ? "Fotografía pendiente" : item.category}
                </small>
                <strong>{item.title}</strong>
              </span>
              <ArrowUpRight size={23} aria-hidden="true" />
            </span>
          </motion.button>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
