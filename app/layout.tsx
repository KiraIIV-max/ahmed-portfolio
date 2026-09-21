import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarsCanvas";
import Footer from "@/components/main/Footer";
import LoadingGate from "@/components/main/LoadingGate";
import { Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Ahmed Mohamed | Full-Stack Software Engineer",
  description:
    "Portfolio of Ahmed Mohamed, a junior full-stack developer building MERN applications, backend systems, desktop tools, and practical business workflows.",
  metadataBase: new URL("https://ahmed-portfolio-rosy-tau.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ahmed Mohamed | Full-Stack Developer",
    description:
      "MERN applications, backend systems, desktop tools, and practical software projects.",
    url: "/",
    siteName: "Ahmed Mohamed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ahmed Mohamed | Full-Stack Developer",
    description:
      "MERN applications, backend systems, desktop tools, and practical software projects.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} h-full antialiased`}
    >
      <body className={`${sora.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <LoadingGate>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </LoadingGate>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahmed Mohamed",
              jobTitle: "Junior Full-Stack Developer",
              url: "https://ahmed-portfolio-rosy-tau.vercel.app",
              sameAs: [
                "https://github.com/KiraIIV-max",
                "https://www.linkedin.com/in/ahmed-mohamed-1012a6353",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cairo",
                addressCountry: "Egypt",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
