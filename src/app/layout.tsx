import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/data/siteData";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#10213B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://skdgroupofinstitutions.com"),
  title: {
    default: "Best ACCA Coaching in Chandigarh | SKD Group of Institutions",
    template: "%s | SKD Group of Institutions",
  },
  description:
    "SKD Group of Institutions is an Approved ACCA Silver Learning Partner in Chandigarh. Premier coaching for ACCA, CA, US CMA, and US CPA with CBE simulation, expert mentors, and 100% placement support.",
  keywords: [
    "ACCA coaching in Chandigarh",
    "Best ACCA coaching in Chandigarh",
    "ACCA institute in Chandigarh",
    "ACCA classes in Chandigarh",
    "ACCA coaching in India",
    "ACCA online classes",
    "CA coaching in Chandigarh",
    "CA Foundation coaching Chandigarh",
    "CA Intermediate coaching Chandigarh",
    "US CMA coaching in India",
    "US CPA coaching in India",
    "Professional accounting courses Chandigarh",
  ],
  authors: [{ name: "SKD Group of Institutions" }],
  creator: "SKD Group of Institutions",
  publisher: "SKD Group of Institutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best ACCA Coaching in Chandigarh | SKD Group of Institutions",
    description:
      "Approved ACCA Silver Learning Partner in Chandigarh. Professional training for ACCA, CA, US CMA and US CPA with expert mentors and placement assistance.",
    url: "https://skdgroupofinstitutions.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/images/acca-coaching-chandigarh-.png",
        width: 1200,
        height: 630,
        alt: "SKD Group of Institutions - ACCA Coaching Chandigarh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best ACCA Coaching in Chandigarh | SKD Group of Institutions",
    description:
      "Approved ACCA Silver Learning Partner in Chandigarh. Professional training for ACCA, CA, US CMA and US CPA.",
    images: ["/assets/images/acca-coaching-chandigarh-.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.className} h-full scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#172B45] antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
