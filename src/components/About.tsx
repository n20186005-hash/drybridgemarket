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
          Dry Bridge Market (მშრალი ხიდის ბაზარი) 由 Tbilisi 市市政厅管理和维护。作为第比利斯重要的公共文化与旅游地标，该市场自1990年代初以来一直是展示格鲁吉亚历史、文化和当地创造力的开放式公共空间。
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-light dark:text-muted-dark max-w-3xl">
          本市场是第比利斯开放式公共跳蚤市场，全天对外开放（建议运营时间：每日约 11:00 AM – 6:00 PM，周末氛围更佳）。免费入场，无需门票。地址：PR23+96X, Tbilisi, Georgia（位于 Mtkvari 河岸、Dry Bridge 下方）。
        </p>
      </div>
    </section>
  );
}