# TechStore — Tienda de tecnología con checkout por WhatsApp

Proyecto en **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Qué incluye

- Catálogo de productos con tarjetas y filtro por categoría.
- Al hacer clic en un producto se abre una ventana con **todas sus especificaciones**.
- Carrito de compras (panel lateral) con miniatura de imagen junto al nombre de cada producto.
- **Sin login**: no hay pantallas de registro ni inicio de sesión.
- Botón flotante de **WhatsApp** para preguntas generales de los clientes.
- Formulario de checkout con los campos obligatorios:
  - Nombre y apellidos
  - Ciudad de destino
  - Dirección completa
  - Barrio
  - Observaciones del lugar
  - Número de celular
  - Correo electrónico
  - Método de pago: **Nequi** o **Bre-B**
- Al confirmar, se abre WhatsApp (número **3012734903**) con un **resumen automático del pedido** (productos, cantidades, total, datos de entrega y método de pago) y el mensaje final: *"Por favor enviar el soporte de la transferencia."*
- El carrito se guarda en el navegador (localStorage), así que si el cliente recarga la página no lo pierde.

## Cómo correrlo en tu computador

1. Instala [Node.js 18 o superior](https://nodejs.org/).
2. Abre una terminal dentro de esta carpeta y ejecuta:

   ```bash
   npm install
   npm run dev
   ```

3. Abre `http://localhost:3000` en tu navegador.

## Cómo publicarlo (gratis)

La forma más simple es con [Vercel](https://vercel.com) (creadores de Next.js):

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a vercel.com, inicia sesión con GitHub y elige "Importar proyecto".
3. Selecciona el repositorio y haz clic en "Deploy". En unos minutos tendrás una URL pública.

## Cómo personalizar

- **Productos:** edita `lib/products.ts`. Cada producto tiene nombre, categoría, precio, imagen y una lista de especificaciones (`specs`). Reemplaza las URLs de imagen (actualmente son fotos de relleno de `picsum.photos`) por las fotos reales de tus productos.
- **Número de WhatsApp:** está en `lib/whatsapp.ts`, en la constante `WHATSAPP_NUMBER`.
- **Colores y tipografías:** están definidos en `tailwind.config.ts` (colores) y `app/layout.tsx` (tipografías de Google Fonts).
- **Textos de la página (hero, pasos, preguntas frecuentes):** en `components/Hero.tsx`, `components/HowItWorks.tsx` y `components/Faq.tsx`.

## Notas

- Este proyecto no usa base de datos ni backend: todo el catálogo vive en el código (`lib/products.ts`). Si más adelante quieres gestionar inventario, precios o pedidos desde un panel, se puede conectar a una base de datos o a una hoja de cálculo.
- El envío del pedido se hace abriendo un enlace de WhatsApp (`wa.me`) con el mensaje ya escrito; no se procesa ningún pago dentro de la página, por eso se pide el soporte de la transferencia por chat.
