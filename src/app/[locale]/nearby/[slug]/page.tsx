import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nearby from "@/components/Nearby";
import { nearby, nearbyLabels, nearbyLocales, nearbyPath, type NearbyLocale } from "@/data/nearby";

type Props = { params: Promise<{ locale: NearbyLocale; slug: string }> };

export function generateStaticParams() {
  return nearby.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const place = nearby.find((item) => item.slug === slug);
  if (!place?.copy[locale]) notFound();
  const [title, description] = place.copy[locale];
  return {
    title,
    description,
    alternates: {
      canonical: nearbyPath(locale, slug),
      languages: {
        ...Object.fromEntries(nearbyLocales.map((language) => [language, nearbyPath(language, slug)])),
        "x-default": nearbyPath("en", slug),
      },
    },
  };
}

export default async function NearbyPage({ params }: Props) {
  const { locale, slug } = await params;
  const place = nearby.find((item) => item.slug === slug);
  if (!place?.copy[locale]) notFound();
  setRequestLocale(locale);
  const [name, overview, visit] = place.copy[locale];
  const labels = nearbyLabels[locale];
  const map = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place.copy.en[0] + ", Tbilisi, Georgia");

  return (
    <>
      <Header />
      <main className="pt-24">
        <article className="mx-auto max-w-5xl px-4 sm:px-6">
          <header className="rounded-2xl border border-border-light bg-accent/5 p-7 sm:p-12 dark:border-border-dark">
            <Link href={(locale === "en" ? "/" : "/" + locale) + "#nearby"} className="text-sm font-medium text-accent">{labels.heading}</Link>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{name}</h1>
            <p className="mt-5 max-w-2xl leading-relaxed">{overview}</p>
            <a className="mt-6 inline-block rounded-lg border border-accent px-4 py-2 font-medium text-accent" href={map}>{labels.map}</a>
          </header>
          <section className="mx-auto max-w-3xl py-12">
            <h2 className="text-2xl font-semibold">{labels.visit}</h2>
            <p className="mt-4 leading-relaxed">{visit}</p>
            <a className="mt-6 inline-block text-accent underline" href={place.source}>{labels.source}</a>
          </section>
        </article>
        <Nearby omit={slug} />
      </main>
      <Footer />
    </>
  );
}
