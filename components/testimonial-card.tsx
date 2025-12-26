import { Star } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  name: string;
  quote: string;
  rating: number;
  className?: string;
};

export function TestimonialCard({ name, quote, rating, className }: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "h-full border border-[hsl(var(--primary))]/25 bg-card/70 shadow-md shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-[hsl(var(--primary))]/40",
        className
      )}
    >
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
