import { IconInstagram, IconWhatsApp } from "./icons";

const WHATSAPP_NUMBER = "56971058990";
const INSTAGRAM_HANDLE = "colegiobosquemaroficial";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram del colegio"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <IconInstagram className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, tengo una consulta sobre el PISE de Colegio Bosquemar.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <IconWhatsApp className="h-5 w-5" />
      </a>
    </div>
  );
}
