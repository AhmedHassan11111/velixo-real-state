import type { JSX } from "react";
import { cn } from "@/lib/utils";

interface HeadlineProps {
  children: string;
  highlight?: string;
  className?: string;
  level?: 1 | 2 | 3;
}

export function Headline({
  children,
  highlight,
  className,
  level = 2,
}: HeadlineProps) {
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements);
  const sizeClass = `text-h${level}`;

  if (!highlight) {
    return <Tag className={cn(sizeClass, className)}>{children}</Tag>;
  }

  const parts = children.split(highlight);
  if (parts.length < 2) {
    return <Tag className={cn(sizeClass, className)}>{children}</Tag>;
  }

  return (
    <Tag className={cn(sizeClass, className)}>
      {parts[0]}
      <span className="font-decorative italic text-accent">{highlight}</span>
      {parts.slice(1).join(highlight)}
    </Tag>
  );
}
