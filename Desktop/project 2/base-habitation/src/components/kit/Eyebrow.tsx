import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "label";
}

export function Eyebrow({ children, className, as: Tag = "span" }: EyebrowProps) {
  return (
    <Tag className={cn("text-eyebrow text-mist", className)}>
      {children}
    </Tag>
  );
}
