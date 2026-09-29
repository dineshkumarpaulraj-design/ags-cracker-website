import { Link } from '@tanstack/react-router';
import { MessageCircle, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart';
import { discount, priceText, type Product, whatsapp } from '@/lib/catalogue';

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart(); const off = discount(product);
  return <article className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <Link to="/products/$slug" params={{ slug: product.slug }} className="relative block aspect-[1.18] overflow-hidden bg-muted"><img src={product.image} alt={`${product.name} fireworks`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />{off !== null && <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-1 text-[10px] font-bold uppercase text-primary-foreground">{off}% OFF</span>}<span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-card text-foreground opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight size={16} /></span></Link>
    <div className="flex flex-1 flex-col p-3 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-primary">{product.category}</p><Link to="/products/$slug" params={{ slug: product.slug }} className="mt-1"><h3 className="min-h-12 font-display text-xl font-bold leading-tight text-navy hover:text-primary sm:text-2xl">{product.name}</h3></Link><div className="mt-3 min-h-12"><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Offer price</p><div className="flex flex-wrap items-baseline gap-2"><span className="text-base font-bold text-primary sm:text-xl">{priceText(product.price)}</span>{product.mrp != null && <span className="text-xs text-muted-foreground line-through">MRP {priceText(product.mrp)}</span>}</div>{product.unit && <span className="text-xs text-muted-foreground">/ {product.unit}</span>}</div><div className="mt-auto grid gap-2 pt-4"><Button variant="navy" size="sm" onClick={() => add(product.slug)}><ShoppingBag /> Add to Cart</Button><Button asChild variant="light" size="sm"><a href={whatsapp(`Hi AGS CRACKER, I am interested in ${product.name}. Please share the details.`)} target="_blank" rel="noopener noreferrer"><MessageCircle /> Enquire</a></Button></div></div>
  </article>;
}
