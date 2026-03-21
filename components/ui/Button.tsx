import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer tracking-tight active:scale-95 outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none disabled:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-white shadow-[0_8px_25px_rgba(102,13,255,0.3)] hover:bg-brand-dark hover:-translate-y-1 font-bold disabled:bg-brand-muted",
        secondary:
          "bg-brand-secondary text-white shadow-md hover:bg-brand-primary hover:shadow-lg hover:-translate-y-1 font-bold disabled:bg-brand-muted",
        white:
          "bg-white text-brand-primary shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-105 font-bold",
        glass:
          "bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg hover:bg-white/20 hover:-translate-y-1 font-normal",
      },
      size: {
        default: "px-8 py-3.5 md:py-4 rounded-xl text-base",
        lg: "px-8 py-4 rounded-3xl text-lg",
        xl: "px-10 py-5 rounded-2xl text-lg md:text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
