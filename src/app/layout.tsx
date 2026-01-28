import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {/* <Header /> */}
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}