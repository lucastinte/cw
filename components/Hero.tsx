import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { ShineButton } from "@/components/shine-button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/siteData";

const getHeroImage = () => {
  const localPath = path.join(process.cwd(), "public", siteData.hero.image.replace(/^\//, ""));
  const exists = fs.existsSync(localPath);
  return exists ? siteData.hero.image : siteData.hero.fallback;
};

export function Hero() {
  const heroImg = getHeroImage();

  return (
    <section id="hero" className="relative overflow-hidden pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,200,0,0.15),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(247,200,0,0.08),transparent_45%)]" />
      </div>

      <div className="container max-w-6xl grid gap-10 px-6 md:grid-cols-2 md:items-center">
        <Reveal className="space-y-6">
          <Badge variant="outline" className="border-[hsl(var(--border))]/70 text-[hsl(var(--primary))]">
            CW Life
          </Badge>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {siteData.hero.manifesto}
            </p>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl">
              <span className="font-accent text-[hsl(var(--primary))]">Cristian Wosniak</span>
              <span className="block font-semibold text-foreground">Coach</span>
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">{siteData.hero.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {siteData.hero.chips.map((chip) => (
              <Badge
                key={chip}
                className="rounded-full bg-white/5 px-3 py-2 text-[hsl(var(--primary))] transition hover:bg-white/10"
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
              <Link href="#planes" className="justify-center whitespace-nowrap">
                <span className="hidden sm:inline">{siteData.hero.secondaryCta}</span>
                <span className="sm:hidden">Planes</span>
              </Link>
            </ShineButton>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[500px]">
          <div className="absolute inset-0">
            <Image
              src={heroImg}
              alt="Cristian Wosniak"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 540px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/10 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>

      <div className="container max-w-6xl mt-12 grid gap-6 px-6 md:grid-cols-3">
        {siteData.steps.map((step, idx) => (
          <Reveal delay={0.05 * idx} key={step.title} className="rounded-2xl bg-white/5 px-4 py-5">
            <div className="text-sm font-semibold text-[hsl(var(--primary))]">0{idx + 1}</div>
            <div className="text-lg font-semibold">{step.title}</div>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
