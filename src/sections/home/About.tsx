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

export default function About() {
  return (
    <section id="about" className="bg-[#F8FBF9] px-5 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
        {/* ABOUT NEUROLINK */}
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
            ABOUT NEUROLINK
          </p>

          <h2 className="mt-5 max-w-[560px] text-[32px] font-bold leading-[1.2] tracking-[-0.025em] text-[#0B3328] sm:text-[36px] lg:text-[42px]">
            Connecting Technology
            <br className="hidden lg:block" /> with Better Health
          </h2>

          <div className="mt-7 h-[3px] w-12 rounded-full bg-[#75B69A]" />

          <p className="mt-7 max-w-[530px] text-base leading-[1.8] text-[#506960]">
            Neurolink เชื่อว่าเทคโนโลยีด้านสุขภาพที่ดี
            ไม่ควรเป็นเพียงนวัตกรรมที่ซับซ้อน
            แต่ควรช่วยให้ผู้คนสามารถเข้าใจและดูแลสุขภาพของตนเองได้ดีขึ้น
          </p>

          <p className="mt-5 max-w-[530px] text-base leading-[1.8] text-[#506960]">
            เราจึงมุ่งค้นหาและนำเสนอโซลูชันที่เชื่อมโยงระหว่าง Technology,
            Medical Knowledge และ Quality of Life
            เพื่อสนับสนุนการดูแลสุขภาพเชิงป้องกันและการดูแลสุขภาพในระยะยาว
          </p>

          <div className="mt-8">
            <Button href="/about">About Neurolink</Button>
          </div>

          {/* CONSULTATION IMAGE */}
          <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#E7F0E9] lg:mt-7 lg:aspect-[16/9]">
            <Image
              src="/images/consultation.png"
              alt="Healthcare professionals reviewing brain MRI information together"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* WHY NEUROLINK */}
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#398366]">
            OUR APPROACH
          </p>

          <h2 className="mt-5 text-[28px] font-bold leading-tight text-[#0B3328] lg:text-[36px]">
            Why Neurolink
          </h2>

          <p className="mt-5 max-w-[560px] text-base leading-[1.8] text-[#506960]">
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

                  <p className="mt-2 text-base leading-[1.8] text-[#506960]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}