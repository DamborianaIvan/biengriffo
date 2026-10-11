import { MessageCircle } from "lucide-react";
import { site } from "../../data/site";
import { whatsappLink } from "../../utils/contact";

export default function WhatsAppButton() {
  const href = whatsappLink(site.whatsapp);
  if (!href) return null;
  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Biengriffo por WhatsApp (abre otra pestaña)"
    >
      <MessageCircle size={25} aria-hidden="true" />
    </a>
  );
}
