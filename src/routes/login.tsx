import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, LogIn } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Iniciar sesión — Momentum Family" },
      { name: "description", content: "Accede a tu cuenta de Momentum Family" },
    ],
  }),
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // placeholder: reemplaza con la llamada real a tu API de autenticación
      await new Promise((r) => setTimeout(r, 600));
      console.log("login:", { email, password });
      // redirigir o actualizar estado auth aquí
    } catch (err) {
      setError("No se pudo iniciar sesión. Revisa tus credenciales.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl">Iniciar sesión</h1>

        <div className="mt-8 max-w-md">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="email">
                  Correo
                </label>
                <div className="mt-2 relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="tu@correo.com"
                    required
                  />
                  <Mail className="absolute right-3 top-3 text-muted-foreground" size={16} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground" htmlFor="password">
                  Contraseña
                </label>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="********"
                    required
                  />
                  <Lock className="absolute right-3 top-3 text-muted-foreground" size={16} />
                </div>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Iniciar sesión"} <LogIn size={16} />
              </button>

              <div className="text-sm text-muted-foreground">
                <Link to="/contacto" className="underline">
                  ¿Olvidaste tu contraseña / necesitas ayuda?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
