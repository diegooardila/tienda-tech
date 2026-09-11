"use client";

import { useState } from "react";
import { products, categories } from "@/lib/products";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    null
  );

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase font-extrabold tracking-wider text-cyan-400">
            Catálogo Exclusivo
          </p>
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            AirPods & Smartwatches
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {["Todos", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-2 text-xs font-extrabold transition duration-200 ${
                activeCategory.toLowerCase() === cat.toLowerCase()
                  ? "border-cyan-400 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "border-white/10 bg-surface text-slate-400 hover:border-cyan-500/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenDetails={setSelectedProduct}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
