"use client";

import { useEffect } from "react";

export default function InsightsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Insights error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F8FBF9] px-5 py-20">
      <div className="mx-auto max-w-[560px] text-center">
        <div
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E2F1E9] text-3xl text-[#07583F]"
        >
          !
        </div>

        <h1 className="mt-7 text-[28px] font-bold text-[#0B3328] lg:text-[36px]">
          ไม่สามารถโหลดบทความได้ในขณะนี้
        </h1>

        <p className="mt-5 text-base leading-[1.8] text-[#506960]">
          ระบบกำลังมีปัญหาในการเชื่อมต่อข้อมูล กรุณาลองใหม่อีกครั้งในอีกสักครู่
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#07583F] px-8 text-base font-semibold text-white transition-colors hover:bg-[#064B36]"
        >
          ลองโหลดอีกครั้ง
        </button>
      </div>
    </main>
  );
}
