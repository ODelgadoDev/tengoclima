import { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";

const BLUE = "#225A73";
const ORANGE = "#F37021";

/** 🔐 Rellena con tus credenciales reales de EmailJS */
const EMAILJS_PUBLIC_KEY = "bja3FEqH-DlViILbQ";
const EMAILJS_SERVICE_ID = "service_34396kr";
const EMAILJS_TEMPLATE_ID = "template_lrtcm3t";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [okMsg, setOkMsg] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOkMsg(null);
    setErrMsg(null);
    if (!formRef.current) return;

    try {
      setSending(true);
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setOkMsg("¡Gracias! Tu solicitud fue enviada. Te contactaremos pronto.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setErrMsg("Hubo un problema al enviar. Intenta de nuevo o escríbenos a tengoclima@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle center underlineColor={ORANGE}>Contacto</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Columna izquierda: mapa + datos */}
          <div className="rounded-2xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps?q=Oaxaca%2027%20Col.%20Industrial%20Chihuahua&output=embed"
              className="w-full h-80" loading="lazy" title="Mapa TENGOCLIMA"
            />
            <div className="p-4 text-sm">
              <p className="font-semibold">Oficina principal</p>
              <p>Oaxaca 27, Col. Industrial, Chihuahua, Chih.</p>
              <p className="mt-2">📞 <a href="tel:+526144276293" className="font-semibold" style={{ color: BLUE }}>+52 614 427 6293</a></p>
              <p>📧 <a href="mailto:tengoclima@gmail.com" className="font-semibold" style={{ color: BLUE }}>tengoclima@gmail.com</a></p>
              <p className="mt-1">🕒 L–V 9:00–18:00</p>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <form ref={formRef} onSubmit={submit} className="rounded-2xl border p-6 bg-gray-50 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" className="border rounded-lg px-3 py-2" placeholder="Nombre" required />
              <input name="phone" className="border rounded-lg px-3 py-2" placeholder="Teléfono" />
            </div>

            <input name="email" className="border rounded-lg px-3 py-2" placeholder="Email" type="email" required />
            <input name="localidad" className="border rounded-lg px-3 py-2" placeholder="Localidad (colonia/municipio)" />

            <select name="servicio" className="border rounded-lg px-3 py-2" defaultValue="">
              <option value="" disabled>Tipo de servicio</option>
              <option>Climatización</option>
              <option>Energía solar</option>
              <option>Mantenimiento</option>
              <option>Eficiencia energética</option>
              <option>Sistemas especiales</option>
              <option>Calentadores solares</option>
              <option>Otro</option>
            </select>

            <textarea name="message" className="border rounded-lg px-3 py-2" rows={4} placeholder="Cuéntanos tu proyecto..." />

            {/* EmailJS leerá este campo y podrás usarlo en tu template */}
            <input type="hidden" name="to_email" value="tengoclima@gmail.com" />

            <button
              type="submit"
              disabled={sending}
              className="justify-self-start px-5 py-2 rounded-xl text-white font-semibold hover:brightness-110 disabled:opacity-60"
              style={{ backgroundColor: BLUE }}
            >
              {sending ? "Enviando..." : "Enviar solicitud"}
            </button>

            {okMsg && <p className="text-green-700 text-sm">{okMsg}</p>}
            {errMsg && <p className="text-red-600 text-sm">{errMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
