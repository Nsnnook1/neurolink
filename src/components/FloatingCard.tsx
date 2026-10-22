import type { ReactNode } from "react";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "blue" | "green" | "white";
};

export default function FloatingCard({
  children,
  className = "",
  tone = "white",
}: FloatingCardProps) {
  const tones = {
    blue: "border-blue-200/70 bg-blue-50/80",
    green: "border-green-200/70 bg-green-50/80",
    white: "border-white/70 bg-white/75",
  };

  return (
    <div
      className={`
        rounded-2xl border p-4
        shadow-[0_12px_40px_rgba(15,55,45,0.08)]
        backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:-translate-y-3
        hover:rotate-2
        hover:shadow-[0_22px_50px_rgba(15,55,45,0.16)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        ${tones[tone]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
