import Link from "next/link";
import InsightCard from "@/components/InsightCard";
import { getLatestInsights } from "@/lib/insights";

export default async function Insights() {
  const articles = await getLatestInsights(3);

  return (
    <section id="insights" className="bg-[#F0F7F3] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
              INSIGHTS
            </p>

            <h2 className="mt-5 max-w-[780px] text-[30px] font-bold leading-[1.25] tracking-tight text-[#0B3328] sm:text-[36px] lg:text-[42px]">
              บทความและความรู้
              <span className="text-[#16825D]"> เพื่อสุขภาพที่ดีกว่า</span>
            </h2>

            <p className="mt-4 text-base leading-[1.8] text-[#506960]">
              เข้าใจมากขึ้น ดูแลได้มากขึ้น
              ผ่านบทความและความรู้ด้านสุขภาพที่นำไปใช้ได้จริง
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#07583F] px-6 py-3 text-base font-semibold text-[#07583F] transition-colors hover:bg-[#07583F] hover:text-white"
          >
            ดูบทความทั้งหมด
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {articles.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {articles.map((article) => (
              <InsightCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-[#D7E4DC] bg-white/70 px-6 py-14 text-center lg:mt-12">
            <p className="text-[20px] font-semibold text-[#0B3328]">
              บทความใหม่กำลังจะมาเร็ว ๆ นี้
            </p>

            <p className="mt-3 text-base leading-[1.8] text-[#506960]">
              ติดตามความรู้ด้านสุขภาพ เทคโนโลยี และการดูแลคุณภาพชีวิตได้ที่นี่
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
