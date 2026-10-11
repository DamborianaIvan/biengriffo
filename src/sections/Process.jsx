import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
const steps = [
  [
    "01",
    "Contacto inicial",
    "Me contás qué necesitás y compartís el contexto de tu consulta.",
  ],
  [
    "02",
    "Evaluación de la consulta",
    "Conversamos para entender el alcance y evaluar cómo puedo acompañarte.",
  ],
  [
    "03",
    "Propuesta de asesoramiento",
    "Acordamos la modalidad, los objetivos y las condiciones antes de comenzar.",
  ],
];
export default function Process() {
  return (
    <section className="section process" aria-labelledby="process-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="04"
            eyebrow="Cómo trabajo"
            title={<span id="process-heading">Simple desde el principio.</span>}
          />
        </Reveal>
        <div className="process-grid">
          {steps.map(([number, title, description], index) => (
            <Reveal key={number} delay={index * 0.08}>
              <article className="process-step">
                <span className="step-number">
                  {number}
                  <span aria-hidden="true">↗</span>
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
