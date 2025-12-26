"use client";

import Image from "next/image";
import { useMemo } from "react";

import { cn } from "@/lib/utils";
import { siteData } from "@/lib/siteData";

const queries = siteData.media.randomQueries;

const randomUnsplashUrls = (count: number) => {
  return Array.from({ length: count }).map((_, idx) => {
    const baseSeed = Math.floor(Math.random() * 1000) + idx * 17;
    const query = queries[idx % queries.length];
    return `https://source.unsplash.com/900x1200/?${query}&sig=${baseSeed}`;
  });
};

export function MediaMosaic({ className }: { className?: string }) {
  const images = useMemo(() => randomUnsplashUrls(4), []);
  const videoSrc = siteData.media.video;

  return (
    <div className={cn("grid gap-4 md:grid-cols-4", className)}>
      {videoSrc ? (
        <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--primary))]/25 bg-muted/50 shadow-lg shadow-black/30 md:col-span-2">
          <video
            src={videoSrc}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ) : null}
      {images.map((src, idx) => (
        <div
          key={src}
          className={cn(
            "relative overflow-hidden rounded-3xl border border-[hsl(var(--primary))]/25 bg-muted/50 shadow-lg shadow-black/30",
            videoSrc
              ? idx === 0
                ? "md:col-span-2"
                : "md:col-span-2 md:row-span-1"
              : idx === 0 || idx === 3
                ? "md:col-span-2"
                : "md:col-span-2 md:row-span-1"
          )}
        >
          <Image
            src={src}
            alt="Entrenamiento y fitness"
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ))}
    </div>
  );
}
