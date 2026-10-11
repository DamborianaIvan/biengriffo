import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "../components/ui/Button";
import { site } from "../data/site";

export default function Hero() {
  const reduced = useReducedMotion();
  const reveal = (index) => ({
    initial: reduced ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduced ? 0 : 0.65,
      delay: reduced ? 0 : index * 0.12,
    },
  });
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <motion.picture
          initial={reduced ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduced ? 0 : 2.5, ease: "easeOut" }}
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
      <div className="container hero-content">
        <motion.p {...reveal(0)} className="eyebrow hero-eyebrow">
          <span className="status-dot" /> BIENGRIFFO / ASESORAMIENTO EN CULTIVO
        </motion.p>
        <motion.h1 {...reveal(1)} id="hero-title">
          Una mirada
          <br />
          técnica.
          <br />
          <span>
            Más cerca de
            <br className="mobile-break" /> tu cultivo.
          </span>
        </motion.h1>
        <motion.p {...reveal(2)} className="hero-description">
          Cada proyecto empieza con una pregunta.
          <br />
          Conversemos sobre el tuyo.
        </motion.p>
        <motion.div {...reveal(3)} className="hero-actions">
          <Button href="#contacto">Hablemos de tu cultivo</Button>
          <a href="#trabajos" className="text-link">
            Ver trabajos <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
      <div className="container hero-bottom">
        <a href="#sobre-mi" className="explore">
          <ArrowDown size={16} aria-hidden="true" /> Conocé la propuesta
        </a>
        <span>Fotografía ilustrativa · Jave Lr / Pexels</span>
      </div>
    </section>
  );
}
