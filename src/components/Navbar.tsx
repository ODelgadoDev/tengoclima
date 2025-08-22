import { useEffect, useState } from "react";
import Logo from "../assets/L2025rect.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = "fixed top-0 left-0 right-0 z-50 transition-colors";
  const bg = scrolled ? "bg-[#225A73]/95 shadow-lg" : "bg-[#225A73]";

  return (
    <nav className={`${base} ${bg} text-white`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={Logo} alt="TengoClima" className="h-14 w-auto" />
          {/* <span className="font-extrabold tracking-wide">TENGOCLIMA</span> */}
          {/* si quieres solo el logo, elimina el <span> */}
        </a>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {[
            ["Inicio", "#inicio"],
            ["Servicios", "#servicios"],
            ["Nosotros", "#nosotros"],
            ["Proyectos", "#proyectos"],
            ["Clientes", "#clientes"],
            ["Contacto", "#contacto"],
          ].map(([t, href]) => (
            <li key={t}>
              <a className="hover:text-[#F37021]" href={href}>{t}</a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-lg bg-[#F37021] text-white font-semibold hover:brightness-110"
            >
              Solicitar cotización
            </a>
          </li>
        </ul>

        {/* mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-white/10"
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#225A73]">
          <ul className="max-w-6xl mx-auto px-4 py-3 grid gap-3 text-sm">
            {[
              ["Inicio", "#inicio"],
              ["Servicios", "#servicios"],
              ["Nosotros", "#nosotros"],
              ["Proyectos", "#proyectos"],
              ["Clientes", "#clientes"],
              ["Contacto", "#contacto"],
            ].map(([t, href]) => (
              <li key={t}>
                <a className="block py-2" href={href} onClick={() => setOpen(false)}>
                  {t}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-block px-4 py-2 rounded-lg bg-[#F37021] text-white font-semibold hover:brightness-110"
              >
                Solicitar cotización
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
