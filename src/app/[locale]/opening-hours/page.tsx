import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const localePaths = {
  en: "/opening-hours",
  ka: "/ka/opening-hours",
  "zh-hant": "/zh-hant/opening-hours",
} as const;

const copy = {
  en: {
    title: "Dry Bridge Market Opening Hours 2026 | Best Time to Visit",
    description:
      "Check typical opening hours for Dry Bridge Market in Tbilisi, plus the best day to visit, weekend tips and why vendor attendance can vary.",
    heading: "Dry Bridge Market Opening Hours",
    intro:
      "Typical vendor hours are around 11:00 AM to 6:00 PM. Attendance can vary by weather, season and day of the week, with weekends usually offering the widest selection.",
    bullets: [
      "Best day to visit: Saturday or Sunday",
      "Best arrival time: late morning to early afternoon",
      "Weather can reduce the number of open stalls",
      "Not every vendor is present every day",
      "Check Google Maps before you go for the latest status",
    ],
    freshness: "Last checked: October 2026",
  },
  ka: {
    title: "მშრალი ხიდის ბაზრის საათები 2026 | ვიზიტის საუკეთესო დრო",
    description:
      "ნახეთ მშრალი ხიდის ბაზრის ტიპური სამუშაო საათები, საუკეთესო დღეები ვიზიტისთვის და მიზეზები, თუ რატომ იცვლება მოვაჭრეთა დასწრება.",
    heading: "მშრალი ხიდის ბაზრის საათები",
    intro:
      "მოვაჭრეთა ტიპური საათებია დაახლოებით 11:00-დან 18:00-მდე. დასწრება შეიძლება შეიცვალოს ამინდის, სეზონისა და კვირის დღის მიხედვით, ხოლო ყველაზე ფართო არჩევანი ჩვეულებრივ შაბათ-კვირასაა.",
    bullets: [
      "ვიზიტის საუკეთესო დღე: შაბათი ან კვირა",
      "მისვლის საუკეთესო დრო: გვიანი დილა ან ადრეული შუადღე",
      "ცუდ ამინდში ღია დახლების რაოდენობა შეიძლება შემცირდეს",
      "ყველა მოვაჭრე ყოველდღე არ არის ადგილზე",
      "გასვლამდე გადაამოწმეთ Google Maps",
    ],
    freshness: "ბოლოს შემოწმდა: ოქტომბერი 2026",
  },
  "zh-hant": {
    title: "Dry Bridge Market Opening Hours 2026 | 最佳造訪時間",
    description:
      "查看提比里斯 Dry Bridge Market 的常見營業時段、最佳造訪日與為何攤販出勤會變動。",
    heading: "Dry Bridge Market Opening Hours",
    intro:
      "攤販常見營業時間約為上午 11 點到下午 6 點。實際出攤情況會因天氣、季節與星期幾而不同，通常週末選擇最完整。",
    bullets: [
      "最佳造訪日：週六或週日",
      "最佳抵達時間：接近中午到下午早些時段",
      "天氣不佳時，開攤數量可能下降",
      "不是每位攤販每天都會出現",
      "出發前先查看 Google Maps 的最新狀態",
    ],
    freshness: "最後核對：2026 年 10 月",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = copy[locale as keyof typeof copy] ?? copy.en;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: localePaths[locale as keyof typeof localePaths] ?? localePaths.en,
      languages: {
        en: localePaths.en,
        ka: localePaths.ka,
        "zh-Hant": localePaths["zh-hant"],
        "x-default": localePaths.en,
      },
    },
  };
}

export default async function OpeningHoursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = copy[locale as keyof typeof copy] ?? copy.en;

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {content.heading}
          </h1>
          <p className="mt-4 text-lg text-muted-light dark:text-muted-dark max-w-3xl">
            {content.intro}
          </p>
          <p className="mt-4 text-sm text-accent font-medium">{content.freshness}</p>

          <div className="mt-10 rounded-2xl border border-border-light dark:border-border-dark bg-white dark:bg-neutral-900 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Visitor Tips</h2>
            <ul className="mt-6 space-y-4 text-muted-light dark:text-muted-dark">
              {content.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
