import Link from "next/link";

export default function HeuronPage() {
  return (
    <main className="min-h-screen px-5 py-10 lg:px-10 lg:py-20">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-3 text-base font-medium text-[#07583F] lg:hidden"
      >
        <span className="text-xl">←</span>
        กลับหน้าหลัก
      </Link>

      <h1 className="text-4xl font-bold text-[#0B3328]">
        Hello World - Eterna
      </h1>
    </main>
  );
}
