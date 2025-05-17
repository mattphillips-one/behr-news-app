import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fonts } from "@/app/components/ui/fonts";
import Navbar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BEHR News | Business Environment Human Rights",
  description: "BEHR News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='flex h-[140vh] flex-col'>
          <nav className='flex flex-col top-0 sticky'>
            <Navbar />
          </nav>
          <section className='flex flex-col pb-10'>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
