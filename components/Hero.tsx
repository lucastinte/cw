import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { ShineButton } from "@/components/shine-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteData } from "@/lib/siteData";

const getHeroImage = () => {
  const localPath = path.join(process.cwd(), "public", siteData.hero.image.replace(/^\//, ""));
  const exists = fs.existsSync(localPath);
  return exists ? siteData.hero.image : siteData.hero.fallback;
};

export function Hero() {
  const heroImg = getHeroImage();

  return (
    <section id="hero" className="relative overflow-hidden pt-10">
      <div className="container max-w-6xl grid gap-10 rounded-[32px] bg-gradient-to-br from-black/70 via-[#0f0f0f] to-[#16130c] px-6 py-12 shadow-[0_28px_90px_-60px_rgba(247,200,0,0.45)] md:grid-cols-[1.05fr,0.95fr] md:px-12">
        <Reveal className="space-y-6">
          <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]">
            CW Life
          </Badge>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {siteData.hero.manifesto}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl">
              {siteData.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">{siteData.hero.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {siteData.hero.chips.map((chip) => (
              <Badge
                key={chip}
                className="rounded-full border border-[hsl(var(--border))]/70 bg-transparent px-3 py-2 text-[hsl(var(--primary))]"
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
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <div className="relative h-[380px] overflow-hidden rounded-[28px] bg-[#111] soft-shadow sm:h-[460px] md:h-[520px]">
            <Image
              src={heroImg}
              alt="Cristian Wosniak"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 540px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/12 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-2xl border border-[hsl(var(--primary))]/40 bg-black/60 px-4 py-3 text-sm text-foreground backdrop-blur">
              <p className="font-semibold">{siteData.brand.name}</p>
              <p className="text-muted-foreground">{siteData.brand.tagline}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container max-w-6xl mt-8 grid gap-4 md:grid-cols-3">
        {siteData.steps.map((step, idx) => (
          <Reveal delay={0.05 * idx} key={step.title}>
            <Card className="border border-[hsl(var(--border))]/50 bg-card/70 transition hover:-translate-y-1 hover:border-[hsl(var(--primary))]/70 hover:shadow-[0_18px_60px_-50px_rgba(247,200,0,0.5)]">
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg text-[hsl(var(--primary))]">0{idx + 1}</CardTitle>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{step.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
