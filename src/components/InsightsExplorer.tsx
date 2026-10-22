"use client";

import { useMemo, useState } from "react";
import InsightCard from "@/components/InsightCard";
import type { Insight } from "@/types/insight";

const PAGE_SIZE = 9;

export default function InsightsExplorer({
  articles,
}: {
  articles: Insight[];
}) {
  const [category, setCategory] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => [
      "All Articles",
      ...Array.from(new Set(articles.map((item) => item.category))),
    ],
    [articles],
  );

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        category === "All Articles" || article.category === category;

      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        `${article.title} ${article.excerpt} ${article.category}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, category, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / PAGE_SIZE),
  );

  const visibleArticles = filteredArticles.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
            EXPLORE ARTICLES
          </p>
          <h2 className="mt-3 text-[28px] font-bold text-[#0B3328] lg:text-[36px]">
            บทความทั้งหมด
          </h2>
        </div>

        <div className="w-full lg:max-w-[400px]">
          <label htmlFor="insights-search" className="sr-only">
            ค้นหาบทความ
          </label>
          <input
            id="insights-search"
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
            placeholder="ค้นหาบทความ..."
            className="min-h-12 w-full rounded-full border border-[#D7E4DC] bg-white px-5 text-base text-[#0B3328] outline-none focus:border-[#398366]"
          />
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="mt-8 flex flex-wrap gap-3">
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
              className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "border-[#07583F] bg-[#07583F] text-white"
                  : "border-[#D7E4DC] bg-white text-[#506960] hover:border-[#07583F] hover:text-[#07583F]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* ARTICLE GRID */}
      {visibleArticles.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <InsightCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-[#D7E4DC] bg-white px-6 py-16 text-center">
          <h3 className="text-[20px] font-semibold text-[#0B3328]">
            {articles.length === 0
              ? "บทความใหม่กำลังจะมาเร็ว ๆ นี้"
              : "ไม่พบบทความที่ค้นหา"}
          </h3>
          <p className="mt-3 text-base leading-[1.8] text-[#506960]">
            {articles.length === 0
              ? "ติดตามความรู้ด้านสุขภาพ เทคโนโลยี และการดูแลคุณภาพชีวิตได้ที่นี่"
              : "ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น"}
          </p>
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((current) => current - 1)}
            className="min-h-11 rounded-full border border-[#D7E4DC] bg-white px-5 text-base text-[#07583F] disabled:opacity-40"
          >
            ← ก่อนหน้า
          </button>

          <span className="text-base text-[#506960]">
            {page} / {totalPages}
          </span>

          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage((current) => current + 1)}
            className="min-h-11 rounded-full border border-[#D7E4DC] bg-white px-5 text-base text-[#07583F] disabled:opacity-40"
          >
            ถัดไป →
          </button>
        </div>
      )}
    </div>
  );
}
