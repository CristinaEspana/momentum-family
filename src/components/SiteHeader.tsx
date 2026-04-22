import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/momentum-logo.png";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/servicios", label: t.nav.services },
    { to: "/eventos", label: t.nav.events },
    { to: "/tienda", label: t.nav.shop },
    { to: "/nosotros", label: t.nav.about },
    { to: "/login", label: t.nav.login },
    { to: "/contacto", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:h-24">
        <Link to="/" className="flex items-center gap-3" aria-label="Momentum Family — Home">
          <img src={logo} alt="" className="h-14 w-14 object-contain md:h-16 md:w-16" />
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            Momentum <span className="text-brand-blue">Family</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Link
            to="/contacto"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label={t.nav.openMenu}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-foreground/80 hover:bg-muted"
                activeProps={{ className: "bg-muted text-foreground font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
