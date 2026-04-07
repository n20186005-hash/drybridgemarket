"use client";

import { useTranslations } from "next-intl";

export default function MapSection() {
  const t = useTranslations("map");

  return (
    <section
      id="map"
      className="py-24 sm:py-28 border-t border-border-light dark:border-border-dark"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>

        <div className="mt-10 rounded-xl overflow-hidden border border-border-light dark:border-border-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.6009942616712!2d44.802810045500166!3d41.70098493442307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ce0a3a0db11%3A0x9e9bf44525bf452b!2sDry%20Bridge%20Market!5e0!3m2!1sen!2sus!4v1775534985712!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dry Bridge Market on Google Maps"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://maps.app.goo.gl/xMmN6kqmtBFinqba7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline font-medium"
          >
            {t("openMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}
