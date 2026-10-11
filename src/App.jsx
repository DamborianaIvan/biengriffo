import { MotionConfig } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <div className="manifesto-strip">
          <div className="container">
            <span>
              Observar<span aria-hidden="true"> ↗</span>
            </span>
            <span>
              Entender<span aria-hidden="true"> ✳</span>
            </span>
            <span>
              Acompañar<span aria-hidden="true"> ↗</span>
            </span>
          </div>
        </div>
        <About />
        <Services />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}
