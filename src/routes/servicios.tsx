import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Users, MessageCircle, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

const services = [
  {
    icon: MessageCircle,
    title: "Mentoría individual",
    desc: "Sesiones 1 a 1 en español para acompañarte en momentos clave de tu maternidad o paternidad.",
    tint: "bg-brand-pink/40",
  },
  {
    icon: Users,
    title: "Círculos de familias",
    desc: "Encuentros mensuales para compartir, escuchar y construir comunidad.",
    tint: "bg-brand-turquoise/40",
  },
  {
    icon: BookOpen,
    title: "Talleres temáticos",
    desc: "Crianza respetuosa, bilingüismo, transiciones y vida en Canadá.",
    tint: "bg-brand-peach/50",
  },
  {
    icon: Heart,
    title: "Acompañamiento emocional",
    desc: "Espacios seguros para procesar la migración, la maternidad y la identidad.",
    tint: "bg-brand-blue/30",
  },
];

function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
          Servicios
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          Acompañamiento diseñado para familias como la tuya.
        </h1>
        <p className="mt-5 max-w-2xl text-foreground/75">
          Cada propuesta nace de la escucha y de la experiencia compartida. Elige
          el formato que mejor se adapte a tu momento.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, tint }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-[var(--shadow-soft)]"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tint}`}>
                <Icon size={22} className="text-foreground" />
              </div>
              <h2 className="mt-5 font-serif text-2xl">{title}</h2>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:opacity-90"
          >
            Hablemos de tu familia <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
