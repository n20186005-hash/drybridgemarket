"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const highlights = [
    t("highlights.0"),
    t("highlights.1"),
    t("highlights.2"),
    t("highlights.3"),
    t("highlights.4"),
    t("highlights.5"),
  ];

  return (
    <section id="intro" className="py-24 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-light dark:text-muted-dark max-w-3xl">
          {t("description")}
        </p>

        <ul className="mt-10 space-y-4 max-w-3xl">
          {highlights.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="text-muted-light dark:text-muted-dark">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
