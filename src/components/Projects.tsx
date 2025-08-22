import SectionTitle from "./SectionTitle";

const items = [
  {
    t: "Nutribif — Chihuahua",
    d: "82 módulos Canadian Solar con microinversores Hoymiles. Ahorro hasta 70%.",
    img: "./src/assets/nutribief.jpg",
  },
  {
    t: "Hotel Coppel Canyon — Chihuahua",
    d: "Sistema fotovoltaico de autoconsumo para suites y áreas comunes.",
    img: "./src/assets/hotel copper.jpg",
  },
  {
    t: "Planta Ford — Chihuahua",
    d: "Climatización y mantenimiento HVAC. Continuidad operativa y ahorro.",
    img: "./src/assets/PlantaFord.jpg",
  },
  {
    t: "Residencial — Aldama",
    d: "Minisplits Inverter A+++ · 3 × 1.5 TR · Confort y eficiencia.",
    img: "./src/assets/residencial.jpg",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle center>Proyectos</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {items.map((p, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden border bg-white">
              <img src={p.img} alt={p.t} className="h-72 w-full object-cover" />
              <figcaption className="p-5">
                <h4 className="font-semibold">{p.t}</h4>
                <p className="text-sm text-slate-600">{p.d}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
