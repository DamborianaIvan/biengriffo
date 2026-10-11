import { navigation, site } from "../../data/site";
import { whatsappLink, instagramLink } from "../../utils/contact";
export default function Footer() {
  const whatsapp = whatsappLink(site.whatsapp);
  const instagram = instagramLink(site.instagram);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a href="#inicio" className="wordmark">
              {site.name.toLowerCase()}
              <span>.</span>
            </a>
            <p>
              Asesoramiento técnico
              <br />
              en cultivo de cannabis.
            </p>
          </div>
          <nav aria-label="Navegación del pie">
            {navigation.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <span className="eyebrow">Sigamos en contacto</span>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp ↗
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                Instagram ↗
              </a>
            )}
            <a href="#contacto">Hacer una consulta ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}.
          </span>
          <a href="#privacidad">Privacidad y contacto</a>
          <span>Biengriffo · Asesoramiento</span>
        </div>
      </div>
    </footer>
  );
}
