import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionTitle>Nosotros</SectionTitle>
          <p className="mt-6 text-slate-700 leading-relaxed">
            En TENGOCLIMA ayudamos a hogares y negocios a lograr <b>ahorro, confort y seguridad </b>
             con soluciones de climatización y energía solar. 40+ años de experiencia, atención honesta y
            garantía en equipos e instalación.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow">
          <img
            src="https://mantenimientoclimasmonterrey.com/wp-content/uploads/2023/09/mantenimiento-de-aires-acondicionados-climas-mty-1-1024x576.jpg"
            alt="Equipo técnico"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Franja amarilla con métricas */}
      <div className="mt-10 bg-[#F37021]">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl font-extrabold">40+</div><div>Años de experiencia</div></div>
          <div><div className="text-3xl font-extrabold">500+</div><div>Proyectos</div></div>
          <div><div className="text-3xl font-extrabold">1000+</div><div>Clientes atendidos</div></div>
          <div><div className="text-3xl font-extrabold">70%</div><div>Ahorro máximo</div></div>
        </div>
      </div>
    </section>
  );
}
