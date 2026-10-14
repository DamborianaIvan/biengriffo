import { lazy, Suspense, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import useReducedMotion from '../hooks/useReducedMotion';
import '../styles/hero.css';

const Threads = lazy(() => import('../components/reactbits/Threads'));

export default function Hero() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  return (
    <section id="inicio" className="signal-hero" aria-labelledby="hero-title">
      <div className="signal-atmosphere" aria-hidden="true">
        {!reduced && <Suspense fallback={null}>
          <Threads color="#c6ff36" accentColor="#be83ff" amplitude={1.8}
            distance={0.35} lineCount={65} thickness={0.65} softness={0.8}
            angle={-18} speed={0.45} parting={0.45} fade={0.25}
            opacity={0.8} enableMouseInteraction paused={paused} />
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
        <div className="signal-heading">
          <h1 id="hero-title">
            <span className="signal-pretitle">Asesoramiento en</span>
            <span className="signal-word">CULTIVO</span>
            <span className="signal-subtitle">de cannabis<span aria-hidden="true">✳</span></span>
          </h1>
        </div>
        <div className="signal-bottom">
          <p>Contame sobre tu cultivo y qué necesitás consultar.
            Evaluamos tu caso y el alcance del asesoramiento.</p>
          <a href="#contacto" className="signal-consult">
            <span>Contame sobre <strong>tu cultivo</strong></span>
            <ArrowUpRight className="signal-link-arrow" aria-hidden="true" />
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
