import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Qatra Cafe - Afghan Coffee House & Game Lounge",
  description: "Experience authentic Afghan hospitality with traditional chai, floor seating on handwoven carpets, and classic games in the heart of the Bay Area.",
  keywords: "Afghan cafe, Bay Area cafe, traditional chai, Carrom, gaming cafe, coffee house, Afghan tea, floor seating",
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
