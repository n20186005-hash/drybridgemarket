"use client";

import { useTranslations } from "next-intl";

export default function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section
      id="reviews"
      className="py-24 sm:py-28 border-t border-border-light dark:border-border-dark"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-3 text-sm text-muted-light dark:text-muted-dark max-w-2xl">
          {t("subtitle")}
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <p className="text-sm font-semibold text-accent mb-2">{t("snapshot.ratingTitle")}</p>
            <p className="text-3xl font-semibold tracking-tight">4.4 / 5</p>
            <p className="mt-3 text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              {t("snapshot.ratingText")}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <p className="text-sm font-semibold text-accent mb-2">{t("snapshot.volumeTitle")}</p>
            <p className="text-3xl font-semibold tracking-tight">10,336</p>
            <p className="mt-3 text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              {t("snapshot.volumeText")}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <p className="text-sm font-semibold text-accent mb-2">{t("snapshot.sourceTitle")}</p>
            <p className="text-3xl font-semibold tracking-tight">Google Maps</p>
            <p className="mt-3 text-sm text-muted-light dark:text-muted-dark leading-relaxed">
              {t("snapshot.sourceText")}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/xMmN6kqmtBFinqba7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <span>{t("seeMore")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
