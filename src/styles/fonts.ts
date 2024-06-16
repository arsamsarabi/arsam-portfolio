import { Roboto, Roboto_Slab, Indie_Flower } from "next/font/google";

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-family-heading",
});

export const roboto = Roboto({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  variable: "--font-family-body",
});

export const indie = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-cursive",
});
