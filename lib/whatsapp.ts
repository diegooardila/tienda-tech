import { CartItem, CheckoutData } from "./types";

export const WHATSAPP_NUMBER = "573012734903";

export function formatCOP(value: number): string {
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}

export function buildOrderMessage(
  items: CartItem[],
  data: CheckoutData,
  total: number
): string {
  const productLines = items
    .map((item, index) => {
      const subtotal = item.product.price * item.quantity;
      return `${index + 1}. ${item.product.name} x${item.quantity} - ${formatCOP(
        item.product.price
      )} c/u = ${formatCOP(subtotal)}`;
    })
    .join("\n");

  const lines = [
    " *NUEVO PEDIDO - NOVA TEC*",
    "------------------------------",
    ` Nombre y apellidos: ${data.nombreCompleto}`,
    ` Ciudad de destino: ${data.ciudad}`,
    ` Barrio: ${data.barrio}`,
    ` Dirección completa: ${data.direccion}`,
    ` Observaciones del lugar: ${data.observaciones || "Ninguna"}`,
    ` Celular: ${data.celular}`,
    ` Correo electrónico: ${data.correo}`,
    "------------------------------",
    " *Productos:*",
    productLines,
    "------------------------------",
    ` *Total a pagar: ${formatCOP(total)}*`,
    
    ` Método de pago: ${data.metodoPago}`,
    "------------------------------",
    "📎 Por favor enviar el soporte de la transferencia.",
  ];

  return lines.join("\n");
}

export function buildWhatsAppLink(message: string, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
