import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="inicio" className="welcome-board" aria-labelledby="hero-title">
      <div className="container">
        <div className="board-topline">
          <span>Un rincón para hablar de cultivo.</span>
          <span className="board-edition">Pasá, mirá, preguntá ↙</span>
        </div>
        <motion.h1
          id="hero-title"
          initial={reduced ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.65 }}
        >
          {site.name.toLowerCase()}
          <span>.</span>
        </motion.h1>
        <div className="board-layout">
          <div className="board-welcome">
            <span className="hand-note">¡Qué bueno verte por acá!</span>
            <h2>
              ¿Qué te
              <br />
              trae hoy?
            </h2>
            <p>
              Soy Biengriffo. Este es mi espacio de asesoramiento en cultivo.
              Podés chusmear el álbum, conocer la propuesta o contarme qué tenés
              en mente.
            </p>
            <span className="board-doodle" aria-hidden="true">
              <ArrowDownRight strokeWidth={1} size={70} />
            </span>
          </div>
          <motion.figure
            className="board-photo"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.65,
              delay: reduced ? 0 : 0.15,
            }}
          >
            <div className="photo-tape" aria-hidden="true" />
            <picture>
              <source media="(max-width: 600px)" srcSet={site.hero.mobile} />
              <img
                src={site.hero.src}
                alt={site.hero.alt}
                width="1800"
                height="1422"
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              Una pausa para mirar de cerca.
              <small>Foto ilustrativa · Jave Lr / Pexels</small>
            </figcaption>
            <span className="board-sticker" aria-hidden="true">
              <Asterisk size={32} />
              <span>sin vueltas</span>
            </span>
          </motion.figure>
          <nav className="board-paths" aria-label="Elegí por dónde empezar">
            <a href="#trabajos" className="path-note path-note--lime">
              <small>Para los curiosos</small>
              <strong>
                Vine a<br />
                chusmear.
              </strong>
              <span>
                Ir al álbum <ArrowUpRight size={21} aria-hidden="true" />
              </span>
            </a>
            <a href="#contacto" className="path-note path-note--peach">
              <small>Vamos a charlar</small>
              <strong>
                Tengo
                <br />
                una duda.
              </strong>
              <span>
                Hacer una consulta <ArrowUpRight size={21} aria-hidden="true" />
              </span>
            </a>
            <a href="#sobre-mi" className="board-about-link">
              ¿Quién anda por acá? <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div className="board-bottom">
          <span>Asesoramiento técnico, charla cercana.</span>
          <a href="#servicios">¿En qué te puedo acompañar? ↗</a>
        </div>
      </div>
    </section>
  );
}
