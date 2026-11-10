export default function AboutPage() {
  return (
    <main>
      {/* 01 — ABOUT HERO */}
      <section className="relative isolate -mt-20 flex min-h-[700px] items-start overflow-hidden bg-[#EAF7FC] px-5 pb-20 pt-36 sm:min-h-[760px] lg:min-h-[800px] lg:items-center lg:px-10 lg:pb-24 lg:pt-44">
        {/* Desktop Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{
            backgroundImage: "url('/images/about/about-hero-bg.png')",
          }}
        />

        {/* Mobile Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{
            backgroundImage: "url('/images/about/about-hero-mobile-bg.png')",
          }}
        />

        {/* Soft Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white/80 via-white/40 to-transparent lg:from-white/60 lg:via-white/15"
        />

        {/* Animated Light Trail — Desktop Only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
        >
          <svg
            className="about-light-trail absolute right-[-5%] top-[4%] hidden h-[70%] w-[66%] lg:block"
            viewBox="0 0 900 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 490 Q 380 10 900 25"
              stroke="#B8FFF1"
              strokeWidth="10"
              opacity="0.28"
              className="about-light-glow"
            />
            <path
              d="M 0 490 Q 380 10 900 25"
              stroke="#DFFFF9"
              strokeWidth="2"
              opacity="0.9"
              className="about-light-line"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] lg:-translate-y-10">
          <div className="max-w-[720px]">
            {/* Eyebrow + Decorative Line */}
            <div className="about-text-reveal about-text-delay-1 flex items-center gap-5">
              <p className="shrink-0 text-xs font-bold tracking-[0.2em] text-[#16825D] sm:text-sm">
                ABOUT NEUROLINK
              </p>

              <span
                aria-hidden="true"
                className="h-px w-[58px] shrink-0 bg-[#16825D] sm:w-[72px]"
              />
            </div>

            {/* Main Headline */}
            <h1 className="about-text-reveal about-text-delay-2 mt-6 text-[38px] font-bold leading-[1.14] tracking-tight text-[#0B3328] sm:text-[52px] lg:text-[64px]">
              Connecting Technology
              <br className="hidden sm:block" /> with{" "}
              <span className="text-[#16825D]">Better Health</span>
            </h1>

            <h2 className="about-text-reveal about-text-delay-3 mt-7 text-[19px] font-semibold leading-[1.55] text-[#0B3328] sm:text-[23px] lg:text-[26px]">
              เชื่อมต่อเทคโนโลยี
              <br className="sm:hidden" /> เพื่อสุขภาพและคุณภาพชีวิตที่ดีกว่า
            </h2>

            <div
              aria-hidden="true"
              className="about-text-reveal about-text-delay-4 mt-7 h-[4px] w-[64px] rounded-full bg-gradient-to-r from-[#087D56] via-[#20C788] to-[#A5FFCC] lg:mt-6"
            />

            <div className="relative mt-5 max-w-[580px]">
              {/* Soft White Glow — Mobile Only */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-5 -inset-y-5 -z-10 rounded-[50%] bg-white/80 blur-[35px] lg:hidden"
              />

              {/* Mobile / Tablet Description */}
              <p className="about-text-reveal about-text-delay-4 relative text-[15px] leading-[1.9] text-[#506960] sm:text-base lg:hidden">
                เราเชื่อว่าเทคโนโลยีด้านสุขภาพที่ดี
                ไม่ใช่เพียงความก้าวหน้าของนวัตกรรม แต่คือการทำให้ผู้คนเข้าถึง
                เข้าใจ <span className="whitespace-nowrap">และดูแลสุขภาพ</span>
                ของตนเองได้ดียิ่งขึ้น
              </p>

              {/* Desktop Description */}
              <p className="about-text-reveal about-text-delay-4 relative hidden text-[17px] leading-[1.9] text-[#506960] lg:block">
                เราเชื่อว่าเทคโนโลยีด้านสุขภาพที่ดี
                ไม่ใช่เพียงความก้าวหน้าของนวัตกรรม
                <br />
                แต่คือการทำให้ผู้คนเข้าถึง เข้าใจ
                และดูแลสุขภาพของตนเองได้ดียิ่งขึ้น
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
