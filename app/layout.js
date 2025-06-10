import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "./_components/Navbar";
import TopHeader from "./_components/TopHeader";
import Footer from "./_components/Footer";
import PageTransitionLoader from "./_components/PageTransitionLoader";

import { AnalyticsTracker } from "./AnalyticsTracker";
const GA_MEASUREMENT_ID = "G-9D4B5DME8M";

const manrope = Manrope({
  variable: "--font-Manrope",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://survay-master.vercel.app"),
  title: {
    default: "Survey Master",
    template: "%s | Survey Master",
  },
  description: "When you can collect all surveying tools from one place.",
  openGraph: {
    title: "Survey Master",
    description: "When you can collect all surveying tools from one place.",
    url: "https://survay-master.vercel.app",
    siteName: "Survey Master",
    images: [
      {
        url: "logo_wh.png",
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className} suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        <header>
          <TopHeader />
          <Navbar />
        </header>
        <main>
          {/* <PageTransitionLoader /> */}
          <AnalyticsTracker />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
