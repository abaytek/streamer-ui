import type { Metadata } from "next";
import { Genos } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const genosSans = Genos({
  variable: "--font-genos-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tv app",
  description: "Tv app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${genosSans.variable} antialiased overflow-x-hidden w-full tv-hd:max-w-screen-xl tv-fullhd:max-w-screen-2xl mx-auto p-4`}>
        <Header />
        <div
          style={{
            background: "linear-gradient(to bottom, #212020 0%, #000000 53%)",
          }}
          className="absolute blur-2xl left-1/2 top-0 -z-10  w-full h-full"
        ></div>
        {children}
      </body>
    </html>
  );
}
