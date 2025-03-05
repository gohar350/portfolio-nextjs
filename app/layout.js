import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Home from "@/components/effects/Home";
import { commonSeo } from "@/utiles/seo";
import seoData from "@/utiles/seoData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateMetadata() {
  const canonicalURL = `${process.env.NEXT_PUBLIC_SITEBASE_URL}/`;
  let data = commonSeo(canonicalURL, seoData);

  const { response, ...seoObj } = data;
  return {
    ...seoObj,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Home />
        <Header />
        {children}
      </body>
    </html>
  );
}
