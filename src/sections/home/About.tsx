"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const reasons = [
  {
    number: "01",
    title: "Technology with Purpose",
    description:
      "เราเลือกใช้เทคโนโลยีโดยเริ่มจากปัญหาและความต้องการด้านสุขภาพที่เกิดขึ้นจริง เพื่อให้เทคโนโลยีสามารถสร้างประโยชน์ต่อผู้ใช้งานได้อย่างเป็นรูปธรรม",
  },
  {
    number: "02",
    title: "Trusted Solutions",
    description:
      "เราให้ความสำคัญกับมาตรฐาน ความน่าเชื่อถือของเทคโนโลยี ผลิตภัณฑ์ และข้อมูลที่นำมาใช้ในทุกโซลูชัน",
  },
  {
    number: "03",
    title: "Health for the Long Term",
    description:
      "เรามองการดูแลสุขภาพมากกว่าการแก้ปัญหาเฉพาะหน้า โดยให้ความสำคัญกับการดูแลสุขภาพอย่างต่อเนื่องและคุณภาพชีวิตในระยะยาว",
  },
];

function AnimatedAccentLine() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const section = line?.closest("#about");

    if (!line || !section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      line.classList.add("about-line-visible");
      return;
    }

    let hasActivated = false;
    let frame = 0;

    const update = () => {
      const lineRect = line.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Trigger when the line reaches the middle of the screen.
      const reachedTrigger =
        lineRect.top <= viewportHeight * 0.65 &&
        lineRect.bottom >= viewportHeight * 0.35;

      // Reset only when the entire About section leaves the screen.
      const sectionIsVisible =
        sectionRect.bottom > 0 && sectionRect.top < viewportHeight;

      if (!sectionIsVisible) {
        hasActivated = false;
        line.classList.remove("about-line-visible");
      } else if (reachedTrigger && !hasActivated) {
        hasActivated = true;
        line.classList.add("about-line-visible");
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={lineRef}
      aria-hidden="true"
      className="about-line-reveal mt-7 h-[4px] w-14 origin-left rounded-full bg-[#75B69A]"
    />
  );
}

function ConsultationImage() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className="about-image-reveal relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/80 bg-[#E7F0E9] shadow-[0_18px_45px_rgba(16,60,46,0.12)] lg:mt-7 lg:aspect-[16/9]"
    >
      <Image
        src="/images/consultation.png"
        alt="Healthcare professionals reviewing brain MRI information together"
        fill
        sizes="(max-width: 1023px) 100vw, 45vw"
        className="about-image-inner object-cover object-center"
      />
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#F8FBF9] px-5 py-12 lg:px-8 lg:py-20"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F5FAF7_0%,#FFFFFF_60%,#FFFFFF_100%)]"
      />

      {/* Aurora Spotlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="about-spotlight-mint absolute -left-[260px] -top-[240px] h-[520px] w-[520px] rounded-full bg-[#8BD6B8]/35 blur-[110px] lg:-left-[280px] lg:-top-[220px] lg:h-[650px] lg:w-[650px]" />

        <div className="about-spotlight-blue absolute -right-[280px] top-[30%] h-[520px] w-[520px] rounded-full bg-[#9CCFE8]/30 blur-[110px] lg:-right-[300px] lg:top-[15%] lg:h-[680px] lg:w-[680px]" />

        <div className="absolute bottom-[-280px] left-[25%] hidden h-[460px] w-[650px] rounded-full bg-[#B5E4D0]/25 blur-[120px] lg:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
        {/* About Neurolink */}
        <div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-3 -inset-y-5 -z-10 rounded-[24px] bg-white/60 sm:-inset-x-5 lg:rounded-[28px] lg:bg-white/55"
            />

            <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
              ABOUT NEUROLINK
            </p>

            <h2 className="mt-5 max-w-[560px] text-[32px] font-bold leading-[1.2] tracking-[-0.025em] text-[#0B3328] sm:text-[36px] lg:text-[42px]">
              Connecting Technology
              <br className="hidden lg:block" /> with Better Health
            </h2>

            <AnimatedAccentLine />

            <p className="mt-7 max-w-[530px] text-base leading-[1.7] text-[#405B51] lg:leading-[1.8] lg:text-[#506960]">
              Neurolink เชื่อว่าเทคโนโลยีด้านสุขภาพที่ดี
              ไม่ควรเป็นเพียงนวัตกรรมที่ซับซ้อน
              แต่ควรช่วยให้ผู้คนสามารถเข้าใจและดูแลสุขภาพของตนเองได้ดีขึ้น
            </p>

            <p className="mt-5 max-w-[530px] text-base leading-[1.7] text-[#405B51] lg:leading-[1.8] lg:text-[#506960]">
              เราจึงมุ่งค้นหาและนำเสนอโซลูชันที่เชื่อมโยงระหว่าง Technology,
              Medical Knowledge และ Quality of Life
              เพื่อสนับสนุนการดูแลสุขภาพเชิงป้องกันและการดูแลสุขภาพในระยะยาว
            </p>

            <div className="mt-8">
              <Button href="/about">About Neurolink</Button>
            </div>
          </div>

          {/* Consultation Image */}
          <ConsultationImage />
        </div>

        {/* Why Neurolink */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-3 -inset-y-5 -z-10 rounded-[24px] bg-white/45 sm:-inset-x-5 lg:rounded-[28px] lg:bg-white/50"
          />

          <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
            OUR APPROACH
          </p>

          <h2 className="mt-5 text-[28px] font-bold leading-tight text-[#0B3328] lg:text-[36px]">
            Why Neurolink
          </h2>

          <p className="mt-4 max-w-[560px] text-base leading-[1.7] text-[#405B51] lg:mt-5 lg:leading-[1.8] lg:text-[#506960]">
            เราเชื่อว่าโซลูชันด้านสุขภาพที่ดีต้องผสานเทคโนโลยีที่มีประสิทธิภาพ
            ความน่าเชื่อถือ และการใช้งานที่ตอบโจทย์ผู้ใช้จริง
          </p>

          <div className="mt-8 border-t border-[#D7E4DC]">
            {reasons.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 border-b border-[#D7E4DC] py-5 sm:gap-5 lg:py-6"
              >
                <span className="pt-1 text-sm font-semibold text-[#398366]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-[20px] font-semibold leading-snug text-[#0B3328]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base leading-[1.7] text-[#405B51] lg:leading-[1.8] lg:text-[#506960]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Accent Line */
        .about-line-reveal {
          transform: scaleX(0);
          opacity: 0;
          transition:
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 250ms ease-out;
        }

        .about-line-reveal.about-line-visible {
          transform: scaleX(1);
          opacity: 1;
        }

        /* Soft Image Reveal */
        .about-image-reveal {
          opacity: 0;
          transition: opacity 1200ms ease-in-out;
        }

        .about-image-reveal.is-visible {
          opacity: 1;
        }

        .about-image-inner {
          transform: none;
          transition: none;
        }

        /* Aurora Motion */
        @media (min-width: 1024px) and (prefers-reduced-motion: no-preference) {
          .about-spotlight-mint {
            animation: aboutMintFloat 30s ease-in-out infinite alternate;
          }

          .about-spotlight-blue {
            animation: aboutBlueFloat 34s ease-in-out infinite alternate;
          }
        }

        @keyframes aboutMintFloat {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(40px, 20px, 0);
          }
        }

        @keyframes aboutBlueFloat {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-35px, -20px, 0);
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .about-line-reveal,
          .about-image-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .about-image-inner {
            transform: none;
            transition: none;
          }

          .about-spotlight-mint,
          .about-spotlight-blue {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
