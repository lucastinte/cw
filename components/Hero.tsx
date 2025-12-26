import fs from "fs";
import path from "path";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
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
          <Badge variant="outline" className="border-[hsl(var(--primary))]/70 text-[hsl(var(--primary))]">
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
                className="rounded-full bg-gradient-to-r from-white/8 via-white/5 to-black/30 px-3 py-2 text-[hsl(var(--primary))] shadow-[0_10px_30px_-24px_rgba(247,200,0,0.6)] backdrop-blur"
                variant="secondary"
              >
                {chip}
              </Badge>
            ))}
          </div>
          <div className="h-2" />
        </Reveal>

        <Reveal delay={0.08} className="relative h-[420px] sm:h-[500px]">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(circle_at_40%_30%,rgba(247,200,0,0.22),transparent_45%)]" />
          <div className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_28px_80px_-40px_rgba(247,200,0,0.75)]">
            <Image
              src={heroImg}
              alt="Cristian Wosniak"
              fill
              className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
              sizes="(min-width: 1024px) 540px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/45" />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/16 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              Reconstruirte
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container max-w-6xl mt-12 grid gap-4 px-6 md:grid-cols-3">
        {siteData.steps.map((step, idx) => (
          <Reveal
            delay={0.05 * idx}
            key={step.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/3 via-black/60 to-black/70 p-5 shadow-[0_24px_70px_-50px_rgba(247,200,0,0.8)]"
          >
            <div className="absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[hsl(var(--primary))]/10 blur-3xl" />
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/10 text-sm font-semibold text-[hsl(var(--primary))] shadow-[0_14px_32px_-24px_rgba(247,200,0,0.8)]">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <div className="text-lg font-semibold text-foreground">{step.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
