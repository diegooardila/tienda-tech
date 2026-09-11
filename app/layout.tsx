import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "NOVA TEC | AirPods & Smartwatches Oficial",
  description:
    "Tienda oficial NOVA TEC. Los mejores AirPods con cancelación activa de ruido y Smartwatches de titanio con compra directa a WhatsApp por Nequi o Bre-B sin registrarte.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-ink bg-noise antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
