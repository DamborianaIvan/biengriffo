import {
  Sprout,
  ScanLine,
  Search,
  SlidersHorizontal,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
const icons = {
  sprout: Sprout,
  scan: ScanLine,
  search: Search,
  sliders: SlidersHorizontal,
  messages: MessagesSquare,
};

export default function ServiceCard({ service, index }) {
  const Icon = icons[service.icon];
  return (
    <Reveal delay={index * 0.04} className="service-wrap">
      <article className="service-card">
        <div className="service-top">
          <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
          <span>{service.number}</span>
        </div>
        <p className="service-kicker">{service.title}</p>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <div className="service-bottom">
          <span>
            {service.confirmed
              ? "Consultar disponibilidad"
              : "Propuesta a confirmar"}
          </span>
          <a href="#contacto" aria-label={`Consultar sobre ${service.name}`}>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
