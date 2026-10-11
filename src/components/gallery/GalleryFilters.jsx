import { categories } from "../../data/gallery";
export default function GalleryFilters({ active, onChange }) {
  return (
    <div className="gallery-filters" role="group" aria-label="Filtrar galería">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={category === active}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
