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
        <main className='flex h-[140vh] flex-col mb-10'>
          <nav className='flex flex-col top-0 sticky'>
            <div className='flex justify-center bg-black '>
              <a href='/' className={`${fonts.ovo} text-white text-xl md:text-2xl text-center px-5 py-3 md:py-5`}>
                Business Environment & Human Rights News
              </a>
            </div>
            <Navbar />
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
