import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { LoadingScreen } from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "VELIXO Estates — Modern Luxury Living",
  description: "VELIXO Estates. Where architecture meets landscape.",
  openGraph: {
    title: "VELIXO Estates — Where architecture meets landscape.",
    description: "A singular residence, sculpted from glass, stone, and light.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <LoadingScreen />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
