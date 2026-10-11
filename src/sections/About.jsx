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
                <span>IDENTIDAD / BIENGRIFFO</span>
                <p>
                  Un espacio para
                  <br />
                  conocerme.
                </p>
                <small>Retrato del asesor pendiente</small>
              </div>
            )}
            <span className="photo-marker">CONEXIÓN HUMANA</span>
          </div>
        </Reveal>
        <Reveal className="about-copy">
          <SectionHeading
            eyebrow="Detrás de la señal"
            title={
              <>
                Del otro lado
                <br />
                también hay alguien.
              </>
            }
          />
          <p className="large-copy">
            {advisor.name
              ? `Soy ${advisor.name}.`
              : "Acá Biengriffo. Un espacio para conversar sobre el cultivo de cannabis y tu proyecto."}
          </p>
          <p>
            {advisor.bio ||
              "La idea es arrancar escuchándote: qué tenés en mente, qué querés consultar y cómo podemos encarar esa charla."}
          </p>
          {!advisor.bio && (
            <p className="editorial-note">
              Perfil en preparación. Próximamente: presentación personal,
              experiencia y especialidades del asesor.
            </p>
          )}
          <a href="#contacto" className="text-link">
            ¿Me contás la tuya? <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
