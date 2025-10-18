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
  title: "Munch bro´s Senec",
  description: "Munch Bro's Senec - čerstvé burgre, domáce hranolky a skvelá atmosféra. Objednaj si na 0949 593 999 alebo cez Bistro.sk",
  keywords: ["burger senec", "reštaurácia senec", "munch bros", "jedlo senec", "street food senec"],
  authors: [{ name: "Munch Bro's Senec" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      '/images/logo.svg',
    ],
    shortcut: '/favicon-32.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Munch Bro's Senec - Burgre a Street Food",
    description: "Čerstvé burgre a street food v Seneci",
    type: "website",
    locale: "sk_SK",
    url: "https://munchbros-senec.com",
    siteName: "Munch Bro's Senec",
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'Munch Bro\'s Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munch Bro's Senec",
    description: "Čerstvé burgre a street food v Seneci",
    images: ['/images/logo.png'],
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
