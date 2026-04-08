import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import RecommendedTours from "@/components/RecommendedTours";
import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  
  const content = blog.content[locale as keyof typeof blog.content] || blog.content.en;
  return {
    title: `${content.title} — მშრალი ხიდის ბაზარი`,
    description: content.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  
  // Try to get content in current locale, fallback to English, then whatever is available
  const content = blog.content[locale as keyof typeof blog.content] || 
                  blog.content.en || 
                  Object.values(blog.content)[0];

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Header />
      
      <article className="flex-grow pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 w-full">
        <Link
          href={`/${locale}/blog`}
          className="text-sm text-accent hover:underline inline-flex items-center gap-1 mb-12 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          {t("backToList")}
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-muted-light dark:text-muted-dark mb-6">
            <time dateTime={blog.date} className="font-medium">
              {new Date(blog.date).toLocaleDateString(locale === 'zh-hant' ? 'zh-TW' : locale, { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
            <span className="uppercase tracking-wider font-medium text-accent">{content.category}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
            <span>{blog.readTime} min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            {content.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
              {blog.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-sm">{blog.author}</p>
            </div>
          </div>
        </header>

        {/* Decorative divider */}
        <hr className="my-10 border-border-light dark:border-border-dark" />

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-light dark:text-muted-dark font-normal leading-relaxed">
          {/* Top Ad Banner */}
          <div className="-mx-4 sm:-mx-6 mb-10">
            <AdBanner 
              id="SB15271426_blog_top" 
              src="https://www.trip.com/partners/ad/SB15271426?Allianceid=7974128&SID=300882170&trip_sub1=" 
            />
          </div>

          {/* Simple markdown-like rendering for the fake data */}
          {content.body?.split('\n\n').map((paragraph, i, arr) => {
            // Calculate when to show the middle ad (roughly after 40% of the content)
            const showMiddleAd = i === Math.floor(arr.length * 0.4);
            
            // Basic markdown link parsing
            const renderTextWithLinks = (text: string) => {
              if (typeof text !== 'string') return text;
              
              const parts = text.split(/(<a href="[^"]+" target="_blank">.*?<\/a>)/g);
              return parts.map((part, index) => {
                const match = part.match(/<a href="([^"]+)" target="_blank">(.*?)<\/a>/);
                if (match) {
                  return (
                    <a key={index} href={match[1]} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                      {match[2]}
                    </a>
                  );
                }
                return <span key={index}>{part}</span>;
              });
            };

            let renderedNode = <p key={i} className="mb-6">{renderTextWithLinks(paragraph)}</p>;
            
            if (paragraph.startsWith('## ')) {
              renderedNode = <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-foreground-light dark:text-foreground-dark">{paragraph.replace('## ', '')}</h2>;
            } else if (paragraph.startsWith('### ')) {
              renderedNode = <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-foreground-light dark:text-foreground-dark">{paragraph.replace('### ', '')}</h3>;
            } else if (paragraph.startsWith('- ')) {
              renderedNode = (
                <ul key={i} className="list-disc pl-5 my-6 space-y-2">
                  {paragraph.split('\n').map((item, j) => (
                    <li key={j}>{renderTextWithLinks(item.replace('- ', ''))}</li>
                  ))}
                </ul>
              );
            }

            return (
              <div key={`wrapper-${i}`}>
                {renderedNode}
                {showMiddleAd && (
                  <div className="-mx-4 sm:-mx-6 my-10">
                    <AdBanner 
                      id="SB15266995_blog_mid" 
                      src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3" 
                    />
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Bottom Ad Banner */}
          <div className="-mx-4 sm:-mx-6 mt-12 mb-4">
            <AdBanner 
              id="SB15271076_blog_bottom" 
              src="https://www.trip.com/partners/ad/SB15271076?Allianceid=7974128&SID=300882170&trip_sub1=%E7%AC%AC%E6%AF%94%E5%88%A9%E6%96%AF" 
            />
          </div>
        </div>
      </article>

      <RecommendedTours />

      <Footer />
    </main>
  );
}