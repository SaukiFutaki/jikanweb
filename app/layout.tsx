import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Footer from "@/components/footer";
// import PageTransitionEffect from "@/components/pagetransition";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <NextTopLoader />
        <Navbar />
        
        <div className="hidden sm:hidden md:hidden lg:block">{children}</div>
        {/* <PageTransitionEffect>{children}</PageTransitionEffect> */}
        <Footer />
        <div className="flex justify-center items-center h-screen lg:hidden  sm:block md:block">
          <h1 className="text-4xl font-bold text-center  ">
            This site is not supported on mobile devices
          </h1>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
