export type Spec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tagline: string;
  description: string;
  specs: Spec[];
  badge?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type PaymentMethod = "Nequi" | "Bre-B" | "Contraentrega";

export type CheckoutData = {
  nombreCompleto: string;
  ciudad: string;
  direccion: string;
  barrio: string;
  observaciones: string;
  celular: string;
  correo: string;
  metodoPago: PaymentMethod;
};
