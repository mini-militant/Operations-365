"use client";

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Operations@365",
    alternateName: "Operations at 365",
    url: "https://www.operations365.com",
    logo: "https://www.operations365.com/logo.png",
    description: "Operations@365 helps businesses streamline processes, allocate resources efficiently, and improve performance with data transparency and measurable results.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-123-456-7890",
      contactType: "Customer Service",
      email: "contact@operations365.com",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/operations365",
      "https://twitter.com/operations365",
      "https://www.facebook.com/operations365",
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Operations Management",
    provider: {
      "@type": "Organization",
      name: "Operations@365",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Operations Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Process Management & Optimization",
            description: "Streamline your operations with optimized workflows, SOPs, and continuous improvement strategies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Resource Allocation & Planning",
            description: "Strategic resource planning to maximize efficiency and minimize waste across your organization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sales Operations Support",
            description: "End-to-end sales ops support including CRM management, pipeline tracking, and performance analytics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "KPI Tracking & Reporting",
            description: "Real-time dashboards and comprehensive reports to monitor business metrics that matter.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Operations@365",
    url: "https://www.operations365.com",
    description: "End-to-End Operational Excellence for Your Business",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.operations365.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default JsonLd;

