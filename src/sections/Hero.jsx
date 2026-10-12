import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const driftX = useSpring(x, { stiffness: 90, damping: 24 });
  const driftY = useSpring(y, { stiffness: 90, damping: 24 });
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  const follow = (event) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 24);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 18);
  };
  return (
    <section
      id="inicio"
      className="alien-hero"
      aria-labelledby="hero-title"
      onPointerMove={follow}
      onPointerLeave={reset}
    >
      <div className="alien-landscape">
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
      </div>
      <div className="alien-mesh" aria-hidden="true" />
      <motion.div
        className="alien-organism"
        aria-hidden="true"
        style={{ x: reduced ? 0 : driftX, y: reduced ? 0 : driftY }}
      >
        <svg viewBox="0 0 600 600" fill="none">
          <defs>
            <radialGradient id="alien-glow">
              <stop stopColor="#cbff34" stopOpacity=".25" />
              <stop offset="1" stopColor="#be79ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse
            cx="300"
            cy="300"
            rx="260"
            ry="265"
            fill="url(#alien-glow)"
          />
          {Array.from({ length: 9 }, (_, i) => (
            <ellipse
              key={i}
              cx="300"
              cy="300"
              rx={225 - i * 9}
              ry={100 + i * 17}
              transform={`rotate(${i * 19} 300 300)`}
              stroke={i % 3 === 0 ? "#bc83ff" : "#c6ff36"}
              strokeOpacity={0.25 + i * 0.06}
              strokeWidth="1"
            />
          ))}
          <path
            d="M203 249Q249 229 278 289Q229 310 203 249ZM397 249Q351 229 322 289Q371 310 397 249Z"
            fill="#c6ff36"
          />
          <path d="M282 338Q300 350 318 338" stroke="#c6ff36" strokeWidth="3" />
        </svg>
      </motion.div>
      <div className="container alien-hero-content">
        <p className="alien-coordinate">
          BIENGRIFFO · ASESORAMIENTO TÉCNICO <span aria-hidden="true">✳</span>
        </p>
        <motion.h1
          id="hero-title"
          initial={reduced ? false : { opacity: 0, y: 35, skewX: -8 }}
          animate={{ opacity: 1, y: 0, skewX: 0 }}
          transition={{
            duration: reduced ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Asesoramiento
          <br />
          en cultivo de
          <br />
          <span>cannabis.</span>
        </motion.h1>
        <div className="alien-hero-bottom">
          <div>
            <p>
              Contame sobre tu cultivo y qué necesitás consultar.
              <br />
              Evaluamos tu caso y el alcance del asesoramiento.
            </p>
            <div className="alien-actions">
              <a href="#contacto" className="button button--primary">
                Consultar por asesoramiento{" "}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a href="#trabajos" className="text-link">
                Ver trabajos <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <span className="alien-side-note">
            CONSULTAS TÉCNICAS.
            <br />
            ATENCIÓN PERSONALIZADA.
          </span>
        </div>
        <p className="alien-credit">
          Fotografía ilustrativa · Jave Lr / Pexels
        </p>
      </div>
    </section>
  );
}
