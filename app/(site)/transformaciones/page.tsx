import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatsappLink =
  "https://wa.me/5491155555555?text=Quiero%20ver%20m%C3%A1s%20transformaciones%20y%20empezar%20mi%20plan";

export const metadata: Metadata = {
  title: "Transformaciones | Cristian Wosniak Fitness",
  description:
    "Casos reales con resultados medibles y seguimiento cercano. Inspírate y agenda por WhatsApp.",
  openGraph: {
    title: "Transformaciones CW Life",
    description:
      "Historias de clientes que lograron recomposición, fuerza y salud con seguimiento 1:1.",
    url: "/transformaciones",
    images: ["/og-default.svg"],
  },
};

const cases = [
  {
    name: "Juli",
    goal: "Recomposición y performance",
    result: "−8 kg de grasa y +3 kg de masa magra. Mejoró su press banca en +25%.",
    timeframe: "12 semanas",
  },
  {
    name: "Agus",
    goal: "Confianza y fuerza",
    result: "Incrementó peso muerto +40% y sostuvo 6% menos de grasa corporal.",
    timeframe: "10 semanas",
  },
  {
    name: "Luis",
    goal: "Vuelta post-lesión",
    result: "Movilidad completa sin dolor y -10 puntos de grasa en control.",
    timeframe: "14 semanas",
  },
  {
    name: "Sofi",
    goal: "Definición",
    result: "Mejoró su composición y consolidó hábitos de sueño y nutrición.",
    timeframe: "8 semanas",
  },
];

export default function TransformacionesPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <section className="container max-w-6xl space-y-6 px-6">
        <FadeIn className="space-y-4">
          <Badge variant="outline" className="border-primary text-primary">
            Transformaciones
          </Badge>
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            <div className="space-y-3">
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                Historias reales con métricas claras.
              </h1>
              <p className="text-lg text-muted-foreground">
                Cambios medibles en fuerza, composición corporal y hábitos. Sin filtros, con seguimiento semanal.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Quiero mi transformación
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/planes" className="gap-2">
                    Ver planes
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="border-border/70 bg-gradient-to-br from-muted via-card to-accent/30">
              <CardHeader>
                <CardTitle className="text-2xl">Qué hace la diferencia</CardTitle>
                <CardDescription className="text-base">
                  Programas diseñados con técnica, nutrición y mindset. Seguimiento humano, no automatizado.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 font-semibold text-primary">
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Feedback semanal en video
                </div>
                <p>· Ajustes de carga y tempo cada semana</p>
                <p>· Nutrición y suplementación alineada a tu objetivo</p>
                <p>· Hábitos y mindset para sostener resultados</p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-8 px-6">
        <FadeIn className="space-y-3">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Casos destacados.
          </h2>
          <p className="text-lg text-muted-foreground">
            Inspiración real para que veas qué es posible con seguimiento 1:1.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map((item) => (
              <Card key={item.name} className="border-border/60 bg-card/80">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-sm uppercase tracking-[0.14em] text-muted-foreground">
                    {item.goal}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base text-foreground">{item.result}</p>
                  <Badge variant="outline" className="rounded-full border-primary/40 text-sm text-primary">
                    {item.timeframe}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] border border-border/70 bg-secondary text-secondary-foreground shadow-xl">
            <div className="grid gap-8 p-10 md:grid-cols-[1.2fr,0.9fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  CTA transformaciones
                </p>
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                  Ahora es tu turno. Escríbeme y planificamos tu cambio.
                </h3>
                <p className="text-lg text-white/75">
                  Envíame tu objetivo y disponibilidad. Respondemos en el día con los siguientes pasos.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="secondary" size="lg" className="bg-white text-secondary">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Hablar ahora
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="text-white">
                    <Link href="/contacto">Formulario</Link>
                  </Button>
                </div>
              </div>
              <Card className="border-border/50 bg-white/10 text-white shadow-none backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl">Qué necesitas</CardTitle>
                  <CardDescription className="text-white/75">
                    Te pido tres datos para arrancar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>· Objetivo principal y fecha límite</p>
                  <p>· Disponibilidad semanal y lugar de entrenamiento</p>
                  <p>· Experiencia previa y lesiones</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
