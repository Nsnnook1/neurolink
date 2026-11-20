import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "MRI Scan",
    description: "รับข้อมูลภาพ MRI สมอง ตาม Protocol ที่กำหนด",
    icon: "◉",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "ระบบ AI ประมวลผลและวิเคราะห์ข้อมูลจากภาพ MRI",
    icon: "✳",
  },
  {
    number: "03",
    title: "Brain Data",
    description: "วิเคราะห์ข้อมูลเกี่ยวกับโครงสร้างและบริเวณต่าง ๆ ของสมอง",
    icon: "◎",
  },
  {
    number: "04",
    title: "Report",
    description: "แสดงผลข้อมูลในรูปแบบ Report เพื่อใช้ประกอบการพิจารณาของแพทย์",
    icon: "▤",
  },
];

const reportItems = [
  "ข้อมูลเชิงปริมาณของโครงสร้างสมอง",
  "การเปรียบเทียบกับข้อมูลอ้างอิง",
  "Visualization เพื่อช่วยในการอ่านผล",
  "ข้อมูลของสมองแต่ละบริเวณ",
  "ข้อมูลสำหรับใช้ประกอบการติดตามในอนาคต",
];

const faqs = [
  {
    question: "HEURON AgingCare คืออะไร?",
    answer:
      "เทคโนโลยี AI ที่ช่วยวิเคราะห์ข้อมูลจากภาพ MRI สมอง และนำเสนอข้อมูลเชิงปริมาณเกี่ยวกับโครงสร้างสมอง เพื่อประกอบการพิจารณาของแพทย์",
  },
  {
    question: "แตกต่างจาก MRI ปกติอย่างไร?",
    answer:
      "MRI เป็นการตรวจเพื่อสร้างภาพสมอง ส่วน HEURON AgingCare นำข้อมูลภาพ MRI มาประมวลผลเพิ่มเติม เพื่อแสดงข้อมูลเชิงปริมาณและรายงานประกอบการประเมิน",
  },
  {
    question: "ต้องฉีดสาร Contrast หรือไม่?",
    answer:
      "ขึ้นอยู่กับ Protocol การตรวจและดุลยพินิจของแพทย์ กรุณาสอบถามสถานพยาบาลที่ให้บริการก่อนเข้ารับการตรวจ",
  },
  {
    question: "ใช้เวลาตรวจเท่าไร?",
    answer:
      "ระยะเวลาขึ้นอยู่กับขั้นตอนและ Protocol ของแต่ละสถานพยาบาล กรุณาตรวจสอบกับสถานที่ให้บริการโดยตรง",
  },
  {
    question: "ผลตรวจได้รับในรูปแบบใด?",
    answer:
      "ข้อมูลจากการวิเคราะห์นำเสนอในรูปแบบ Report เพื่อให้แพทย์ใช้ประกอบการอ่านและพิจารณาผล",
  },
  {
    question: "ใครเหมาะกับการตรวจ?",
    answer:
      "ผู้ที่ต้องการข้อมูลเพิ่มเติมเพื่อประกอบการดูแลและติดตามสุขภาพสมอง โดยควรปรึกษาแพทย์ก่อนเข้ารับบริการ",
  },
  {
    question: "ต้องเตรียมตัวอย่างไร?",
    answer:
      "โปรดปฏิบัติตามคำแนะนำของสถานพยาบาล โดยเฉพาะข้อควรระวังเกี่ยวกับการตรวจ MRI",
  },
  {
    question: "สามารถตรวจได้ที่ไหน?",
    answer:
      "สามารถสอบถามรายชื่อโรงพยาบาลหรือสถานพยาบาลพันธมิตรผ่าน NeuroLink AI",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#087D56]">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[28px] font-bold leading-[1.2] tracking-tight text-[#0B3328] sm:text-[34px] lg:text-[40px]">
        {title}
      </h2>
    </div>
  );
}

export default function HeuronPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B3328]">
      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#FFFFFF_8%,#EAF8F3_65%,#DDF5F4_100%)]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 pb-12 pt-10 sm:px-8 lg:min-h-[580px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-16">
          <div className="relative z-10">
            <nav
              aria-label="Breadcrumb"
              className="mb-9 flex flex-wrap items-center gap-2 text-[12px] text-[#527268]"
            >
              <Link href="/" className="hover:text-[#087D56]">
                Home
              </Link>
              <span>›</span>
              <Link href="/#solutions" className="hover:text-[#087D56]">
                Solutions
              </Link>
              <span>›</span>
              <span className="font-semibold text-[#0B3328]">
                HEURON AgingCare
              </span>
            </nav>

            <span className="inline-flex rounded-full bg-[#DDF4E8] px-4 py-2 text-[13px] font-bold text-[#07583F]">
              HEURON AgingCare
            </span>

            <h1 className="mt-5 max-w-[600px] text-[40px] font-bold leading-[1.1] tracking-tight text-[#0B3328] sm:text-[54px] lg:text-[58px]">
              Understand Your Brain
              <span className="block text-[#087D56]">Beyond the Image</span>
            </h1>

            <p className="mt-6 max-w-[550px] text-[17px] leading-[1.9] text-[#3F5C52] lg:text-[18px]">
              HEURON AgingCare ใช้เทคโนโลยี AI ช่วยวิเคราะห์ข้อมูลจากภาพ MRI
              สมอง เพื่อเปลี่ยนข้อมูลจากภาพทางการแพทย์ให้เป็นข้อมูลเชิงปริมาณ
              ที่ช่วยให้เห็นข้อมูลเกี่ยวกับโครงสร้างของสมองได้ชัดเจนยิ่งขึ้น
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#07583F] px-7 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B3328]"
              >
                สอบถามบริการ <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#where-available"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#087D56] bg-white/75 px-7 text-[15px] font-semibold text-[#07583F] transition-colors hover:bg-[#E4F5ED]"
              >
                ค้นหาสถานที่ให้บริการ <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] sm:min-h-[430px] lg:min-h-[480px]">
            {/* <Image
              src="/images/heuron/heuron-hero.png"
              alt="ภาพ MRI สมองประกอบการนำเสนอ HEURON AgingCare"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            /> */}
          </div>
        </div>
      </section>

      {/* 02 — WHY BRAIN HEALTH MATTERS */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] sm:min-h-[410px]">
            {/* <Image
              src="/images/heuron/brain-health.png"
              alt="ผู้สูงวัยที่มีสุขภาพดี"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            /> */}
          </div>

          <div>
            <SectionHeading
              eyebrow="WHY BRAIN HEALTH MATTERS"
              title="Understanding Brain Health Matters"
            />

            <p className="mt-6 text-[17px] leading-[1.95] text-[#476258] lg:text-[18px]">
              สมองมีการเปลี่ยนแปลงตามอายุและปัจจัยด้านสุขภาพต่าง ๆ
              โดยการเปลี่ยนแปลงบางอย่างอาจเกิดขึ้นอย่างค่อยเป็นค่อยไป
            </p>
            <p className="mt-5 text-[17px] leading-[1.95] text-[#476258] lg:text-[18px]">
              การมีข้อมูลที่ช่วยให้แพทย์สามารถมองเห็นและติดตามการเปลี่ยนแปลงของสมองได้อย่างเป็นระบบ
              จึงสามารถเป็นอีกหนึ่งเครื่องมือที่ช่วยสนับสนุนการดูแลสุขภาพสมองในระยะยาว
            </p>
          </div>
        </div>
      </section>

      {/* 03 — HOW IT WORKS */}
      <section className="bg-[#F2FAF7] py-16 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="text-center">
            <Eyebrow>HOW IT WORKS</Eyebrow>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.25] text-[#0B3328] sm:text-[36px] lg:text-[42px]">
              จากการตรวจ MRI สู่ข้อมูลเชิงลึกของสมอง
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#D6EAE2] bg-white text-[40px] text-[#087D56] shadow-[0_8px_25px_rgba(11,51,40,0.04)]">
                  <span aria-hidden="true">{step.icon}</span>
                </div>
                <h3 className="mt-6 text-[21px] font-bold text-[#0B3328]">
                  {index + 1}. {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[230px] text-[16px] leading-[1.8] text-[#476258]">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-9 hidden text-[24px] text-[#087D56] lg:block"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — TECHNOLOGY */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="TECHNOLOGY"
              title="AI-powered Brain MRI Analysis"
            />
            <p className="mt-6 text-[17px] leading-[1.95] text-[#476258] lg:text-[18px]">
              HEURON AgingCare นำ AI มาช่วยวิเคราะห์ข้อมูลจากภาพ MRI สมอง
              และแปลงข้อมูลจากภาพให้เป็นข้อมูลเชิงปริมาณ
              เพื่อช่วยให้แพทย์สามารถดูข้อมูล เปรียบเทียบ
              และติดตามการเปลี่ยนแปลงได้อย่างเป็นระบบมากขึ้น
            </p>
          </div>

          <div className="relative min-h-[290px] overflow-hidden rounded-[28px] bg-[#0B3328] sm:min-h-[420px]">
            {/* <Image
              src="/images/heuron/heuron-technology.png"
              alt="ตัวอย่างภาพ MRI และการวิเคราะห์โครงสร้างสมองด้วย AI"
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
            /> */}
          </div>
        </div>
      </section>

      {/* 05 — WHAT YOU RECEIVE */}
      <section className="bg-[#F7FBF9] py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-white sm:min-h-[430px]">
            <Image
              src="/images/heuron/heuron-report.png"
              alt="ตัวอย่างรูปแบบรายงานข้อมูลสมอง"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="WHAT YOU RECEIVE"
              title="Clearer Information from Brain MRI"
            />
            <p className="mt-6 text-[17px] leading-[1.9] text-[#476258]">
              ผลลัพธ์จาก HEURON AgingCare ถูกนำเสนอในรูปแบบ Report
              ที่ช่วยจัดระเบียบข้อมูลจาก MRI ให้อ่านและเปรียบเทียบได้ง่ายขึ้น
            </p>

            <ul className="mt-7 space-y-4">
              {reportItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087D56] text-[13px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[16px] leading-[1.8] text-[#38594D] lg:text-[17px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 06 — WHO IS IT FOR */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="max-w-[820px]">
            <SectionHeading
              eyebrow="WHO IS IT FOR?"
              title="เหมาะสำหรับผู้ที่ต้องการข้อมูลเพิ่มเติม เพื่อดูแลและติดตามสุขภาพสมอง"
            />
            <p className="mt-6 text-[17px] leading-[1.95] text-[#476258]">
              HEURON AgingCare เหมาะสำหรับผู้ที่ต้องการข้อมูลเพิ่มเติม
              เพื่อประกอบการดูแลและติดตามสุขภาพสมอง
              โดยการตรวจและการแปลผลควรอยู่ภายใต้คำแนะนำของแพทย์หรือบุคลากรทางการแพทย์
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "ผู้ที่ต้องการติดตามการเปลี่ยนแปลงของสมองตามอายุ",
              "ผู้ที่ให้ความสำคัญกับการดูแลสุขภาพสมองเชิงป้องกัน",
              "ผู้ที่ต้องการข้อมูลเพื่อประกอบการวางแผนดูแลสุขภาพระยะยาว",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-[22px] border border-[#E1EEE8] bg-[#F5FAF8] p-6 lg:p-8"
              >
                <span className="text-[14px] font-bold text-[#087D56]">
                  0{index + 1}
                </span>
                <p className="mt-4 text-[17px] font-semibold leading-[1.75] text-[#0B3328]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — WHERE AVAILABLE */}
      <section
        id="where-available"
        className="scroll-mt-24 px-5 pb-16 sm:px-8 lg:pb-24"
      >
        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px] bg-[#EAF7F1]">
          <div className="relative z-10 max-w-[700px] px-7 py-12 sm:px-12 lg:py-16">
            <SectionHeading
              eyebrow="WHERE AVAILABLE"
              title="Where to Access HEURON AgingCare"
            />
            <p className="mt-5 text-[17px] leading-[1.9] text-[#476258]">
              สามารถรับบริการ HEURON AgingCare
              ได้ผ่านโรงพยาบาลและสถานพยาบาลพันธมิตรที่ให้บริการ
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#07583F] px-7 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B3328]"
            >
              สอบถามสถานที่ให้บริการ <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 08 — FAQ */}
      <section className="border-t border-[#E8F0EB] bg-[#FAFCFB] py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="HEURON FAQ" title="คำถามที่พบบ่อย" />
            <p className="mt-5 text-[17px] leading-[1.8] text-[#476258]">
              รวมคำถามที่พบบ่อยเกี่ยวกับ HEURON AgingCare
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[18px] border border-[#DFEBE5] bg-white px-5 py-1 sm:px-7"
              >
                <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-5 py-3 text-[16px] font-semibold leading-[1.6] text-[#0B3328] marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[24px] font-light text-[#087D56] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="border-t border-[#EDF3EF] pb-5 pt-4 text-[16px] leading-[1.9] text-[#476258]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
