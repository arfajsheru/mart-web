import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display, Six_Caps, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "../Components/Layout/Header";

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


const sixcaps = Six_Caps({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sixcaps",
  display: "swap",
});

const ibmplexsans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
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
      className={`${inter.variable} ${dmSans.variable} ${playfair.variable} ${sixcaps.variable} ${ibmplexsans.variable}`}
    >
      <body className="font-primary">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
