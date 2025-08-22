type Props = { onPrivacyClick?: () => void };

export default function Footer({ onPrivacyClick }: Props) {
  return (
    <footer className="py-10 text-center text-sm text-slate-600">
      © 2025 TENGOCLIMA. Todos los derechos reservados ·{" "}
      <button
        onClick={onPrivacyClick}
        className="underline font-medium hover:opacity-80"
        style={{ color: "#225A73" }}
      >
        Aviso de privacidad
      </button>
    </footer>
  );
}
