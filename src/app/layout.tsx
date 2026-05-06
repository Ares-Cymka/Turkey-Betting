import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ChatFab } from "@/components/chat-fab";
import { SiteFooter } from "@/components/site-footer";
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
  title: "Turkey Betting Platform",
  description: "Sports betting platform UI for Turkey market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black text-white">
        <div className="flex-1">{children}</div>
        <ChatFab />
        <SiteFooter />
      </body>
    </html>
  );
}
