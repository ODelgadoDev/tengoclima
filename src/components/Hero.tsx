import Logo from "../assets/L2025.png";

export default function Hero() {
  return (
    <section id="inicio" className="pt-16">
      {/* altura un poco menor para que respire mejor */}
      <div className="relative h-[70vh] min-h-[540px]">
        {/* Fondo: menos saturación y un pelín más de claridad */}
        <img
          className="absolute inset-0 w-full h-full object-cover saturate-[.85] brightness-95"
          src="https://climatizacion-y-confort.cdecomunicacion.es/wp-content/webp-express/webp-images/uploads/2023/05/portada-2023-05-11t132554755-1140x641.png.webp"
          alt="Contexto climatización y energía"
        />
        {/* Overlays: más sutil + gradiente para legibilidad sin “quemar” la imagen */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
          {/* Título más compacto y equilibrado */}
          <h1 className="max-w-4xl text-3xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
            EXPERTOS EN CALIDAD DE CLIMATIZACIÓN Y ENERGÍA RENOVABLE
          </h1>

          {/* Logo: tamaño controlado, sin recorte, con base blanca suave */}
          <div className="mt-6 bg-/90 backdrop-blur-[1px] rounded-xl p-2 shadow-lg">
            <img
              src={Logo}
              alt="TengoClima"
              className="w-[220px] md:w-[300px] h-auto object-contain"
            />
          </div>

          {/* Subtítulo más discreto */}
          <p className="mt-4 text-base md:text-lg opacity-95 max-w-2xl">
            Instalación y mantenimiento para hogares y negocios en Chihuahua y alrededores.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex gap-3">
            <a
              href="#contacto"
              className="px-5 py-3 rounded-lg bg-[#F37021] text-white font-semibold shadow hover:brightness-110"
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="px-5 py-3 rounded-lg border border-white/40 hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>

          {/* Flecha */}
          <a href="#servicios" className="mt-8 opacity-90 hover:opacity-100 text-3xl">
            ▼
          </a>
        </div>
      </div>
    </section>
  );
}
