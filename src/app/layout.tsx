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
  metadataBase: new URL('https://munchbros.com'),
  title: {
    default: "MunchBros Senec — Burgre & Rozvoz | Objednaj online",
    template: "%s | MunchBros Senec"
  },
  description: "MunchBros v Senci — šťavnaté burgre, čerstvé suroviny a rýchly rozvoz. Pozri menu, akcie a objednaj online ešte dnes.",
  keywords: [
    "burger senec", 
    "burgre senec", 
    "munchbros", 
    "munch bros", 
    "reštaurácia senec", 
    "street food senec", 
    "rozvoz jedla senec",
    "bio burger", 
    "cheeseburgery senec",
    "bbq burger senec",
    "veggie burger senec",
    "halloumi burger",
    "domáce hranolky", 
    "vyprážané oreo", 
    "burger bar senec",
    "online objednávka jedlo senec",
    "rýchle jedlo senec",
    "burger kombo senec",
    "najlepšie burgre senec"
  ],
  authors: [{ name: "MunchBros Senec" }],
  creator: "MunchBros Senec",
  publisher: "MunchBros Senec",
  applicationName: "MunchBros",
  category: "Restaurant",
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
    canonical: 'https://munchbros.com',
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
    title: "MunchBros Senec — Burgre & Rozvoz | Objednaj online",
    description: "MunchBros v Senci — šťavnaté burgre, čerstvé suroviny a rýchly rozvoz. Pozri menu a objednaj ešte dnes.",
    type: "website",
    locale: "sk_SK",
    url: "https://munchbros.com",
    siteName: "MunchBros",
    images: [
      {
        url: 'https://munchbros.com/images/Munch bro´s.png',
        width: 1200,
        height: 630,
        alt: 'MunchBros Senec - Čersté Burgre a Street Food',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MunchBros Senec — Burgre & Rozvoz",
    description: "Šťavnaté burgre s rýchlym rozvozom v Senci. Pozri menu a objednaj online.",
    images: ['https://munchbros.com/images/logo.png'],
    creator: "@munchbros",
    site: "@munchbros",
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
    "name": "MunchBros Senec",
    "alternateName": "Munch Bros",
    "image": "https://munchbros.com/images/logo.png",
    "description": "MunchBros v Senci ponúka čerstvé burgre z bio mäsa, domáce hranolky, vyprážané dezerty a rýchly rozvoz. Street food na najvyššej úrovni.",
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
    "url": "https://munchbros.com",
    "telephone": "+421949593999",
    "servesCuisine": ["Burgers", "American", "Street Food", "Fast Food"],
    "priceRange": "$$",
    "acceptsReservations": false,
    "hasMenu": "https://munchbros.com/#menu",
    "areaServed": {
      "@type": "City",
      "name": "Senec"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "00:00",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "12:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "15:00",
        "closes": "20:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/munchbros",
      "https://www.instagram.com/munchbros"
    ]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kde si môžem pozrieť menu MunchBros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Menu nájdete priamo na našej stránke https://munchbros.com/#menu so všetkými burgermi, kombami, prílohami a cenami."
        }
      },
      {
        "@type": "Question",
        "name": "Ako funguje rozvoz v Senci?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rozvoz zabezpečujeme po celom Senci. Objednajte online cez Bistro.sk alebo zavolajte na 0949 593 999. Doba doručenia závisí od momentálnej obsadenosti."
        }
      },
      {
        "@type": "Question",
        "name": "Aké sú otváracie hodiny MunchBros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Otvorené máme Utorok-Sobota 12:00-21:00, Nedeľa 15:00-20:30. Pondelok máme zatvorené."
        }
      },
      {
        "@type": "Question",
        "name": "Máte aj vegetariánske možnosti?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Áno, ponúkame Halloumi burger a vegetariánske šaláty. Viac informácií nájdete v našom menu."
        }
      }
    ]
  };

  return (
    <html lang="sk">
      <head>
        {/* Performance resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        {/* Preload hero logo for faster LCP */}
        <link rel="preload" as="image" href="/images/logo.png" fetchPriority="high" />
        {/* Explicit links to help crawlers and older devices */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        {/* Restaurant Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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
