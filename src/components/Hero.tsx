"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations();

  const tagKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const tags = tagKeys.map((i) => t(`tags.items.${i}`));

  return (
    <section className="relative w-full min-h-[90vh] flex items-end">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/images (1).jpg"
          alt="Dry Bridge Market, Tbilisi"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-16 pt-32 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          მშრალი ხიდის ბაზარი
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 mt-2 font-light">
          Dry Bridge Market
        </p>
        <p className="text-lg text-white/70 mt-4 max-w-2xl font-light">
          Dry Bridge Market (მშრალი ხიდის ბაზარი) 由 Tbilisi 市市政厅管理和维护。作为第比利斯重要的公共文化与旅游地标，该市场自1990年代初以来一直是展示格鲁吉亚历史、文化和当地创造力的开放式公共空间。
        </p>

        {/* Info row */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {t("hero.rating")}
            <span className="text-white/50">({t("hero.reviewCount")})</span>
          </span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t("hero.hours")}
          </span>
        </div>

        <div className="mt-3 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {t("hero.address")}
            <a
              href="https://maps.app.goo.gl/xMmN6kqmtBFinqba7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline ml-2"
            >
              {t("hero.openMaps")}
            </a>
          </span>
        </div>

        <div className="mt-2 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {t("hero.phone")}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Tip */}
        <p className="mt-6 text-sm text-accent font-medium">
          {t("hero.tip")}
        </p>
      </div>
    </section>
  );
}
