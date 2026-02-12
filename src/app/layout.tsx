import type { Metadata } from "next";
import {
  Lato,
  DM_Sans,
  Playfair_Display,
  Six_Caps,
  IBM_Plex_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "../Components/Layout/Header";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* =========================
   FONT CONFIGURATION
========================= */

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
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

const sixCaps = Six_Caps({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sixcaps",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.louisdiana.com"),

  title: {
    default:
      "LOUISDIANA | Wholesale Perfume & Clothing Manufacturer in India",
    template: "%s | LOUISDIANA",
  },

  description:
    "LOUISDIANA is a premium wholesale manufacturer and supplier of perfumes and clothing in India. We deliver high-quality fragrances and apparel for retailers, distributors, and bulk buyers across India.",

  keywords: [
    "wholesale perfume manufacturer",
    "bulk perfume supplier India",
    "B2B perfume supplier",
    "private label perfume manufacturer",
    "wholesale clothing supplier",
    "bulk apparel manufacturer India",
    "fashion wholesale India",
    "LOUISDIANA perfumes",
    "LOUISDIANA clothing",
  ],
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${dmSans.variable} ${playfair.variable} ${sixCaps.variable} ${ibmPlexSans.variable}`}
    >
      <body className="font-primary antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}