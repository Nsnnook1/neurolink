import { notFound } from "next/navigation";
import { getInsightBySlug } from "@/lib/insights";
import { getInsightImage } from "@/lib/insightImages";
import type { Metadata } from "next";
import sanitizeHtml from "sanitize-html";
import Image from "next/image";
import Link from "next/link";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    return {
      title: "ไม่พบบทความ | Neurolink",
      robots: { index: false, follow: false },
    };
  }

  const title = article.seo?.metaTitle || `${article.title} | Neurolink`;
  const description = article.seo?.metaDescription || article.excerpt;
  const image = getInsightImage(article);

  return {
    title,
    description,
    alternates: {
      canonical: `/insights/${encodeURIComponent(slug)}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.publishedAt,
      images: image ? [{ url: image }] : [],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) notFound();

  const publishedDate = new Intl.DateTimeFormat("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date(article.publishedAt));

  return (
    <main className="bg-white">
      {/* HERO */}

      <section className="relative overflow-hidden bg-[#FAFCFB] bg-[radial-gradient(ellipse_at_85%_15%,rgba(182,225,211,0.25),transparent_55%),radial-gradient(ellipse_at_5%_95%,rgba(216,237,232,0.20),transparent_55%)]">
        <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-6 lg:px-12 lg:pb-20 lg:pt-16">
          <Link
            href="/insights"
            className="inline-flex min-h-11 items-center text-sm font-medium text-[#398366] hover:text-[#07583F]"
          >
            ← กลับไปหน้าบทความทั้งหมด
          </Link>

          <div className="mt-5 grid items-center gap-5 lg:mt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            {/* ARTICLE INFO */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold tracking-wide text-[#398366]">
                <span>{article.category}</span>
                <span className="text-[#9CB5A8]">•</span>
                <time dateTime={article.publishedAt}>{publishedDate}</time>
              </div>

              <h1 className="mt-4 text-[30px] font-bold leading-[1.3] tracking-tight text-[#0B3328] sm:text-[40px] lg:mt-5 lg:text-[48px]">
                {article.title}
              </h1>

              <p className="mt-5 hidden text-base leading-[1.85] text-[#506960] lg:block lg:text-lg">
                {article.excerpt}
              </p>
            </div>

            {/* COVER IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#DCEBE2] shadow-[0_16px_42px_rgba(13,65,45,0.10)] lg:aspect-[5/4] lg:rounded-[32px]">
              {getInsightImage(article) && (
                <Image
                  src={getInsightImage(article)!}
                  alt={article.imageAlt || article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {/* MOBILE EXCERPT */}
          <p className="mt-5 line-clamp-2 text-base leading-[1.8] text-[#506960] lg:hidden">
            {article.excerpt}
          </p>

          {/* MOBILE READ MORE */}
          <a
            href="#article-content"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#07583F] px-6 text-base font-semibold text-white hover:bg-[#064B36] lg:hidden"
          >
            อ่านบทความเพิ่มเติม ↓
          </a>

          {/* DESKTOP SCROLL CUE */}
          <a
            href="#article-content"
            className="mt-12 hidden flex-col items-center gap-2 text-xs font-semibold tracking-[0.15em] text-[#398366] lg:flex"
          >
            อ่านบทความเพิ่มเติม
            <span className="text-xl">↓</span>
          </a>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section
        id="article-content"
        className="scroll-mt-24 px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-20"
      >
        <article className="mx-auto max-w-[760px]">
          <div
            className="
    text-base leading-[1.9] text-[#344C43]
    lg:text-lg
    [&_p]:mb-6
    [&_h2]:mb-5 [&_h2]:mt-12
    [&_h2]:text-[26px] [&_h2]:font-bold
    [&_h2]:leading-[1.35] [&_h2]:text-[#0B3328]
    [&_h3]:mb-4 [&_h3]:mt-9
    [&_h3]:text-[21px] [&_h3]:font-semibold
    [&_h3]:text-[#0B3328]
    [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
    [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6
    [&_li]:mb-2
    [&_a]:font-medium [&_a]:text-[#16825D]
    [&_a]:underline [&_a]:underline-offset-4
    [&_blockquote]:my-8
    [&_blockquote]:border-l-4
    [&_blockquote]:border-[#75B69A]
    [&_blockquote]:pl-5
    [&_blockquote]:italic
    [&_img]:my-8 [&_img]:h-auto
    [&_img]:max-w-full [&_img]:rounded-2xl
  "
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(article.content, {
                allowedTags: [
                  "p",
                  "br",
                  "strong",
                  "b",
                  "em",
                  "i",
                  "h2",
                  "h3",
                  "h4",
                  "ul",
                  "ol",
                  "li",
                  "a",
                  "blockquote",
                  "img",
                  "figure",
                  "figcaption",
                ],
                allowedAttributes: {
                  a: ["href", "title", "target", "rel"],
                  img: ["src", "alt", "width", "height"],
                },
                allowedSchemes: ["http", "https", "mailto"],
              }),
            }}
          />

          <div className="mt-16 border-t border-[#D7E4DC] pt-8">
            <Link
              href="/insights"
              className="inline-flex min-h-12 items-center rounded-full border border-[#07583F] px-6 text-base font-semibold text-[#07583F] hover:bg-[#07583F] hover:text-white"
            >
              ← ดูบทความทั้งหมด
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
