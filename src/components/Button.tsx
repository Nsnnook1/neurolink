import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  color?: "green" | "blue";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  color = "green",
  size = "md",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex w-fit items-center justify-center gap-4 rounded-full font-semibold transition-all duration-300";

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = {
    green: {
      primary:
        "bg-[#07583F] text-white hover:bg-[#DCECE3] hover:text-[#0B3328]",
      secondary: "bg-white text-[#0B3328] hover:bg-[#07583F] hover:text-white",
      outline:
        "border border-[#07583F] text-[#07583F] hover:bg-[#07583F] hover:text-white",
    },
    blue: {
      primary:
        "bg-[#1B5186] text-white hover:bg-[#DCEAF8] hover:text-[#1B5186]",
      secondary: "bg-white text-[#1B5186] hover:bg-[#1B5186] hover:text-white",
      outline:
        "border border-[#1B5186] text-[#1B5186] hover:bg-[#1B5186] hover:text-white",
    },
  };

  return (
    <Link
      href={href}
      className={`
        ${base}
        ${sizes[size]}
        ${styles[color][variant]}
        ${className}
      `}
    >
      {children}

      {showArrow && <span aria-hidden="true">→</span>}
    </Link>
  );
}
