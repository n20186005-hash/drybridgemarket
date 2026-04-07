"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const TOTAL_PHOTOS = 22;
const ITEMS_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(TOTAL_PHOTOS / ITEMS_PER_PAGE);

export default function Gallery() {
  const t = useTranslations("gallery");
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === "Escape") setLightboxIndex(null);
    if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : TOTAL_PHOTOS - 1));
    if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! < TOTAL_PHOTOS - 1 ? prev! + 1 : 0));
  }, [lightboxIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentPhotos = Array.from({ length: Math.min(ITEMS_PER_PAGE, TOTAL_PHOTOS - startIndex) }).map((_, i) => startIndex + i);

  return (
    <section id="gallery" className="py-24 sm:py-28 border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-3 text-muted-light dark:text-muted-dark">
          {t("subtitle")}
        </p>

        {/* Photo Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPhotos.map((photoIndex) => (
            <div
              key={photoIndex}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-neutral-800 cursor-pointer"
              onClick={() => setLightboxIndex(photoIndex)}
            >
              <Image
                src={`/gallery/images (${photoIndex + 1}).jpg`}
                alt={`Gallery image ${photoIndex + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full bg-black/20 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {t.has("viewOriginal") ? t("viewOriginal") : "查看原图"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prevPage}
            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center text-muted-light dark:text-muted-dark hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-foreground-light dark:hover:text-foreground-dark transition-colors"
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === i
                    ? "w-6 bg-accent"
                    : "w-2 bg-gray-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center text-muted-light dark:text-muted-dark hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-foreground-light dark:hover:text-foreground-dark transition-colors"
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : TOTAL_PHOTOS - 1));
            }}
            className="absolute left-4 sm:left-8 z-50 text-white/50 hover:text-white transition-colors p-2"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! < TOTAL_PHOTOS - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-4 sm:right-8 z-50 text-white/50 hover:text-white transition-colors p-2"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center p-4 sm:p-12" onClick={() => setLightboxIndex(null)}>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image
                src={`/gallery/images (${lightboxIndex + 1}).jpg`}
                alt={`Full screen view ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
                priority
              />
              <div className="absolute bottom-[-3rem] left-0 right-0 text-center text-white/70 text-sm">
                {lightboxIndex + 1} / {TOTAL_PHOTOS}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
