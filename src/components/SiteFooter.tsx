import { Link } from "@tanstack/react-router";
import logo from "@/assets/momentum-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Momentum <span className="text-brand-blue">Family</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Acompañamos a familias hispanohablantes en Canadá con apoyo cálido,
            cercano y profesional en cada etapa de su camino.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold text-foreground">Navegación</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-foreground">Servicios</Link></li>
            <li><Link to="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-semibold text-foreground">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Canadá</li>
            <li>hola@momentumfamily.ca</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Momentum Family. Todos los derechos reservados.</p>
          <p>Hecho con cuidado para nuestras familias.</p>
        </div>
      </div>
    </footer>
  );
}
