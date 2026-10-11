import { ArrowUpRight, UserRound } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";

export default function About() {
  const { advisor } = site;
  return (
    <section id="sobre-mi" className="section about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <span className="field-note" aria-hidden="true">
            Primero: escucharnos.
          </span>
          <div className="portrait-frame">
            {advisor.photo ? (
              <img
                src={advisor.photo}
                alt={
                  advisor.photoAlt ||
                  `Retrato de ${advisor.name || "la persona detrás de Biengriffo"}`
                }
                width="720"
                height="860"
                loading="lazy"
              />
            ) : (
              <div className="portrait-placeholder">
                <div className="portrait-lines" aria-hidden="true" />
                <UserRound size={80} strokeWidth={0.7} aria-hidden="true" />
                <span>EL LADO HUMANO</span>
                <p>
                  Un espacio para
                  <br />
                  conocerme.
                </p>
                <small>Retrato del asesor pendiente</small>
              </div>
            )}
            <span className="photo-marker">BIENGRIFFO / PERFIL</span>
          </div>
        </Reveal>
        <Reveal className="about-copy">
          <SectionHeading
            number="01"
            eyebrow="Sobre mí"
            title={
              <>
                Detrás del cultivo,
                <br />
                una conversación.
              </>
            }
          />
          <p className="large-copy">
            {advisor.name
              ? `Soy ${advisor.name}.`
              : "Biengriffo es un espacio de asesoramiento técnico relacionado con el cultivo de cannabis."}
          </p>
          <p>
            {advisor.bio ||
              "La propuesta: escuchar tu consulta, entender el contexto y conversar sobre las posibilidades de acompañamiento."}
          </p>
          {!advisor.bio && (
            <p className="editorial-note">
              Perfil en preparación. Próximamente: presentación personal,
              experiencia y especialidades del asesor.
            </p>
          )}
          <div className="about-principles">
            <span>Escucha</span>
            <span>Criterio</span>
            <span>Cercanía</span>
          </div>
          <a href="#contacto" className="text-link">
            Empecemos por tu consulta{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
