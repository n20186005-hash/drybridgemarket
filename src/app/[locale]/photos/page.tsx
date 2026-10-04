import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const localePaths = {
  en: "/photos",
  ka: "/ka/photos",
  "zh-hant": "/zh-hant/photos",
} as const;

const copy = {
  en: {
    title: "Dry Bridge Market Photos | Tbilisi Flea Market Gallery",
    description:
      "Browse Dry Bridge Market photos from Tbilisi, including antiques, Soviet memorabilia, Georgian paintings, jewelry and weekend flea market scenes.",
    heading: "Dry Bridge Market Photos",
    intro:
      "A focused photo gallery of antiques, paintings, collectibles and weekend atmosphere from Dry Bridge Market in Tbilisi.",
    sections: [
      "Dry Bridge Market antiques",
      "Soviet memorabilia and vintage finds",
      "Georgian paintings and street art displays",
      "Jewelry, crafts and handmade souvenirs",
      "Weekend market atmosphere in central Tbilisi",
      "Real visitor scenes near the bridge and park",
    ],
  },
  ka: {
    title: "მშრალი ხიდის ბაზრის ფოტოები | თბილისის რწყილების ბაზრის გალერეა",
    description:
      "დაათვალიერეთ მშრალი ხიდის ბაზრის ფოტოები: ანტიკვარიატი, საბჭოთა მემორაბილია, ქართული ნახატები, სამკაულები და შაბათ-კვირის ბაზრის ატმოსფერო.",
    heading: "მშრალი ხიდის ბაზრის ფოტოები",
    intro:
      "ფოკუსირებული ფოტოგალერეა თბილისის მშრალი ხიდის ბაზრიდან: ანტიკვარიატი, ნახატები, საკოლექციო ნივთები და შაბათ-კვირის ატმოსფერო.",
    sections: [
      "მშრალი ხიდის ბაზრის ანტიკვარიატი",
      "საბჭოთა მემორაბილია და ვინტაჟური ნივთები",
      "ქართული ნახატები და ქუჩის ხელოვნება",
      "სამკაულები, ხელნაკეთობები და სუვენირები",
      "შაბათ-კვირის ბაზრის ატმოსფერო თბილისის ცენტრში",
      "რეალური სცენები ხიდთან და პარკში",
    ],
  },
  "zh-hant": {
    title: "Dry Bridge Market Photos | 提比里斯跳蚤市場照片集",
    description:
      "瀏覽提比里斯 Dry Bridge Market 的市場照片，包含古董、蘇聯紀念品、喬治亞畫作、珠寶與週末市集現場。",
    heading: "Dry Bridge Market Photos",
    intro:
      "聚焦提比里斯乾橋市場的照片頁，收錄古董、畫作、收藏品與週末市集氛圍。",
    sections: [
      "乾橋市場古董照片",
      "蘇聯紀念品與復古物件",
      "喬治亞畫作與街頭藝術展示",
      "珠寶、手工藝與紀念品",
      "提比里斯市中心週末市集氛圍",
      "橋邊與公園周邊的真實現場",
    ],
  },
} as const;

const captions = [
  "Antiques and mixed collectibles",
  "Vintage treasures and Soviet memorabilia",
  "Paintings displayed beside the park paths",
  "Busy weekend flea market atmosphere",
  "Jewelry, silverware and Georgian crafts",
  "Colorful art and handmade souvenirs",
];

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

export default async function PhotosPage({
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {content.heading}
          </h1>
          <p className="mt-4 text-lg text-muted-light dark:text-muted-dark max-w-3xl">
            {content.intro}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <figure
                key={index}
                className="overflow-hidden rounded-2xl border border-border-light dark:border-border-dark bg-white dark:bg-neutral-900"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/gallery/images (${index + 1}).jpg`}
                    alt={captions[index]}
                    fill
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-light dark:text-muted-dark">
                  {content.sections[index]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
