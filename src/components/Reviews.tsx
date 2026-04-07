"use client";

import { useTranslations } from "next-intl";

const reviewIndices = [0, 1, 2, 3, 4, 5];

const colors = [
  "bg-amber-700",
  "bg-emerald-700",
  "bg-indigo-700",
  "bg-rose-700",
  "bg-teal-700",
  "bg-violet-700",
];

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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewIndices.map((i) => {
            const name = t(`items.${i}.name`);
            const date = t(`items.${i}.date`);
            const text = t(`items.${i}.text`);
            const initial = name.charAt(0);

            return (
              <div
                key={i}
                className="p-6 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-neutral-900/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full ${colors[i]} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}
                  >
                    {initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-muted-light dark:text-muted-dark">
                      {date}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3.5 h-3.5 text-accent"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                  {text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://maps.app.goo.gl/xMmN6kqmtBFinqba7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline font-medium"
          >
            {t("seeMore")}
          </a>
        </div>
      </div>
    </section>
  );
}
