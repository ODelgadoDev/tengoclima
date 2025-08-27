import Logo from "../assets/L2025.png";

export default function Hero() {
  return (
    <section id="inicio" className="pt-16">
      <div className="relative min-h-[72vh] md:min-h-[78vh]">
        {/* Fondo */}
        <img
          src="https://climatizacion-y-confort.cdecomunicacion.es/wp-content/webp-express/webp-images/uploads/2023/05/portada-2023-05-11t132554755-1140x641.png.webp"
          alt="Contexto climatización y energía"
          className="absolute inset-0 w-full h-full object-cover object-center block saturate-[.9] brightness-95"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
          {/* Título */}
          <h1
            className="mt-6 md:mt-10 max-w-[22ch] text-balance tracking-tight drop-shadow-md
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold
                       leading-tight md:leading-snug"
          >
            EXPERTOS EN CALIDAD DE CLIMATIZACIÓN Y ENERGÍA RENOVABLE
          </h1>

          {/* Logo */}
          <div className="mt-4 md:mt-5">
            <img
              src={Logo}
              alt="TengoClima"
              className="w-36 sm:w-44 md:w-52 lg:w-60 h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Subtítulo */}
          <p className="mt-3 md:mt-4 max-w-2xl text-base sm:text-lg md:text-xl opacity-95 leading-relaxed">
            Instalación y mantenimiento para hogares y negocios en Chihuahua y alrededores.
          </p>

          {/* Botones */}
          <div className="mt-6 md:mt-7 flex flex-wrap justify-center gap-3 pb-6">
            <a
              href="#contacto"
              className="px-5 py-3 rounded-lg font-semibold shadow transition hover:brightness-110"
              style={{ backgroundColor: "#F37021", color: "#fff" }}
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="px-5 py-3 rounded-lg font-semibold shadow transition hover:brightness-110"
              style={{ backgroundColor: "#225A73", color: "#fff" }}
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}