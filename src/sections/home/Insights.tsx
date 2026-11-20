import { getLatestInsights } from "@/lib/insights";
// import type { Insight } from "@/types/insight";
import Button from "@/components/Button";
import InsightCard from "@/components/InsightCard";

export default async function Insights() {
  const articles = await getLatestInsights(3);
  // const articles: Insight[] = [];

  return (
    <section
      id="insights"
      className="bg-[linear-gradient(135deg,#F2FAF7_0%,#F5FAFC_55%,#FFFFFF_100%)] px-5 py-12 lg:px-8 lg:pt-12 lg:pb-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
              INSIGHTS
            </p>

            <h2 className="mt-3 max-w-[780px] text-[30px] font-bold leading-[1.25] tracking-tight text-[#0B3328] sm:text-[36px] lg:text-[42px]">
              บทความและความรู้
              <span className="block text-[#16825D] lg:inline">
                เพื่อสุขภาพที่ดีกว่า
              </span>
            </h2>

            <p className="mt-3 text-base leading-[1.8] text-[#506960]">
              เข้าใจมากขึ้น ดูแลได้มากขึ้น
              ผ่านบทความและความรู้ด้านสุขภาพที่นำไปใช้ได้จริง
            </p>
          </div>

          <Button
            href="/insights"
            variant="primary"
            color="green"
            size="lg"
            className="shrink-0 self-start lg:border lg:border-[#07583F] lg:bg-transparent lg:text-[#07583F] lg:hover:bg-[#07583F] lg:hover:text-white"
          >
            ดูบทความทั้งหมด
          </Button>
        </div>

        {articles.length > 0 ? (
          <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 lg:mt-9 lg:grid-cols-3">
            {articles.map((article) => (
              <InsightCard key={article.id} article={article} featured />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-[#D7E4DC] bg-white/70 px-6 py-14 text-center sm:min-h-[380px] lg:mt-9 lg:min-h-[420px]">
            <p className="text-[20px] font-semibold text-[#0B3328]">
              บทความใหม่กำลังจะมาเร็ว ๆ นี้
            </p>
            <p className="mt-3 text-base leading-[1.8] text-[#506960]">
              ติดตามความรู้ด้านสุขภาพ เทคโนโลยี
              <span className="block lg:inline">
                และการดูแลคุณภาพชีวิตได้ที่นี่
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
