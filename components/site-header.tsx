"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/planes", label: "Planes" },
  { href: "/programa-online", label: "Programa online" },
  { href: "/reconstruirte", label: "Reconstruirte" },
  { href: "/transformaciones", label: "Transformaciones" },
  { href: "/contacto", label: "Contacto" },
];

const whatsappLink =
  "https://wa.me/5491155555555?text=Quiero%20mejorar%20mi%20entrenamiento%20con%20CW%20Life";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activePath = useMemo(() => {
    if (!pathname) return "/";
    if (pathname === "/") return "/";
    const match = navLinks.find((link) => pathname.startsWith(link.href));
    return match?.href ?? "/";
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-semibold uppercase text-secondary-foreground shadow-sm">
            CW
          </span>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Cristian Wosniak
            </p>
            <p className="text-lg font-semibold">Fitness / CW Life</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                activePath === link.href && "bg-accent/60 text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden lg:inline-flex" asChild>
            <Link href="/planes">Ver planes</Link>
          </Button>
          <Button className="hidden md:inline-flex" asChild>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Agenda por WhatsApp
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-background/95 px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-sm font-medium text-foreground/90 transition hover:bg-muted",
                  activePath === link.href && "bg-accent/50"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp inmediato
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
