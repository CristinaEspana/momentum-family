import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/momentum-logo.png";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosPage,
  head: () => ({
    meta: [
      { title: "Nosotros — Momentum Family" },
      {
        name: "description",
        content:
          "Conoce la historia y la misión de Momentum Family, un refugio cálido para familias hispanohablantes en Canadá.",
      },
    ],
  }),
});

function NosotrosPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
            {t.about.kicker}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            {t.about.title}
          </h1>
          <p className="mt-5 text-foreground/75">{t.about.p1}</p>
          <p className="mt-4 text-foreground/75">{t.about.p2}</p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square rounded-[2rem] bg-secondary/40 p-10 ring-1 ring-border">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {t.about.values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="font-serif text-xl text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
