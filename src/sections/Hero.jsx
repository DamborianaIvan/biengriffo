import { lazy, Suspense, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import DecryptedText from '../components/reactbits/DecryptedText';
import Reveal from '../components/ui/Reveal';
import useReducedMotion from '../hooks/useReducedMotion';
import '../styles/hero.css';

const Aurora = lazy(() => import('../components/reactbits/Aurora'));

export default function Hero() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  return (
    <section id="inicio" className="signal-hero" aria-labelledby="hero-title">
      <div className="signal-atmosphere" aria-hidden="true">
        {!reduced && <Suspense fallback={null}>
          <Aurora colorStops={['#be83ff', '#c6ff36', '#6530cc']} amplitude={1.2}
            paused={paused} height={0.62} blend={0.65} layers={2} speed={0.6} dpr={1} />
        </Suspense>}
      </div>
      <div className="container signal-content">
        <div className="signal-topline">
          <span>BIENGRIFFO / ASESORAMIENTO TÉCNICO</span>
          {!reduced && <button type="button" className="signal-pause" onClick={() => setPaused(!paused)}
            aria-label={paused ? 'Reanudar animación de fondo' : 'Pausar animación de fondo'}>
            {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
            {paused ? 'REANUDAR EFECTO' : 'PAUSAR EFECTO'}
          </button>}
        </div>
        <Reveal className="signal-heading">
          <h1 id="hero-title" aria-label="Asesoramiento en cultivo de cannabis">
            <span className="signal-pretitle">Asesoramiento en</span>
            <span className="signal-word" aria-label="cultivo">
              {reduced ? 'CULTIVO' : <DecryptedText text="CULTIVO" animateOn="view" speed={65}
                maxIterations={12} characters="CULTIVO/+#" aria-hidden="true" />}
            </span>
            <span className="signal-subtitle">de cannabis<span aria-hidden="true">↗</span></span>
          </h1>
        </Reveal>
        <div className="signal-bottom">
          <p>Contame sobre tu cultivo y qué necesitás consultar.
            Evaluamos tu caso y el alcance del asesoramiento.</p>
          <a href="#contacto" className="signal-consult">
            <span>Hablemos de<br /><strong>tu cultivo.</strong></span>
            <span className="signal-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </a>
        </div>
        <div className="signal-foot" aria-hidden="true">
          <span>CONSULTAS TÉCNICAS / SEGUIMIENTO</span>
          <span>SEGUÍ EXPLORANDO <ArrowDown size={15} /></span>
        </div>
      </div>
    </section>
  );
}
