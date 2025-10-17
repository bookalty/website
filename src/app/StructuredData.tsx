const StructuredData: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Bookalty",
          logo: "https://www.bookalty.com/bookalty.png",
          image: "https://www.bookalty.com/bookalty.png",
          telephone: "+590691282230",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Guadeloupe",
            addressCountry: "FR",
          },
          url: "https://www.bookalty.com",
          priceRange: "€€"
        }),
      }}
    />
  );
};

export default StructuredData;
