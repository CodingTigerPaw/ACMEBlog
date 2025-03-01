import type { Metadata } from "next";

import { Fonts } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog ACME",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fonts.geistSans.variable} ${Fonts.geistMono.variable} ${Fonts.playfairDisplay.variable} ${Fonts.openSans.variable} ${Fonts.poppins.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
