import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { ShineButton } from "@/components/shine-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/siteData";

type PricingCardProps = {
  name: string;
  price: string;
  bullets: string[];
  highlight?: boolean;
  note?: string;
};

export function PricingCard({ name, price, bullets, highlight, note }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full border border-[hsl(var(--primary))]/30 bg-card/70 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-40px_rgba(247,200,0,0.7)]",
        highlight && "border-[hsl(var(--primary))]/60 bg-gradient-to-b from-[hsl(var(--primary))]/10 to-card"
      )}
    >
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{name}</CardTitle>
          {highlight ? (
            <span className="rounded-full bg-[hsl(var(--primary))]/20 px-3 py-1 text-xs font-semibold text-[hsl(var(--primary-foreground))]">
              Recomendado
            </span>
          ) : null}
        </div>
        <p className="text-4xl font-semibold text-[hsl(var(--primary))]">{price}</p>
        <CardDescription className="text-muted-foreground">{note}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <ul className="space-y-3 text-sm text-foreground">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ShineButton asChild className="w-full" variant={highlight ? "primary" : "outline"}>
          <Link href={siteData.whatsappUrl} target="_blank" rel="noreferrer" className="justify-center">
            Quiero este plan
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </ShineButton>
      </CardContent>
    </Card>
  );
}
