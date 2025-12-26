/**
 * Sección “Sobre mí” que puede mostrarse siempre o solo cuando el usuario navega al anchor.
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Link as LinkIcon, Linkedin, Music, Twitter } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ShineButton } from "@/components/shine-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/lib/siteData";

type AboutProps = {
  forceVisible?: boolean;
};

export function About({ forceVisible = false }: AboutProps) {
  const { about } = siteData;
  const [visible, setVisible] = useState(forceVisible);

  const renderIcon = (label: string) => {
    const key = label.toLowerCase();
    if (key.includes("facebook")) return <Facebook className="h-4 w-4" />;
    if (key.includes("instagram")) return <Instagram className="h-4 w-4" />;
    if (key.includes("tiktok")) return <Music className="h-4 w-4" />;
    if (key.includes("twitter")) return <Twitter className="h-4 w-4" />;
    if (key.includes("linked")) return <Linkedin className="h-4 w-4" />;
    return <LinkIcon className="h-4 w-4" />;
  };

  useEffect(() => {
    if (forceVisible) return;
    const checkHash = () => {
      setVisible(window.location.hash === "#sobre-mi");
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [forceVisible]);

  return (
    <section
      id="sobre-mi"
      className={`container max-w-6xl px-6 transition-all duration-500 ${
        visible || forceVisible ? "opacity-100" : "pointer-events-none -mt-10 h-0 overflow-hidden opacity-0"
      }`}
      aria-hidden={!visible && !forceVisible}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-[hsl(var(--border))]/60 bg-gradient-to-br from-black via-card to-black/70 p-8 shadow-[0_30px_90px_-60px_rgba(247,200,0,0.8)] md:p-10">
        <div className="pointer-events-none absolute -left-16 -top-10 h-48 w-48 rounded-full bg-[hsl(var(--primary))]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-white/5 blur-3xl" />

        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <Reveal className="space-y-6">
            <Badge variant="outline" className="border-[hsl(var(--primary))]/60 text-[hsl(var(--primary))]">
              {about.badge}
            </Badge>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{about.role}</p>
              <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{about.name}</h2>
              <p className="text-lg text-muted-foreground">{about.headline}</p>
            </div>

            <div className="space-y-3 text-base text-muted-foreground">
              <p>{about.mission}</p>
              <p>{about.vision}</p>
              <div className="rounded-2xl border border-[hsl(var(--primary))]/25 bg-[hsl(var(--primary))]/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--primary))]">{about.storyTitle}</p>
                <p className="text-foreground">{about.story}</p>
              </div>
              <p>{about.history}</p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              {about.socials.map(({ label, handle }) => (
                <span
                  key={`${label}-${handle}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-muted-foreground shadow-[0_10px_28px_-24px_rgba(247,200,0,0.6)]"
                >
                  <span className="text-[hsl(var(--primary))]">{renderIcon(label)}</span>
                  <span className="text-foreground font-semibold">{label}:</span>
                  <span>{handle}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <ShineButton asChild size="lg">
                <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer" className="justify-center">
                  Conectar por WhatsApp
                </Link>
              </ShineButton>
              <ShineButton asChild variant="outline" size="lg">
                <Link href={`mailto:${about.contactEmail}`} className="justify-center">
                  Escribime
                </Link>
              </ShineButton>
            </div>
            <p className="text-sm text-muted-foreground">
              Contacto directo: {about.contactEmail} · {about.contactPhone}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="grid gap-4 sm:grid-cols-[1.15fr,0.85fr]">
              <div className="relative h-[340px] overflow-hidden rounded-3xl border border-[hsl(var(--border))]/50 bg-black/60 shadow-lg sm:h-[420px]">
                <Image
                  src={about.images.main}
                  alt="Cristian Wosniak transformación"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  {about.storyTitle}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative h-[160px] overflow-hidden rounded-3xl border border-[hsl(var(--border))]/50 bg-black/60 shadow-lg sm:h-[180px]">
                  <Image
                    src={about.images.secondary}
                    alt="Cristian Wosniak coach"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 280px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/18 via-transparent to-black/40" />
                </div>

                <div className="rounded-3xl border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/5 p-4 text-sm text-foreground shadow-inner">
                  <p className="font-semibold text-[hsl(var(--primary))]">Mantra</p>
                  <p className="text-muted-foreground">{about.mantra}</p>
                  <Separator className="my-3 border-[hsl(var(--primary))]/20" />
                  <p className="text-foreground">{about.contactPhone}</p>
                  <p className="text-muted-foreground">{about.contactEmail}</p>
                  <Separator className="my-3 border-[hsl(var(--primary))]/20" />
                  <p className="text-xs text-muted-foreground">{about.contactNote}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
