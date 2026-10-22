"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  reverseDelay?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  reverseDelay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const directionRef = useRef<"up" | "down">("down");

  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - lastScrollY.current) > 2) {
        directionRef.current = currentY > lastScrollY.current ? "down" : "up";
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDirection(directionRef.current);
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeDelay = direction === "down" ? delay : reverseDelay;

  return (
    <div
      ref={ref}
      className={`
        transition-[opacity,transform]
        duration-[800ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:!translate-y-0
        motion-reduce:!opacity-100
        motion-reduce:!transition-none
        ${
          visible
            ? "translate-y-0 opacity-100"
            : direction === "down"
              ? "translate-y-6 opacity-0"
              : "-translate-y-6 opacity-0"
        }
        ${className}
      `}
      style={{
        transitionDelay: visible ? `${activeDelay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
