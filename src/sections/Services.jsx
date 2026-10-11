import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "../components/ui/ServiceCard";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <Reveal className="section-header-row">
          <SectionHeading
            number="02"
            eyebrow="Servicios"
            title={
              <>
                Distintas preguntas.
                <br />
                Una mirada personal.
              </>
            }
          />
          <p className="section-side-copy">
            Explorá los posibles enfoques de asesoramiento. El alcance de cada
            propuesta se conversa antes de comenzar.
          </p>
        </Reveal>
        {services.some((service) => !service.confirmed) && (
          <p className="provisional-note">
            Servicios propuestos · oferta y disponibilidad pendientes de
            confirmación.
          </p>
        )}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
          <Reveal className="service-wrap">
            <a href="#contacto" className="service-cta">
              <span className="eyebrow">El primer paso</span>
              <h3>
                ¿Tu consulta
                <br />
                es diferente?
              </h3>
              <p>Contame qué tenés en mente.</p>
              <span className="cta-circle">
                <ArrowUpRight size={27} aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
