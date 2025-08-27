export default function Hero() {
  return (
    <section id="inicio" className="pt-16">
      <div className="relative min-h-[72vh] md:min-h-[78vh] flex items-center">
        {/* Fondo */}
        <img
          src="https://climatizacion-y-confort.cdecomunicacion.es/wp-content/webp-express/webp-images/uploads/2023/05/portada-2023-05-11t132554755-1140x641.png.webp"
          alt="Contexto climatización y energía"
          className="absolute inset-0 w-full h-full object-cover object-center block saturate-[.9] brightness-95"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

        {/* Contenido centrado */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center text-white flex flex-col items-center justify-center">
          {/* Título */}
          <h1
            className="max-w-[22ch] text-balance tracking-tight drop-shadow-md
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold
                       leading-tight md:leading-snug"
          >
            EXPERTOS EN CLIMATIZACIÓN Y ENERGÍA RENOVABLE
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl opacity-95 leading-relaxed">
            Instalación y mantenimiento para hogares y negocios en Chihuahua y alrededores.
          </p>

          {/* Botones */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
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