import Button from "@/components/Button";

export default function HeuronPage() {
  return (
    <main className="min-h-screen px-5 py-10 lg:px-10 lg:py-20">
      <Button
        href="/"
        variant="primary"
        color="green"
        size="md"
        showArrow={false}
        className="mb-8 lg:hidden"
      >
        ← กลับหน้าหลัก
      </Button>

      <h1 className="text-4xl font-bold text-[#0B3328]">
        Hello World - Heuron AI
      </h1>
    </main>
  );
}
