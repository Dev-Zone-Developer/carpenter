import type { Metadata } from 'next'
import '../styles/globals.css'
import { useStore } from '@/components/Store/Store';

// const { client_map_address_text, client_Phone } = useStore();
const client_map_address_text = process.env.client_map_address_text || "New Lahore City Rd, Lahore, Punjab, Pakistan";
const client_Phone = process.env.client_Phone || "+92 324 1012395";


export const metadata: Metadata = {
  title: 'Lahore Carpenter Services | Expert Woodwork & Furniture in Lahore, Pakistan',
  description: `Professional carpenter services in Lahore, Pakistan. Custom furniture, kitchen cabinets, wardrobes, wooden doors, office furniture & interior wood solutions. 20+ years experience in ${client_map_address_text}. Call or WhatsApp: ${client_Phone}.`,
  keywords: `carpenter lahore, furniture repair lahore, custom furniture lahore, kitchen cabinets lahore, wooden doors lahore, wardrobes lahore, carpenter ${client_map_address_text}, furniture maker lahore`,
  authors: [{ name: 'Lahore Carpenter Services' }],
  openGraph: {
    title: 'Lahore Carpenter Services | Expert Woodwork & Furniture',
    description: 'Professional carpenter services in Lahore, Pakistan. 500+ projects completed, 20+ years experience.',
    url: 'https://lahorecarpenterservices.pk',
    siteName: 'Lahore Carpenter Services',
    locale: 'en_PK',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lahorecarpenterservices.pk',
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lahore Carpenter Services",
  "description": "Professional carpenter services in Lahore, Pakistan. Custom furniture, kitchen cabinets, wardrobes, wooden doors & interior wood solutions.",
  "url": "https://lahorecarpenterservices.pk",
  "telephone": client_Phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": client_map_address_text,
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "postalCode": "54700",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.4504,
    "longitude": 74.2707
  },
  "openingHours": ["Mo-Sa 08:00-20:00", "Su 10:00-17:00"],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
