"use client";

import { useTranslations } from "next-intl";

export default function RecommendedTours() {
  const t = useTranslations("tours");

  // Define keys from the translation file
  const tourKeys = [
    { key: "tour1", url: "https://www.trip.com/t/pJoQPuLZDU2" },
    { key: "tour2", url: "https://www.trip.com/t/hIOsasWZDU2" },
    { key: "tour3", url: "https://www.trip.com/t/ZQ0oOYYZDU2" },
    { key: "tour4", url: "https://www.trip.com/t/4UzsRFbZDU2" },
    { key: "tour5", url: "https://www.trip.com/t/ssPwvDdZDU2" },
    { key: "tour6", url: "https://www.trip.com/t/7p32n1fZDU2" },
    { key: "tour7", url: "https://www.trip.com/t/8QotX3hZDU2" },
    { key: "tour8", url: "https://www.trip.com/t/sLLlgCjZDU2" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-neutral-950 border-t border-border-light dark:border-border-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-accent rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {t("title")}
          </h2>
        </div>
        
        <p className="text-muted-light dark:text-muted-dark mb-8 max-w-2xl">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tourKeys.map((tour, index) => (
            <a
              key={index}
              href={tour.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl border border-border-light dark:border-border-dark bg-gray-50 dark:bg-neutral-900/30 hover:border-accent/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-foreground-light dark:text-foreground-dark group-hover:text-accent transition-colors leading-snug line-clamp-2">
                  {t(tour.key)}
                </h3>
                <div className="mt-2 flex items-center text-xs text-accent font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                  {t("bookNow")}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}