"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const link = buildWhatsAppLink(
    "Hola, tengo una pregunta sobre sus productos 👋"
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 left-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-ink shadow-card transition hover:scale-105"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.68 4.55 1.86 6.42L4 29l7.77-1.8A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.63 28 15S22.64 3 16.02 3Zm0 21.8c-2 0-3.86-.55-5.46-1.5l-.39-.23-4.6 1.07 1.1-4.48-.25-.4A9.7 9.7 0 0 1 6.2 15c0-5.4 4.4-9.8 9.82-9.8 5.42 0 9.82 4.4 9.82 9.8 0 5.4-4.4 9.8-9.82 9.8Zm5.38-7.34c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44s1.06 2.83 1.2 3.03c.15.2 2.09 3.2 5.06 4.48.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.75-.72 2-1.42.24-.7.24-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden sm:inline">Escríbenos</span>
    </a>
  );
}
