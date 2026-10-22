import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsightBySlug } from "@/lib/insights";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const categoryColors: Record<string, string> = {
  NUTRITION: "#CFE8D6",
  LIFESTYLE: "#F0E5D5",
  "BRAIN HEALTH": "#CFE2F2",
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = new Intl.DateTimeFormat("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date(article.publishedAt));

  return (
    <main className="bg-white">
      {/* ARTICLE HEADER */}
      <section className="bg-[#EAF3EE] px-5 pb-12 pt-14 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-[900px]">
          <Link
            href="/insights"
            className="inline-flex min-h-12 items-center text-base font-medium text-[#398366] transition-colors hover:text-[#07583F]"
          >
            ← กลับไปหน้าบทความทั้งหมด
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold tracking-wide text-[#398366]">
            <span>{article.category}</span>
            <span className="text-[#9CB5A8]">•</span>
            <time dateTime={article.publishedAt}>{publishedDate}</time>
          </div>

          <h1 className="mt-5 text-[32px] font-bold leading-[1.3] tracking-tight text-[#0B3328] sm:text-[42px] lg:text-[52px]">
            {article.title}
          </h1>

          <p className="mt-6 max-w-[760px] text-base leading-[1.9] text-[#506960] lg:text-lg">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section className="px-5 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-[1000px]">
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-[16/8]"
            style={{
              backgroundColor: categoryColors[article.category] ?? "#E5EEE8",
            }}
          >
            {article.coverImage && (
              <Image
                src={article.coverImage}
                alt={article.imageAlt || article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-16">
        <article className="mx-auto max-w-[760px]">
          <div className="whitespace-pre-line text-base leading-[2] text-[#344C43] lg:text-lg">
            {article.content}
          </div>

          <div className="mt-16 border-t border-[#D7E4DC] pt-8">
            <Link
              href="/insights"
              className="inline-flex min-h-12 items-center rounded-full border border-[#07583F] px-6 text-base font-semibold text-[#07583F] transition-colors hover:bg-[#07583F] hover:text-white"
            >
              ← ดูบทความทั้งหมด
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
