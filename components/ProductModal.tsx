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

  useEffect(() => {
    setQuantity(1);
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
            <div className="relative aspect-square overflow-hidden rounded-xl bg-surface2 border border-white/10 shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 90vw, 40vw"
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 font-mono text-xs font-extrabold text-slate-950 shadow-md">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Tagline message glued right under the amplified image */}
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2 text-center font-mono text-xs font-bold text-cyan-400 shadow-sm">
              ⚡ {product.tagline}
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-display text-2xl font-bold text-white">{product.name}</h2>
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

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Disminuir cantidad"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white hover:bg-white/10"
                >
                  −
                </button>
                <span className="w-6 text-center font-mono text-sm font-bold text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar cantidad"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white hover:bg-white/10"
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
    </div>
  );
}
