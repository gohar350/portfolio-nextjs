import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/common/Footer";
import Motion from "@/components/effects/Motion";
import { SITE_URL, SITE_NAME, PERSON } from "@/utiles/site";
import Script from "next/script";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* Site-wide defaults only. Each route supplies its own title, description
   and canonical via commonSeo(path); Next merges page over layout. */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSON.name} — ${PERSON.jobTitle}`,
    template: `%s`,
  },
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: false },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/img/gohar.jpg",
  },
  /* Paste the token from Google Search Console → HTML tag verification.
     Left null so no empty meta tag is emitted until it exists. */
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }) {
  return (
    // Browser extensions (ad blockers, window resizers, Grammarly…) inject
    // attributes onto <html> before React hydrates. Suppressing here keeps
    // those out of the hydration diff; it only covers this element's own
    // attributes, so real mismatches inside the app still surface.
    <html lang="en" suppressHydrationWarning>
      <head>
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
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSJDPHDH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Ambient backdrop — aurora, grain, hairline grid */}
        <div className="atmosphere" aria-hidden="true">
          <span className="aurora aurora--1" />
          <span className="aurora aurora--2" />
          <span className="aurora aurora--3" />
          <span className="gridlines" />
          <span className="grain" />
        </div>

        <Motion />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
