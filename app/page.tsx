import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Dumbbell, HeartPulse, Sparkles, Star } from "lucide-react";

import { FAQAccordion } from "@/components/faq-accordion";
import { Header } from "@/components/header";
import { MediaMosaic } from "@/components/media-mosaic";
import { PricingCard } from "@/components/pricing-card";
import { Reveal } from "@/components/reveal";
import { ShineButton } from "@/components/shine-button";
import { TestimonialCard } from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/lib/siteData";

const heroImage = siteData.hero.heroImage || siteData.hero.placeholderImage;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 opacity-80">
        <div className="glow h-full w-full" />
      </div>

      <Header />

      <main className="space-y-24 pb-24">
        <section id="hero" className="relative overflow-hidden pt-8">
          <div className="container max-w-6xl grid min-h-[80vh] gap-10 rounded-[32px] border border-[hsl(var(--primary))]/20 bg-gradient-to-br from-black via-[#0b0b0b] to-[#141006] px-6 py-10 shadow-[0_30px_90px_-60px_rgba(247,200,0,0.6)] md:min-h-[70vh] md:grid-cols-[1.1fr,0.9fr] md:px-12">
            <Reveal className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[hsl(var(--primary))]/15 px-4 py-2 text-lg font-display text-[hsl(var(--primary))]">
                  {siteData.hero.kicker}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-[hsl(var(--primary))]" />
                  {siteData.hero.highlights[0]}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {siteData.hero.manifesto}
                </p>
                <h1 className="font-display text-4xl uppercase leading-[1.1] text-[hsl(var(--primary))] sm:text-5xl">
                  {siteData.hero.title}
                </h1>
                <p className="text-2xl font-semibold leading-tight sm:text-3xl">
                  {siteData.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {siteData.hero.chips.map((chip) => (
                  <Badge
                    key={chip}
                    className="rounded-full border border-[hsl(var(--primary))]/40 bg-transparent px-3 py-2 text-[hsl(var(--primary))]"
                    variant="outline"
                  >
                    {chip}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <ShineButton asChild size="lg">
                  <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer" className="justify-center">
                    {siteData.hero.primaryCta}
                  </Link>
                </ShineButton>
                <ShineButton asChild size="lg" variant="outline">
                  <Link href="#planes" className="justify-center">
                    {siteData.hero.secondaryCta}
                  </Link>
                </ShineButton>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary))]/30 px-3 py-2">
                  <Sparkles className="h-4 w-4 text-[hsl(var(--primary))]" />
                  {siteData.hero.highlights[1]}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary))]/30 px-3 py-2">
                  <Dumbbell className="h-4 w-4 text-[hsl(var(--primary))]" />
                  {siteData.hero.highlights[2]}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="relative">
              <div className="relative h-[360px] overflow-hidden rounded-3xl border border-[hsl(var(--primary))]/30 bg-muted/50 shadow-[0_30px_70px_-50px_rgba(247,200,0,0.6)] sm:h-[420px] md:h-[520px]">
                <Image
                  src={heroImage}
                  alt="Cristian Wosniak"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-2xl border border-[hsl(var(--primary))]/40 bg-black/60 px-4 py-3 text-sm text-foreground backdrop-blur">
                  <p className="font-semibold">Cristian Wosniak</p>
                  <p className="text-muted-foreground">Coach y fundador CW Life</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="sobre" className="container max-w-6xl px-6">
          <Reveal className="grid gap-6 rounded-[28px] border border-[hsl(var(--primary))]/20 bg-card/60 px-8 py-10 shadow-[0_20px_60px_-50px_rgba(247,200,0,0.6)] md:grid-cols-[1.1fr,0.9fr] md:gap-10">
            <div className="space-y-3">
              <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
                {siteData.sections.about.badge}
              </Badge>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {siteData.sections.about.title}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">{siteData.sections.about.description}</p>
          </Reveal>
        </section>

        <section id="programas" className="container max-w-6xl space-y-8 px-6">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
                {siteData.sections.process.badge}
              </Badge>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {siteData.sections.process.title}
              </h2>
              <p className="text-lg text-muted-foreground">{siteData.sections.process.description}</p>
            </div>
            <ShineButton asChild>
              <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer">
                {siteData.sections.process.cta}
              </Link>
            </ShineButton>
          </Reveal>

          <Reveal delay={0.05} className="grid gap-4 md:grid-cols-3">
            {siteData.steps.map((step, idx) => (
              <Card
                key={step.title}
                className="border border-[hsl(var(--primary))]/25 bg-card/60 shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:border-[hsl(var(--primary))]/50"
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
                      0{idx + 1}
                    </span>
                    Paso
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Reveal>

          <Reveal delay={0.07} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
                {siteData.sections.programs.badge}
              </Badge>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                {siteData.sections.programs.title}
              </h3>
              <p className="text-base text-muted-foreground">{siteData.sections.programs.description}</p>
            </div>
            <ShineButton asChild variant="outline">
              <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer">
                {siteData.hero.primaryCta}
              </Link>
            </ShineButton>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-4 md:grid-cols-3">
            {siteData.programs.map((program) => (
              <Card
                key={program.name}
                className="border border-[hsl(var(--primary))]/25 bg-card/60 shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:border-[hsl(var(--primary))]/50"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{program.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-3 text-sm text-muted-foreground">
                  <HeartPulse className="h-4 w-4 text-[hsl(var(--primary))]" />
                  <span>{siteData.sections.programs.description}</span>
                </CardContent>
              </Card>
            ))}
          </Reveal>
        </section>

        <section id="transformaciones" className="container max-w-6xl space-y-8 px-6">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
                {siteData.sections.transformations.badge}
              </Badge>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {siteData.sections.transformations.title}
              </h2>
              <p className="text-lg text-muted-foreground">{siteData.sections.transformations.description}</p>
            </div>
            <ShineButton asChild variant="outline">
              <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer">
                {siteData.sections.transformations.cta}
              </Link>
            </ShineButton>
          </Reveal>
          <Reveal delay={0.05} className="grid gap-4 md:grid-cols-3">
            {siteData.testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </Reveal>
        </section>

        <section id="planes" className="container max-w-6xl space-y-8 px-6">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
                {siteData.sections.plans.badge}
              </Badge>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {siteData.sections.plans.title}
              </h2>
              <p className="text-lg text-muted-foreground">{siteData.sections.plans.description}</p>
            </div>
            <Link
              href={siteData.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[hsl(var(--primary))]"
            >
              {siteData.sections.plans.cta} <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="grid gap-4 md:grid-cols-3">
            {siteData.plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </Reveal>
        </section>

        <section id="galeria" className="container max-w-6xl space-y-8 px-6">
          <Reveal className="space-y-3">
            <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
              {siteData.sections.gallery.badge}
            </Badge>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {siteData.sections.gallery.title}
            </h2>
            <p className="text-lg text-muted-foreground">{siteData.sections.gallery.description}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <MediaMosaic />
          </Reveal>
        </section>

        <section id="faq" className="container max-w-5xl space-y-6 px-6">
          <Reveal className="space-y-3">
            <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
              {siteData.sections.faq.badge}
            </Badge>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {siteData.sections.faq.title}
            </h2>
            <p className="text-lg text-muted-foreground">{siteData.sections.faq.description}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <FAQAccordion />
          </Reveal>
        </section>

        <section id="contacto" className="container max-w-6xl px-6">
          <Reveal className="overflow-hidden rounded-[28px] border border-[hsl(var(--primary))]/20 bg-gradient-to-br from-[hsl(var(--primary))]/10 via-card to-black px-8 py-10 shadow-[0_20px_70px_-50px_rgba(247,200,0,0.7)] md:px-12">
            <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {siteData.sections.contact.badge}
                </p>
                <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  {siteData.sections.contact.title}
                </h3>
                <p className="text-lg text-muted-foreground">{siteData.sections.contact.description}</p>
                <div className="flex flex-wrap gap-3">
                  <ShineButton asChild size="lg">
                    <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer">
                      {siteData.sections.contact.ctaPrimary}
                    </Link>
                  </ShineButton>
                  <ShineButton asChild variant="outline" size="lg">
                    <Link href={`mailto:${siteData.contact.email}`}>{siteData.sections.contact.ctaSecondary}</Link>
                  </ShineButton>
                </div>
                <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p>{siteData.contact.phone}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p>{siteData.contact.email}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p>{siteData.contact.address}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Demo</p>
                    <p>Demo: cw-umber.vercel.app</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-[hsl(var(--primary))]/25 bg-black/60 p-6 shadow-inner">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Entrega</p>
                    <p className="text-base text-foreground">{siteData.sections.contact.bullets[0]}</p>
                  </div>
                </div>
                <Separator className="my-4 border-[hsl(var(--primary))]/20" />
                <div className="space-y-3 text-sm text-muted-foreground">
                  {siteData.sections.contact.bullets.slice(1).map((bullet) => (
                    <p key={bullet}>· {bullet}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="container max-w-6xl px-6">
          <div className="flex flex-col gap-3 border-t border-[hsl(var(--primary))]/15 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {siteData.brand.name} · {siteData.brand.tagline}
            </span>
            <span>
              Demo: {siteData.contact.demo} · {siteData.contact.email}
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
