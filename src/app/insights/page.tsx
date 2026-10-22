import Link from "next/link";
import InsightCard from "@/components/InsightCard";
import InsightsExplorer from "@/components/InsightsExplorer";
import { getAllInsights } from "@/lib/insights";

type InsightsPageProps = {
  searchParams: Promise<{
    category?: string;
    q?: string;
    page?: string;
  }>;
};

const PAGE_SIZE = 9;

export default async function InsightsPage({
  searchParams,
}: InsightsPageProps) {
  const params = await searchParams;
  const allArticles = await getAllInsights();

  const categories = [
    "All Articles",
    ...Array.from(new Set(allArticles.map((item) => item.category))),
  ];

  const selectedCategory = params.category || "All Articles";
  const searchQuery = (params.q || "").trim();

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Articles" ||
      article.category === selectedCategory;

    const matchesSearch =
      !searchQuery ||
      `${article.title} ${article.excerpt} ${article.category}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / PAGE_SIZE),
  );

  const requestedPage = Number(params.page || 1);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(Math.floor(requestedPage), 1), totalPages)
    : 1;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const featuredArticle =
    selectedCategory === "All Articles" && !searchQuery
      ? allArticles[0]
      : undefined;

  function buildUrl(options: { category?: string; q?: string; page?: number }) {
    const query = new URLSearchParams();

    if (options.category && options.category !== "All Articles") {
      query.set("category", options.category);
    }

    if (options.q) {
      query.set("q", options.q);
    }

    if (options.page && options.page > 1) {
      query.set("page", String(options.page));
    }

    const result = query.toString();
    return result ? `/insights?${result}` : "/insights";
  }

  return (
    <main className="min-h-screen bg-[#F8FBF9]">
      {/* PAGE INTRO */}
      <section className="bg-[#EAF3EE] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
            NEUROLINK INSIGHTS
          </p>

          <h1 className="mt-5 max-w-[850px] text-[36px] font-bold leading-[1.2] tracking-tight text-[#0B3328] lg:text-[52px]">
            เรื่องสุขภาพที่ควรรู้
            <br />
            <span className="text-[#16825D]">เพื่อวันข้างหน้าที่ดีกว่า</span>
          </h1>

          <p className="mt-6 max-w-[720px] text-base leading-[1.8] text-[#506960] lg:text-lg">
            บทความและองค์ความรู้ด้านสุขภาพ เทคโนโลยี และการดูแลคุณภาพชีวิต
            เพื่อช่วยให้ทุกคนเข้าใจมากขึ้น และดูแลสุขภาพได้อย่างมั่นใจ
          </p>

          {/* FEATURED ARTICLE */}
          {featuredArticle && (
            <Link
              href={`/insights/${featuredArticle.slug}`}
              className="group mt-12 grid overflow-hidden rounded-3xl border border-[#D7E4DC] bg-white lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="flex flex-col justify-center p-7 lg:p-12">
                <p className="text-sm font-semibold tracking-[0.12em] text-[#398366]">
                  FEATURED STORY
                </p>

                <p className="mt-5 text-sm font-medium text-[#61716A]">
                  {featuredArticle.category}
                </p>

                <h2 className="mt-3 text-[26px] font-bold leading-[1.3] text-[#0B3328] lg:text-[36px]">
                  {featuredArticle.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-base leading-[1.8] text-[#506960]">
                  {featuredArticle.excerpt}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-[#07583F]">
                  อ่านบทความ
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>

              <div className="flex min-h-[240px] items-center justify-center bg-[#CFE2D8] lg:min-h-[390px]">
                <span className="text-sm font-semibold tracking-[0.15em] text-[#398366]">
                  FEATURED IMAGE
                </span>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* ARTICLES */}
      <section className="min-h-[850px] px-5 py-14 lg:min-h-[900px] lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <InsightsExplorer articles={allArticles} />
        </div>
      </section>
    </main>
  );
}
