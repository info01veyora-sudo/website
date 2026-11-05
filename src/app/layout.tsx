import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Sprite } from "@/components/Sprite";
import "./veyora.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veyora Digital Studio",
  description:
    "We design, develop and innovate digital solutions that help your business grow in the modern world.",
  metadataBase: new URL("https://veyora.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <Sprite />
        {children}
      </body>
    </html>
  );
}
