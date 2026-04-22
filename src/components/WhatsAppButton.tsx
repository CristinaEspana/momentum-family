import { useI18n } from "@/lib/i18n";

// TODO: reemplaza por el número corporativo en formato internacional sin "+", "-" ni espacios.
// Ejemplo: para +1 (416) 555-1234 usar "14165551234"
export const WHATSAPP_NUMBER = "10000000000";

export function WhatsAppButton() {
  const { t } = useI18n();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/15 transition-all hover:scale-105 hover:shadow-xl md:bottom-6 md:right-6"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.347-1.46-2.018a.69.69 0 0 1-.073-.27c0-.342.971-.842.971-1.388 0-.143-.973-2.395-1.13-2.54-.169-.165-.404-.197-.609-.197-.182 0-.404 0-.564.045-.616.143-1.078.842-1.078 1.598 0 1.53 1.075 3.005 2.224 4.207 1.59 1.66 3.318 2.69 5.495 3.13.328.066.652.066.97.066 1.205 0 2.366-.78 2.366-1.802 0-.546-.31-1.05-.746-1.387-.32-.246-.616-.426-.957-.534-.214-.067-.428-.067-.643-.067zM16.063 6.875c-5.062 0-9.187 4.125-9.187 9.187 0 1.78.501 3.473 1.428 4.926L6.875 25.125l4.226-1.387a9.137 9.137 0 0 0 4.962 1.444c5.062 0 9.187-4.125 9.187-9.187s-4.124-9.12-9.187-9.12zm0 16.81a7.62 7.62 0 0 1-3.886-1.06l-.279-.166-2.882.946.945-2.815-.181-.288a7.563 7.563 0 0 1-1.165-4.04c0-4.197 3.413-7.61 7.448-7.61 4.034 0 7.448 3.413 7.448 7.61 0 4.196-3.414 7.423-7.448 7.423z" />
      </svg>
      <span className="hidden text-sm font-medium sm:inline">{t.whatsapp.label}</span>
    </a>
  );
}
