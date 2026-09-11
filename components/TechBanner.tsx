"use client";

export default function TechBanner() {
  const items = [
    "⚡ CANCELACIÓN ACTIVA DE RUIDO ANC",
    "⌚ PANTALLA SAPPHIRE RETINA 2000 NITS",
    "🎧 AUDIO ESPACIAL 3D",
    "💧 RESISTENCIA IP68 SUMERGIBLE",
    "📦 ENVÍO EXPRESS A TODA COLOMBIA",
    "💳 PAGO SEGURO NEQUI & BRE-B",
    "🔥 COMPRA DIRECTA SIN REGISTRO",
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-cyan-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-3 shadow-inner">
      {/* Animated Glowing Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-amber-500/10 opacity-70 animate-pulse" />
      
      {/* Infinite Scrolling Ticker Banner */}
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-8 font-mono text-xs font-bold tracking-widest text-cyan-400">
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-glow" />
            </span>
          ))}
        </div>
        
        {/* Duplicate loop for infinite seamless scrolling */}
        <div className="flex animate-marquee items-center gap-8 font-mono text-xs font-bold tracking-widest text-cyan-400" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-glow" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
