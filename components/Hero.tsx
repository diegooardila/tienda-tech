import TechBanner from "./TechBanner";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950">
      {/* Animated Background Tech Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent" />
      
      {/* Animated Tech Marquee Banner */}
      <TechBanner />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-2 md:pb-24 md:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-surface px-4 py-1.5 font-mono text-xs font-bold text-cyan-400 shadow-glow">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            NOVA TEC · AirPods & Smartwatches 2026
          </span>
          
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl text-white">
            TECNOLOGÍA DE ALTO NIVEL.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 bg-clip-text text-transparent">
              EDICIÓN AIRPODS & WATCHES.
            </span>
          </h1>
          
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Los mejores AirPods con cancelación activa de ruido y Smartwatches de titanio.
            Selecciona tu producto, confirma en 1 solo paso por WhatsApp y paga por Nequi o Bre-B sin registrarte.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#catalogo"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-display text-sm font-extrabold text-white transition hover:brightness-110 shadow-lg shadow-cyan-500/25"
            >
              Ver Catálogo Exclusivo
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-bold text-slate-300 transition hover:text-cyan-400"
            >
              ¿Cómo funciona? →
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-cyan-500/20 bg-surface p-3 shadow-2xl shadow-cyan-950/40">
            <div className="flex items-center gap-2.5 rounded-t-xl bg-[#075E54] px-4 py-3 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 font-display text-xs font-extrabold text-slate-950">
                NT
              </div>
              <div>
                <p className="text-sm font-bold tracking-wide">NOVA TEC</p>
                <p className="text-[11px] text-emerald-300">en línea ahora</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-[#0b141a] px-3 py-4">
              <ChatBubble align="right">
                Hola NOVA TEC! Quiero los AirPods Pro (2ª Gen) y el Smartwatch Ultra 🙌
              </ChatBubble>
              <ChatBubble align="left">
                ¡Excelente elección! ⚡ Resumen de tu pedido:
                {"\n"}1. AirPods Pro (2ª Gen) ANC x1
                {"\n"}2. Smartwatch Ultra Titanium x1
                {"\n"}Total: $1.038.000 COP
              </ChatBubble>
              <ChatBubble align="right">
                Listo! Ya transferí por Nequi, adjunto soporte 📎
              </ChatBubble>
            </div>
          </div>
          <div className="absolute -right-3 -top-3 rounded-xl border border-cyan-500/40 bg-surface px-3 py-2 font-mono text-xs font-extrabold text-cyan-400 shadow-card">
            pedido #0492
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({
  children,
  align,
}: {
  children: string;
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={`max-w-[85%] whitespace-pre-line rounded-lg px-3.5 py-2.5 text-[13px] leading-snug text-white ${
        isRight ? "self-end bg-[#005C4B]" : "self-start bg-[#202c33]"
      }`}
    >
      {children}
    </div>
  );
}
