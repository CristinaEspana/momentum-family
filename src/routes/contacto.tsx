import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto — Momentum Family" },
      {
        name: "description",
        content:
          "Escríbenos y conversemos sobre cómo podemos acompañar a tu familia en Canadá.",
      },
    ],
  }),
});

function ContactoPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-blue">
          {t.contact.kicker}
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          {t.contact.title}
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="name">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t.contact.namePh}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="email">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t.contact.emailPh}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="msg">
                  {t.contact.message}
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t.contact.messagePh}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                {t.contact.send} <Send size={16} />
              </button>
            </div>
          </form>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-border bg-secondary/40 p-7">
              <Mail className="text-foreground" size={22} />
              <h3 className="mt-3 font-serif text-lg">{t.contact.writeUs}</h3>
              <p className="mt-1 text-sm text-muted-foreground">hola@momentumfamily.ca</p>
            </div>
            <div className="rounded-3xl border border-border bg-accent/40 p-7">
              <MapPin className="text-foreground" size={22} />
              <h3 className="mt-3 font-serif text-lg">{t.contact.whereTitle}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.contact.whereText}</p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
