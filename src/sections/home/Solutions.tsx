import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

const solutions = [
  {
    number: "01",
    category: "AI-POWERED BRAIN MRI ANALYSIS",
    name: "HEURON AgingCare",
    headline: "เข้าใจสุขภาพสมองผ่านเทคโนโลยี AI",
    description:
      "เทคโนโลยี AI วิเคราะห์ข้อมูลจากภาพ MRI สมอง เพื่อสร้างข้อมูลเชิงปริมาณสำหรับประกอบการประเมินและติดตามสุขภาพสมอง",
    image: "/images/heuron-bg.png",
    href: "/heuron",
    cta: "Explore HEURON AgingCare",
    theme: "heuron",
  },
  {
    number: "02",
    category: "EVERYDAY WELLNESS",
    name: "ETERNA",
    headline: "ใส่ใจสุขภาพในทุกวัน",
    description:
      "ผลิตภัณฑ์ที่พัฒนาขึ้นเพื่อการดูแลสุขภาพอย่างต่อเนื่อง โดยคัดเลือกสารสกัดและส่วนประกอบสำคัญเพื่อเป็นส่วนหนึ่งของการดูแลสุขภาพในชีวิตประจำวัน",
    image: "/images/eterna-bg.png",
    href: "/eterna",
    cta: "Discover ETERNA",
    theme: "eterna",
  },
] as const;

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="overflow-hidden bg-white px-5 py-14 lg:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base font-medium tracking-[0.12em] text-[#506960]">
            OUR SOLUTIONS
          </p>

          <h2 className="mt-3 text-h2 font-bold leading-tight text-[#0B3328] lg:text-h2-desktop">
            เทคโนโลยีและนวัตกรรม
            <br className="lg:hidden" />
            <span className="whitespace-nowrap">เพื่อสุขภาพ</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.8] text-[#506960]">
            NeuroLink นำเทคโนโลยีและนวัตกรรมด้านสุขภาพมาประยุกต์ใช้
            เพื่อให้การดูแลสุขภาพเป็นเรื่องที่เข้าใจง่ายและนำไปใช้ได้จริง
          </p>
        </div>

        {/* SOLUTION SHOWCASE */}
        <div className="mt-10 flex flex-col gap-6 lg:mt-14 lg:gap-8">
          {solutions.map((solution, index) => {
            const isHeuron = solution.theme === "heuron";

            return (
              <ScrollReveal
                key={solution.name}
                delay={index * 120}
                reverseDelay={index === 0 ? 200 : 0}
              >
                <article
                  className={`relative isolate overflow-hidden rounded-[24px] border shadow-[0_12px_36px_rgba(16,60,46,0.05)] lg:min-h-[370px] ${
                    isHeuron
                      ? "border-[#E1EBE5] bg-[#EDF5F0]"
                      : "border-[#E6EAF0] bg-[#F1F4F7]"
                  }`}
                >
                  {/* DESKTOP */}
                  <div className="pointer-events-none absolute inset-0 -z-20 hidden lg:block">
                    <Image
                      src={solution.image}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 1280px, 100vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* DESKTOP */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 -z-10 hidden lg:block ${
                      isHeuron
                        ? "bg-gradient-to-r from-[#EDF5F0]/75 via-[#EDF5F0]/20 to-transparent"
                        : "bg-gradient-to-r from-[#F1F4F7]/75 via-[#F1F4F7]/20 to-transparent"
                    }`}
                  />

                  {/* MOBILE */}
                  <div className="relative h-[205px] overflow-hidden sm:h-[250px] lg:hidden">
                    <Image
                      src={solution.image}
                      alt={
                        isHeuron
                          ? "ภาพประกอบ AI วิเคราะห์ข้อมูล MRI สมอง"
                          : "ภาพประกอบสารสกัดและส่วนประกอบสำคัญของ ETERNA"
                      }
                      fill
                      sizes="(min-width: 640px) 600px, 100vw"
                      className="object-cover object-[80%_center]"
                    />
                  </div>

                  <div className="relative flex flex-col items-start px-6 pb-7 pt-6 sm:px-8 lg:min-h-[370px] lg:w-[49%] lg:justify-center lg:px-12 lg:py-9">
                    <div className="flex items-start gap-3">
                      <span
                        className={`shrink-0 text-sm font-medium ${
                          isHeuron ? "text-[#176349]" : "text-[#8C6B2B]"
                        }`}
                      >
                        {solution.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`mt-[11px] h-px w-6 shrink-0 ${
                          isHeuron ? "bg-[#91B7A4]" : "bg-[#C5AB76]"
                        }`}
                      />

                      <p
                        className={`text-sm font-medium leading-[1.5] tracking-[0.025em] ${
                          isHeuron ? "text-[#176349]" : "text-[#8C6B2B]"
                        }`}
                      >
                        {solution.category}
                      </p>
                    </div>

                    <h3
                      className={`mt-4 text-[27px] font-bold leading-[1.2] tracking-[-0.02em] sm:text-[30px] lg:text-[32px] ${
                        isHeuron ? "text-[#0B3328]" : "text-[#173A4A]"
                      }`}
                    >
                      {solution.name}
                    </h3>

                    <p
                      className={`mt-3 text-[20px] font-semibold leading-[1.5] ${
                        isHeuron ? "text-[#176349]" : "text-[#8C6B2B]"
                      }`}
                    >
                      {solution.headline}
                    </p>

                    <p
                      className={`mt-3 max-w-[450px] text-base leading-[1.8] ${
                        isHeuron ? "text-[#40584E]" : "text-[#405565]"
                      }`}
                    >
                      {solution.description}
                    </p>

                    <div className="mt-6">
                      <Button
                        href={solution.href}
                        color={isHeuron ? "green" : "blue"}
                        variant="primary"
                        size="md"
                      >
                        {solution.cta}
                      </Button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
