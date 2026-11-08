"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const contactChannels = [
  {
    title: "LINE Official Account",
    description: "เพิ่มเพื่อน @neurolink เพื่อพูดคุยกับทีมงาน",
    href: "https://lin.ee/ok8xRVw",
    type: "line",
  },
  {
    title: "Email",
    description: "สอบถามข้อมูลเพิ่มเติมทางอีเมล : neurolinkthailand@gmail.com",
    href: "mailto:neurolinkthailand@gmail.com",
    type: "email",
  },
] as const;

function ContactIcon({ type }: { type: "line" | "email" }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F4EC] transition-colors duration-300 group-hover:bg-[#D5EBDD] sm:h-16 sm:w-16">
      {type === "line" ? (
        <MessageCircle size={28} strokeWidth={1.8} className="text-[#07583F]" />
      ) : (
        <Mail size={28} strokeWidth={1.8} className="text-[#07583F]" />
      )}
    </span>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -45% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-white px-5 py-16 lg:px-10 lg:py-24"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[url('/images/contact-bg.png')] bg-cover bg-center"
      />

      {/* Soft overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white/25"
      />

      <div className="mx-auto grid min-w-0 max-w-[1280px] grid-cols-[minmax(0,1fr)] gap-10 lg:min-h-[460px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        {/* Left Content */}
        <div
          className={`min-w-0 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          }`}
        >
          <p className="text-sm font-semibold tracking-[0.16em] text-[#398366]">
            GET IN TOUCH
          </p>

          <h2 className="mt-5 text-[32px] font-bold leading-[1.3] tracking-tight text-[#0B3328] sm:text-[38px] lg:text-[46px]">
            เชื่อมต่อกับเรา
            <br />
            <span className="text-[#16825D]">เพื่อก้าวต่อไปที่ดีกว่า</span>
          </h2>

          <p className="mt-6 max-w-[480px] text-base leading-[1.85] text-[#506960] lg:text-[17px]">
            สนใจโซลูชันของ NeuroLink หรือต้องการสอบถามข้อมูลเพิ่มเติม
            ติดต่อทีมงานของเราได้ผ่านช่องทางที่สะดวก
          </p>
        </div>

        {/* Right Contact Cards */}
        <div
          className={`w-full min-w-0 rounded-[30px] border border-white/70 bg-white/30 p-4 backdrop-blur-md sm:p-6 lg:rounded-[32px] lg:p-8
            transition-[opacity,transform] duration-[800ms] ease-out
            motion-reduce:transform-none motion-reduce:transition-none
            ${
              isVisible
                ? "translate-y-0 opacity-100 delay-[250ms]"
                : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }
          `}
        >
          <div className="flex min-w-0 flex-col gap-4">
            {contactChannels.map((channel) => {
              const content = (
                <>
                  <ContactIcon type={channel.type} />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] font-semibold leading-[1.4] text-[#0B3328] sm:text-[20px]">
                      {channel.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.6] text-[#506960] sm:text-[15px]">
                      {channel.type === "email" ? (
                        <>
                          สอบถามข้อมูลเพิ่มเติมทางอีเมล
                          <span className="mt-1 block break-all sm:break-normal">
                            neurolinkthailand@gmail.com
                          </span>
                        </>
                      ) : (
                        channel.description
                      )}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F7F2] transition-colors duration-300 group-hover:bg-[#07583F] sm:h-10 sm:w-10">
                    <ArrowUpRight
                      aria-hidden="true"
                      size={22}
                      strokeWidth={1.8}
                      className="text-[#07583F] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </span>
                </>
              );

              const classes =
                "group flex min-h-[116px] min-w-0 items-center gap-3 rounded-[22px] border border-[#E1EBE5] bg-white/95 px-4 py-5 shadow-[0_6px_24px_rgba(16,60,46,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8ABDA5] hover:bg-white hover:shadow-[0_16px_36px_rgba(7,88,63,0.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#07583F] sm:gap-5 sm:px-6 lg:min-h-[130px]";

              return (
                <Link
                  key={channel.type}
                  href={channel.href}
                  target={channel.type === "line" ? "_blank" : undefined}
                  rel={
                    channel.type === "line" ? "noopener noreferrer" : undefined
                  }
                  className={classes}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
