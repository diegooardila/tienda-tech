"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import { formatCOP } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";

export default function ProductCard({
  product,
  onOpenDetails,
}: {
  product: Product;
  onOpenDetails: (product: Product) => void;
}) {
  const { addToCart, lastAdded } = useCart();
  const justAdded = lastAdded === product.id;

  return (
    <div className="group flex w-full max-w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30">
      <button
        type="button"
        onClick={() => onOpenDetails(product)}
        className="relative block aspect-square w-full overflow-hidden bg-surface2 text-left"
        aria-label={`Ver Especificaciones de ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 font-mono text-[11px] font-extrabold text-slate-950 shadow-md">
            {product.badge}
          </span>
        )}
        <span className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
          <span className="text-xs font-bold text-cyan-400">
            🔍 Ver Especificaciones
          </span>
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400 sm:text-[11px]">
          {product.category}
        </p>
        <button
          type="button"
          onClick={() => onOpenDetails(product)}
          className="text-left font-display text-sm font-bold uppercase leading-tight tracking-[0.04em] text-white transition hover:text-cyan-400 sm:text-base"
        >
          {product.name}
        </button>
        <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-400 sm:text-xs">{product.tagline}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="font-mono text-base font-extrabold text-white sm:text-lg">
            {formatCOP(product.price)}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 1);
            }}
            aria-label={`Agregar ${product.name} al carrito`}
            className={`flex items-center gap-1 rounded-full px-3 py-2 font-display text-[10px] font-extrabold transition duration-200 sm:gap-1.5 sm:px-4 sm:text-xs ${
              justAdded
                ? "bg-emerald-500 text-slate-950 scale-105 shadow-md"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 shadow-md shadow-cyan-500/20"
            }`}
          >
            <span className="text-sm font-extrabold">+</span>
            <span>{justAdded ? "Agregado ✓" : "Agregar"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
