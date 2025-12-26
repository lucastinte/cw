import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, HeartPulse, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatsappLink =
  "https://wa.me/5491155555555?text=Quiero%20sumarme%20al%20programa%20Reconstruirte";

export const metadata: Metadata = {
  title: "Reconstruirte | Cristian Wosniak Fitness",
  description:
    "Programa Reconstruirte con dos niveles (Básico y Premium) para retomar fuerza, movilidad y confianza. CTA directo a WhatsApp.",
  openGraph: {
    title: "Reconstruirte",
    description:
      "Rehabilita, mejora tu técnica y vuelve más fuerte. Soporte cercano con opciones Básico y Premium.",
    url: "/reconstruirte",
    images: ["/og-default.svg"],
  },
};

const levels = [
  {
    name: "Básico",
    tag: "Reinicio sólido",
    description:
      "Si vienes de pausa o lesión leve. Reaprende patrones, suma movilidad y construye adherencia.",
    benefits: [
      "Evaluación de movimiento + plan de movilidad",
      "2-4 sesiones semanales con tempos controlados",
      "Feedback en video 1x semana",
      "Plan de nutrición simple y sostenible",
      "Check-in semanal + ajustes",
    ],
  },
  {
    name: "Premium",
    tag: "Acompañamiento 1:1",
    description:
      "Para quienes buscan supervisión cercana o casos post-lesión más complejos. Incluye sesiones presenciales selectas.",
    benefits: [
      "Onboarding profundo + reunión inicial",
      "Programación personalizada con deloads",
      "Feedback en video ilimitado",
      "Sesiones presenciales opcionales (Buenos Aires)",
      "Soporte diario por WhatsApp + hábitos",
    ],
    highlight: true,
  },
];

export default function ReconstruirtePage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <section className="container max-w-6xl space-y-6 px-6">
        <FadeIn className="space-y-4">
          <Badge variant="outline" className="border-primary text-primary">
            Reconstruirte
          </Badge>
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            <div className="space-y-3">
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                Reconstruye confianza, técnica y fuerza sin volver atrás.
              </h1>
              <p className="text-lg text-muted-foreground">
                Programa especializado con dos niveles. Pensado para volver a entrenar con seguridad y progresar con métricas claras.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Aplicar al programa
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/contacto" className="gap-2">
                    Agenda una llamada
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="border-border/70 bg-gradient-to-br from-accent/40 via-card to-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl">¿Para quién es?</CardTitle>
                <CardDescription className="text-base">
                  Si te lesionaste, dejaste de entrenar o quieres volver a moverte con seguridad y resultados estéticos, aquí empezamos.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-2xl bg-white/80 p-3 text-sm font-semibold shadow-sm dark:bg-background">
                  <HeartPulse className="h-4 w-4 text-primary" aria-hidden />
                  Movilidad + control
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground shadow-sm">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  Prevención de lesiones
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-6 px-6">
        <FadeIn className="space-y-3">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Elige tu nivel.</h2>
          <p className="text-lg text-muted-foreground">
            Ambos niveles incluyen nutrición, hábitos y seguimiento. Cambiamos de nivel cuando tus métricas lo indiquen.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="grid gap-4 md:grid-cols-2">
            {levels.map((level) => (
              <Card
                key={level.name}
                className={level.highlight ? "border-primary/40 shadow-lg shadow-primary/10" : ""}
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{level.name}</CardTitle>
                    <Badge variant="secondary" className="rounded-full">
                      {level.tag}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{level.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {level.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <p className="text-sm text-foreground">{benefit}</p>
                    </div>
                  ))}
                  <Button asChild className="mt-4 w-full">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Elegir {level.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] border border-border/70 bg-secondary text-secondary-foreground shadow-xl">
            <div className="grid gap-8 p-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  CTA reconstruiRTe
                </p>
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                  Déjame un mensaje. Agendamos evaluación y empezamos.
                </h3>
                <p className="text-lg text-white/75">
                  Cupos limitados para seguimiento cercano y sesiones presenciales opcionales.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="secondary" size="lg" className="bg-white text-secondary">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Hablar por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="text-white">
                    <Link href="/transformaciones">Ver casos</Link>
                  </Button>
                </div>
              </div>
              <Card className="border-border/50 bg-white/10 text-white shadow-none backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl">Qué medimos</CardTitle>
                  <CardDescription className="text-white/75">
                    Sesiones seguras y progresión real.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>· Rango de movimiento y control en patrones clave</p>
                  <p>· Percepción de esfuerzo y recuperación</p>
                  <p>· Variabilidad de la carga y deload planificado</p>
                  <p>· Cumplimiento nutricional y sueño</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
