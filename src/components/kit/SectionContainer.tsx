import type { JSX } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  as: Tag = "section",
  id,
}: SectionContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full", className)}
      style={{
        maxWidth: "var(--container-max)",
        paddingLeft: "var(--section-pad)",
        paddingRight: "var(--section-pad)",
      }}
    >
      {children}
    </Tag>
  );
}
