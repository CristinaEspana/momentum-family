import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/eventos")({
  component: EventosPage,
  head: () => ({
    meta: [
      { title: "Eventos — Momentum Family" },
      {
        name: "description",
        content:
          "Conferencias, talleres y campamentos para familias hispanohablantes en Canadá. Reserva tu cupo en los próximos eventos de Momentum Family.",
      },
      { property: "og:title", content: "Eventos — Momentum Family" },
      {
        property: "og:description",
        content: "Próximos eventos: paternidad efectiva, summer camp y más.",
      },
    ],
  }),
});

function EventosPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
          {t.events.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          {t.events.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.events.lead}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.events.items.map((ev, i) => (
            <article
              key={i}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {ev.tag}
              </span>
              <h2 className="mt-4 font-serif text-2xl leading-snug">{ev.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ev.desc}</p>

              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-blue" /> {ev.date}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-blue" /> {ev.location}
                </li>
                <li className="flex items-center gap-2">
                  <Ticket size={16} className="text-brand-blue" />
                  <span className="font-medium">{t.events.from} {ev.price}</span>
                </li>
              </ul>

              <Link
                to="/tienda"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                {t.events.register}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
