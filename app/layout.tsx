import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarsCanvas";
import Footer from "@/components/main/Footer";
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
    "Full-stack developer portfolio for Ahmed Mohamed, covering frontend, backend, cloud, DevOps, AI automation, and software engineering projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} h-full antialiased`}
    >
      <body className={`${sora.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
