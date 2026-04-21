import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Users, MessageCircle, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/servicios")({
  component: ServiciosPage,
  head: () => ({
    meta: [
      { title: "Servicios — Momentum Family" },
      {
        name: "description",
        content:
          "Talleres, mentoría individual, círculos de familias y recursos en español para padres y madres en Canadá.",
      },
    ],
  }),
});

const icons = [MessageCircle, Users, BookOpen, Heart];
const tints = [
  "bg-brand-pink/40",
  "bg-brand-turquoise/40",
  "bg-brand-peach/50",
  "bg-brand-blue/30",
];

function ServiciosPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
          {t.services.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          {t.services.title}
        </h1>
        <p className="mt-5 max-w-2xl text-foreground/75">{t.services.lead}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <article
                key={s.title}
                className="rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-[var(--shadow-soft)]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tints[i]}`}
                >
                  <Icon size={22} className="text-foreground" />
                </div>
                <h2 className="mt-5 font-serif text-2xl">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:opacity-90"
          >
            {t.services.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
