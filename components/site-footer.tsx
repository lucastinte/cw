import Link from "next/link";

import { Separator } from "@/components/ui/separator";

const whatsappLink =
  "https://wa.me/5491155555555?text=Quiero%20agendar%20una%20consulta%20con%20Cristian%20Wosniak";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80 backdrop-blur">
      <div className="container max-w-6xl space-y-8 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Cristian Wosniak Fitness
            </p>
            <h3 className="text-2xl font-semibold leading-tight">
              Entrenamiento premium, resultados medibles y acompañamiento real.
            </h3>
            <p className="max-w-xl text-muted-foreground">
              Online o presencial en Buenos Aires. Planes diseñados para tu
              estilo de vida, con foco en la ejecución técnica, hábitos y
              mentalidad.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={whatsappLink}
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition hover:shadow-lg"
              >
                Escribir ahora
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium text-muted-foreground underline-offset-8 hover:text-foreground hover:underline"
              >
                Contacto completo
              </Link>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Contacto
              </p>
              <p className="text-foreground">+54 9 11 5555 5555</p>
              <p className="text-foreground">hola@cristianwosniakcoach.online</p>
              <p className="text-muted-foreground">
                Av. del Libertador 1234
                <br />
                Buenos Aires, Argentina
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Enlaces
              </p>
              <nav className="flex flex-col gap-2">
                <Link className="hover:text-foreground text-muted-foreground" href="/planes">
                  Planes
                </Link>
                <Link className="hover:text-foreground text-muted-foreground" href="/programa-online">
                  Programa online
                </Link>
                <Link className="hover:text-foreground text-muted-foreground" href="/reconstruirte">
                  Reconstruirte
                </Link>
                <Link className="hover:text-foreground text-muted-foreground" href="/transformaciones">
                  Transformaciones
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cristian Wosniak. Todos los derechos reservados.</p>
          <p className="text-muted-foreground">
            Preparado para lanzar en Vercel · Optimizado para conversión a WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
