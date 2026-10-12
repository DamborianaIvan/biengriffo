import { ArrowUpRight } from "lucide-react";
import Process from "./Process";
import { services } from "../data/services";
import ServiceRow from "../components/ui/ServiceRow";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <Reveal className="section-header-row">
          <SectionHeading
            eyebrow="Servicios"
            title={
              <>
                Asesoramiento
                <br />
                según tu consulta.
              </>
            }
          />
          <p className="section-side-copy">
            Abrí el tema que más se parezca a tu consulta. Después vemos juntos
            qué necesitás y qué alcance tendría el acompañamiento.
          </p>
        </Reveal>
        {services.some((service) => !service.confirmed) && (
          <p className="provisional-note">
            Servicios propuestos · oferta y disponibilidad pendientes de
            confirmación.
          </p>
        )}
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
        <Reveal className="service-aside">
          <a href="#contacto" className="service-cta">
            <span className="eyebrow">El primer paso</span>
            <h3>¿Necesitás otro tipo de asesoramiento?</h3>
            <p>Consultá por el alcance del servicio.</p>
            <span className="cta-circle">
              <ArrowUpRight size={27} aria-hidden="true" />
            </span>
          </a>
        </Reveal>
        <Process />
      </div>
    </section>
  );
}
