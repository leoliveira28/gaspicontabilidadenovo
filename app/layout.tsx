import type { Metadata } from 'next'
import './globals.css'
import { seoConfig } from './config/seo'

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.defaultDescription,
  keywords: seoConfig.keywords,
  authors: [{ name: 'Gaspi Contabilidade' }],
  creator: 'Gaspi Contabilidade',
  publisher: 'Gaspi Contabilidade',
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
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: seoConfig.siteUrl,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    siteName: seoConfig.siteName,
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: seoConfig.openGraph.images,
  },
  verification: {
    google: 'your-google-verification-code', // Adicionar após criar Google Search Console
  },
}

export default function GaspiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Schema.org JSON-LD para Local Business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: seoConfig.business.name,
    legalName: seoConfig.business.legalName,
    description: seoConfig.business.description,
    url: seoConfig.siteUrl,
    telephone: seoConfig.business.telephone,
    email: seoConfig.business.email,
    priceRange: seoConfig.business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.business.address.streetAddress,
      addressLocality: seoConfig.business.address.addressLocality,
      addressRegion: seoConfig.business.address.addressRegion,
      postalCode: seoConfig.business.address.postalCode,
      addressCountry: seoConfig.business.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.business.geo.latitude,
      longitude: seoConfig.business.geo.longitude,
    },
    areaServed: seoConfig.business.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Contabilidade',
      itemListElement: seoConfig.business.serviceType.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
    sameAs: [
      'https://instagram.com/gaspicontabilidade',
      `https://wa.me/${seoConfig.business.telephone.replace(/\D/g, '')}`,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '500',
    },
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
    