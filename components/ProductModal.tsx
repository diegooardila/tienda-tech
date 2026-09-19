"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { formatCOP } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setIsZoomOpen(false);
  }, [product]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (product) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md animate-fade-in sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Especificaciones de ${product.name}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-pop-in max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-cyan-500/20 bg-surface sm:rounded-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
            {product.category}
          </p>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-1.5 text-muted transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2">
          {/* Image & Tagline Column */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="group relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-surface2 text-left shadow-md"
              aria-label={`Ampliar imagen de ${product.name}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 90vw, 40vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white shadow-lg transition group-hover:bg-cyan-500" aria-hidden="true">
                <ZoomIcon />
              </span>
              {product.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 font-mono text-xs font-extrabold text-slate-950 shadow-md">
                  {product.badge}
                </span>
              )}
            </button>

            {/* Tagline message glued right under the amplified image */}
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2 text-center font-mono text-xs font-bold text-cyan-400 shadow-sm">
              ⚡ {product.tagline}
            </div>

            {(product.id === "airpods-pro-3" || product.id === "airpods-4" || product.id === "airpods-pro-sealed" || product.id === "smartwatch-ultra-titanium") && (
              <div className="mt-3 overflow-hidden rounded-xl border border-cyan-500/25 bg-slate-950 shadow-md">
                <div className="border-b border-white/10 px-3.5 py-3">
                  <p className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-cyan-400">
                    Unboxing y características
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {product.id === "smartwatch-ultra-titanium"
                      ? "Conoce el diseño, la pantalla y los detalles del Smartwatch Ultra antes de comprar."
                      : product.id === "airpods-pro-sealed"
                        ? "Conoce el empaque, los detalles y el audio de los AirPods Pro ANC Premium antes de comprar."
                        : `Conoce el empaque, el estuche y los accesorios de ${product.name} antes de comprar.`}
                  </p>
                </div>
                <div className="flex items-center justify-center bg-slate-950">
                  <video
                    className="aspect-video w-full max-w-[100%] bg-slate-900 object-cover"
                    controls
                    muted
                    autoPlay
                    loop
                    playsInline
                    controlsList="nofullscreen nodownload noplaybackrate"
                    disablePictureInPicture
                    preload="metadata"
                    poster={product.image}
                    aria-label={`Video de unboxing de ${product.name}`}
                  >
                  <source
                    src={
                      product.id === "airpods-pro-3"
                        ? "/videos/unboxing-airpods-pro-3.mp4"
                        : product.id === "airpods-4"
                          ? "/videos/unboxing-airpods4.mp4"
                          : product.id === "airpods-pro-sealed"
                            ? "/videos/AIRPODS ANC.mp4"
                            : "/videos/watches-h9.mp4"
                    }
                    type="video/mp4"
                  />
                    Tu navegador no puede reproducir este video.
                  </video>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-white/10 px-3 py-3 text-center text-[10px] font-semibold text-slate-300">
                  <span>{product.id === "smartwatch-ultra-titanium" ? "Diseño" : "Empaque"}</span>
                  <span>{product.id === "smartwatch-ultra-titanium" ? "Pantalla" : "Estuche"}</span>
                  <span>{product.id === "smartwatch-ultra-titanium" ? "Detalles" : "Accesorios"}</span>
                </div>
              </div>
            )}

          </div>

          <div className="flex flex-col">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.04em] text-white">{product.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {product.description}
            </p>

            <div className="mt-4">
              {/* Title */}
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Especificaciones Técnicas</h3>
              <div className="mt-4 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/80 dark:bg-slate-900/50">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between gap-4 px-3 py-2 text-sm"
                  >
                    <span className="text-gray-800 dark:text-slate-400">{spec.label}</span>
                    <span className="text-right font-semibold text-black dark:text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-mono text-2xl font-extrabold text-white">
                {formatCOP(product.price)}
              </span>

              <div className="quantity-control flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Disminuir cantidad"
                  className="quantity-control-button flex h-7 w-7 items-center justify-center rounded-full text-white hover:bg-white/10"
                >
                  −
                </button>
                <span className="quantity-control-value w-6 text-center font-mono text-sm font-bold text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar cantidad"
                  className="quantity-control-button flex h-7 w-7 items-center justify-center rounded-full text-white hover:bg-white/10"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                addToCart(product, quantity);
                onClose();
              }}
              className="mt-4 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-display text-sm font-extrabold text-white transition hover:brightness-110 shadow-lg shadow-cyan-500/20"
            >
              Agregar al carrito · {formatCOP(product.price * quantity)}
            </button>
          </div>
        </div>
      </div>

      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
          onClick={() => setIsZoomOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada de ${product.name}`}
        >
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-2 text-xl text-white transition hover:bg-white/20"
            aria-label="Cerrar imagen ampliada"
          >
            ✕
          </button>
          <div className="relative h-[min(82vh,760px)] w-[min(92vw,900px)]" onClick={(event) => event.stopPropagation()}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="92vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ZoomIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4M11 8v6M8 11h6" />
    </svg>
  );
}
