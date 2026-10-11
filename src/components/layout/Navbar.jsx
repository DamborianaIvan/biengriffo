import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, site } from "../../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 900px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header ref={headerRef} className="site-header">
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="#inicio"
          aria-label={`${site.name}, inicio`}
          onClick={() => setOpen(false)}
        >
          {site.name.toLowerCase()}
          <span>.</span>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle icon-button"
          aria-controls="main-navigation"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={`navigation ${open ? "is-open" : ""}`}
        >
          {navigation.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contacto"
            onClick={() => setOpen(false)}
          >
            Hablemos <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
