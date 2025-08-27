type Props = { onPrivacyClick?: () => void };

export default function Footer({ onPrivacyClick }: Props) {
  return (
    <footer className="py-10 text-center text-sm text-slate-600">
      <div className="max-w-6xl mx-auto px-4">
        <p>
          © 2025 TENGOCLIMA. Todos los derechos reservados ·{" "}
          <button
            onClick={onPrivacyClick}
            className="underline font-medium hover:opacity-80"
            style={{ color: "#225A73" }}
          >
            Aviso de privacidad
          </button>
        </p>

        {/* Separador sutil */}
        <div className="mt-4 mb-3 mx-auto w-24 h-px bg-slate-200" />

        {/* Aviso legal de marcas */}
        <p className="text-xs leading-relaxed text-slate-500">
          Los logotipos, nombres y marcas mostrados en este sitio son propiedad de sus
          respectivos titulares (p. ej., Daikin, York, Trane, LG, Midea, Carrier, Canadian Solar,
          Hoymiles, American Beef, Nutribief, Hotel Copper Canyon, Bafar, Ford, LCI Constructora,
          SMTC, Elektrisola, entre otros). Su exhibición tiene fines exclusivamente informativos
          para referir relaciones comerciales, integración o compatibilidad de equipos. TengoClima
          no reclama titularidad alguna sobre dichas marcas ni su uso implica patrocinio,
          representación exclusiva, joint venture o afiliación distinta a la relación comercial
          correspondiente, salvo disposición expresa por escrito. Las marcas registradas ® y ™
          pertenecen a sus respectivos dueños. Si eres titular de derechos y deseas solicitar
          actualización o retiro de algún material, contáctanos en{" "}
          <a
            href="mailto:tengoclimaweb@gmail.com"
            className="underline hover:opacity-80"
            style={{ color: "#225A73" }}
          >
            tengoclimaweb@gmail.com
          </a>.
        </p>
      </div>
    </footer>
  );
}