import Button from "@/components/Button";

export default function ArticleNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F8FBF9] px-5 py-20">
      <div className="mx-auto max-w-[560px] text-center">
        <p className="text-sm font-semibold tracking-[0.16em] text-[#398366]">
          ARTICLE NOT FOUND
        </p>

        <h1 className="mt-5 text-[64px] font-bold leading-none text-[#B6D8C7]">
          404
        </h1>

        <h2 className="mt-6 text-[28px] font-bold text-[#0B3328]">
          ไม่พบบทความที่คุณกำลังค้นหา
        </h2>

        <p className="mt-4 text-base leading-[1.8] text-[#506960]">
          บทความนี้อาจถูกย้าย ลบออก หรือยังไม่เปิดเผยแพร่
          คุณสามารถกลับไปสำรวจบทความอื่น ๆ ได้
        </p>

        <Button
          href="/insights"
          variant="outline"
          color="green"
          size="md"
          showArrow={false}
        >
          ← ดูบทความทั้งหมด
        </Button>
      </div>
    </main>
  );
}
