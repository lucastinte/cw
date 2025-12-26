import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle, Timer } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatsappLink =
  "https://wa.me/5491155555555?text=Quiero%20empezar%20el%20programa%20online%20con%20Cristian%20Wosniak";

export const metadata: Metadata = {
  title: "Programa online | Cristian Wosniak Fitness",
  description:
    "Transforma tu cuerpo desde cualquier lugar con programación detallada, feedback semanal y ajustes constantes. CTA directo a WhatsApp.",
  openGraph: {
    title: "Programa online CW Life",
    description:
      "Entrenamiento y nutrición personalizados con soporte en WhatsApp, videos y métricas semanales.",
    url: "/programa-online",
    images: ["/og-default.svg"],
  },
};

const pillars = [
  { title: "Entrenamiento", desc: "Programación con tempos, repeticiones objetivo y progresiones semanales." },
  { title: "Nutrición", desc: "Plan alineado a tus macros y estilo de vida, con ajustes según tus métricas." },
  { title: "Mentalidad", desc: "Hábitos, sueño y gestión de estrés para sostener el rendimiento en el tiempo." },
];

const flow = [
  {
    title: "Onboarding y diagnóstico",
    detail: "Test de movimiento, fotos de referencia opcionales y revisión de tu agenda para asignar frecuencia realista.",
  },
  {
    title: "Entrega del plan",
    detail: "Recibirás tu plan en app con videos, tempos y notas técnicas. Incluye calentamientos específicos.",
  },
  {
    title: "Check-ins semanales",
    detail: "Envío de métricas, videos y feedback de sensaciones para ajustar carga, volumen y nutrición.",
  },
  {
    title: "Seguimiento diario",
    detail: "Comunicación por WhatsApp para dudas y microajustes. Reportes mensuales con progreso.",
  },
];

export default function ProgramaOnlinePage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <section className="container max-w-6xl space-y-6 px-6">
        <FadeIn className="space-y-4">
          <Badge variant="outline" className="border-primary text-primary">
            Programa online
          </Badge>
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            <div className="space-y-3">
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                Transformación online con feedback real y medible.
              </h1>
              <p className="text-lg text-muted-foreground">
                Entrena donde estés con planes precisos, revisión en video y ajustes semanales. Sin plantillas, sin apps impersonales.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Solicitar onboarding
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/planes" className="gap-2">
                    Ver precios
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="border-border/70 bg-card/80">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Desde cualquier lugar</CardTitle>
                <CardDescription className="text-base">
                  Equipo completo, gym boutique o casa: adaptamos el plan a tu realidad y lo volvemos medible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">
                  <Timer className="h-4 w-4" aria-hidden />
                  Respuesta en menos de 24 horas
                </div>
                <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-sm font-semibold text-foreground">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Feedback semanal en video
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-6 px-6">
        <FadeIn className="space-y-3">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Los tres pilares.</h2>
          <p className="text-lg text-muted-foreground">
            Entrenamiento, nutrición y mentalidad trabajan juntos. Te enseño a ejecutar cada fase y a leer tus métricas.
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-border/60 bg-card/70">
                <CardHeader>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  <CardDescription className="text-base">{pillar.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-8 px-6">
        <FadeIn className="space-y-3">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Cómo funciona el programa online.
          </h2>
          <p className="text-lg text-muted-foreground">
            Proceso claro con entregables concretos para que avances sin dudas.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="grid gap-4 md:grid-cols-2">
            {flow.map((item, index) => (
              <Card key={item.title} className="border-border/60 bg-gradient-to-br from-muted/70 via-card to-accent/30">
                <CardHeader className="space-y-2">
                  <Badge variant="secondary" className="w-fit rounded-full">
                    Paso {index + 1}
                  </Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.detail}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] border border-border/70 bg-secondary text-secondary-foreground shadow-xl">
            <div className="grid gap-8 p-10 md:grid-cols-[1.2fr,1fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  CTA online
                </p>
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                  Envíame tu objetivo y disponibilidad, te respondo en el día.
                </h3>
                <p className="text-lg text-white/75">
                  Cupos limitados para garantizar feedback semanal en video y ajustes reales.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="secondary" size="lg" className="bg-white text-secondary">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Abrir WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="text-white">
                    <Link href="/transformaciones">Ver casos</Link>
                  </Button>
                </div>
              </div>
              <Card className="border-border/40 bg-white/10 text-white shadow-none backdrop-blur">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl">Qué recibes</CardTitle>
                  <CardDescription className="text-white/80">
                    Entregables concretos desde la semana 1.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {[
                    "Plan de entrenamiento con tempos y videos",
                    "Plan de nutrición alineado a tus métricas",
                    "Checklist de hábitos y recuperación",
                    "Feedback semanal en video + ajustes",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
