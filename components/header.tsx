"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ShineButton } from "@/components/shine-button";
import { siteData } from "@/lib/siteData";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)] font-body">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <span className="rounded-full bg-[hsl(var(--primary))]/15 px-4 py-2 text-lg font-accent text-[hsl(var(--primary))]">
            {siteData.brand.short}
          </span>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{siteData.brand.name}</p>
            <p className="text-base font-semibold">{siteData.brand.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteData.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              target={item.target}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#planes"
            className="shrink-0 inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-4 text-sm font-semibold text-white/90 transition hover:border-[rgba(247,200,0,.6)] hover:bg-white/5 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Ver planes</span>
            <span className="sm:hidden">Planes</span>
          </Link>
          <ShineButton asChild>
            <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer">
              Agendar por WhatsApp
            </Link>
          </ShineButton>
        </div>

        <button
          className="inline-flex items-center rounded-full border border-white/20 p-2 text-foreground lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-4 pb-4 pt-2 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-2">
            {siteData.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
                target={item.target}
                rel={item.target === "_blank" ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ShineButton asChild className="w-full">
              <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer" className="justify-center">
                Agendar por WhatsApp
              </Link>
            </ShineButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
