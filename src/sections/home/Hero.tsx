import Button from "@/components/Button";

const features = [
  {
    title: "เทคโนโลยีและข้อมูล",
    description: "เพื่อการดูแลสุขภาพที่เข้าใจง่าย",
    icon: "data",
  },
  {
    title: "องค์ความรู้ทางการแพทย์",
    description: "เชื่อมโยงความรู้กับนวัตกรรม",
    icon: "medical",
  },
  {
    title: "การดูแลที่เข้าถึงง่าย",
    description: "เพื่อสุขภาพที่ดีขึ้นในทุกช่วงวัย",
    icon: "care",
  },
] as const;

function FeatureIcon({ type }: { type: (typeof features)[number]["icon"] }) {
  if (type === "data") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <path d="M9 8v8m6-8v8M7 12h10M12 6v12" />
      </svg>
    );
  }

  if (type === "medical") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M6 3v5a6 6 0 0 0 12 0V3M6 3H4M18 3h2" />
        <path d="M12 14v4a3 3 0 0 0 6 0v-2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2M17 10l2 2 3-3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate -mt-20 overflow-hidden bg-[#EAF4EE]"
    >
      {/* Mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center lg:hidden"
        style={{
          backgroundImage: "url('/images/hero-neurolink-mobile.png')",
        }}
      />

      {/* Desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 hidden bg-cover bg-center lg:block"
        style={{
          backgroundImage: "url('/images/hero-neurolink.png')",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/50 to-white/15 lg:bg-gradient-to-r lg:from-white/85 lg:via-white/25 lg:to-transparent"
      />

      <div className="relative mx-auto grid min-h-[860px] max-w-[1440px] grid-cols-1 content-start gap-10 px-5 pb-20 pt-30 lg:min-h-[780px] lg:grid-cols-[1.1fr_0.9fr] lg:content-center lg:items-center lg:gap-8 lg:px-14 lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-[650px] text-center lg:mx-0 lg:text-left">
          <p className="mx-auto max-w-[300px] text-[12px] font-medium leading-[1.9] tracking-[0.18em] text-[#506960] lg:mx-0 lg:max-w-none lg:text-base lg:tracking-[0.12em]">
            TECHNOLOGY FOR BETTER HEALTH
            <br />
            TODAY AND TOMORROW
          </p>

          <h1 className="mt-7 text-[36px] font-bold leading-[1.25] tracking-[-0.035em] text-[#0B3328] sm:text-[42px] lg:mt-8 lg:text-h1-desktop">
            เชื่อมต่อเทคโนโลยี
            <br />
            <span className="font-medium text-[#477B67]">
              เพื่อสุขภาพที่ดียิ่งขึ้น
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[440px] text-base leading-[1.8] text-[#40584E] lg:mx-0 lg:mt-7 lg:max-w-[520px]">
            NeuroLink ผสานเทคโนโลยี องค์ความรู้ทางการแพทย์ และข้อมูลสุขภาพ
            เพื่อสนับสนุนการดูแลสุขภาพที่เข้าถึงง่าย เข้าใจได้ และนำไปใช้ได้จริง
          </p>

          <div className="mt-6 flex justify-center lg:mt-9 lg:justify-start">
            <Button href="/solutions">สำรวจโซลูชันของเรา</Button>
          </div>
        </div>

        {/* glass cards */}
        <div className="relative z-10 mx-auto flex w-full max-w-[420px] flex-col gap-4 lg:mx-0 lg:max-w-none lg:items-end lg:gap-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 420 520"
            fill="none"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
          >
            <path
              d="M160 0 C 20 130, 20 330, 200 520"
              stroke="#E5FFFA"
              strokeWidth="9"
              strokeOpacity="0.25"
            />

            <path
              d="M160 0 C 20 130, 20 330, 200 520"
              stroke="#A9FFF0"
              strokeWidth="2"
              strokeOpacity="0.85"
              className="hero-light-trail"
              pathLength="1"
            />

            <circle
              cx="115"
              cy="70"
              r="5"
              fill="#E5FFFA"
              className="hero-light-node"
            />
            <circle
              cx="75"
              cy="260"
              r="5"
              fill="#E5FFFA"
              className="hero-light-node"
            />
            <circle
              cx="200"
              cy="520"
              r="5"
              fill="#E5FFFA"
              className="hero-light-node"
            />
          </svg>

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={[
                "hero-glass-enter relative flex w-full max-w-[360px] items-center gap-3 rounded-[22px] p-4",
                "border border-white/80 bg-white/20",
                "shadow-[0_16px_48px_rgba(13,65,45,0.14),inset_0_1px_0_rgba(255,255,255,0.85)]",
                "backdrop-blur-lg backdrop-saturate-150",
                "transition-[box-shadow,border-color] duration-300",
                "lg:hover:border-white lg:hover:shadow-[0_20px_52px_rgba(13,65,45,0.22)]",
                "lg:gap-4 lg:rounded-[24px] lg:p-5",
                index === 0 ? "mr-auto lg:mr-24" : "",
                index === 1 ? "ml-auto lg:mr-0" : "",
                index === 2 ? "mr-auto lg:mr-16" : "",
              ].join(" ")}
              style={{
                animationDelay: `${0.3 + index * 0.2}s`,
              }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/35 text-[#174D3C] backdrop-blur-sm">
                <FeatureIcon type={feature.icon} />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-base font-semibold text-[#0B3328]">
                  {feature.title}
                </h2>
                <p className="mt-1 text-base leading-relaxed text-[#506960]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
