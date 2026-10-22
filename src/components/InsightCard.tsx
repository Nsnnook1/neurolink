import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/types/insight";

type InsightCardProps = {
  article: Insight;
};

export default function InsightCard({ article }: InsightCardProps) {
  const formattedDate = new Intl.DateTimeFormat("th-TH", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date(article.publishedAt));

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E0EAE3] bg-white transition-all duration-300 hover:border-[#B8D8C5] hover:shadow-[0_12px_32px_rgba(11,51,40,0.08)]">
      <Link
        href={`/insights/${article.slug}`}
        className="block focus-visible:outline-offset-[-3px]"
        aria-label={`อ่านบทความ ${article.title}`}
      >
        <div
          className={`relative aspect-[16/10] overflow-hidden ${
            article.category === "NUTRITION"
              ? "bg-[#CFE8D6]"
              : article.category === "LIFESTYLE"
                ? "bg-[#F0E5D5]"
                : "bg-[#CFE2F2]"
          }`}
        >
          {article.coverImage ? (
            <Image
              src={article.coverImage}
              alt={article.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
            />
          ) : (
            <span className="sr-only">{article.imageAlt}</span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#398366]">
            {article.category}
          </span>
          <span className="text-sm text-[#61716A]">{formattedDate}</span>
        </div>

        <h3 className="mt-3 text-[20px] font-semibold leading-[1.4] text-[#0B3328]">
          <Link
            href={`/insights/${article.slug}`}
            className="transition-colors hover:text-[#398366]"
          >
            {article.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-base leading-[1.8] text-[#506960]">
          {article.excerpt}
        </p>

        <Link
          href={`/insights/${article.slug}`}
          className="mt-auto inline-flex min-h-12 items-center gap-2 self-start pt-5 text-base font-semibold text-[#07583F] hover:text-[#398366]"
        >
          อ่านบทความ
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
