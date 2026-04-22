import { createFileRoute } from "@tanstack/react-router";
import { Check, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";
import { useCart, type CartItem } from "@/lib/cart";
import { WHATSAPP_NUMBER } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/tienda")({
  component: TiendaPage,
  head: () => ({
    meta: [
      { title: "Tienda — Momentum Family" },
      {
        name: "description",
        content:
          "Reserva eventos y cursos de Momentum Family: conferencias, summer camp, mentoría y cursos online para familias hispanohablantes en Canadá.",
      },
      { property: "og:title", content: "Tienda — Momentum Family" },
      {
        property: "og:description",
        content: "Compra eventos, cursos y mentorías en un solo lugar.",
      },
    ],
  }),
});

function TiendaPage() {
  const { t } = useI18n();
  const cart = useCart();

  const events: CartItem[] = t.events.items.map((e, i) => ({
    id: `event-${i}`,
    title: e.title,
    price: e.price,
    category: t.shop.categoryEvent,
  }));

  const courses: CartItem[] = t.shop.courses.map((c, i) => ({
    id: `course-${i}`,
    title: c.title,
    price: c.price,
    category: t.shop.categoryCourse,
  }));

  const allItems = [
    ...events.map((e, i) => ({ ...e, desc: t.events.items[i].desc })),
    ...courses.map((c, i) => ({ ...c, desc: t.shop.courses[i].desc })),
  ];

  const checkoutHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Momentum Family 👋, quiero reservar:\n${cart.items
      .map((i) => `• ${i.title} (${i.price})`)
      .join("\n")}\nTotal: ${cart.totalLabel}`
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
          {t.shop.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          {t.shop.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.shop.lead}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {allItems.map((item) => {
              const inCart = cart.has(item.id);
              return (
                <article
                  key={item.id}
                  className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
                >
                  <span className="inline-flex w-fit rounded-full bg-accent/50 px-3 py-1 text-xs font-medium text-foreground">
                    {item.category}
                  </span>
                  <h2 className="mt-3 font-serif text-lg leading-snug">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="font-serif text-lg font-semibold">{item.price}</span>
                    <button
                      type="button"
                      onClick={() =>
                        inCart ? cart.remove(item.id) : cart.add({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          category: item.category,
                        })
                      }
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                        inCart
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check size={14} /> {t.shop.added}
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> {t.shop.addToCart}
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border bg-secondary/40 p-7">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <h3 className="font-serif text-lg">
                  {t.shop.cart} {cart.count > 0 && <span className="text-muted-foreground">({cart.count})</span>}
                </h3>
              </div>

              {cart.items.length === 0 ? (
                <p className="mt-4 text-sm text-muted-foreground">{t.shop.empty}</p>
              ) : (
                <ul className="mt-5 space-y-3">
                  {cart.items.map((it) => (
                    <li
                      key={it.id}
                      className="flex items-start justify-between gap-3 rounded-xl bg-background/70 p-3 text-sm"
                    >
                      <div>
                        <p className="font-medium leading-snug">{it.title}</p>
                        <p className="text-xs text-muted-foreground">{it.category} · {it.price}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={t.shop.remove}
                        onClick={() => cart.remove(it.id)}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-sm">
                <span className="text-muted-foreground">{t.shop.total}</span>
                <span className="font-serif text-lg font-semibold">{cart.totalLabel}</span>
              </div>

              <a
                href={cart.items.length > 0 ? checkoutHref : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={cart.items.length === 0}
                className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  cart.items.length === 0
                    ? "cursor-not-allowed bg-muted text-muted-foreground"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {t.shop.checkout}
              </a>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.shop.notice}</p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
