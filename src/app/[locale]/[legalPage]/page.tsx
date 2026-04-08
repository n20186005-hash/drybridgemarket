import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";

const legalPages: Record<string, string> = {
  "privacy-policy": "privacy",
  "terms-of-service": "terms",
  "cookie-settings": "cookies",
};

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ legalPage: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; legalPage: string }>;
}) {
  const { locale, legalPage } = await params;
  const key = legalPages[legalPage];
  if (!key) return {};
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: `${t(`${key}.title`)} — მშრალი ხიდის ბაზარი`,
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; legalPage: string }>;
}) {
  const { locale, legalPage } = await params;
  const key = legalPages[legalPage];
  if (!key) notFound();

  const t = await getTranslations({ locale, namespace: "legal" });

  const sections: Record<string, string[]> = {
    privacy: ["collection", "thirdParty", "cookies", "contact"],
    terms: ["use", "ip", "external", "liability", "contact"],
    cookies: ["essential", "thirdParty", "manage", "contact"],
  };

  const pageSections = sections[key] || [];

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <Link
          href={`/${locale}`}
          className="text-sm text-accent hover:underline inline-flex items-center gap-1 mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          მშრალი ხიდის ბაზარი
        </Link>

        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {t("officialNotice")}
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {t(`${key}.title`)}
        </h1>

        <p className="mt-3 text-sm text-muted-light dark:text-muted-dark">
          {t(`${key}.effectiveDate`)}
        </p>

        <p className="mt-8 text-base leading-relaxed text-muted-light dark:text-muted-dark">
          {t(`${key}.intro`)}
        </p>

        <div className="mt-12 space-y-10">
          {pageSections.map((section) => (
            <div key={section}>
              <h2 className="text-lg font-semibold mb-3">
                {t(`${key}.${section}.title`)}
              </h2>
              <p className="text-base leading-relaxed text-muted-light dark:text-muted-dark">
                {t(`${key}.${section}.text`)}
              </p>
            </div>
          ))}
          
          <div className="pt-8 mt-8 border-t border-border-light dark:border-border-dark">
            <h2 className="text-lg font-semibold mb-3">
              {t("advertisement.title")}
            </h2>
            <p className="text-base leading-relaxed text-muted-light dark:text-muted-dark">
              {t("advertisement.text")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}