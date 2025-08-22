import Modal from "./Modal";

type Props = { open: boolean; onClose: () => void };

export default function PrivacyModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Aviso de Privacidad" maxWidthClass="max-w-3xl">
      <div className="space-y-4 text-sm leading-6 text-slate-700">
        <p>
          En <b>TENGOCLIMA</b> respetamos tu privacidad. Los datos que nos compartas a través del
          formulario de contacto (nombre, teléfono, correo y mensaje) se utilizarán únicamente
          para atender tu solicitud de información o cotización.
        </p>
        <p>
          No compartimos tus datos con terceros sin tu autorización. Podrás solicitar la
          actualización o eliminación de tu información escribiendo a{" "}
          <a href="mailto:tengoclima@gmail.com" className="font-semibold" style={{ color: "#225A73" }}>
            tengoclima@gmail.com
          </a>.
        </p>
        <p>
          Al enviar el formulario aceptas este Aviso de Privacidad. Para dudas o aclaraciones,
          contáctanos en el mismo correo.
        </p>
        <div className="pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-white font-semibold hover:brightness-110"
            style={{ backgroundColor: "#225A73" }}
          >
            Entendido
          </button>
        </div>
      </div>
    </Modal>
  );
}
