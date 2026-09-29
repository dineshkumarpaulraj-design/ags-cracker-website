import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { products, type Product } from './catalogue';

type CartItem = { slug: string; quantity: number };
type CartContextType = { items: CartItem[]; count: number; add: (slug: string, quantity?: number) => void; update: (slug: string, quantity: number) => void; remove: (slug: string) => void; clear: () => void; getProduct: (slug: string) => Product | undefined };
const CartContext = createContext<CartContextType | null>(null);
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem('ags-cart') || '[]'); if (Array.isArray(saved)) setItems(saved.filter((item) => typeof item.slug === 'string' && Number.isInteger(item.quantity) && item.quantity > 0 && products.some(p => p.slug === item.slug))); } catch { /* Ignore invalid saved cart. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem('ags-cart', JSON.stringify(items)); }, [items, ready]);
  const add = (slug: string, quantity = 1) => { if (!products.some(p => p.slug === slug)) return; setItems(current => current.some(item => item.slug === slug) ? current.map(item => item.slug === slug ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { slug, quantity }]); };
  const update = (slug: string, quantity: number) => setItems(current => current.map(item => item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item));
  const remove = (slug: string) => setItems(current => current.filter(item => item.slug !== slug));
  const clear = () => setItems([]);
  return <CartContext.Provider value={{ items, count: items.reduce((sum, item) => sum + item.quantity, 0), add, update, remove, clear, getProduct: slug => products.find(p => p.slug === slug) }}>{children}</CartContext.Provider>;
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('CartProvider missing'); return context; }
