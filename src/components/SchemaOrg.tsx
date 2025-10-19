import Script from 'next/script';

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Munch Bro's",
  "image": "https://munchbros-senec.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lichnerova 4376/41A",
      "addressLocality": "Senec",
      "postalCode": "903 01",
      "addressCountry": "SK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.2194",
      "longitude": "17.3995"
    },
    "telephone": "+421949593999",
    "url": "https://munchbros-senec.com",
    "servesCuisine": ["Burgre", "Fast Food", "Street Food"],
    "priceRange": "€€",
    "acceptsReservations": "False",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "Closed",
        "closes": "Closed"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "12:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "12:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday"],
        "opens": "12:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "12:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "15:00",
        "closes": "20:30"
      }
    ],
    "menu": "https://munchbros-senec.com/#menu",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card"
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
