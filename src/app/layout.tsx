import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-thai",
});

export const metadata: Metadata = {
  title: "NeuroLink AI",
  description: "Healthier People, Brighter Tomorrows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={ibmPlexSansThai.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
