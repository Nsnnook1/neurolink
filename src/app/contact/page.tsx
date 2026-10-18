import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#0B3328] lg:text-[44px]">
            เริ่มต้นดูแลสุขภาพ
            <br />
            ในแบบที่เหมาะกับคุณ
          </h2>

          <p className="mt-6 max-w-[540px] text-base leading-relaxed text-[#506960]">
            ไม่ว่าจะต้องการข้อมูลเพิ่มเติม สนใจโซลูชัน
            หรืออยากพูดคุยกับผู้เชี่ยวชาญ เราพร้อมช่วยคุณเริ่มต้น
          </p>
        </div>

        <div className="rounded-[36px] border border-[#DFE8E2] p-5 lg:p-8">
          <Link
            href="/contact"
            className="group flex items-center gap-6 rounded-3xl border border-[#DFE8E2] bg-white px-6 py-6 text-[#0B3328] transition-colors duration-300 hover:bg-[#07583F] hover:text-white active:bg-[#07583F] active:text-white"
          >
            <span className="w-10 text-sm text-[#69847A] group-hover:text-white/80 group-active:text-white/80">
              01
            </span>

            <div className="flex-1">
              <h3 className="text-lg font-semibold">LINE OA</h3>

              <p className="mt-1 text-sm text-[#506960] group-hover:text-white/80 group-active:text-white/80">
                พูดคุยกับเราผ่าน LINE
              </p>
            </div>

            <span className="text-2xl">→</span>
          </Link>

          <Link
            href="/contact"
            className="group mt-3 flex items-center gap-6 rounded-3xl border border-[#DFE8E2] bg-white px-6 py-6 text-[#0B3328] transition-colors duration-300 hover:bg-[#07583F] hover:text-white active:bg-[#07583F] active:text-white"
          >
            <span className="w-10 text-sm text-[#69847A] group-hover:text-white/80 group-active:text-white/80">
              02
            </span>

            <div className="flex-1">
              <h3 className="text-lg font-semibold">CONTACT US</h3>

              <p className="mt-1 text-sm text-[#506960] group-hover:text-white/80 group-active:text-white/80">
                ดูช่องทางการติดต่อ
              </p>
            </div>

            <span className="text-2xl">→</span>
          </Link>

          <Link
            href="/contact"
            className="group mt-3 flex items-center gap-6 rounded-3xl border border-[#DFE8E2] bg-white px-6 py-6 text-[#0B3328] transition-colors duration-300 hover:bg-[#07583F] hover:text-white active:bg-[#07583F] active:text-white"
          >
            <span className="w-10 text-sm text-[#69847A] group-hover:text-white/80 group-active:text-white/80">
              03
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold">REQUEST INFORMATION</h3>

              <p className="mt-1 text-sm text-[#506960] group-hover:text-white/80 group-active:text-white/80">
                ขอข้อมูลเพิ่มเติม / ขอคำปรึกษา
              </p>
            </div>

            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
