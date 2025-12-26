import Image from "next/image";
import { Star } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  name: string;
  quote: string;
  rating: number;
  image?: string;
  className?: string;
};

export function TestimonialCard({ name, quote, rating, image, className }: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden border border-[hsl(var(--border))]/50 bg-card/70 shadow-md shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-[hsl(var(--primary))]/40",
        className
      )}
    >
      {image ? (
        <div className="relative h-40 w-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
      ) : null}
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="flex gap-1 text-[hsl(var(--primary))]">
          {Array.from({ length: rating }).map((_, idx) => (
            <Star key={idx} className="h-4 w-4 fill-[hsl(var(--primary))]" />
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground">{quote}</p>
      </CardContent>
    </Card>
  );
}
