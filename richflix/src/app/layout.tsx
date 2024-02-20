import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import  Navbar  from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "RichFlix",
  description: "Browse and search for movies and TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-gray-950 text-slate-200">
        <body className=''>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
