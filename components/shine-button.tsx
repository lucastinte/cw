"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const shineButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_10px_40px_-15px_rgba(247,200,0,0.6)] hover:translate-y-[-1px] active:translate-y-[0px]",
        outline:
          "border border-[hsl(var(--primary))]/40 bg-transparent text-foreground hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-6 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ShineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof shineButtonVariants> {
  asChild?: boolean;
}

export const ShineButton = forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(shineButtonVariants({ variant, size }), "group", className)}
        ref={ref}
        {...props}
        {...(!asChild && { type: props.type || "button" })}
      >
        <span className="relative inline-flex w-full items-center justify-center gap-2">
          <span className="relative z-10">{children}</span>
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute left-[-100%] top-0 h-full w-[180%] translate-x-[-120%] skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition duration-700 group-hover:opacity-100 group-hover:animate-[shine_1.1s_ease-in-out] group-focus-visible:opacity-100 group-focus-visible:animate-[shine_1.1s_ease-in-out]" />
          </span>
        </span>
      </Comp>
    );
  }
);

ShineButton.displayName = "ShineButton";
