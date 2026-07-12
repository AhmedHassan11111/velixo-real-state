import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "label";
  style?: React.CSSProperties;
}

export function Eyebrow({ children, className, as: Tag = "span", style }: EyebrowProps) {
  return (
    <Tag className={cn("text-eyebrow text-mist", className)} style={style}>
      {children}
    </Tag>
  );
}
