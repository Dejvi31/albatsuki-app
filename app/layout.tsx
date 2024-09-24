import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albatsuki App",
  description:
    "Albatsuki App eshte nje app qe cdo fans i animeve duhet ta kete. Ketu mund te shikoni anime me dublim shqip dhe titra shqip, gjithashtu AMV me kenge shqip, fakte dhe kuice te ndryshme. Mund te perfitoni coins dhe te merrni dhurata falas here pas here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
