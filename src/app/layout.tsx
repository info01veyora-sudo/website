import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Veyora Digital Studio",
  description:
    "Veyora Digital Studio builds modern websites, business applications, and automation solutions for growing businesses.",
  metadataBase: new URL("https://veyora.dev"),
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* Inline theme script: runs before first paint to prevent flash */}
      <script
        id="theme-init"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              try {
                var stored = localStorage.getItem('veyora-theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored || (systemDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
            })();
          `,
        }}
      />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
