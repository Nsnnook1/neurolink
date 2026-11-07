import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/types/insight";
import { getInsightImage } from "@/lib/insightImages";

type InsightCardProps = {
  article: Insight;
};

export default function InsightCard({ article }: InsightCardProps) {
  const imageSrc = getInsightImage(article);

  const publishedDate = new Date(article.publishedAt);

  const formattedDate = Number.isNaN(publishedDate.getTime())
    ? ""
    : new Intl.DateTimeFormat("th-TH", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Bangkok",
      }).format(publishedDate);

  return (
    <article className="group h-full min-h-0">
      <Link
        href={`/insights/${article.slug}`}
        aria-label={`อ่านบทความเพิ่มเติม ${article.title}`}
        className="flex h-full min-h-0 min-w-0 overflow-hidden rounded-[18px] border border-[#E5EDE8] bg-white shadow-[0_3px_16px_rgba(16,58,48,0.035)] transition-colors duration-200 hover:border-[#C6DDD0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07583F] md:flex-col"
      >
        {/* IMAGE */}
        <div className="relative w-[116px] shrink-0 overflow-hidden bg-[#E7F0E9] sm:w-[150px] md:h-[140px] md:w-full lg:h-[150px]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={article.imageAlt || article.title}
              fill
              sizes="(max-width: 639px) 116px, (max-width: 767px) 150px, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(135deg,#EAF3EE,#CFE2F2)]"
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-4 py-4 sm:px-5 md:p-4 lg:p-5">
          {/* CATEGORY + DATE */}
          <div className="flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#257D60] sm:text-xs md:text-[12px]">
              {article.category}
            </span>

            {formattedDate && (
              <span className="text-xs text-[#667A70]">{formattedDate}</span>
            )}
          </div>

          {/* TITLE */}
          <h3 className="mt-2 line-clamp-3 text-[16px] font-semibold leading-[1.5] text-[#103A30] transition-colors group-hover:text-[#16845F] sm:text-[17px] md:line-clamp-2 md:text-[18px]">
            {article.title}
          </h3>

          {/* EXCERPT */}
          <p className="mt-2 hidden min-h-0 flex-1 overflow-hidden text-[13px] leading-[1.5] text-[#526A61] md:line-clamp-2">
            {article.excerpt}
          </p>

          {/* READ MORE - ALWAYS VISIBLE */}
          <span className="mt-auto inline-flex min-h-8 shrink-0 items-center gap-2 self-start pt-2 text-[13px] font-semibold text-[#07583F] md:text-[14px]">
            อ่านบทความเพิ่มเติม
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
