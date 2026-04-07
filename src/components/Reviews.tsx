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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                D
              </div>
              <div>
                <p className="font-semibold">David K.</p>
                <p className="text-sm text-muted-light dark:text-muted-dark">March 2026</p>
              </div>
            </div>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              Absolutely one of the best flea markets in the Caucasus. Spent hours browsing Soviet badges, old paintings, and quirky antiques. The vendors are friendly and love to share stories.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                N
              </div>
              <div>
                <p className="font-semibold">Nino T.</p>
                <p className="text-sm text-muted-light dark:text-muted-dark">February 2026</p>
              </div>
            </div>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              My favourite place in Tbilisi. Every weekend I find something new — old vinyl records, handmade jewelry. It's a treasure hunt every time.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                M
              </div>
              <div>
                <p className="font-semibold">Marco L.</p>
                <p className="text-sm text-muted-light dark:text-muted-dark">January 2026</p>
              </div>
            </div>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              A must-visit for anyone in Tbilisi. The atmosphere is incredible, especially on Saturdays. Great for unique souvenirs and street photography.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                L
              </div>
              <div>
                <p className="font-semibold">Lisa W.</p>
                <p className="text-sm text-muted-light dark:text-muted-dark">December 2025</p>
              </div>
            </div>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              Such a fascinating market! I found beautiful cloisonné enamel pieces and vintage Georgian postcards. Prices are reasonable if you bargain gently.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                S
              </div>
              <div>
                <p className="font-semibold">Sandro M.</p>
                <p className="text-sm text-muted-light dark:text-muted-dark">November 2025</p>
              </div>
            </div>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              This market is a living museum. War medals, old cameras, Soviet propaganda posters — the history on display here is remarkable.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                Y
              </div>
              <div>
                <p className="font-semibold">Yuki S.</p>
                <p className="text-sm text-muted-light dark:text-muted-dark">October 2025</p>
              </div>
            </div>
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              Came here on a Sunday morning. The bridge area was full of artists selling oil paintings. Bought a beautiful Tbilisi cityscape for my apartment.
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