import SectionTitle from "./SectionTitle";

const items = [
  {
    t: "Nutribif — Chihuahua",
    d: "82 módulos Canadian Solar con microinversores Hoymiles. Ahorro hasta 70%.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzccKVxJZwxFJY8TCQlUhLN6CoyPRuv2EaVw&s",
  },
  {
    t: "Hotel Coppel Canyon — Chihuahua",
    d: "Sistema fotovoltaico de autoconsumo para suites y áreas comunes.",
    img: "https://images.trvl-media.com/lodging/11000000/10660000/10650500/10650456/50adc956.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  },
  {
    t: "Planta Ford — Chihuahua",
    d: "Climatización y mantenimiento HVAC. Continuidad operativa y ahorro.",
    img: "https://noro.mx/wp-content/uploads/2023/11/planta-ford-chihuahua-cumplio-40-anos-mexico-chihuahua-1024x540.webp",
  },
  {
    t: "Residencial — Aldama",
    d: "Minisplits Inverter A+++ · 3 × 1.5 TR · Confort y eficiencia.",
    img: "https://assets.easybroker.com/property_images/5428150/93920573/EB-TV8150.png?height=300&version=1754359306&width=450",
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
