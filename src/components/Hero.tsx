import Logo from "../assets/L2025.png";

export default function Hero() {
  return (
    <section id="inicio" className="pt-16">
      {/* Altura optimizada */}
      <div className="relative min-h-[70vh] md:min-h-[78vh]">
        {/* Fondo */}
        <img
          className="absolute inset-0 w-full h-full object-cover saturate-[.9] brightness-95"
          src="https://climatizacion-y-confort.cdecomunicacion.es/wp-content/webp-express/webp-images/uploads/2023/05/portada-2023-05-11t132554755-1140x641.png.webp"
          alt="Contexto climatización y energía"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
          {/* Título */}
          <h1 className="max-w-[22ch] text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md tracking-tight">
            EXPERTOS EN CALIDAD DE CLIMATIZACIÓN Y ENERGÍA RENOVABLE
          </h1>

          {/* Logo */}
          <div className="mt-5 p-2">
            <img
              src={Logo}
              alt="TengoClima"
              className="w-40 sm:w-52 md:w-60 lg:w-64 h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Subtítulo */}
          <p className="mt-3 max-w-2xl text-base sm:text-lg md:text-xl opacity-95 leading-relaxed">
            Instalación y mantenimiento para hogares y negocios en Chihuahua y alrededores.
          </p>

          {/* Botones */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#contacto"
              className="px-5 py-3 rounded-lg font-semibold shadow hover:brightness-110 transition"
              style={{ backgroundColor: "#F37021", color: "white" }}
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="px-5 py-3 rounded-lg border border-white/50 text-white/95 hover:bg-white/10 transition"
            >
              Ver servicios
            </a>
          </div>

          {/* Flecha fija al fondo */}
          <a
            href="#servicios"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl md:text-3xl opacity-90 hover:opacity-100"
          >
            ▼
          </a>
        </div>
      </div>
    </section>
  );
}