import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AUFMART | Wholesale Perfume Manufacturer",
    template: "%s | AUFMART",
  },
  description:
    "AUFMART is a wholesale perfume manufacturer offering premium fragrances for B2B buyers.",
  metadataBase: new URL("https://aufmart.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="font-primary">
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>
      </body>
    </html>
  );
}