"use client";

import { useMemo, useState } from "react";
import InsightCard from "@/components/InsightCard";
import type { Insight } from "@/types/insight";

const PAGE_SIZE = 6;

export default function InsightsExplorer({
  articles,
}: {
  articles: Insight[];
}) {
  const [category, setCategory] = useState("All Articles");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => [
      "All Articles",
      ...Array.from(new Set(articles.map((item) => item.category))),
    ],
    [articles],
  );

  const filteredArticles = useMemo(
    () =>
      articles.filter(
        (article) =>
          category === "All Articles" || article.category === category,
      ),
    [articles, category],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / PAGE_SIZE),
  );

  const currentPage = Math.min(page, totalPages);

  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const pageNumbers = useMemo(() => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    const start = Math.max(2, Math.min(currentPage - 1, totalPages - 3));

    const end = Math.min(totalPages - 1, Math.max(currentPage + 1, 4));

    pages.push(1);

    if (start > 2) {
      pages.push("ellipsis");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);

  function changePage(nextPage: number) {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  }

  return (
    <div>
      {/* CATEGORY FILTER */}
      <div
        aria-label="เลือกหมวดหมู่บทความ"
        className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-3 scrollbar-hide sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {categories.map((item) => {
          const active = category === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
              aria-pressed={active}
              className={`inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07583F] ${
                active
                  ? "border-[#07583F] bg-[#07583F] text-white"
                  : "border-[#DCE8E1] bg-white text-[#36594E] hover:border-[#07583F] hover:text-[#07583F]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* ARTICLE GRID */}
      {visibleArticles.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:mt-9 lg:grid-cols-3 lg:gap-6">
          {visibleArticles.map((article) => (
            <InsightCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-[#E1EAE4] bg-white px-6 py-16 text-center">
          <h3 className="text-xl font-semibold text-[#103A30]">
            {articles.length === 0
              ? "บทความใหม่กำลังจะมาเร็ว ๆ นี้"
              : "ยังไม่มีบทความในหมวดหมู่นี้"}
          </h3>

          <p className="mt-3 text-base leading-[1.8] text-[#526A61]">
            {articles.length === 0
              ? "ติดตามความรู้ด้านสุขภาพและเทคโนโลยีได้ที่นี่"
              : "ลองเลือกหมวดหมู่อื่นเพื่อสำรวจบทความเพิ่มเติม"}
          </p>
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <nav
          aria-label="หน้าบทความ"
          className="mt-12 flex items-center justify-center gap-1 sm:gap-2 lg:mt-14"
        >
          <button
            type="button"
            aria-label="หน้าก่อนหน้า"
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl text-[#07583F] transition-colors hover:bg-[#EDF5F0] disabled:cursor-not-allowed disabled:opacity-30"
          >
            ‹
          </button>

          {pageNumbers.map((item, index) =>
            item === "ellipsis" ? (
              <span
                key={`ellipsis-${index}`}
                aria-hidden="true"
                className="flex h-11 w-5 items-center justify-center text-[#667A70]"
              >
                …
              </span>
            ) : (
              <button
                key={item}
                type="button"
                aria-label={`หน้าที่ ${item}`}
                aria-current={currentPage === item ? "page" : undefined}
                onClick={() => changePage(item)}
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07583F] ${
                  currentPage === item
                    ? "bg-[#07583F] text-white shadow-[0_4px_12px_rgba(7,88,63,0.15)]"
                    : "text-[#36594E] hover:bg-[#EDF5F0]"
                }`}
              >
                {item}
              </button>
            ),
          )}

          <button
            type="button"
            aria-label="หน้าถัดไป"
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl text-[#07583F] transition-colors hover:bg-[#EDF5F0] disabled:cursor-not-allowed disabled:opacity-30"
          >
            ›
          </button>
        </nav>
      )}
    </div>
  );
}
