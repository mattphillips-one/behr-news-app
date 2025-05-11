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
        <main className='flex min-h-screen flex-col my-3 md:px-2 mb-10'>
          <a href='/' className={`${fonts.ovo} text-2xl text-center pb-6`}>Business Environment & Human Rights News</a>
          {/*<Navbar />*/}
          <TopicNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
