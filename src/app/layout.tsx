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
  title: {
    template: "%s | Veyora Digital Studio",
    default: "Veyora Digital Studio",
  },
  description:
    "We design, develop and innovate digital solutions that help your business grow in the modern world.",
  keywords: [
    "digital studio",
    "web development",
    "mobile development",
    "UI/UX design",
    "digital solutions",
    "Veyora",
  ],
  authors: [{ name: "Veyora Digital Studio" }],
  creator: "Veyora Digital Studio",
  publisher: "Veyora Digital Studio",
  robots: "index, follow",
  metadataBase: new URL("https://veyora.dev"),
  openGraph: {
    title: "Veyora Digital Studio",
    description:
      "We design, develop and innovate digital solutions that help your business grow in the modern world.",
    type: "website",
    url: "https://veyora.dev",
    siteName: "Veyora Digital Studio",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1254,
        height: 1254,
        alt: "Veyora logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veyora Digital Studio",
    description:
      "We design, develop and innovate digital solutions that help your business grow in the modern world.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "shortcut icon",
        url: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" type="image/png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" sizes="180x180" type="image/png" />
      </head>
      <body>
        <Sprite />
        {children}
      </body>
    </html>
  );
}
