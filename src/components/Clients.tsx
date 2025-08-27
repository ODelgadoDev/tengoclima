import SectionTitle from "./SectionTitle";

type Item = {
  name: string;
  site: string;   // link al sitio del cliente o socio
  logo: string;   // URL del logo (CDN)
};

const clientes: Item[] = [
  { name: "American Beef", site: "https://amebeef.com/", logo: "https://d2j6dbq0eux0bg.cloudfront.net/images/104721890/4667874069.webp" },
  { name: "Nutribief", site: "https://nutribif.com.mx/", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsihqzT0zylBsAM-NKs9bvym75hrOz5k029OL_gMswa6zsUfy6q2TfIZ3hppNUXY7Ep0&usqp=CAU" },
  { name: "Hotel Copper Canyon", site: "#", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKJ9-B46RN11IFi3EWo5FtC1HyHL-d0pBSA&s" },
  { name: "Bafar", site: "#", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWXVWp74I_xEL9txNO3YEyHfHgihkWwu8Ww&s" },
  { name: "Ford", site: "#", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGk1ix5DY8URZbKnl3nCDHxdhxiWrzUy88w&s" },
  { name: "LCI Constructora", site: "https://lci-constructora.jimdosite.com/", logo: "https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=480,height=463/image/145146191/d4e7c408-15cb-43fc-8593-3427d30e36c4.jpg" },
  { name: "SMTC", site: "https://www.smtc.com/", logo: "https://d1io3yog0oux5.cloudfront.net/_5bd512bea1d4dc23f96dca5f67d7f258/smtc/files/theme/images/header-logo.png" },
  { name: "ElektriSola", site: "https://www.elektrisola.com/es", logo: "https://www.elektrisola.com/sites/default/files/logo_pos_4%20copy_0.png" },
];

const socios: Item[] = [
  { name: "Daikin", site: "https://www.daikin.com/", logo: "https://static.wixstatic.com/media/71f38c_045785f1de4040f08447569d98169fed~mv2.jpg" },
  { name: "York", site: "https://www.york.com/", logo: "https://climaproyectos.com.mx/wp-content/uploads/2019/01/York-logo.jpg" },
  { name: "Trane", site: "https://www.trane.com/", logo: "https://pcbqro.com/wp-content/uploads/2019/04/LOGO-TRANE.png" },
  { name: "LG", site: "https://www.lg.com/", logo: "https://images.icon-icons.com/2699/PNG/512/lg_logo_icon_170264.png" },
  { name: "Midea", site: "https://www.midea.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Midea.svg/1200px-Midea.svg.png" },
  { name: "Carrier", site: "https://www.carrier.com/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_of_the_Carrier_Corporation.svg/2560px-Logo_of_the_Carrier_Corporation.svg.png" },
  { name: "Canadian Solar", site: "https://www.canadiansolar.com/", logo: "https://suncore.com.mx/wp-content/uploads/2021/04/logo-canadian-solar.png" },
  { name: "Hoymiles", site: "https://www.hoymiles.com/", logo: "https://robinsun.es/cdn/shop/files/Hoymiles_logo.png?v=1718890240&width=949" },
];

const BLUE = "#225A73";
const ORANGE = "#F37021";

export default function Clients() {
  const onLogoError = (e: React.SyntheticEvent<HTMLImageElement>, name: string) => {
    const img = e.currentTarget;
    img.onerror = null;
    img.src = `https://dummyimage.com/200x80/ffffff/${BLUE.slice(1)}&png&text=${encodeURIComponent(name)}`;
  };

  return (
    <section id="clientes" className="pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Clientes */}
        <SectionTitle center underlineColor={ORANGE}>Principales Clientes</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 place-items-center">
          {clientes.map((c) => (
            <a
              key={c.name}
              href={c.site}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-20 bg-white rounded-xl shadow flex items-center justify-center p-3 transition hover:shadow-lg hover:scale-[1.02]"
              title={c.name}
            >
              <img
                src={c.logo}
                alt={`Logo ${c.name}`}
                loading="lazy"
                className="max-h-14 max-w-full object-contain"
                onError={(e) => onLogoError(e, c.name)}
              />
            </a>
          ))}
        </div>

        {/* Divider con espacio */}
        <div className="my-14" />

        {/* Socios */}
        <SectionTitle center underlineColor={ORANGE}>Nuestros Proveedores</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 place-items-center">
          {socios.map((s) => (
            <a
              key={s.name}
              href={s.site}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-20 bg-white rounded-xl shadow flex items-center justify-center p-3 transition hover:shadow-lg hover:scale-[1.02]"
              title={s.name}
            >
              <img
                src={s.logo}
                alt={`Logo ${s.name}`}
                loading="lazy"
                className="max-h-14 max-w-full object-contain"
                onError={(e) => onLogoError(e, s.name)}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}