"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80", captionKey: "0" },
  { src: "https://images.unsplash.com/photo-1558551649-e44c8f992010?w=800&q=80", captionKey: "1" },
  { src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80", captionKey: "2" },
  { src: "https://images.unsplash.com/photo-1569880153113-76d33fc4d546?w=800&q=80", captionKey: "3" },
  { src: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80", captionKey: "4" },
  { src: "https://images.unsplash.com/photo-1568781269371-c642274e020f?w=800&q=80", captionKey: "5" },
];

export default function Gallery() {
  const t = useTranslations("gallery");

  const captions = [
    t("photos.0.caption"),
    t("photos.1.caption"),
    t("photos.2.caption"),
    t("photos.3.caption"),
    t("photos.4.caption"),
    t("photos.5.caption"),
  ];

  return (
    <section
      id="gallery"
      className="py-24 sm:py-28 border-t border-border-light dark:border-border-dark"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-3 text-muted-light dark:text-muted-dark">
          {t("subtitle")}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-neutral-800"
            >
              <Image
                src={photo.src}
                alt={captions[i]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                {captions[i]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-muted-light dark:text-muted-dark">
          <p className="inline">
            {t("note")}
          </p>
          <a
            href="https://maps.app.goo.gl/xMmN6kqmtBFinqba7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline font-medium ml-1"
          >
            →
          </a>
        </div>
      </div>
    </section>
  );
}
