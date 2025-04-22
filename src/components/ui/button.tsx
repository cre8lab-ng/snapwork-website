"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const baseStyles = "rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

const variants = {
  default: "bg-blue-100 text-blue-200 rounded-xl p-3 hidden md:block",
  primary: "border text-blue-100 rounded-xl p-3 hidden md:block",
  secondary: "bg-white text-blue-100 font-semibold py-2 px-6 rounded-xl",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
