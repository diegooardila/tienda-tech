import { Product } from "./types";

export const products: Product[] = [
  {
    id: "airpods-pro-3",
    name: "AIRPODS PRO 3",
    category: "AirPods",
    price: 79900,
    image: "/images/Airpodpro3.jpg",
    tagline: "Audio sin límites · Cancelación activa de ruido",
    description:
      "Cancelación activa de ruido 2x superior, modo ambiente adaptativo, estuche de carga MagSafe con altavoz integrado y emparejamiento instantáneo.",
    badge: "Más vendido",
    specs: [
      { label: "Cancelación de ruido", value: "ANC Activo + Modo Ambiente" },
      { label: "Chipset", value: "H2 de alta velocidad" },
      { label: "Autonomía", value: "6h continuas + 30h con estuche" },
      { label: "Resistencia", value: "IP54 al sudor y agua" },
      { label: "Estuche", value: "MagSafe / USB-C con altavoz" },
      { label: "Compatibilidad", value: "iOS / Android Universal" },
    ],
  },
  {
    id: "airpods-4",
    name: "AIRPODS 4",
    category: "AirPods",
    price: 79900,
    image: "/images/airpods-case.jpg",
    tagline: "Audio espacial personalizado con seguimiento de cabeza",
    description:
      "Diseño contorneado ergonómico unisex, ecualización adaptativa, resistencia al agua y hasta 30 horas de reproducción total.",
    badge: "Nuevo",
    specs: [
      { label: "Audio", value: "Espacial 3D Personalizado" },
      { label: "Ecualización", value: "Adaptativa en tiempo real" },
      { label: "Autonomía", value: "6h + 24h con estuche" },
      { label: "Controles", value: "Sensor de presión táctil" },
      { label: "Resistencia", value: "IPX4 al agua y sudor" },
    ],
  },
  {
    id: "airpods-pro-sealed",
    name: "AirPods Pro ANC Edición Premium",
    category: "AirPods",
    price: 79900,
    image: "/images/airpods-box.jpg",
    tagline: "Empaque sellado con holograma oficial ANC",
    description:
      "Garantía oficial, almohadillas de silicona en 4 tamaños, cancelación de ruido profunda y sonido Hi-Fi de máxima fidelidad.",
    badge: "Premium Box",
    specs: [
      { label: "Estado", value: "Caja Sellada Original" },
      { label: "Audio", value: "Hi-Res Lossless Audio" },
      { label: "Cancelación", value: "ANC Adaptativo Profundo" },
      { label: "Accesorios", value: "Cable USB-C + 4 Pares almohadillas" },
    ],
  },
  {
    id: "smartwatch-ultra-titanium",
    name: "MOBULA H9 PLUS DE 49MM",
    category: "Smartwatches",
    price: 99900,
    image: "/images/H9.jpeg",
    tagline: "Caja de titanio aeroespacial y GPS de doble frecuencia",
    description:
      "Diseño deportivo unisex ultrarresistente con pantalla retina de 2000 nits, medición de ECG, oxigenación en sangre y sumergible a 100m.",
    badge: "Top Ventas",
    specs: [
      { label: "Pantalla", value: "49mm Sapphire Retina 2000 nits" },
      { label: "Caja", value: "Titanio Aeroespacial Unisex" },
      { label: "Sensores", value: "ECG, SpO2, Frecuencia Cardíaca" },
      { label: "Batería", value: "Hasta 60 horas de uso" },
      { label: "Resistencia", value: "100m Sumergible / IP68" },
    ],
  },
  {
    id: "corn-watch-m7",
    name: "CORN WATCH M7",
    category: "Smartwatches",
    price: 139900,
    image: "/images/cornwatch.jpg",
    tagline: "Pantalla AMOLED 1.3” Full Color · IP68 · Carga inalámbrica",
    description:
      "Smartwatch con pantalla AMOLED 1.3 pulgadas full color, resistente al agua IP68, recibe llamadas y notificaciones, y carga inalámbrica rápida para un uso diario moderno y funcional.",
    badge: "Nuevo",
    specs: [
      { label: "Pantalla", value: "AMOLED 1.3” Full Color" },
      { label: "Resistencia", value: "IP68 al agua" },
      { label: "Notificaciones", value: "Llamadas y alertas inteligentes" },
      { label: "Carga", value: "Inalámbrica rápida" },
      { label: "Estilo", value: "Diseño premium moderno" },
    ],
  },
];

export const categories = Array.from(
  new Set(products.map((p) => p.category))
);
