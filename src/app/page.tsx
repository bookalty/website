import React from 'react';
import StructuredData from './StructuredData';
import App from './App';
import Head from 'next/head';
import Script from 'next/script'

export const metadata = {
  title: 'Bookalty | PMS Gratuit (Property Management System) open source',
  description: 'Gestion hôtelière simplifiée avec Bookalty, le PMS gratuit et open source conçu pour les petites et moyennes structures. Gérez vos réservations, clients et facturations en toute simplicité.',
  alternates: {
    canonical: 'https://www.bookalty.com/',
    languages: {
      fr: 'https://www.bookalty.com/locales/fr/',
    },
  },
  openGraph: {
    title: 'Bookalty – PMS Gratuit (Property Management System) open source',
    description: 'Gestion hôtelière simplifiée avec Bookalty, le PMS gratuit et open source conçu pour les petites et moyennes structures. Gérez vos réservations, clients et facturations en toute simplicité.',
    url: 'https://www.bookalty.com',
    siteName: 'Bookalty',
    images: [
      {
        url: 'https://www.bookalty.com/bookalty.png',
        width: 630,
        height: 630,
        alt: 'Bookalty Logo',
      },
    ],
    locale: 'fr_GP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bookalty',
    creator: '@bookalty',
    title: 'Bookalty | PMS Gratuit (Property Management System) open source',
    description: 'Gestion hôtelière simplifiée avec Bookalty, le PMS gratuit et open source conçu pour les petites et moyennes structures. Gérez vos réservations, clients et facturations en toute simplicité.',
    images: ['https://www.bookalty.com/logo.png'],
  },
  icons: {
    icon: 'https://www.bookalty.com/favicon.ico',
    shortcut: 'https://www.bookalty.com/favicon.ico',
    apple: 'https://www.bookalty.com/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: 'https://www.bookalty.com/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: 'https://www.bookalty.com/favicon-16x16.png', sizes: '16x16' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.bookalty.com/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.bookalty.com/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.bookalty.com/favicon-16x16.png" />
        <link rel="manifest" href="https://www.bookalty.com/site.webmanifest" />
        <meta name="theme-co lor" content="#000000" />
        <StructuredData />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ES9DWDQCJ2"></Script>
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ES9DWDQCJ2');
        `}
      </Script>
      <App />
    </>
  );
};

export default Page;