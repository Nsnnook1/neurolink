import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white px-5 py-20 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base font-medium text-[#506960]">OUR SOLUTIONS</p>

          <h2 className="mt-3 text-h2 font-bold leading-tight text-[#0B3328] lg:text-h2-desktop">
            เทคโนโลยีและนวัตกรรมเพื่อสุขภาพ
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-body leading-[1.8] text-[#506960]">
            NeuroLink นำเทคโนโลยีและนวัตกรรมด้านสุขภาพมาประยุกต์ใช้
            เพื่อให้การดูแลสุขภาพเป็นเรื่องที่เข้าใจง่ายและนำไปใช้ได้จริง
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-10">
          {/* HEURON */}
          <ScrollReveal delay={0} reverseDelay={200}>
            <div className="flex min-h-[340px] flex-col justify-between rounded-2xl bg-[#E8F2EC] p-6 lg:min-h-[420px] lg:p-8">
              <div>
                <h3 className="text-h3 font-bold text-[#0B3328] lg:text-h3-desktop">
                  HEURON AgingCare
                </h3>

                <p className="mt-2 text-base font-medium text-[#176349]">
                  AI-POWERED BRAIN MRI ANALYSIS
                </p>

                <h4 className="mt-7 text-h4 font-bold leading-snug text-[#0B3328] lg:text-h4-desktop">
                  เข้าใจสุขภาพสมอง
                  <br />
                  ผ่านเทคโนโลยี AI
                </h4>

                <p className="mt-4 max-w-md text-body leading-[1.8] text-[#40584E]">
                  เทคโนโลยี AI สำหรับวิเคราะห์ข้อมูลจากภาพ MRI สมอง
                  เพื่อเปลี่ยนข้อมูลจากภาพทางการแพทย์ให้เป็นข้อมูลเชิงปริมาณ
                  สำหรับประกอบการประเมินและติดตามสุขภาพสมองอย่างเป็นระบบ
                </p>
              </div>

              <Button
                href="/heuron"
                variant="secondary"
                color="green"
                className="mt-8"
              >
                Explore HEURON AgingCare
              </Button>
            </div>
          </ScrollReveal>

          {/* ETERNA */}
          <ScrollReveal delay={200} reverseDelay={0} className="lg:mt-20">
            <div className="flex min-h-[340px] flex-col justify-between rounded-2xl bg-[#142B46] p-6 lg:min-h-[420px] lg:p-8">
              <div>
                <h3 className="text-h3 font-bold text-white lg:text-h3-desktop">
                  ETERNA
                </h3>

                <p className="mt-2 text-base font-medium text-[#E5CCA0]">
                  EVERYDAY WELLNESS
                </p>

                <h4 className="mt-7 text-h4 font-bold leading-snug text-white lg:text-h4-desktop">
                  ใส่ใจสุขภาพ
                  <br />
                  ในทุกวัน
                </h4>

                <p className="mt-4 max-w-md text-body leading-[1.8] text-[#E5EAF0]">
                  ผลิตภัณฑ์ที่พัฒนาขึ้นภายใต้แนวคิดการดูแลสุขภาพอย่างต่อเนื่อง
                  โดยคัดเลือกสารสกัดและส่วนประกอบสำคัญ
                  เพื่อเป็นส่วนหนึ่งของการดูแลสุขภาพในชีวิตประจำวัน
                </p>
              </div>

              <Button
                href="/eterna"
                variant="secondary"
                color="blue"
                className="mt-8"
              >
                Discover ETERNA
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
