import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operations@365 - End-to-End Operational Excellence",
  description: "Operations@365 helps businesses streamline processes, allocate resources efficiently, and improve performance with data transparency and measurable results. Expert operations outsourcing and process management services.",
  keywords: "process outsourcing, business operations management, sales operations support, KPI tracking dashboard, resource allocation company India, operational excellence, process optimization",
  authors: [{ name: "Operations@365" }],
  openGraph: {
    title: "Operations@365 - You Create, We Serve",
    description: "Streamline your business operations with our expert process management and resource allocation services.",
    type: "website",
    locale: "en_US",
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

