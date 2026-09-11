"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/whatsapp";
import CheckoutForm from "./CheckoutForm";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, totalPrice } =
    useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <button
        className="absolute inset-0 cursor-default"
        aria-label="Cerrar carrito"
        onClick={closeCart}
      />

      <aside className="animate-slide-in relative flex h-full w-full max-w-md flex-col bg-slate-950 border-l border-cyan-500/20 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <h2 className="font-display text-lg font-bold text-white">Tu Carrito de Compras</h2>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="font-display text-lg font-semibold text-white">
              Tu carrito está vacío
            </p>
            <p className="text-sm text-slate-400">
              Agrega AirPods o Smartwatches para armar tu pedido.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5">
              <div className="receipt px-4 pb-6 pt-5">
                <p className="text-center font-mono text-xs font-bold uppercase tracking-widest text-slate-800">
                  Resumen del pedido · NOVA TEC
                </p>
                <div className="receipt-divider my-3" />

                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex items-center gap-3"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-slate-300">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-slate-900">
                          {item.product.name}
                        </p>
                        <p className="font-mono text-xs font-semibold text-cyan-700">
                          {formatCOP(item.product.price)} c/u
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label={`Disminuir cantidad de ${item.product.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-400 bg-slate-200 font-bold text-slate-900 transition hover:bg-cyan-600 hover:text-white text-xs cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-mono text-xs font-extrabold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label={`Aumentar cantidad de ${item.product.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-400 bg-slate-200 font-bold text-slate-900 transition hover:bg-cyan-600 hover:text-white text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label={`Quitar ${item.product.name} del carrito`}
                        className="ml-1 text-xs font-bold text-slate-400 hover:text-red-600"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="receipt-divider my-3" />
                <div className="flex items-center justify-between font-mono text-sm font-extrabold text-slate-900">
                  <span>TOTAL A PAGAR</span>
                  <span>{formatCOP(totalPrice)}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 p-5 bg-slate-900">
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-center font-display text-sm font-extrabold text-white transition hover:brightness-110 shadow-lg shadow-cyan-500/25"
              >
                Continuar con el pedido por WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>

      {isCheckoutOpen && (
        <CheckoutForm onClose={() => setIsCheckoutOpen(false)} />
      )}
    </div>
  );
}
