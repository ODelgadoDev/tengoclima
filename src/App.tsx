import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyModal from "./components/PrivacyModal";

export default function App() {
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <Footer onPrivacyClick={() => setOpenPrivacy(true)} />

      <PrivacyModal open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </div>
  );
}
