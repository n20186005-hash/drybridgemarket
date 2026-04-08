import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { blogs } from "@/data/blogs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: `${t("blog")} — მშრალი ხიდის ბაზარი`,
  };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("title")}</h1>
            <p className="text-lg text-muted-light dark:text-muted-dark max-w-2xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              // Try to get content in current locale, fallback to English, then whatever is available
              const content = blog.content[locale as keyof typeof blog.content] || 
                              blog.content.en || 
                              Object.values(blog.content)[0];
              
              return (
                <Link 
                  href={`/${locale}/blog/${blog.slug}`} 
                  key={blog.id}
                  className="group flex flex-col border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white dark:bg-neutral-900/50"
                >
                  {/* Aspect ratio container for thumbnail (optional, using colored div if no image) */}
                  <div className="aspect-[16/9] w-full bg-gray-100 dark:bg-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-light/50 dark:text-muted-dark/50 group-hover:scale-105 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-muted-light dark:text-muted-dark mb-3">
                      <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString(locale === 'zh-hant' ? 'zh-TW' : locale, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      <span>•</span>
                      <span>{content.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {content.title}
                    </h2>
                    <p className="text-muted-light dark:text-muted-dark text-sm line-clamp-3 mb-4 flex-grow">
                      {content.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border-light/50 dark:border-border-dark/50 flex items-center text-sm font-medium text-accent">
                      {t("readMore")}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16">
            <AdBanner 
              id="SB15266995_blog_index" 
              src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3" 
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}