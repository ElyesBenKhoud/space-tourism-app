import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--bellefair-font",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

export const metadata: Metadata = {
  title: "Space tourim app",
  description: "Developped by Elyes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlow.variable} bg-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
