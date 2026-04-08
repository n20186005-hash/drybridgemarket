"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  const t = useTranslations("blog");
  const locale = useLocale();
  
  // Get the 3 most recent blogs
  const recentBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <section id="blog" className="py-24 sm:py-28 border-t border-border-light dark:border-border-dark bg-gray-50 dark:bg-neutral-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-3 text-muted-light dark:text-muted-dark max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline whitespace-nowrap"
          >
            {t("viewAll")}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => {
            const content = blog.content[locale as keyof typeof blog.content] || blog.content.en || Object.values(blog.content)[0];
            
            return (
              <Link 
                href={`/${locale}/blog/${blog.slug}`} 
                key={blog.id}
                className="group flex flex-col p-6 border border-border-light dark:border-border-dark rounded-xl bg-white dark:bg-neutral-900 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-muted-light dark:text-muted-dark mb-3">
                  <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString(locale === 'zh-hant' ? 'zh-TW' : locale, { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                  <span>•</span>
                  <span>{content.category}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-2 mb-4 flex-grow">
                  {content.excerpt}
                </p>
                <div className="mt-auto text-xs font-medium text-accent uppercase tracking-wider flex items-center">
                  {t("readMore")}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}