import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const whatsappLink =
  "https://wa.me/5491155555555?text=Quiero%20ver%20los%20planes%20de%20Cristian%20Wosniak";

export const metadata: Metadata = {
  title: "Planes | Cristian Wosniak Fitness",
  description:
    "Compara los planes de 1, 2 y 3 meses. Incluyen seguimiento, nutrición y ajustes personalizados con CTA directo a WhatsApp.",
  openGraph: {
    title: "Planes CW Life",
    description:
      "Planes premium diseñados para avanzar desde el primer día, con soporte directo y entregables claros.",
    url: "/planes",
    images: ["/og-default.svg"],
  },
};

const plans = [
  {
    name: "1 mes",
    price: "$140.000",
    emphasis: "Ideal para arrancar y fijar la técnica.",
    benefits: [
      "Plan de entrenamiento personalizado",
      "Revisión de técnica en video (1x semana)",
      "Nutrición base y guías de hábitos",
      "Check-in semanal + métricas",
    ],
  },
  {
    name: "2 meses",
    price: "$260.000",
    emphasis: "Consistencia y progreso visible.",
    highlight: true,
    benefits: [
      "Plan de entrenamiento progresivo",
      "Feedback en video (2x semana)",
      "Nutrición ajustada a tus métricas",
      "Check-in semanal + reporte mensual",
      "Acceso prioritario por WhatsApp",
    ],
  },
  {
    name: "3 meses",
    price: "$360.000",
    emphasis: "Transformación completa y mindset.",
    benefits: [
      "Programación trimestral + deload",
      "Feedback en video ilimitado",
      "Plan nutricional + suplementación",
      "Reunión estratégica mensual",
      "Correcciones diarias por WhatsApp",
    ],
  },
];

export default function PlanesPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <section className="container max-w-6xl space-y-6 px-6">
        <FadeIn className="space-y-4">
          <Badge variant="outline" className="border-primary text-primary">
            Planes CW Life
          </Badge>
          <div className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            <div className="space-y-3">
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                Tres horizontes, un mismo estándar premium.
              </h1>
              <p className="text-lg text-muted-foreground">
                Planes con beneficios claros, comparación sencilla y CTA directo a WhatsApp. Elige el nivel de soporte que necesitas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Quiero este mes
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contacto">Hablar con el coach</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl px-6">
        <FadeIn delay={0.05}>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={plan.highlight ? "border-primary/40 shadow-lg shadow-primary/10" : ""}
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    {plan.highlight ? (
                      <Badge variant="secondary" className="rounded-full">
                        Recomendado
                      </Badge>
                    ) : null}
                  </div>
                  <p className="text-3xl font-semibold">{plan.price}</p>
                  <CardDescription className="text-base">{plan.emphasis}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-primary" aria-hidden />
                        <p className="text-sm text-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Elegir {plan.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-8 px-6">
        <FadeIn>
          <div className="rounded-3xl border border-border/70 bg-muted/60 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Diferenciales CW Life
                </p>
                <h2 className="font-display text-3xl leading-tight">
                  Checklist de lo que recibes con cualquier plan.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Soporte humano, corrección técnica y un sistema de hábitos que sostiene tus resultados.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Onboarding con evaluación inicial",
                  "Entrega en app con videos y tempos",
                  "Nutrición y guías de suplementación",
                  "Seguimiento en WhatsApp con feedback",
                  "Ajustes semanales según métricas",
                  "Plan anti-lesiones y movilidad activa",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-background/60">
                    <Check className="mt-1 h-4 w-4 text-primary" aria-hidden />
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-xl">
            <div className="grid gap-8 p-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  CTA inmediata
                </p>
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                  Escríbeme por WhatsApp, cuéntame tu objetivo y te asigno el plan.
                </h3>
                <p className="text-lg text-muted-foreground">
                  Cupos limitados cada mes para mantener el seguimiento cercano.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Ir a WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/transformaciones" className="gap-2">
                      Ver resultados
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/60 p-6">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Respuesta promedio</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">Menos de 4 h</span>
                </div>
                <Separator className="my-4" />
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>· Envío de objetivos y disponibilidad</p>
                  <p>· Evaluación rápida de técnica (si aplica)</p>
                  <p>· Asignación de plan y primer entrega</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
