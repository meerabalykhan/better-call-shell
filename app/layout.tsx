import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Call Shell — Your pull request is on trial",
  description: "An AI courtroom where bugs are prosecuted, questionable decisions are defended, and no charge survives without evidence.",
  openGraph: {
    title: "Better Call Shell — Your pull request is on trial",
    description: "Bugs are prosecuted. Questionable decisions are defended. No charge survives without evidence.",
    images: [{ url: "/og.png", width: 1456, height: 1088, alt: "Better Call Shell Runtime Court" }],
  },
  twitter: { card: "summary_large_image", title: "Better Call Shell", description: "Your pull request is on trial.", images: ["/og.png"] },
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
        {children}
      </body>
    </html>
  );
}
