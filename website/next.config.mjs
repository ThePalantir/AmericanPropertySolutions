/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/services/property-building-maintenance", destination: "/services/exterior-facilities-maintenance", permanent: true },
      { source: "/services/property-maintenance", destination: "/services/exterior-facilities-maintenance", permanent: true },
      { source: "/services/lawn-landscaping", destination: "/services/exterior-facilities-maintenance", permanent: true },
      { source: "/services/snow-ice-management", destination: "/services/commercial-snow-ice-management", permanent: true },
      { source: "/services/parking-lot-maintenance", destination: "/services/exterior-facilities-maintenance", permanent: true },
      { source: "/services/concrete-services", destination: "/services/commercial-concrete-site-work", permanent: true },
      { source: "/services/excavation-sitework", destination: "/services/excavation-grading-drainage", permanent: true },
      { source: "/services/building-maintenance-repairs", destination: "/services/ongoing-repair-maintenance", permanent: true },
      { source: "/services/decks-patios-hardscapes", destination: "/services/commercial-property-improvements", permanent: true },
      { source: "/services/remodeling-services", destination: "/services/commercial-property-improvements", permanent: true },
      { source: "/american-property-solutions-property-maintenance", destination: "/services/exterior-facilities-maintenance", permanent: true },
      { source: "/american-property-solutions-lawn-and-landscaping-services", destination: "/services/exterior-facilities-maintenance", permanent: true },
      { source: "/snow-plowing-company", destination: "/services/commercial-snow-ice-management", permanent: true },
      { source: "/parking-lot-maintenance", destination: "/services/exterior-facilities-maintenance", permanent: true },
      { source: "/concrete-contractor", destination: "/services/commercial-concrete-site-work", permanent: true },
      { source: "/excavation-and-sitework", destination: "/services/excavation-grading-drainage", permanent: true },
      { source: "/building-maintenance", destination: "/services/ongoing-repair-maintenance", permanent: true },
      { source: "/decks-and-patios", destination: "/services/commercial-property-improvements", permanent: true },
      { source: "/american-property-solutions-contact-us", destination: "/contact", permanent: true }
    ];
  }
};

export default nextConfig;
