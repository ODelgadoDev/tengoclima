import SectionTitle from "./SectionTitle";

type Partner = {
  name: string;
  site: string;   // link del socio
  logo: string;   // URL del logo (CDN)
};

const partners: Partner[] = [
  { name: "Daikin",          site: "https://www.daikin.com/",          logo: "https://static.wixstatic.com/media/71f38c_045785f1de4040f08447569d98169fed~mv2.jpg/v1/fit/w_2500,h_1330,al_c/71f38c_045785f1de4040f08447569d98169fed~mv2.jpg" },
  { name: "York",            site: "https://www.york.com/",            logo: "https://climaproyectos.com.mx/wp-content/uploads/2019/01/York-logo.jpg" },
  { name: "Trane",           site: "https://www.trane.com/",           logo: "https://pcbqro.com/wp-content/uploads/2019/04/LOGO-TRANE.png" },
  { name: "LG",              site: "https://www.lg.com/",              logo: "https://images.icon-icons.com/2699/PNG/512/lg_logo_icon_170264.png" },
  { name: "Midea",           site: "https://www.midea.com/",           logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Midea.svg/1200px-Midea.svg.png" },
  { name: "Carrier",         site: "https://www.carrier.com/",         logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_of_the_Carrier_Corporation.svg/2560px-Logo_of_the_Carrier_Corporation.svg.png" },
  { name: "Canadian Solar",  site: "https://www.canadiansolar.com/",   logo: "https://suncore.com.mx/wp-content/uploads/2021/04/logo-canadian-solar.png" },
  { name: "Hoymiles",        site: "https://www.hoymiles.com/",        logo: "https://robinsun.es/cdn/shop/files/Hoymiles_logo.png?v=1718890240&width=949" },
];

// Colores de marca
const BLUE = "#225A73";
const ORANGE = "#F37021";

export default function Clients() {
  // Fallback a imagen de texto si falla el logo remoto
  const onLogoError = (e: React.SyntheticEvent<HTMLImageElement>, name: string) => {
    const img = e.currentTarget;
    img.onerror = null;
    img.src = `https://dummyimage.com/200x80/ffffff/${BLUE.slice(1)}&png&text=${encodeURIComponent(name)}`;
  };

  return (
    <section id="clientes" className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle center underlineColor={ORANGE}>Socios</SectionTitle>

        {/* (Opcional) fila de nombres */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80 mt-6">
          {partners.map((p) => (
            <span key={p.name} className="font-semibold" style={{ color: BLUE }}>
              {p.name}
            </span>
          ))}
        </div>

        {/* Grid de logos con enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 place-items-center">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.site}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-20 bg-white rounded-xl shadow flex items-center justify-center p-3 transition hover:shadow-lg hover:scale-[1.02]"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={`Logo ${p.name}`}
                loading="lazy"
                className="max-h-14 max-w-full object-contain"
                onError={(e) => onLogoError(e, p.name)}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
