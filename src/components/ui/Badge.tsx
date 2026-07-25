import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  dotColor = "bg-brand-red",
}: {
  children: ReactNode;
  className?: string;
  dotColor?: string;
}) {
  return (
    <span
      className={cn(
        "glass-panel inline-flex items-center gap-xs rounded-button border border-border px-sm py-1 text-caption font-medium tracking-buttons uppercase text-text-secondary",
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", dotColor)} />
      {children}
    </span>
  );
}
