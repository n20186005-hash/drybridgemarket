"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="py-16 border-t border-border-light dark:border-border-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left column - Branding & Contact */}
          <div>
            <p className="text-sm font-semibold mb-1">მშრალი ხიდის ბაზარი</p>
            <p className="text-xs text-muted-light dark:text-muted-dark">
              Dry Bridge Market, Tbilisi
            </p>
            <p className="mt-4 text-sm text-muted-light dark:text-muted-dark flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              {t("phone")}
            </p>
          </div>

          {/* Middle column - Useful Links */}
          <div>
            <p className="text-sm font-semibold mb-3">{t("links")}</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://georgia.travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
                >
                  {t("georgiaTravel")}
                </a>
              </li>
              <li>
                <a
                  href="https://gnta.ge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
                >
                  {t("gnta")}
                </a>
              </li>
            </ul>
          </div>

          {/* Right column - Legal */}
          <div>
            <p className="text-sm font-semibold mb-3">{t("legal")}</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${locale}/privacy-policy`}
                  className="text-sm text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
                >
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/terms-of-service`}
                  className="text-sm text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
                >
                  {t("termsOfService")}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/cookie-settings`}
                  className="text-sm text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
                >
                  {t("cookieSettings")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-muted-light dark:text-muted-dark">
            {t("copyright")}
          </p>
          <p className="text-xs text-muted-light dark:text-muted-dark">
            {t("lastUpdated")}
          </p>
        </div>
      </div>
    </footer>
  );
}
