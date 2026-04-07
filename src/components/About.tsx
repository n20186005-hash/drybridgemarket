"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="intro" className="py-24 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-light dark:text-muted-dark max-w-3xl">
          {t("description1")}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-light dark:text-muted-dark max-w-3xl">
          {t("description2")}
        </p>
      </div>
    </section>
  );
}