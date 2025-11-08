import type { Metadata } from "next";
import SentryInit from '../components/SentryInit';
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#9333ea',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://munchbros-senec.com'),
  title: {
    default: "Munch Bro's Senec - Najlepšie Burgre v Senci",
    template: "%s | Munch Bro's Senec"
  },
  description: "Munch Bro's Senec ponúka čerstvé burgre z bio mäsa, domáce hranolky a vyprážané dezerty. Street food v Seneci s doručením. Objednaj si na 0949 593 999 alebo cez Bistro.sk",
  keywords: ["burger senec", "reštaurácia senec", "munch bros", "jedlo senec", "street food senec", "bio burger", "domáce hranolky", "doručenie jedla senec", "halloumi burger", "vyprážané oreo", "burger bar senec"],
  authors: [{ name: "Munch Bro's Senec" }],
  creator: "Munch Bro's Senec",
  publisher: "Munch Bro's Senec",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://munchbros-senec.com',
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: "Munch Bro's Senec - Najlepšie Burgre a Street Food",
    description: "Čerstvé bio burgre, domáce hranolky a vyprážané dezerty v Seneci. Objednaj si teraz!",
    type: "website",
    locale: "sk_SK",
    url: "https://munchbros-senec.com",
    siteName: "Munch Bro's Senec",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Munch Bro\'s Senec - Čerstvé Burgre a Street Food',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munch Bro's Senec - Najlepšie Burgre",
    description: "Čerstvé bio burgre, domáce hranolky a vyprážané dezerty v Seneci",
    images: ['/images/logo.png'],
    creator: "@munchbros",
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'format-detection': 'telephone=yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Munch Bro's Senec",
    "image": "https://munchbros-senec.com/images/logo.png",
    "description": "Čerstvé bio burgre, domáce hranolky a vyprážané dezerty v Seneci",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lichnerova 41A",
      "addressLocality": "Senec",
      "postalCode": "903 01",
      "addressCountry": "SK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.2203,
      "longitude": 17.4001
    },
    "url": "https://munchbros-senec.com",
    "telephone": "+421949593999",
    "servesCuisine": "American, Street Food",
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "11:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100"
    }
  };

  return (
    <html lang="sk">
      <head>
        {/* Explicit links to help crawlers and older devices */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SentryInit />
        {children}
      </body>
    </html>
  );
}
