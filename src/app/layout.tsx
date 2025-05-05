import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fonts } from "@/app/components/ui/fonts";
import { Navbar } from "@/app/components/nav";

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
  description: "Business Environment Human Rights",
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
        <main className='flex min-h-screen flex-col m-3 mb-10'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
