import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VELIXO Estates — Modern Luxury Living",
  description: "VELIXO Estates. Where architecture meets landscape.",
  openGraph: {
    title: "VELIXO Estates — Where architecture meets landscape.",
    description: "A singular residence, sculpted from glass, stone, and light.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        fonts.clashDisplay,
        fonts.generalSans,
        fonts.fraunces
      )}
    >
      <body className="min-h-full bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
