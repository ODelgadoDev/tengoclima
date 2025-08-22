import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Modal from "./Modal";

type Service = {
  t: string;
  d: string;
  img: string; // conservamos exactamente tus URLs
  details?: string;
};

const services: Service[] = [
  {
    t: "Climatización",
    d: "Instalación y mantenimiento de aire acondicionado y calefacción.",
    img: "https://www.incomep.com/wp-content/uploads/2021/06/LA-IMPORTANCIA-DEL-MANTENIMIENTO-A-EQUIPOS-DE-HVAC-PARA-GARANTIZAR-EL-CONFORT-Y-EFICIENCIA-2.webp",
    details:
      "Diseñamos e instalamos minisplits, VRF y soluciones comerciales/industriales. Cálculo de carga térmica, selección de equipos Inverter y balanceo para máximo confort con menor consumo.",
  },
  {
    t: "Energía solar",
    d: "Sistemas fotovoltaicos residenciales y comerciales. Trámite ante CFE.",
    img: "https://cdn.forbes.com.mx/2023/06/paneles-solares-640x360.webp",
    details:
      "Proyectos llave en mano: estudio de consumo, dimensionamiento, paneles líderes y microinversores. Monitoreo y garantías. Ahorros del 40–70% según uso.",
  },
  {
    t: "Mantenimiento",
    d: "Planes preventivos y correctivos para prolongar la vida útil.",
    img: "https://insotec-clima.com/wp-content/uploads/Tipos-de-mantenimiento-de-aire-acondicionado-2.jpg",
    details:
      "Programas trimestrales/semestrales: limpieza profunda, filtros, revisión de presiones, fugas, consumos y reporte técnico para asegurar operación continua.",
  },
  {
    t: "Eficiencia energética",
    d: "Cálculo de cargas, selección de equipos y reducción de consumo.",
    img: "https://www.mibolsillo.com/__export/1735248568186/sites/debate/img/2024/12/26/medidor-luz-cfe-1.jpg_554688468.jpg",
    details:
      "Auditoría energética, actualización a alta eficiencia, termostatización por zonas y aislamiento. Objetivo: menor tarifa y mayor confort.",
  },
  {
    t: "Sistemas especiales",
    d: "Cuartos fríos, ventilación industrial y soluciones a la medida.",
    img: "https://www.solerpalau.com/blog/es-es/wp-content/uploads/sites/3/2025/06/ventilacion-industrial-1.jpg",
    details:
      "Cuartos de proceso, extracción, inyección y filtración de aire. Selección de equipos conforme a normas, seguridad y continuidad operativa.",
  },
  {
    t: "Calentadores solares",
    d: "Agua caliente con energía solar para hogar e industria.",
    img: "https://todoferreteria.com.mx/wp-content/uploads/2025/05/a-droplet-water-scaled-e1747946560272.jpg",
    details:
      "Termotanques y sistemas presurizados. Reducción significativa en consumo de gas. Diseño según demanda diaria y perfiles de uso.",
  },
];

const BLUE = "#225A73";
const ORANGE = "#F37021";

export default function Services() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Service | null>(null);

  const openModal = (s: Service) => {
    setCurrent(s);
    setOpen(true);
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle center underlineColor={ORANGE}>Servicios</SectionTitle>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => openModal(s)}
              className="text-left rounded-2xl border shadow-sm overflow-hidden bg-white hover:shadow-lg transition focus:outline-none focus:ring-2"
              style={{ borderColor: "#e2e8f0" }}
            >
              <img src={s.img} alt={s.t} className="h-44 w-full object-cover" />
              <div className="p-6">
                <h4 className="font-semibold" style={{ color: BLUE }}>{s.t}</h4>
                <p className="text-sm text-slate-600 mt-2">{s.d}</p>
                <span className="inline-block mt-4 text-sm font-semibold" style={{ color: ORANGE }}>
                  Ver más →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={current?.t}>
        {current && (
          <div className="grid md:grid-cols-2 gap-5">
            <img
              src={current.img}
              alt={current.t}
              className="w-full h-56 md:h-full object-cover rounded-xl"
            />
            <div className="space-y-4">
              <p className="text-slate-700">{current.details || current.d}</p>
              <div className="flex gap-3 pt-2">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg text-white font-semibold hover:brightness-110"
                  style={{ backgroundColor: BLUE }}
                >
                  Solicitar cotización
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg border hover:bg-black/5"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
