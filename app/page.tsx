import Link from "next/link";
import { ArrowUpRight, HeartPulse, Sparkles } from "lucide-react";

import { About } from "@/components/About";
import { FAQAccordion } from "@/components/faq-accordion";
import { Header } from "@/components/header";
import { Hero } from "@/components/Hero";
import { MediaMosaic } from "@/components/MediaMosaic";
import { PricingCard } from "@/components/pricing-card";
import { Reveal } from "@/components/reveal";
import { ShineButton } from "@/components/shine-button";
import { TestimonialCard } from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/lib/siteData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="space-y-24 pb-24">
        <Hero />
        <About />

        <section id="programas" className="container max-w-6xl space-y-10 px-6">
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
            <ShineButton asChild className="w-auto px-6">
              <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer">
                {siteData.sections.process.cta}
              </Link>
            </ShineButton>
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
            <ShineButton asChild variant="outline" className="w-auto px-6">
              <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer">
                {siteData.hero.primaryCta}
              </Link>
            </ShineButton>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-4 md:grid-cols-3">
            {siteData.programs.map((program) => (
              <Card
                key={program.name}
                className="border border-[hsl(var(--border))]/50 bg-card/70 shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:border-[hsl(var(--primary))]/60"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{program.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-3 text-sm text-muted-foreground">
                  <HeartPulse className="h-4 w-4 text-[hsl(var(--primary))]" />
                  <span>Agenda directa por WhatsApp</span>
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
          <Reveal className="overflow-hidden rounded-[28px] border border-[hsl(var(--border))]/50 bg-gradient-to-br from-[hsl(var(--primary))]/10 via-card to-black px-8 py-10 shadow-[0_20px_70px_-50px_rgba(247,200,0,0.7)] md:px-12">
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
                    <Link href={`mailto:${siteData.contact.email}`}>
                      {siteData.sections.contact.ctaSecondary}
                    </Link>
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
                    <p>Demo: {siteData.contact.demo}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-[hsl(var(--border))]/40 bg-black/60 p-6 shadow-inner">
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
          <div className="flex flex-col gap-3 border-t border-[hsl(var(--border))]/25 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
