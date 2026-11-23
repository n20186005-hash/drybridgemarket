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
        <aside className="mt-8 max-w-3xl rounded-xl border border-border-light p-5 dark:border-border-dark sm:p-6">
          <h3 className="text-xl font-semibold">{t("managementTitle")}</h3>
          <p className="mt-3 leading-relaxed text-muted-light dark:text-muted-dark">
            {t("managementCopy")}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <li><a className="text-accent underline" href="https://www.tbilisi.gov.ge/">{t("municipality")}</a></li>
            <li><a className="text-accent underline" href="https://1tv.ge/lang/en/news/pm-regards-opening-of-dedaena-and-march-9-gardens-as-great-gift/">{t("restoration")}</a></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}