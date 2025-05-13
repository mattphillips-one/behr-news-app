import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fonts } from "@/app/components/ui/fonts";
import { Navbar } from "@/app/components/NavBar";
import { TopicNavbar } from "./components/TopicNav";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='flex h-[60vh] flex-col mb-10'>
          <nav className='flex flex-col top-0 sticky'>
            <div className='flex justify-center bg-black '>
              <a href='/' className={`${fonts.ovo} text-white text-2xl text-center p-5`}>
                Business Environment & Human Rights News
              </a>
            </div>
            <TopicNavbar />
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
