import { Plus, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ServiceRow({ service, index }) {
  return (
    <Reveal delay={index * 0.035}>
      <details
        className="service-row"
        name="biengriffo-services"
        open={index === 0}
      >
        <summary>
          <span className="service-number" aria-hidden="true">
            {service.number}
          </span>
          <span className="service-title">
            <span className="service-kicker">{service.title}</span>
            <span className="service-name">{service.name}</span>
          </span>
          <span className="service-toggle" aria-hidden="true">
            <Plus size={26} strokeWidth={1.4} />
          </span>
        </summary>
        <div className="service-panel">
          <p>{service.description}</p>
          <div className="service-panel-footer">
            <span>
              {service.confirmed
                ? "Consultar disponibilidad"
                : "Propuesta a confirmar"}
            </span>
            <a
              href="#contacto"
              className="text-link"
              aria-label={`Consultar sobre ${service.name}`}
            >
              Hablemos <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </details>
    </Reveal>
  );
}
