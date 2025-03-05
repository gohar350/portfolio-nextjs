import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Home from "@/components/effects/Home";
import { commonSeo } from "@/utiles/seo";
import seoData from "@/utiles/seoData";
import Script from "next/script"; // ✅ Import Next.js Script component

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
      <head>
        {/* ✅ Add GTM script inside <head> using next/script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TSJDPHDH');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Add GTM noscript in body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSJDPHDH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Home />
        <Header />
        {children}
      </body>
    </html>
  );
}
