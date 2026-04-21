import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Users, Sparkles, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/momentum-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Momentum Family — Acompañamiento familiar en Canadá" },
      {
        name: "description",
        content:
          "Apoyo cálido y profesional para familias hispanohablantes en Canadá. Talleres, mentoría y comunidad para crecer juntos.",
      },
    ],
  }),
});

function Index() {
  const { t } = useI18n();
  const pillarIcons = [Heart, Users, MessageCircle];
  const pillarTints = ["bg-brand-pink/40", "bg-brand-turquoise/40", "bg-brand-peach/50"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-brand-pink/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-turquoise/40 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground/70">
              <Sparkles size={14} className="text-brand-blue" />
              {t.home.badge}
            </span>
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
              {t.home.title1} <em className="font-serif italic text-brand-blue">{t.home.titleEm}</em>{t.home.title2}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/75 md:text-lg">
              {t.home.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:opacity-90"
              >
                {t.home.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
              >
                {t.home.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square rounded-[2rem] bg-background/80 p-8 shadow-[var(--shadow-soft)] ring-1 ring-border">
              <img
                src={logo}
                alt="Logo Momentum Family"
                className="h-full w-full object-contain"
              />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl bg-brand-peach/70 blur-md" />
              <div className="absolute -top-5 -left-5 h-16 w-16 rounded-2xl bg-brand-turquoise/60 blur-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
            {t.home.pillarsKicker}
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
            {t.home.pillarsTitle}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.home.pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <article
                key={p.title}
                className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillarTints[i]}`}>
                  <Icon size={22} className="text-foreground" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="rounded-3xl bg-secondary/50 p-10 text-center md:p-14">
          <p className="font-serif text-2xl italic leading-snug text-foreground md:text-3xl">
            {t.home.quote}
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-widest text-foreground/60">
            — Momentum Family
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:px-14 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                {t.home.ctaTitle}
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                {t.home.ctaText}
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:opacity-90"
            >
              {t.home.ctaButton} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
