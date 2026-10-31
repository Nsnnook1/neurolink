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
    <article className="group h-full">
      <Link
        href={`/insights/${article.slug}`}
        aria-label={`อ่านบทความ ${article.title}`}
        className="flex h-full min-w-0 overflow-hidden rounded-[18px] border border-[#E5EDE8] bg-white shadow-[0_3px_16px_rgba(16,58,48,0.035)] transition-colors duration-200 hover:border-[#C6DDD0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07583F] md:flex-col"
      >
        {/* IMAGE */}
        <div className="relative w-[116px] shrink-0 overflow-hidden bg-[#E7F0E9] sm:w-[150px] md:aspect-[16/10] md:w-full">
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
        <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 sm:px-5 md:justify-start md:p-5 lg:p-6">
          {/* CATEGORY + DATE */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#257D60] sm:text-xs md:text-[13px]">
              {article.category}
            </span>

            {formattedDate && (
              <span className="text-xs text-[#667A70] md:text-[13px]">
                {formattedDate}
              </span>
            )}
          </div>

          {/* TITLE */}
          <h3 className="mt-2 line-clamp-3 text-[16px] font-semibold leading-[1.5] text-[#103A30] transition-colors group-hover:text-[#16845F] sm:text-[17px] md:mt-3 md:line-clamp-2 md:text-[20px]">
            {article.title}
          </h3>

          {/* EXCERPT - DESKTOP/TABLET */}
          <p className="mt-3 hidden line-clamp-2 text-[16px] leading-[1.75] text-[#526A61] md:block">
            {article.excerpt}
          </p>

          {/* READ MORE */}
          <span className="mt-3 inline-flex min-h-7 items-center gap-2 self-start text-[14px] font-semibold text-[#07583F] md:mt-auto md:min-h-11 md:pt-4 md:text-[16px]">
            อ่านบทความ
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
