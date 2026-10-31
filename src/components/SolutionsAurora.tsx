"use client";

import { useEffect, useRef } from "react";

export default function SolutionsAurora() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = container?.closest("#solutions");

    if (!container || !section) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;

      if (media.matches) {
        container.style.setProperty("--aurora-progress", "0.45");
        container.style.setProperty("--aurora-shift", "0px");
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const total = rect.height + viewportHeight;
      const progress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / total),
      );

      const shift = -55 + progress * 130;

      container.style.setProperty("--aurora-progress", progress.toFixed(4));
      container.style.setProperty("--aurora-shift", `${shift.toFixed(1)}px`);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    media.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      media.removeEventListener("change", scheduleUpdate);

      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={
        {
          "--aurora-progress": 0,
          "--aurora-shift": "0px",
        } as React.CSSProperties
      }
    >
      {/* SOFT MINT AURORA */}
      <div
        className="absolute -left-[30%] top-[-12%] h-[650px] w-[120%] rounded-[50%] blur-[65px] lg:-left-[18%] lg:h-[850px] lg:w-[85%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(86,209,171,0.42) 0%, rgba(125,222,192,0.24) 38%, transparent 72%)",
          transform: "translate3d(0,var(--aurora-shift),0)",
          opacity: "calc(0.35 + var(--aurora-progress) * 0.45)",
        }}
      />

      {/* ICE BLUE AURORA */}
      <div
        className="absolute -right-[30%] top-[4%] h-[620px] w-[120%] rounded-[50%] blur-[70px] lg:-right-[18%] lg:h-[800px] lg:w-[80%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(93,189,229,0.38) 0%, rgba(147,215,238,0.22) 42%, transparent 72%)",
          transform: "translate3d(0,calc(var(--aurora-shift) * -0.65),0)",
          opacity: "calc(0.28 + var(--aurora-progress) * 0.40)",
        }}
      />

      {/* DIAGONAL LIGHT VEIL */}
      <div
        className="absolute -left-[25%] top-[6%] h-[280px] w-[150%] rotate-[-12deg] blur-[40px] lg:top-[9%] lg:h-[340px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(109,218,191,0.22) 36%, rgba(138,207,238,0.22) 62%, transparent 95%)",
          transform: "translate3d(0,var(--aurora-shift),0) rotate(-12deg)",
          opacity: "calc(0.25 + var(--aurora-progress) * 0.45)",
        }}
      />
    </div>
  );
}
