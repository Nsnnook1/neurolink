"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function WhoWeAre() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -15% 0px",
      },
    );

    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-next"
      className="relative scroll-mt-20 overflow-hidden bg-white px-5 py-14 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — Image */}
        <div className="group relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[#EAF7F5]">
          <Image
            src="/images/about/who-we-are.png"
            alt="NeuroLink AI healthcare technology visualization"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-110"
          />
        </div>

        {/* Right — Content */}
        <div ref={contentRef} className="max-w-[620px]">
          {/* Eyebrow */}
          <p
            className={`text-xs font-bold tracking-[0.2em] text-[#087D56] transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-sm ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            WHO WE ARE
          </p>

          {/* Headline */}
          <h2
            className={`mt-4 text-[32px] font-bold leading-[1.22] tracking-tight text-[#0B3328] transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-[42px] lg:text-[46px] ${
              isVisible
                ? "translate-y-0 opacity-100 delay-150"
                : "translate-y-8 opacity-0"
            }`}
          >
            เทคโนโลยีที่ดี เริ่มต้นจาก
            <br className="hidden sm:block" />
            <span className="text-[#087D56]">ความเข้าใจผู้คน</span>
          </h2>

          {/* Description */}
          <p
            className={`mt-6 text-[15px] leading-[1.9] text-[#506960] transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-[16px] ${
              isVisible
                ? "translate-y-0 opacity-100 delay-300"
                : "translate-y-8 opacity-0"
            }`}
          >
            NeuroLink มุ่งค้นหาและนำเสนอโซลูชันด้านสุขภาพที่ผสานเทคโนโลยี
            องค์ความรู้ทางการแพทย์ และความเข้าใจในการใช้ชีวิต
            เพื่อสนับสนุนการดูแลสุขภาพเชิงป้องกัน
            และการดูแลสุขภาพอย่างต่อเนื่องในระยะยาว
          </p>
        </div>
      </div>
    </section>
  );
}
