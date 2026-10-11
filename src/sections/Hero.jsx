import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import Button from "../components/ui/Button";
import { site } from "../data/site";

const lines = ["Otra forma", "de mirar", "tu cultivo."];

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero-stage">
        <div className="hero-media">
          <motion.picture
            initial={reduced ? false : { scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reduced ? 0 : 1.3, ease: "easeOut" }}
          >
            <source media="(max-width: 600px)" srcSet={site.hero.mobile} />
            <img
              src={site.hero.src}
              alt={site.hero.alt}
              width="1800"
              height="1422"
              fetchPriority="high"
            />
          </motion.picture>
        </div>
        <div className="hero-orbit" aria-hidden="true" />
        <motion.div
          className="hero-stamp"
          aria-hidden="true"
          initial={reduced ? false : { scale: 0.7, rotate: -25, opacity: 0 }}
          animate={{ scale: 1, rotate: 12, opacity: 1 }}
          transition={{
            duration: reduced ? 0 : 0.65,
            delay: reduced ? 0 : 0.45,
          }}
        >
          <Asterisk strokeWidth={1.2} />
          <span>
            CRITERIO TÉCNICO
            <br />
            TRATO HUMANO
          </span>
        </motion.div>
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> BIENGRIFFO / ASESORAMIENTO EN
            CULTIVO
          </p>
          <h1 id="hero-title" aria-label="Otra forma de mirar tu cultivo.">
            {lines.map((line, index) => (
              <span
                key={line}
                className={`hero-line hero-line--${index + 1}`}
                aria-hidden="true"
              >
                <motion.span
                  initial={reduced ? false : { y: "110%", rotate: 3 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.8,
                    delay: reduced ? 0 : index * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.55,
              delay: reduced ? 0 : 0.45,
            }}
            className="hero-intro"
          >
            <p className="hero-description">
              Cada proyecto empieza con una pregunta.
              <br />
              Conversemos sobre el tuyo.
            </p>
            <div className="hero-actions">
              <Button href="#contacto">Hablemos de tu cultivo</Button>
              <a href="#trabajos" className="text-link">
                Explorar trabajos <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
        <span className="hero-photo-note" aria-hidden="true">
          Mirar de cerca
          <br />
          <svg viewBox="0 0 130 70">
            <path d="M5 10Q110 0 100 53M84 40L100 57L118 44" />
          </svg>
        </span>
      </div>
      <div className="container hero-bottom">
        <a href="#sobre-mi" className="explore">
          <span>
            <ArrowDown size={18} aria-hidden="true" />
          </span>{" "}
          Seguí explorando
        </a>
        <span>Fotografía ilustrativa · Jave Lr / Pexels</span>
      </div>
    </section>
  );
}
