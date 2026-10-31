import { getAllInsights } from "@/lib/insights";
import { getInsightImage } from "@/lib/insightImages";
import Image from "next/image";
import Link from "next/link";
import InsightsExplorer from "@/components/InsightsExplorer";

export default async function InsightsPage() {
  const allArticles = await getAllInsights();
  const featuredArticle = allArticles[0];
  const featuredImage = featuredArticle
    ? getInsightImage(featuredArticle)
    : null;

  const remainingArticles = featuredArticle
    ? allArticles.filter((article) => article.id !== featuredArticle.id)
    : allArticles;

  return (
    <main className="insights-page min-h-screen bg-[#FAFCFB]">
      <div className="insights-background-content">
        {/* HERO */}
        <section className="insights-hero relative px-5 pb-10 pt-12 sm:px-8 lg:pb-12 lg:pt-16">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-[800px]">
              <p className="text-xs font-bold tracking-[0.16em] text-[#07583F] sm:text-sm">
                NEUROLINK INSIGHTS
              </p>

              <h1 className="mt-4 text-[34px] font-bold leading-[1.3] tracking-tight text-[#103A30] sm:text-[44px] lg:text-[52px]">
                เรื่องสุขภาพที่ควรรู้
                <br />
                <span className="text-[#16845F]">
                  เพื่อวันข้างหน้าที่ดีกว่า
                </span>
              </h1>

              <div
                aria-hidden="true"
                className="mt-5 h-[3px] w-12 rounded-full bg-[#16845F]"
              />

              <p className="mt-5 max-w-[680px] text-[16px] leading-[1.9] text-[#36584D] sm:text-[17px] lg:text-[18px]">
                บทความและองค์ความรู้ด้านสุขภาพ เทคโนโลยี และการดูแลคุณภาพชีวิต
                เพื่อช่วยให้ทุกคนเข้าใจมากขึ้น และดูแลสุขภาพได้อย่างมั่นใจ
              </p>
            </div>
          </div>
        </section>
        {/* FEATURED STORY */}
        {featuredArticle && (
          <section className="px-5 pt-8 sm:px-8 lg:pt-10">
            <div className="mx-auto max-w-[1120px]">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="group grid overflow-hidden rounded-[22px] border border-[#E3EBE6] bg-white shadow-[0_10px_35px_rgba(15,65,48,0.045)] transition-shadow duration-300 hover:shadow-[0_16px_42px_rgba(15,65,48,0.09)] lg:grid-cols-[0.92fr_1.08fr] lg:rounded-[26px]"
              >
                {/* Mobile image first */}
                <div className="relative min-h-[210px] overflow-hidden bg-[#E3F0EA] sm:min-h-[300px] lg:order-2 lg:min-h-[330px]">
                  {featuredImage ? (
                    <Image
                      src={featuredImage}
                      alt={featuredArticle.imageAlt || featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1023px) 100vw, 54vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transform-none"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2E9] to-[#D6EAF4]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-col justify-center px-6 py-7 sm:px-9 lg:order-1 lg:px-12 lg:py-10">
                  <span className="self-start rounded-full bg-[#E1F6EB] px-3 py-1.5 text-xs font-bold tracking-[0.06em] text-[#116847]">
                    FEATURED STORY
                  </span>

                  <p className="mt-5 text-sm font-semibold text-[#327D64]">
                    {featuredArticle.category}
                  </p>

                  <h2 className="mt-3 text-[26px] font-bold leading-[1.35] text-[#103A30] transition-colors group-hover:text-[#16845F] sm:text-[30px] lg:text-[36px]">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-[16px] leading-[1.85] text-[#526A61]">
                    {featuredArticle.excerpt}
                  </p>

                  <span className="mt-6 inline-flex min-h-11 items-center gap-3 self-start text-base font-semibold text-[#07583F]">
                    อ่านบทความ
                    <span
                      aria-hidden="true"
                      className="text-xl transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}
        {/* ARTICLE EXPLORER */}
        <section className="px-5 pb-8 pt-7 sm:px-8 lg:pb-24 lg:pt-12">
          <div className="mx-auto max-w-[1120px]">
            <InsightsExplorer articles={remainingArticles} />
          </div>
        </section>
      </div>
    </main>
  );
}
