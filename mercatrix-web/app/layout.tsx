import Navbar from '../components/Navbar';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mercatrix - Premium Multi-Vendor Marketplace",
  description: "A futuristic, elegant marketplace for independent vendors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0B0F] text-white min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
