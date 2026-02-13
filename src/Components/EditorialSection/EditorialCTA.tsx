// components/EditorialSection/EditorialCTA.tsx

"use client";

import { ArrowRight } from "lucide-react";
import { type ComponentProps } from "react";

interface EditorialCTAProps extends ComponentProps<"button"> {
  label: string;
  variant?: "mobile" | "desktop";
}

export const EditorialCTA = ({
  label,
  variant = "desktop",
  className = "",
  ...props
}: EditorialCTAProps) => {
  const isMobile = variant === "mobile";

  return (
    <button
      className={`
        group relative
        ${isMobile ? "px-4 py-2" : "px-6 py-2.5"}
        border border-foreground/20
        rounded-none
        overflow-hidden
        transition-all duration-700 ease-out
        hover:border-foreground/40
        active:scale-[0.98]
        ${className}
      `}
      {...props}
    >
      {/* Background reveal */}
      <span
        className="
          absolute inset-0 
          bg-foreground 
          translate-y-full 
          group-hover:translate-y-0 
          transition-transform duration-700 ease-out
        "
      />

      {/* Content */}
      <span
        className={`
          relative 
          flex items-center justify-center gap-3
          font-secondary font-medium tracking-wide
          ${isMobile ? "text-xs" : "text-sm"}
        `}
      >
        <span
          className="
            text-foreground 
            group-hover:text-background 
            transition-colors duration-700
            uppercase
          "
        >
          {label}
        </span>
        <ArrowRight
          size={isMobile ? 14 : 16}
          className="
            text-foreground 
            group-hover:text-background
            transition-all duration-700
            group-hover:translate-x-1
          "
          strokeWidth={1.5}
        />
      </span>
    </button>
  );
};