import {
  Geist,
  Geist_Mono,
  Open_Sans,
  Playfair_Display,
  Poppins,
} from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "400",

  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Fonts = {
  playfairDisplay,
  openSans,
  poppins,
  geistSans,
  geistMono,
};
