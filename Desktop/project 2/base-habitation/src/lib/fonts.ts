import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/ClashDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/ClashDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/ClashDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--clash-display",
  display: "swap",
  preload: true,
});

const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--general-sans",
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const fonts = {
  clashDisplay: clashDisplay.variable,
  generalSans: generalSans.variable,
  fraunces: fraunces.variable,
};
