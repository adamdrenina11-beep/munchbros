import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Munch Bro's Senec - Burgre a Street Food",
  description: "Munch Bro's Senec - čerstvé burgre, domáce hranolky a skvelá atmosféra. Objednaj si na 0949 593 999 alebo cez Bistro.sk",
  keywords: ["burger senec", "reštaurácia senec", "munch bros", "jedlo senec", "street food senec"],
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: "Munch Bro's Senec",
    description: "Čerstvé burgre a street food v Seneci",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
