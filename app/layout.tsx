import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

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
          <div className="">{children}</div>
          <footer className="border-t-4 border-black bg-white p-4">
            <p className="text-black ">
              © {new Date().getFullYear()}
              <a
                className="pl-2 underline hover:text-blue-500"
                href="https://www.linkedin.com/in/m-sauki-futaki-wahid-b67a7924a/"
              >
                Sauki Futaki
              </a>
            </p>
          </footer>
       
      </body>
    </html>
  );
}
