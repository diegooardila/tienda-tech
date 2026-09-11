"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { CheckoutData, PaymentMethod } from "@/lib/types";
import { buildOrderMessage, buildWhatsAppLink, formatCOP } from "@/lib/whatsapp";

const emptyData: CheckoutData = {
  nombreCompleto: "",
  ciudad: "",
  direccion: "",
  barrio: "",
  observaciones: "",
  celular: "",
  correo: "",
  metodoPago: "Nequi",
};

type FieldErrors = Partial<Record<keyof CheckoutData, string>>;

export default function CheckoutForm({ onClose }: { onClose: () => void }) {
  const { items, totalPrice, clearCart, closeCart } = useCart();
  const [data, setData] = useState<CheckoutData>(emptyData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof CheckoutData>(key: K, value: CheckoutData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!data.nombreCompleto.trim())
      next.nombreCompleto = "Ingresa tu nombre y apellidos.";
    if (!data.ciudad.trim()) next.ciudad = "Ingresa la ciudad de destino.";
    if (!data.direccion.trim())
      next.direccion = "Ingresa la dirección completa.";
    if (!data.barrio.trim()) next.barrio = "Ingresa el barrio.";
    if (!data.observaciones.trim())
      next.observaciones = "Agrega una observación del lugar de entrega.";
    if (!data.celular.trim()) {
      next.celular = "Ingresa tu número de celular.";
    } else if (!/^\d{7,15}$/.test(data.celular.replace(/\s/g, ""))) {
      next.celular = "Ingresa solo números (7 a 15 dígitos).";
    }
    if (!data.correo.trim()) {
      next.correo = "Ingresa tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) {
      next.correo = "Ingresa un correo electrónico válido.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const message = buildOrderMessage(items, data, totalPrice);
    const link = buildWhatsAppLink(message);

    window.open(link, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleFinish() {
    clearCart();
    closeCart();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md animate-fade-in sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Datos de entrega y pago"
    >
      <div className="animate-pop-in max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-cyan-500/30 bg-surface sm:rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h2 className="font-display text-lg font-bold text-white">
            {submitted ? "Pedido enviado" : "Datos de entrega y pago · NOVA TEC"}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl text-emerald-400">
              ✅
            </div>
            <p className="text-sm text-slate-300">
              Abrimos WhatsApp con el resumen de tu pedido por{" "}
              <span className="font-extrabold text-white">
                {formatCOP(totalPrice)}
              </span>
              . Si no se abrió automáticamente, revisa las ventanas
              emergentes de tu navegador.
            </p>
            <div className="w-full rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm font-bold text-amber-300">
              📎 Recuerda enviar el soporte o comprobante de la transferencia a este chat de WhatsApp para procesar tu pedido.
            </div>
            <button
              onClick={handleFinish}
              className="mt-2 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-display text-sm font-extrabold text-white transition hover:brightness-110 shadow-lg"
            >
              Listo
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
            <Field
              label="Nombre y apellidos"
              error={errors.nombreCompleto}
              input={
                <input
                  required
                  value={data.nombreCompleto}
                  onChange={(e) => update("nombreCompleto", e.target.value)}
                  placeholder="Ej: Carlos Eduardo Mendoza"
                  className={inputClass(!!errors.nombreCompleto)}
                />
              }
            />

            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Ciudad de destino"
                error={errors.ciudad}
                input={
                  <input
                    required
                    value={data.ciudad}
                    onChange={(e) => update("ciudad", e.target.value)}
                    placeholder="Medellín / Bogotá / Cali"
                    className={inputClass(!!errors.ciudad)}
                  />
                }
              />
              <Field
                label="Barrio"
                error={errors.barrio}
                input={
                  <input
                    required
                    value={data.barrio}
                    onChange={(e) => update("barrio", e.target.value)}
                    placeholder="El Poblado / Chapinero"
                    className={inputClass(!!errors.barrio)}
                  />
                }
              />
            </div>

            <Field
              label="Dirección completa"
              error={errors.direccion}
              input={
                <input
                  required
                  value={data.direccion}
                  onChange={(e) => update("direccion", e.target.value)}
                  placeholder="Cra 43A #11-45, apto 402"
                  className={inputClass(!!errors.direccion)}
                />
              }
            />

            <Field
              label="Observaciones del lugar"
              error={errors.observaciones}
              input={
                <textarea
                  required
                  value={data.observaciones}
                  onChange={(e) => update("observaciones", e.target.value)}
                  placeholder="Edificio Torre Azul, dejar en portería junto a la entrada"
                  rows={2}
                  className={inputClass(!!errors.observaciones)}
                />
              }
            />

            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Número de celular"
                error={errors.celular}
                input={
                  <input
                    required
                    inputMode="numeric"
                    value={data.celular}
                    onChange={(e) => update("celular", e.target.value)}
                    placeholder="3001234567"
                    className={inputClass(!!errors.celular)}
                  />
                }
              />
              <Field
                label="Correo electrónico"
                error={errors.correo}
                input={
                  <input
                    required
                    type="email"
                    value={data.correo}
                    onChange={(e) => update("correo", e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className={inputClass(!!errors.correo)}
                  />
                }
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-bold text-white">
                Selección del Método de pago
              </p>
              <div className="grid grid-cols-2 gap-3">
                <PaymentOption
                  label="Nequi (3012734903)"
                  value="Nequi"
                  selected={data.metodoPago}
                  onSelect={(v) => update("metodoPago", v)}
                />
                <PaymentOption
                  label="Bre-B (3012734903)"
                  value="Bre-B"
                  selected={data.metodoPago}
                  onSelect={(v) => update("metodoPago", v)}
                />
              </div>
            </div>

            <div className="mt-1 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 px-4 py-3">
              <span className="text-sm text-slate-400 font-semibold">Total del pedido</span>
              <span className="font-mono text-lg font-extrabold text-white">
                {formatCOP(totalPrice)}
              </span>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs font-semibold text-amber-300 flex items-start gap-2">
              <span>⚠️</span>
              <span><strong>RECUERDA:</strong> Al confirmar serás redirigido a WhatsApp (+57 3012734903). <strong>Por favor envía el soporte de la transferencia por el chat.</strong></span>
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 py-3.5 text-center font-display text-sm font-extrabold text-slate-950 transition hover:brightness-110 shadow-lg"
            >
              Confirmar y Enviar Pedido por WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 ${
    hasError ? "border-red-500" : "border-white/10"
  }`;
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-semibold text-white">
        {label} <span className="text-cyan-400">*</span>
      </span>
      {input}
      {error && <span className="text-xs text-red-400 font-bold">{error}</span>}
    </label>
  );
}

function PaymentOption({
  label,
  value,
  selected,
  onSelect,
}: {
  label: string;
  value: PaymentMethod;
  selected: PaymentMethod;
  onSelect: (value: PaymentMethod) => void;
}) {
  const isActive = selected === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`flex items-center justify-center gap-2 rounded-xl border px-3.5 py-3 text-xs font-bold transition ${
        isActive
          ? "border-cyan-400 bg-cyan-500/15 text-cyan-400 shadow-sm"
          : "border-white/10 text-slate-400 hover:border-cyan-500/30"
      }`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          isActive ? "bg-cyan-400 shadow-glow" : "bg-white/20"
        }`}
      />
      {label}
    </button>
  );
}
