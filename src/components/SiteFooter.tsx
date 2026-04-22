import { Link } from "@tanstack/react-router";
import logo from "@/assets/momentum-logo.png";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Momentum <span className="text-brand-blue">Family</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold text-foreground">{t.footer.navTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">{t.nav.home}</Link></li>
            <li><Link to="/servicios" className="hover:text-foreground">{t.nav.services}</Link></li>
            <li><Link to="/eventos" className="hover:text-foreground">{t.nav.events}</Link></li>
            <li><Link to="/tienda" className="hover:text-foreground">{t.nav.shop}</Link></li>
            <li><Link to="/nosotros" className="hover:text-foreground">{t.nav.about}</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold text-foreground">{t.footer.contactTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{t.footer.country}</li>
            <li>hola@momentumfamily.ca</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Momentum Family. {t.footer.rights}</p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
