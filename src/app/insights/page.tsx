import Image from "next/image";
import Link from "next/link";

import InsightsExplorer from "@/components/InsightsExplorer";
import { getAllInsights } from "@/lib/insights";
import { getInsightImage } from "@/lib/insightImages";

const DESKTOP_FEATURED_IMAGE = "/images/insights/default-placeholder.jpg";

const topics = [
  { label: "สมองและระบบประสาท", icon: "brain" },
  { label: "เทคโนโลยีการแพทย์", icon: "medical" },
  { label: "การดูแลสุขภาพเชิงป้องกัน", icon: "leaf" },
] as const;

type TopicIconName = (typeof topics)[number]["icon"];

function TopicIcon({ name }: { name: TopicIconName }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
    "aria-hidden": true as const,
  };

  if (name === "brain") {
    return (
      <svg {...commonProps}>
        <path d="M12 19V5a3 3 0 0 0-5.5-1.7A4.5 4.5 0 0 0 4 10a4 4 0 0 0 2 7.5A3.5 3.5 0 0 0 12 19Z" />
        <path d="M12 19V5a3 3 0 0 1 5.5-1.7A4.5 4.5 0 0 1 20 10a4 4 0 0 1-2 7.5A3.5 3.5 0 0 1 12 19Z" />
        <path d="M8 8c2 0 3 1 4 3M16 8c-2 0-3 1-4 3" />
      </svg>
    );
  }

  if (name === "medical") {
    return (
      <svg {...commonProps}>
        <path d="M8 3v5a4 4 0 0 0 8 0V3" />
        <path d="M6 3h4M14 3h4" />
        <path d="M12 12v3a5 5 0 0 0 10 0v-2" />
        <circle cx="22" cy="11" r="1" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-6 10-16Z" />
      <path d="M4 21c3-6 7-10 13-13" />
    </svg>
  );
}

function GlassTopic({
  label,
  icon,
  index,
}: {
  label: string;
  icon: TopicIconName;
  index: number;
}) {
  return (
    <div
      className="insights-glass-reveal group/topic relative flex min-w-0 flex-1 flex-col items-center pt-7 text-center"
      style={{
        animationDelay: `${350 + index * 150}ms`,
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 bottom-0 h-20 rounded-full bg-[#A3E6D2]/25 blur-2xl"
      />

      {/* Glass surface */}
      <div className="insights-glass-hover relative flex h-[112px] w-full flex-col items-center justify-end rounded-[28px] border border-white/60 bg-gradient-to-br from-white/45 via-white/20 to-[#C7F1E8]/25 px-2 pb-5 shadow-[0_12px_35px_rgba(20,101,81,0.055)] backdrop-blur-xl">
        {/* Floating icon */}
        <span className="absolute -top-7 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/90 bg-gradient-to-br from-white/90 to-[#E7F8F2]/80 text-[#07583F] shadow-[0_8px_22px_rgba(20,101,81,0.08)] backdrop-blur-xl">
          <TopicIcon name={icon} />
        </span>

        {/* Label */}
        <p className="relative z-10 flex min-h-[38px] items-center justify-center text-[12px] font-semibold leading-[1.5] text-[#103A30] xl:text-[13px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default async function InsightsPage() {
  const allArticles = await getAllInsights();

  const [featuredArticle, ...remainingArticles] = allArticles;

  const featuredImage = featuredArticle
    ? getInsightImage(featuredArticle)
    : null;

  return (
    <main className="insights-page min-h-screen bg-[#FAFCFB]">
      <div className="insights-background-content">
        {/* HERO */}
        <section className="insights-hero relative px-5 pb-10 pt-12 sm:px-8 lg:pb-5 lg:pt-12">
          {/* AURORA LIGHT TRAIL - SAME AS HOME HERO */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          >
            <svg
              viewBox="0 0 1440 520"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
            >
              <g transform="translate(630) scale(1 1.2)">
                {/* Soft glow */}
                <path
                  d="M160 0 C 220 105, 390 290, 630 300"
                  stroke="#E5FFFA"
                  strokeWidth="9"
                  strokeOpacity="0.25"
                />

                {/* Cyan light trail */}
                <path
                  d="M160 0 C 220 105, 390 290, 630 300"
                  stroke="#A9FFF0"
                  strokeWidth="2"
                  strokeOpacity="0.85"
                  className="hero-light-trail"
                  pathLength="1"
                  
                />
              </g>
            </svg>
          </div>

          <div className="mx-auto max-w-[1120px]">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
              <div className="min-w-0">
                <div className="flex items-center gap-4">
                  <p className="text-xs font-bold tracking-[0.16em] text-[#07583F] sm:text-sm">
                    NEUROLINK INSIGHTS
                  </p>

                  <span
                    aria-hidden="true"
                    className="hidden h-px w-12 bg-[#07583F]/60 lg:block"
                  />
                </div>

                <h1 className="mt-4 text-[34px] font-bold leading-[1.3] tracking-tight text-[#103A30] sm:text-[44px] lg:text-[43px] xl:text-[46px]">
                  เรื่องสุขภาพที่ควรรู้
                  <br />
                  <span className="text-[#16845F]">
                    เพื่อวันข้างหน้าที่ดีกว่า
                  </span>
                </h1>

                <div
                  aria-hidden="true"
                  className="mt-5 h-[3px] w-12 rounded-full bg-[#16845F] lg:h-px lg:w-[240px] lg:bg-gradient-to-r lg:from-[#A5CFC0] lg:to-transparent"
                />

                <p className="mt-5 max-w-[610px] text-[16px] leading-[1.9] text-[#36584D] sm:text-[17px] lg:max-w-[560px] lg:text-[16px]">
                  บทความและองค์ความรู้ด้านสุขภาพ เทคโนโลยี และการดูแลคุณภาพชีวิต
                  เพื่อช่วยให้ทุกคนเข้าใจมากขึ้น และดูแลสุขภาพได้อย่างมั่นใจ
                </p>
              </div>

              {/* DESKTOP GLASS TOPICS */}
              <div
                aria-label="หัวข้อความรู้ด้านสุขภาพ"
                className="hidden items-end justify-end gap-4 lg:flex lg:translate-y-5"
              >
                {topics.map((topic, index) => (
                  <GlassTopic
                    key={topic.icon}
                    label={topic.label}
                    icon={topic.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED STORY */}
        {featuredArticle && (
          <section className="px-5 pt-8 sm:px-8 lg:pt-4">
            <div className="mx-auto max-w-[1120px]">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="group relative grid overflow-hidden rounded-[22px] border border-[#E3EBE6] bg-white shadow-[0_12px_38px_rgba(15,65,48,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(15,65,48,0.11)] lg:block lg:min-h-[380px] lg:rounded-[28px]"
              >
                {/* MOBILE IMAGE */}
                <div className="relative min-h-[210px] overflow-hidden bg-[#E3F0EA] sm:min-h-[300px] lg:hidden">
                  {featuredImage ? (
                    <Image
                      src={featuredImage}
                      alt={featuredArticle.imageAlt || featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1023px) 100vw, 1120px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2E9] to-[#D6EAF4]" />
                  )}
                </div>

                {/* DESKTOP FEATURED BACKGROUND */}
                <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
                  {/* Full-width image prevents a hard vertical seam */}
                  <Image
                    src={DESKTOP_FEATURED_IMAGE}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 1120px, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none"
                  />

                  {/* White-to-mint gradient blending into the image */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFFFF_0%,#F7FCF9_23%,rgba(242,251,247,0.98)_34%,rgba(227,247,238,0.78)_47%,rgba(210,242,232,0.30)_65%,transparent_82%)]" />

                  {/* Soft mint light near the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#DDF5E9]/20 to-transparent" />
                </div>

                {/* FEATURED CONTENT */}
                <div className="relative flex min-w-0 flex-col justify-center px-6 py-7 sm:px-9 lg:my-6 lg:ml-6 lg:mr-0 lg:min-h-[332px] lg:w-[47%] lg:rounded-[24px_56px_52px_24px] lg:border lg:border-white/80 lg:bg-white/80 lg:px-8 lg:py-6 lg:shadow-[0_12px_38px_rgba(15,65,48,0.065)] lg:backdrop-blur-xl">
                  <span className="self-start rounded-full bg-[#E1F6EB] px-3 py-1.5 text-xs font-bold tracking-[0.06em] text-[#116847]">
                    FEATURED STORY
                  </span>

                  <p className="mt-4 text-sm font-semibold text-[#327D64]">
                    {featuredArticle.category}
                  </p>

                  <h2 className="mt-3 text-[26px] font-bold leading-[1.35] text-[#103A30] transition-colors group-hover:text-[#16845F] sm:text-[30px] lg:line-clamp-3 lg:text-[28px]">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-[16px] leading-[1.85] text-[#526A61] lg:line-clamp-2 lg:text-[15px]">
                    {featuredArticle.excerpt}
                  </p>

                  <span className="mt-5 inline-flex min-h-11 items-center gap-3 self-start text-base font-semibold text-[#07583F]">
                    อ่านบทความเพิ่มเติม
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
            <div className="mb-7 hidden items-center gap-5 lg:flex">
              <h2 className="shrink-0 text-[15px] font-bold tracking-[0.16em] text-[#07583F]">
                THE LATEST INSIGHTS
              </h2>

              <div aria-hidden="true" className="h-px flex-1 bg-[#A8C8BB]" />

              <p className="text-sm text-[#526A61]">
                บทความล่าสุดและเรื่องราวที่น่าสนใจ
              </p>
            </div>

            <InsightsExplorer articles={remainingArticles} />
          </div>
        </section>
      </div>
    </main>
  );
}
