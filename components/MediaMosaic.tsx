import Image from "next/image";
import { useMemo } from "react";

import { cn } from "@/lib/utils";
import { siteData } from "@/lib/siteData";

const randomUnsplash = (query: string) => `https://source.unsplash.com/1200x1600/?${query}`;

const buildSources = () => {
  if (siteData.media.useRemote) {
    return ["fitness", "gym", "workout", "athlete"].map((q, idx) => `${randomUnsplash(q)}&sig=${idx + 11}`);
  }
  return siteData.media.localGallery;
};

export function MediaMosaic({ className }: { className?: string }) {
  const sources = useMemo(() => buildSources(), []);

  return (
    <div className={cn("grid gap-4 md:grid-cols-4", className)}>
      {sources.map((src, idx) => (
        <div
          key={`${src}-${idx}`}
          className={cn(
            "relative overflow-hidden rounded-3xl bg-muted/40",
            idx === 0 || idx === 3 ? "md:col-span-2" : "md:col-span-2 md:row-span-1"
          )}
          style={{ minHeight: idx === 0 || idx === 3 ? "360px" : "280px" }}
        >
          <Image
            src={src}
            alt="Entrenamiento y fitness"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 hover:scale-105"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        </div>
      ))}
    </div>
  );
}
