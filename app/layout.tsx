import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://c7-cits.com"),
  title: {
    default: "C7 Consulting & IT Services | Strategy. Technology. Results.",
    template: "%s | C7 Consulting & IT Services",
  },
  description:
    "C7 Consulting & IT Services helps businesses operate better, plan smarter, and implement the right technology. Business consulting, AI integration, and IT services built to execute.",
  keywords: [
    "business consulting",
    "IT consulting",
    "AI integration",
    "business process improvement",
    "strategic planning",
    "technology consulting",
    "operations consulting",
    "management consulting",
    "Utah consulting",
    "Lehi Utah consulting",
  ],
  authors: [{ name: "C7 Consulting & IT Services" }],
  creator: "C7 Consulting & IT Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://c7-cits.com",
    siteName: "C7 Consulting & IT Services",
    title: "C7 Consulting & IT Services | Strategy. Technology. Results.",
    description:
      "Business consulting, AI integration, and IT services built to execute. We stay in the work until the result is real.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "C7 Consulting & IT Services — Strategy. Technology. Results.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C7 Consulting & IT Services | Strategy. Technology. Results.",
    description:
      "Business consulting, AI integration, and IT services built to execute.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "C7 Consulting & IT Services",
  url: "https://c7-cits.com",
  logo: "https://c7-cits.com/logo/c7-mark.png",
  description:
    "C7 Consulting & IT Services helps businesses operate better, plan smarter, and implement the right technology. Specializing in business process improvement, strategic planning, technology implementation, and AI integration.",
  telephone: "+18018952270",
  email: "operations@c7-cits.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "218 S 1800 W",
    addressLocality: "Lehi",
    addressRegion: "UT",
    postalCode: "84043",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Business Process Improvement",
    "Strategic Planning",
    "IT Consulting",
    "AI Integration",
    "Operations Consulting",
    "Technology Implementation",
  ],
  sameAs: ["https://www.linkedin.com/company/c7-cits"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
