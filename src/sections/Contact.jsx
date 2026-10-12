import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, MessageCircle, Instagram, Send } from "lucide-react";
import { site } from "../data/site";
import { services } from "../data/services";
import { whatsappLink, instagramLink, sendContact } from "../utils/contact";
import { contactSchema } from "../utils/contactSchema";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || "";

function ContactChannel({ href, icon: Icon, title, subtitle }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      className={`contact-channel ${href ? "" : "channel-pending"}`}
      {...(href
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `${title} (abre otra pestaña)`,
          }
        : {})}
    >
      <Icon size={23} aria-hidden="true" />
      <span>
        <strong>{title}</strong>
        <small>{href ? subtitle : "Datos de contacto pendientes"}</small>
      </span>
      {href ? (
        <ArrowUpRight size={20} aria-hidden="true" />
      ) : (
        <span className="pending-dot" aria-hidden="true" />
      )}
    </Tag>
  );
}

export default function Contact() {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", contact: "", type: "", message: "" },
  });
  const submit = async (data) => {
    setStatus(null);
    try {
      await sendContact(data, endpoint);
      reset();
      setStatus({
        ok: true,
        message: "Tu consulta fue recibida. Gracias por escribir.",
      });
    } catch (error) {
      setStatus({
        ok: false,
        message:
          error.name === "TimeoutError"
            ? "La respuesta demoró más de lo esperado. No pudimos confirmar el envío."
            : error instanceof TypeError
              ? "No pudimos conectar con el servicio. Verificá tu conexión e intentá nuevamente."
              : error.message,
      });
    }
  };
  const fieldProps = (name) => ({
    ...register(name),
    id: name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name]
      ? `${name}-error`
      : name === "contact"
        ? "contact-hint"
        : undefined,
  });
  const error = (name) =>
    errors[name] && (
      <p className="field-error" id={`${name}-error`} role="alert">
        {errors[name].message}
      </p>
    );
  return (
    <section id="contacto" className="section contact">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <SectionHeading
            eyebrow="Contacto"
            title={
              <>
                Hacé tu
                <br />
                <em>consulta.</em>
              </>
            }
          />
          <p className="section-description">
            Contame sobre tu cultivo y el motivo de tu consulta.
            <br />
            Evaluamos qué asesoramiento necesitás.
          </p>
          <div className="contact-channels">
            <ContactChannel
              href={whatsappLink(site.whatsapp)}
              icon={MessageCircle}
              title="WhatsApp"
              subtitle="Hablemos de tu proyecto"
            />
            <ContactChannel
              href={instagramLink(site.instagram)}
              icon={Instagram}
              title="Instagram"
              subtitle="Conocé más de Biengriffo"
            />
          </div>
          <p className="contact-footnote">
            Una primera conversación para conocernos y evaluar tu consulta.
          </p>
        </Reveal>
        <Reveal>
          <form
            className="contact-form"
            onSubmit={handleSubmit(submit)}
            noValidate
            aria-labelledby="form-heading"
            aria-describedby="form-status"
          >
            <div className="form-heading">
              <h3 id="form-heading">Datos de tu consulta</h3>
              <Send size={21} aria-hidden="true" />
            </div>
            <p id="form-status" className="form-note">
              {endpoint
                ? "Todos los campos son obligatorios."
                : "Formulario en preparación: el envío todavía no está habilitado. Podés completar los campos para revisar tu consulta."}
            </p>
            <div className="field">
              <label htmlFor="name">Tu nombre</label>
              <input
                {...fieldProps("name")}
                autoComplete="name"
                placeholder="¿Cómo te llamás?"
                maxLength={80}
                required
              />
              {error("name")}
            </div>
            <div className="field">
              <label htmlFor="contact">Email o teléfono</label>
              <input
                {...fieldProps("contact")}
                autoComplete="off"
                placeholder="Tu email o teléfono con código de área"
                maxLength={150}
                required
              />
              <small id="contact-hint">
                El medio por el que preferís recibir una respuesta.
              </small>
              {error("contact")}
            </div>
            <div className="field">
              <label htmlFor="type">Tipo de consulta</label>
              <select {...fieldProps("type")} required>
                <option value="">Seleccioná una opción</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                    {service.confirmed ? "" : " (a confirmar)"}
                  </option>
                ))}
                <option value="otra">Otra consulta</option>
              </select>
              {error("type")}
            </div>
            <div className="field">
              <label htmlFor="message">Tu mensaje</label>
              <textarea
                {...fieldProps("message")}
                rows={4}
                maxLength={2000}
                placeholder="Describí tu consulta y el contexto de tu cultivo…"
                required
              />
              {error("message")}
            </div>
            <p className="privacy-short">
              Usaremos los datos que envíes únicamente para responder tu
              consulta. <a href="#privacidad">Más información</a>.
            </p>
            <Button
              type="submit"
              arrow={!isSubmitting}
              disabled={isSubmitting}
              className="form-submit"
            >
              {isSubmitting
                ? "Enviando…"
                : endpoint
                  ? "Enviar consulta"
                  : "Revisar consulta"}
            </Button>
            {status && (
              <p
                className={`form-result ${status.ok ? "is-success" : ""}`}
                role={status.ok ? "status" : "alert"}
              >
                {status.message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
      <div className="container">
        <details id="privacidad" className="privacy-details">
          <summary>Privacidad y tratamiento de las consultas</summary>
          <p>
            {endpoint
              ? "El formulario envía tu nombre, medio de contacto, tipo de consulta y mensaje al servicio receptor configurado por Biengriffo, con el objetivo de responder tu consulta."
              : "En esta versión, el formulario no envía ni guarda datos: todavía no hay un servicio receptor configurado."}{" "}
            No se utilizan herramientas de analítica ni cookies de seguimiento
            en esta web. WhatsApp e Instagram, cuando estén habilitados, abrirán
            servicios externos con sus propias políticas.
          </p>
          <p>
            Antes de habilitar el envío, se completará este aviso con la
            identidad y contacto del responsable, el proveedor receptor, el
            plazo de conservación y el medio para solicitar acceso o eliminación
            de datos. Evitá incluir información sensible en tu consulta.
          </p>
        </details>
      </div>
    </section>
  );
}
