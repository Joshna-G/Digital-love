import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Gift a Website",
  description: "Create a unique digital space for your favorite person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="google-adsense-account" content="ca-pub-7679235699554731"></meta>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-paper text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}