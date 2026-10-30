import Link from "next/link";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";

const contactChannels = [
  {
    title: "LINE Official Account",
    description: "พูดคุยกับทีมงานผ่าน LINE",
    href: "", // ใส่ LINE OA URL จริง
    type: "line",
  },
  {
    title: "Email",
    description: "สอบถามข้อมูลเพิ่มเติมทางอีเมล",
    href: "", // ใส่ mailto:your-email@example.com
    type: "email",
  },
] as const;

function ContactIcon({ type }: { type: "line" | "email" }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F4EC] transition-colors duration-300 group-hover:bg-white sm:h-12 sm:w-12">
      {type === "line" ? (
        <MessageCircle size={23} strokeWidth={1.8} className="text-[#07583F]" />
      ) : (
        <Mail size={23} strokeWidth={1.8} className="text-[#07583F]" />
      )}
    </span>
  );
}

export default function Contact() {
  return (
    <section
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
        className="pointer-events-none absolute inset-0 -z-10 bg-white/20"
      />

      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#398366]">
            GET IN TOUCH
          </p>

          <h2 className="mt-5 text-[32px] font-bold leading-[1.3] tracking-tight text-[#0B3328] lg:text-[44px]">
            เชื่อมต่อกับเรา
            <br />
            เพื่อก้าวต่อไปที่ดีกว่า
          </h2>

          <p className="mt-6 max-w-[480px] text-base leading-[1.85] text-[#506960]">
            สนใจโซลูชันของ NeuroLink หรือต้องการสอบถามข้อมูลเพิ่มเติม
            ติดต่อทีมงานของเราได้ผ่านช่องทางที่สะดวก
          </p>
        </div>

        <div className="rounded-[28px] border border-white/70 bg-white/30 p-4 backdrop-blur-md sm:p-6 lg:rounded-[32px] lg:p-8">
          <div className="flex flex-col gap-3">
            {contactChannels.map((channel) => {
              const hasLink = Boolean(channel.href);

              const content = (
                <>
                  <ContactIcon type={channel.type} />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-semibold leading-[1.4] text-[#0B3328] sm:text-lg">
                      {channel.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.6] text-[#506960] sm:text-sm">
                      {channel.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    size={21}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#07583F] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              );

              const classes =
                "group flex min-h-[94px] items-center gap-3 rounded-[20px] border border-[#E1EBE5] bg-white/95 px-4 py-5 shadow-[0_4px_20px_rgba(16,60,46,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8ABDA5] hover:bg-[#E7F4EC] hover:shadow-[0_12px_30px_rgba(7,88,63,0.14)] focus-visible:border-[#07583F] focus-visible:bg-[#E7F4EC] sm:gap-5 sm:px-6 lg:min-h-[108px]";

              return hasLink ? (
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
              ) : (
                <div key={channel.type} className={classes}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
