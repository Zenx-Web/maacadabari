import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "reading" | "default" | "wide";

const sizeClass: Record<ContainerSize, string> = {
  reading: "max-w-reading",
  default: "max-w-default",
  wide: "max-w-wide",
};

export function Container({
  size = "default",
  className,
  children,
}: {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-mobile-pad tablet:px-tablet-pad laptop:px-laptop-pad desktop:px-desktop-pad",
        sizeClass[size],
        className
      )}
    >
      {children}
    </div>
  );
}
