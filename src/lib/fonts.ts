import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const fonts = {
  clashDisplay: "clash-display-local",
  generalSans: "general-sans-local",
  fraunces: fraunces.variable,
};
