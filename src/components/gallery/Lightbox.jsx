import { useEffect, useRef } from "react";
import Reveal from "../ui/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, selectedId, onSelect, onClose }) {
  const dialogRef = useRef(null);
  const index = items.findIndex((item) => item.id === selectedId);
  const item = items[index];
  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  const move = (direction) =>
    onSelect(items[(index + direction + items.length) % items.length].id);
  if (!item) return null;
  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      <div className="lightbox-shell">
        <div className="lightbox-top">
          <span>
            ARCHIVO BIENGRIFFO{" "}
            <span className="lightbox-count">
              {index + 1} / {items.length}
            </span>
          </span>
          <button
            autoFocus
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Cerrar imagen"
          >
            <X />
          </button>
        </div>
        <Reveal key={item.id} className="lightbox-image"><img
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
        /></Reveal>
        <div className="lightbox-bottom">
          <div aria-live="polite" aria-atomic="true">
            <h3 id="lightbox-title">{item.title}</h3>
            <p id="lightbox-description">
              {item.placeholder
                ? "Imagen de muestra. No representa un trabajo real."
                : item.category}
            </p>
          </div>
          <div className="lightbox-controls">
            <button
              type="button"
              className="icon-button"
              onClick={() => move(-1)}
              aria-label="Imagen anterior"
              disabled={items.length < 2}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={() => move(1)}
              aria-label="Imagen siguiente"
              disabled={items.length < 2}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
