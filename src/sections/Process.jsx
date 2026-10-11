import Reveal from "../components/ui/Reveal";
const steps = [
  [
    "Vos",
    "Me contás qué te anda dando vueltas.",
    "Una pregunta, una idea o el contexto de tu proyecto.",
  ],
  [
    "Lo charlamos",
    "Vemos de qué se trata.",
    "Evaluamos la consulta y si puedo acompañarte.",
  ],
  [
    "Si encaja",
    "Acordamos cómo seguir.",
    "Definimos alcance, modalidad y condiciones antes de empezar.",
  ],
];
export default function Process() {
  return (
    <section className="conversation" aria-labelledby="process-heading">
      <div className="conversation-intro">
        <p className="hand-note">Sin ceremonia.</p>
        <h2 id="process-heading">
          ¿Y cómo
          <br />
          arrancamos?
        </h2>
        <p>Con una charla. Así de simple.</p>
      </div>
      <ol className="conversation-thread">
        {steps.map(([who, title, description], index) => (
          <li key={who}>
            <Reveal delay={index * 0.06}>
              <div className="chat-note">
                <small>{who}</small>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
