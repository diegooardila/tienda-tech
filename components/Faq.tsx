"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito crear una cuenta para comprar?",
    a: "No. Puedes navegar el catálogo y hacer tu pedido sin registrarte. Solo pedimos tus datos de entrega al confirmar.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos Nequi y Bre-B. Eliges el método al momento de confirmar tu pedido.",
  },
  {
    q: "¿Cómo confirmo mi pago?",
    a: "Después de enviar tu pedido por WhatsApp, solo debes adjuntar el soporte de la transferencia en el chat.",
  },
  {
    q: "¿Puedo hacer preguntas antes de comprar?",
    a: "Sí, usa el botón de WhatsApp en la esquina inferior para escribirnos directamente.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-violet">
        Preguntas frecuentes
      </p>
      <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
        Todo lo que debes saber
      </h2>

      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-white">{item.q}</span>
                <span className="text-muted">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-sm text-muted">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
