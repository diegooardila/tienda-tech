"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("techstore-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("techstore-theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-amber-500 font-display text-base font-extrabold text-white shadow-glow">
            N
          </span>
          <span className="font-display text-xl font-extrabold tracking-wider text-white">
            NOVA <span className="text-cyan-400">TEC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
          <a href="#catalogo" className="transition hover:text-cyan-400">
            Catálogo
          </a>
          <a href="#como-funciona" className="transition hover:text-cyan-400">
            Cómo comprar
          </a>
          <a href="#preguntas" className="transition hover:text-cyan-400">
            Preguntas
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Botón de Modo Oscuro / Claro */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar entre modo oscuro y claro"
            title="Cambiar tema de la página"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-surface px-3.5 py-2 text-xs font-semibold text-white transition hover:border-cyan-400 hover:bg-surface2"
          >
            {theme === "dark" ? (
              <>
                <span className="text-base">☀️</span>
                <span className="hidden sm:inline">Modo Claro</span>
              </>
            ) : (
              <>
                <span className="text-base">🌙</span>
                <span className="hidden sm:inline">Modo Oscuro</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={openCart}
            aria-label="Abrir carrito de compras"
            className="relative flex items-center gap-2 rounded-full border border-cyan-500/30 bg-surface px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-400 hover:bg-surface2"
          >
            <CartIcon />
            <span className="hidden sm:inline">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 px-1.5 font-mono text-xs font-extrabold text-ink shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function CartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
