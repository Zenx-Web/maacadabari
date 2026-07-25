import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  as: Tag = "section",
}: {
  className?: string;
  children: ReactNode;
  as?: "section" | "div";
}) {
  // Section padding per design-system/03-spacing.md: 72px mobile /
  // 96px tablet / 120px desktop. 120px isn't on the named spacing
  // scale (4xl=128 is the closest token), so this one spot uses
  // arbitrary values rather than forcing an inexact named token.
  return (
    <Tag className={cn("py-[72px] tablet:py-3xl laptop:py-[120px]", className)}>
      {children}
    </Tag>
  );
}
