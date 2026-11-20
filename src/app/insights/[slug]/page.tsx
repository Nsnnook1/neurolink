import { getInsightBySlug } from "@/lib/insights";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const getArticle = cache(getInsightBySlug);

function formatPublishedDate(date: string | null | undefined): string | null {
  if (!date) return null;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;

  return new Intl.DateTimeFormat("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(parsed);
}

function getPlainText(html: string): string {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} })
    .replace(/\s+/g, " ")
    .trim();
}

function prepareArticleContent(content: string) {
  let headingIndex = 0;
  const html = sanitizeHtml(content, {
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
    transformTags: {
      h2: (_tagName, attribs) => ({
        tagName: "h2",
        attribs: { ...attribs, id: `article-section-${++headingIndex}` },
      }),
    },
  });

  const headings = Array.from(
    html.matchAll(
      /<h2\b[^>]*\bid="(article-section-\d+)"[^>]*>([\s\S]*?)<\/h2>/gi,
    ),
    ([, id, text]) => ({ id, title: getPlainText(text) }),
  ).filter((heading) => heading.title);

  return { html, headings };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "ไม่พบบทความ | NeuroLink AI",
      robots: { index: false, follow: false },
    };
  }

  const title = article.seo?.metaTitle || article.title;
  const description =
    article.seo?.metaDescription ||
    article.excerpt ||
    getPlainText(article.content || "").slice(0, 160);
  const image = article.coverImage || null;
  const path = `/insights/${encodeURIComponent(slug)}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "article",
      url: path,
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const publishedDate = formatPublishedDate(article.publishedAt);
  const { html, headings } = prepareArticleContent(article.content || "");

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-7 sm:px-8 lg:pb-12 lg:pt-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-caption font-medium text-[#398366]">
            {article.category && <span>{article.category}</span>}
            {article.category && publishedDate && (
              <span aria-hidden="true" className="text-[#A4B9AE]">
                •
              </span>
            )}
            {publishedDate && (
              <time dateTime={article.publishedAt}>{publishedDate}</time>
            )}
          </div>

          <h1 className="mt-4 text-h2 font-bold leading-[1.35] tracking-tight text-[#0B3328] sm:text-h2-desktop lg:mt-5 lg:text-h1-desktop lg:leading-[1.25]">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="mt-5 max-w-[820px] text-body leading-[1.85] text-[#526A61] sm:text-lead lg:mt-6">
              {article.excerpt}
            </p>
          )}

          <figure className="mt-8 sm:mt-10 lg:mt-11">
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[18px] bg-[#EAF3EE] sm:aspect-[16/8] sm:rounded-[22px] lg:aspect-[21/9]">
              {article.coverImage ? (
                <Image
                  src={article.coverImage}
                  alt={article.imageAlt || article.title}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 1180px"
                  className="object-cover"
                />
              ) : (
                <div
                  className="flex flex-col items-center gap-4 text-[#8BB5A1]"
                  aria-label="ยังไม่มีภาพประกอบบทความ"
                  role="img"
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
              )}
            </div>
          </figure>
        </div>
      </section>

      <section
        id="article-content"
        className="bg-white px-5 pb-20 sm:px-8 lg:pb-24"
      >
        <div className="mx-auto max-w-[1180px] border-t border-[#E3ECE6] pt-9 lg:pt-12">
          <div
            className={
              headings.length > 1
                ? "grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14"
                : ""
            }
          >
            {headings.length > 1 && (
              <aside className="hidden lg:block">
                <nav
                  aria-label="สารบัญบทความ"
                  className="sticky top-28 rounded-2xl border border-[#E3ECE6] bg-[#F8FBF9] p-5"
                >
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#087D56]">
                    IN THIS ARTICLE
                  </p>
                  <ul className="space-y-1">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="block rounded-lg px-3 py-3 text-caption leading-[1.65] text-[#526A61] transition-colors hover:bg-[#E5F3EB] hover:text-[#087D56] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087D56]"
                        >
                          {heading.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            <article className="min-w-0 max-w-[820px]">
              <div
                className="
                  text-body leading-[1.9] text-[#40574E]
                  lg:text-lead lg:leading-[1.95]

                  [&_p]:mb-3
                  [&_p:last-child]:mb-0

                  [&_h2]:mb-4
                  [&_h2]:mt-7
                  [&_h2:first-child]:mt-0
                  [&_h2]:scroll-mt-28
                  [&_h2]:text-h4-desktop
                  [&_h2]:font-bold
                  [&_h2]:leading-[1.4]
                  [&_h2]:text-[#0B3328]
                  lg:[&_h2]:text-h2

                  [&_h3]:mb-3
                  [&_h3]:mt-6
                  [&_h3]:scroll-mt-28
                  [&_h3]:text-h3
                  [&_h3]:font-semibold
                  [&_h3]:text-[#0B3328]

                  [&_h4]:mb-3
                  [&_h4]:mt-5
                  [&_h4]:text-h4
                  [&_h4]:font-semibold
                  [&_h4]:text-[#0B3328]

                  [&_ul]:mb-5
                  [&_ul]:list-disc
                  [&_ul]:pl-6
                  [&_ol]:mb-5
                  [&_ol]:list-decimal
                  [&_ol]:pl-6
                  [&_li]:mb-2

                  [&_a]:font-medium
                  [&_a]:text-[#087D56]
                  [&_a]:underline
                  [&_a]:underline-offset-4

                  [&_blockquote]:my-7
                  [&_blockquote]:border-l-[3px]
                  [&_blockquote]:border-[#7AB69D]
                  [&_blockquote]:pl-5
                  [&_blockquote]:italic

                  [&_figure]:my-8
                  [&_figcaption]:mt-3
                  [&_figcaption]:text-center
                  [&_figcaption]:text-sm
                  [&_figcaption]:text-[#71867C]

                  [&_img]:my-7
                  [&_img]:h-auto
                  [&_img]:max-w-full
                  [&_img]:rounded-2xl
                "
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <div className="mt-12 border-t border-[#E3ECE6] pt-7">
                <Button
                  href="/insights"
                  variant="outline"
                  color="green"
                  size="md"
                  showArrow={false}
                >
                  ← ดูบทความทั้งหมด
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
