import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aps-pa.com"),
  title: {
    default: "Commercial Exterior Facilities Maintenance | American Property Solutions",
    template: "%s | American Property Solutions"
  },
  description:
    "American Property Solutions provides commercial exterior facilities maintenance, concrete and site work, excavation, grading, drainage, property improvements, repair support, and a connection to specialized commercial snow and ice management.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://aps-pa.com",
    siteName: "American Property Solutions",
    title: "Commercial Exterior Facilities Maintenance | American Property Solutions",
    description: "One commercial property relationship for exterior maintenance, repairs, site work, improvements, and seasonal needs.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "American Property Solutions exterior facilities maintenance" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Exterior Facilities Maintenance | American Property Solutions",
    description: "One commercial property relationship for exterior maintenance, repairs, site work, improvements, and seasonal needs.",
    images: ["/og.png"]
  },
  robots: {
    index: false,
    follow: false
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "American Property Solutions",
  url: "https://aps-pa.com",
  telephone: "+1-610-760-0600",
  description: "Commercial exterior facilities maintenance, concrete and site work, excavation, grading, drainage, property improvements, and ongoing repair support.",
  address: { "@type": "PostalAddress", streetAddress: "4531 Lehigh Dr", addressLocality: "Walnutport", addressRegion: "PA", postalCode: "18088", addressCountry: "US" }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Link className="skip-link" href="#main">
          Skip to content
        </Link>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
