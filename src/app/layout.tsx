import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

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
      <body>
        <Navbar />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
