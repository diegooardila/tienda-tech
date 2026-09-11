const steps = [
  {
    title: "Elige tus productos",
    text: "Explora el catálogo, revisa las especificaciones y agrégalos a tu carrito.",
  },
  {
    title: "Completa tus datos",
    text: "Ciudad, dirección, barrio y forma de contacto para coordinar la entrega.",
  },
  {
    title: "Escoge Nequi o Bre-B",
    text: "Selecciona tu método de pago preferido antes de confirmar.",
  },
  {
    title: "Confirma por WhatsApp",
    text: "Te llevamos al chat con el resumen listo. Solo envía el soporte del pago.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-white/5 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="font-mono text-xs uppercase tracking-wide text-violet">
          Proceso de compra
        </p>
        <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
          Cuatro pasos, cero registros
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-surface p-5"
            >
              <span className="font-mono text-3xl font-bold text-white/15">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
