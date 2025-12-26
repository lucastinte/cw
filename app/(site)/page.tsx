import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3, Dumbbell, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const whatsappLink =
  "https://wa.me/5491155555555?text=Quiero%20empezar%20con%20Cristian%20Wosniak%20Fitness";

export const metadata: Metadata = {
  title: "Entrenamiento personalizado online o presencial",
  description:
    "Programas premium online o presenciales con seguimiento 1:1, nutrición y mentalidad. Reserva tu cupo y agenda por WhatsApp.",
  openGraph: {
    title: "Entrenamiento personalizado online o presencial | Cristian Wosniak",
    description:
      "Coaching integral, planes medibles y acompañamiento cercano para transformar tu cuerpo y tus hábitos.",
    url: "/",
    images: ["/og-default.svg"],
  },
};

const valueProps = [
  {
    title: "Programas hechos a medida",
    desc: "Entrenamiento adaptado a tu nivel, agenda y equipamiento. Sin plantillas genéricas.",
  },
  {
    title: "Seguimiento diario",
    desc: "Correcciones técnicas, check-ins semanales y comunicación directa por WhatsApp.",
  },
  {
    title: "Nutrición y mentalidad",
    desc: "Plan de alimentación, hábitos y mindset para que no regreses al punto de partida.",
  },
];

const milestones = [
  { label: "150+ transformaciones guiadas", icon: <Sparkles className="h-4 w-4" /> },
  { label: "Online y presencial en Buenos Aires", icon: <Dumbbell className="h-4 w-4" /> },
  { label: "Sesiones 1:1 y planes trimestrales", icon: <Clock3 className="h-4 w-4" /> },
];

const planPreview = [
  {
    name: "1 mes",
    price: "$140.000",
    focus: "Arranque táctico con ajustes semanales y técnica depurada.",
  },
  {
    name: "2 meses",
    price: "$260.000",
    focus: "Construcción de hábitos y progresión visible en fuerza y composición.",
  },
  {
    name: "3 meses",
    price: "$360.000",
    focus: "Transformación completa, nutrición + mindset y soporte prioritario.",
  },
];

const stories = [
  {
    name: "Juli, 31",
    goal: "Recomposición corporal",
    note: "−8 kg de grasa y +3 kg de masa magra en 12 semanas.",
  },
  {
    name: "Agus, 27",
    goal: "Rendimiento y confianza",
    note: "Mejoró su sentadilla en +35% y consolidó hábitos de descanso.",
  },
  {
    name: "Luis, 44",
    goal: "Rehabilitación + fuerza",
    note: "Volvió a entrenar sin dolor y bajó su % de grasa en 10 puntos.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24 pt-12">
      <section className="container relative max-w-6xl overflow-hidden rounded-[32px] bg-card px-6 py-12 shadow-lg shadow-primary/5 md:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr]">
          <FadeIn className="space-y-8">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              Entrenamiento personalizado online o presencial
            </Badge>
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Entrena con precisión.
              <br />
              Transforma tu cuerpo y tu mentalidad con acompañamiento real.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Planes premium listos para convertir en WhatsApp. Seguimiento 1:1, nutrición y corrección técnica desde cualquier lugar o en sesiones presenciales seleccionadas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="gap-2">
                  Comenzar por WhatsApp
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/planes" className="gap-2">
                  Ver planes disponibles
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {milestones.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-foreground/80"
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full border-border/70 bg-white/80 shadow-xl shadow-primary/10 backdrop-blur">
              <CardHeader className="space-y-1">
                <Badge variant="secondary" className="w-fit rounded-full">
                  Proceso CW Life
                </Badge>
                <CardTitle className="text-2xl">
                  Diagnóstico, plan y seguimiento medible.
                </CardTitle>
                <CardDescription className="text-base">
                  Cada semana ajustamos carga, descanso, nutrición y mindset según tus métricas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {valueProps.map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-2xl border border-border/70 bg-muted/70 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                    <div>
                      <p className="text-base font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl bg-gradient-to-r from-primary/15 via-primary/5 to-secondary/10 p-[1px]">
                  <div className="rounded-[18px] bg-white px-5 py-4 shadow-inner dark:bg-background">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Resultado esperado
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Sesiones pensadas para que avances sin lesiones, midiendo tu progreso cada semana.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="container max-w-6xl space-y-10 px-6">
        <FadeIn className="space-y-3">
          <Badge variant="outline" className="border-secondary text-secondary-foreground">
            Programas CW Life
          </Badge>
          <div className="grid gap-4 lg:grid-cols-[1.1fr,1fr] lg:items-end">
            <div className="space-y-3">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Programa online que funciona desde cualquier lugar.
              </h2>
              <p className="max-w-3xl text-lg text-muted-foreground">
                Planes estructurados, feedback en video, progresiones semanales y educación para que seas dueño de tu rendimiento.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/programa-online"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-foreground"
              >
                Ver detalles del programa
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={whatsappLink}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
                target="_blank"
                rel="noreferrer"
              >
                Agenda 1:1
              </Link>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="grid gap-4 md:grid-cols-3">
            {valueProps.map((item) => (
              <Card key={item.title} className="border-border/60 bg-card/70">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-10 px-6">
        <FadeIn className="space-y-4">
          <Badge variant="outline" className="border-accent text-foreground">
            Reconstruirte
          </Badge>
          <div className="grid gap-6 lg:grid-cols-[1.1fr,1fr]">
            <div className="space-y-4">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Reconstruirte: el programa para volver más fuerte.
              </h2>
              <p className="max-w-3xl text-lg text-muted-foreground">
                Dos niveles para retomar confianza, movilidad y fuerza. Ideal si venís de una lesión,
                querés recuperar hábitos o buscas un acompañamiento más cercano.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="rounded-full bg-primary/15 text-primary" variant="secondary">
                  Básico
                </Badge>
                <Badge className="rounded-full bg-secondary text-secondary-foreground" variant="secondary">
                  Premium
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  Soporte directo por WhatsApp
                </Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/reconstruirte" className="gap-2">
                    Ver programa completo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Solicitar evaluación
                  </a>
                </Button>
              </div>
            </div>
            <Card className="border-border/60 bg-gradient-to-br from-accent/40 via-card to-secondary/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Niveles</CardTitle>
                <CardDescription className="text-base">
                  Elige el nivel según tu punto de partida. Ajustamos carga, movilidad y hábitos en cada fase.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Básico",
                    detail: "Reaprende la técnica, recupera movilidad y genera consistencia sin lesiones.",
                  },
                  {
                    name: "Premium",
                    detail: "Coaching 1:1, sesiones presenciales selectas y revisión diaria de videos.",
                  },
                ].map((item) => (
                  <div key={item.name} className="rounded-2xl border border-border/70 bg-white/80 p-4 shadow-sm dark:bg-background">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {item.name}
                    </p>
                    <p className="mt-2 text-base text-foreground">{item.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-8 px-6">
        <FadeIn className="space-y-3">
          <Badge variant="outline" className="border-border text-foreground">
            Planes rápidos
          </Badge>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">Elige tu horizonte.</h2>
              <p className="text-lg text-muted-foreground">
                Planes de 1, 2 o 3 meses con beneficios claros y CTA directo a WhatsApp.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/planes">Comparar planes</Link>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="grid gap-4 md:grid-cols-3">
            {planPreview.map((plan) => (
              <Card key={plan.name} className="border-border/60 bg-card/80">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-3xl font-semibold">{plan.price}</p>
                  <CardDescription className="text-base">{plan.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Hablar por WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl space-y-10 px-6">
        <FadeIn className="space-y-3">
          <Badge variant="outline" className="border-muted text-foreground">
            Transformaciones
          </Badge>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Resultados que hablan solos.
              </h2>
              <p className="text-lg text-muted-foreground">
                Historias reales con progreso medido. Haz clic para ver más casos.
              </p>
            </div>
            <Link
              href="/transformaciones"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-8 hover:underline"
            >
              Ver transformaciones
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="grid gap-4 md:grid-cols-3">
            {stories.map((story) => (
              <Card
                key={story.name}
                className="border-border/60 bg-gradient-to-br from-muted via-card to-accent/30"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{story.name}</CardTitle>
                  <CardDescription className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                    {story.goal}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base text-foreground">{story.note}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Sparkles className="h-4 w-4" aria-hidden />
                    Seguimiento semanal y nutrición
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="container max-w-6xl px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] border border-border/60 bg-secondary text-secondary-foreground shadow-xl">
            <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.2fr,1fr] md:items-center md:px-12">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Agenda hoy
                </p>
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                  Un mensaje en WhatsApp y empezamos a diseñar tu plan.
                </h3>
                <p className="max-w-2xl text-lg text-white/80">
                  Respuesta en el día, slots limitados para asegurar acompañamiento real. Envíame tu objetivo y tu disponibilidad.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-secondary">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Abrir WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="text-white">
                    <Link href="/contacto">Formulario corto</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold">
                    CW
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.14em] text-white/70">
                      Cristian Wosniak
                    </p>
                    <p className="text-lg font-semibold text-white">Coach & fundador</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-white/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                    Respuesta directa por voz o texto
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                    Evaluación de técnica + video feedback
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                    Nutrición y hábitos para sostener resultados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
