import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

const base =
  "inline-flex items-center justify-center gap-xs rounded-button font-medium tracking-buttons whitespace-nowrap transition-colors duration-[220ms] disabled:opacity-40 disabled:pointer-events-none";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-red text-text-primary shadow-elevation-sm hover:bg-brand-red-hover",
  secondary:
    "bg-transparent border border-white/12 text-text-primary hover:bg-white/6 hover:border-brand-red",
  ghost: "bg-transparent text-text-primary hover:underline",
};

// Sizes per design-system/05-buttons.md: Small 40px/16px pad, Medium
// 48px/24px, Large 56px/32px, Extra Large 64px/40px.
const sizeClass: Record<Size, string> = {
  sm: "h-10 px-sm text-body-sm",
  md: "h-12 px-md text-body-sm",
  lg: "h-14 px-lg text-body",
  xl: "h-16 px-xl text-body",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children, ...rest } =
    props;
  const classes = cn(base, variantClass[variant], sizeClass[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
