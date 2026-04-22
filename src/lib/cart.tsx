import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  title: string;
  price: string;
  category: string;
};

type Ctx = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  count: number;
  totalLabel: string;
};

const CartContext = createContext<Ctx | null>(null);

function parsePrice(price: string): number {
  const m = price.replace(/,/g, "").match(/(\d+(\.\d+)?)/);
  return m ? parseFloat(m[1]) : 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("mf_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("mf_cart", JSON.stringify(items));
  }, [items]);

  const value = useMemo<Ctx>(() => {
    const total = items.reduce((acc, it) => acc + parsePrice(it.price), 0);
    return {
      items,
      add: (item) => setItems((prev) => (prev.find((p) => p.id === item.id) ? prev : [...prev, item])),
      remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      clear: () => setItems([]),
      has: (id) => items.some((p) => p.id === id),
      count: items.length,
      totalLabel: `$${total.toFixed(2)} CAD`,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
