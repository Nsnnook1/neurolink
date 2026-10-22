import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-14 lg:py-20">
       

        {/* <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal delay={0} reverseDelay={200}>
            <div className="flex min-h-[270px] flex-col justify-between rounded-2xl bg-[#E5F0E7] p-6 lg:min-h-[340px] lg:p-8">
              <div>
                <h3 className="text-[28px] font-bold text-[#0B3328]">ETERNA</h3>

                <p className="text-xs text-[#506960]">NUTRITION & SELF-CARE</p>

                <h4 className="mt-7 text-xl font-bold leading-snug text-[#0B3328]">
                  โภชนาการ
                  <br />
                  และการดูแลตัวเอง
                </h4>

                <p className="mt-3 max-w-[250px] text-sm leading-relaxed text-[#506960]">
                  ดูแลสุขภาพจากภายใน ด้วยโภชนาการ อาหารเสริม การนอนหลับ พลังงาน
                  และการดูแลตัวเองในทุกวัน
                </p>
              </div>

              <Button
                href="/eterna"
                variant="secondary"
                color="green"
                className="mt-6"
              >
                สำรวจ Eterna
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} reverseDelay={0} className="lg:mt-20">
            <div className="flex min-h-[270px] flex-col justify-between rounded-2xl bg-[#DCEAF8] p-6 lg:mt-20 lg:min-h-[340px] lg:p-8">
              <div>
                <h3 className="text-[28px] font-bold text-[#1B5186]">
                  HEURON AI
                </h3>

                <p className="text-xs text-[#1B5186]">
                  BRAIN HEALTH & TECHNOLOGY
                </p>

                <h4 className="mt-7 text-xl font-bold leading-snug text-[#1B5186]">
                  สุขภาพสมอง
                  <br />
                  และเทคโนโลยี
                </h4>

                <p className="mt-3 max-w-[250px] text-sm leading-relaxed text-[#355B77]">
                  ดูแลสุขภาพสมองด้วยองค์ความรู้ และเทคโนโลยี AI เช่น Brain Scan
                  เพื่อเข้าใจและดูแลสมองได้อย่างเหมาะสม
                </p>
              </div>

              <Button
                href="/heuron"
                variant="secondary"
                color="blue"
                className="mt-6"
              >
                สำรวจ Heuron AI
              </Button>
            </div>
          </ScrollReveal>
        </div> */}
      </div>

      {/* ABOUT+ WHY*/}
      <div className="bg-[#E7F0E9] px-5 py-16 lg:bg-[#F8FBF9] lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
          {/* LEFT */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#506960]">
              ABOUT NEUROLINK
            </p>

            <h2 className="mt-5 max-w-[560px] text-[30px] font-bold leading-[1.2] tracking-tight text-[#0B3328] lg:text-[42px]">
              Connecting Technology
              <br className="hidden lg:block" /> with Better Health
            </h2>

            <div className="mt-6 h-1 w-12 rounded-full bg-[#75B69A]" />

            <p className="mt-7 max-w-[530px] text-sm leading-[1.9] text-[#506960] lg:text-[15px]">
              Neurolink เชื่อว่าเทคโนโลยีด้านสุขภาพที่ดี
              ไม่ควรเป็นเพียงนวัตกรรมที่ซับซ้อน
              แต่ควรช่วยให้ผู้คนสามารถเข้าใจและดูแลสุขภาพของตนเองได้ดีขึ้น
            </p>

            <p className="mt-4 max-w-[530px] text-sm leading-[1.9] text-[#506960] lg:text-[15px]">
              เราจึงมุ่งค้นหาและนำเสนอโซลูชันที่เชื่อมโยงระหว่าง Technology,
              Medical Knowledge และ Quality of Life
              เพื่อสนับสนุนการดูแลสุขภาพเชิงป้องกัน และการดูแลสุขภาพในระยะยาว
            </p>

            <Button href="/about" className="mt-8">
              About Neurolink
            </Button>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#506960]">
              OUR APPROACH
            </p>

            <h2 className="mt-5 text-[28px] font-bold leading-tight text-[#0B3328] lg:text-[36px]">
              Why Neurolink
            </h2>

            <p className="mt-4 max-w-[560px] text-sm leading-[1.9] text-[#506960] lg:text-[15px]">
              เราเชื่อว่าโซลูชันด้านสุขภาพที่ดีต้องผสานเทคโนโลยีที่มีประสิทธิภาพ
              ความน่าเชื่อถือ และการใช้งานที่ตอบโจทย์ผู้ใช้จริง
            </p>

            <div className="mt-7 space-y-3">
              {[
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
              ].map((item) => (
                <div
                  key={item.number}
                  className="group flex gap-5 rounded-2xl border border-[#E0EAE3] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D8C5] hover:shadow-[0_12px_32px_rgba(11,51,40,0.07)] lg:p-6"
                >
                  <span className="pt-0.5 text-sm font-semibold text-[#398366]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-[#0B3328]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-[1.8] text-[#506960]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D7E4DC] bg-white px-5 py-12 lg:px-14 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div>
            <h2 className="text-lg font-semibold text-[#506960]">
              OUR PARTNERS
            </h2>

            <p className="mt-2 text-sm text-[#506960]">
              ร่วมสร้างอนาคตของสุขภาพที่ดีกว่า ไปด้วยกัน
            </p>
          </div>

          <div className="partner-marquee min-w-0 overflow-hidden">
            <div className="partner-track flex w-max">
              {[0, 1].map((set) => (
                <div
                  key={set}
                  aria-hidden={set === 1}
                  className="flex shrink-0 gap-4 pr-4"
                >
                  {[
                    "PARTNER 1",
                    "PARTNER 2",
                    "PARTNER 3",
                    "PARTNER 4",
                    "PARTNER 5",
                  ].map((partner) => (
                    <div
                      key={partner}
                      className="flex h-20 w-36 shrink-0 items-center justify-center rounded-lg border border-[#DFE8E2] text-xs text-[#69847A]"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
    @keyframes partnerScroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .partner-track {
      animation: partnerScroll 20s linear infinite;
    }

    .partner-marquee:hover .partner-track {
      animation-play-state: paused;
    }
  `}</style>
      </div>
    </section>
  );
}
