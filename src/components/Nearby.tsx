import { getLocale } from "next-intl/server";
import Link from "next/link";
import { nearby, nearbyLabels, nearbyPath, type NearbyLocale } from "@/data/nearby";

export default async function Nearby({ omit }: { omit?: string }) {
  const locale = (await getLocale()) as NearbyLocale;
  const labels = nearbyLabels[locale];

  return (
    <section id="nearby" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight">{labels.heading}</h2>
      <p className="mt-3 text-muted-light dark:text-muted-dark">{labels.intro}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nearby.filter(({ slug }) => slug !== omit).map(({ slug, copy }) => (
          <li key={slug}>
            <Link className="block h-full rounded-xl border border-border-light p-5 hover:border-accent dark:border-border-dark dark:hover:border-accent" href={nearbyPath(locale, slug)}>
              <h3 className="font-semibold text-accent">{copy[locale][0]}</h3>
              <p className="mt-2 text-sm leading-relaxed">{copy[locale][1]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
