import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
            Nuestra historia
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Un proyecto nacido del corazón de una familia migrante.
          </h1>
          <p className="mt-5 text-foreground/75">
            Momentum Family surge para crear el espacio que nos hubiera gustado
            encontrar al llegar a Canadá: un lugar en español, cercano y honesto,
            donde las familias puedan sentirse acompañadas en cada paso.
          </p>
          <p className="mt-4 text-foreground/75">
            Creemos en la crianza consciente, en la fuerza de la comunidad y en
            el valor de compartir el camino con quienes te entienden sin
            necesidad de traducir.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square rounded-[2rem] bg-secondary/40 p-10 ring-1 ring-border">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Cercanía", text: "Hablamos tu idioma y conocemos tu contexto." },
            { title: "Profesionalismo", text: "Acompañamiento con base, ética y constancia." },
            { title: "Comunidad", text: "Tejemos red entre familias que se sostienen." },
          ].map((v) => (
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
