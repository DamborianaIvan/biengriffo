import { MotionConfig } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bitacora">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" tabIndex={-1}>
          <Hero />
          <Gallery />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
