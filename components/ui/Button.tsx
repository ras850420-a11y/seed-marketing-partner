import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import type { ButtonVariant } from "@/types/content";
import { cn } from "@/lib/utils";

type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-[#d96310] bg-accent text-white shadow-none hover:bg-[#d96310] focus-visible:outline-accent",
  secondary:
    "border border-brand bg-white text-brand shadow-none hover:border-teal hover:bg-teal/5 hover:text-teal focus-visible:outline-teal",
  ghost: "text-brand hover:bg-teal/10 focus-visible:outline-teal"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base"
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={buttonStyles({ variant, size, className })}
      target={isExternal ? "_blank" : props.target}
      rel={isExternal ? "noopener noreferrer" : props.rel}
      {...props}
    >
      <span>{children}</span>
      {icon}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      type={type}
      {...props}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
