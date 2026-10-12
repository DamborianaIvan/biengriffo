import Reveal from "../components/ui/Reveal";
const steps = [
  [
    "Vos",
    "Contame qué necesitás consultar.",
    "Compartí el contexto de tu cultivo y el motivo de la consulta.",
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
        <p className="hand-note">Cómo funciona</p>
        <h2 id="process-heading">
          ¿Y cómo
          <br />
          arrancamos?
        </h2>
        <p>Primero evaluamos tu consulta; después acordamos el servicio.</p>
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
