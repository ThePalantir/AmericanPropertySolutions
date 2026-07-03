export const business = {
  name: "American Property Solutions",
  phone: "610-760-0600",
  phoneHref: "tel:+16107600600",
  paAddress: "4531 Lehigh Dr, Walnutport, PA 18088",
  nyAddress: "3209 Steward Road, Vestal, NY 13850",
  hours: "M-F 9AM-4PM",
  demoNote:
    "Concept site: final public copy, photos, service areas, trust claims, and emergency-response language require APS approval."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Property & Building Maintenance",
    href: "/services/property-building-maintenance"
  },
  { label: "Contact", href: "/contact" }
];

export const servicePriority = [
  "Property Maintenance",
  "Building Maintenance",
  "Stacking and Hauling",
  "Remodeling Contractor",
  "Emergency Snow Plow Contractor",
  "Flowers and Shrubs",
  "Landscaping Contractor",
  "New Sod",
  "Paver Installer",
  "Patio & Deck Contractor",
  "Excavation Contractor",
  "Paving Contractor",
  "Concrete Contractor",
  "Crack Sealing and Sealcoating",
  "Line Striping"
];

export const serviceGroups = [
  {
    title: "Landscape & Grounds Maintenance",
    href: "/services",
    eyebrow: "Grounds",
    summary:
      "Landscape maintenance, flowers and shrubs, new sod, and exterior grounds work presented as part of commercial property upkeep.",
    items: ["Flowers and Shrubs", "Landscaping Contractor", "New Sod"]
  },
  {
    title: "Snow & Ice Management",
    href: "/services",
    eyebrow: "Seasonal",
    summary:
      "Emergency Snow Plow Contractor remains an important seasonal service, not the flagship service page.",
    items: ["Emergency Snow Plow Contractor"]
  },
  {
    title: "Paving, Sealcoating & Parking Lots",
    href: "/services",
    eyebrow: "Parking areas",
    summary:
      "Paving, crack sealing, sealcoating, and line striping grouped around access, appearance, and parking-lot upkeep.",
    items: ["Paving Contractor", "Crack Sealing and Sealcoating", "Line Striping"]
  },
  {
    title: "Concrete & Sitework",
    href: "/services",
    eyebrow: "Site support",
    summary:
      "Concrete and excavation services framed as practical site maintenance and exterior property support.",
    items: ["Excavation Contractor", "Concrete Contractor"]
  },
  {
    title: "Building / Facility Maintenance",
    href: "/services/property-building-maintenance",
    eyebrow: "Flagship page",
    summary:
      "The evergreen flagship path for property maintenance, building maintenance, repair support, and hauling needs.",
    items: ["Property Maintenance", "Building Maintenance", "Stacking and Hauling"]
  },
  {
    title: "Remodeling / Special Projects",
    href: "/services",
    eyebrow: "Validate scope",
    summary:
      "Remodeling, pavers, patios, and decks remain visible as special-project services pending final scope validation.",
    items: ["Remodeling Contractor", "Paver Installer", "Patio & Deck Contractor"]
  }
];

export const audienceLabels = [
  "Commercial property owners",
  "Property managers",
  "Local businesses",
  "Facilities and operations managers",
  "Residential homeowners with exterior property needs"
];

export const trustBarItems = [
  {
    label: "Commercial property focus",
    note: "Supported by current site language referencing commercial properties."
  },
  {
    label: "Four-season maintenance",
    note: "Supported by current site positioning."
  },
  {
    label: "Lehigh Valley base",
    note: "Walnutport, PA location and Lehigh Valley references are public facts."
  },
  {
    label: "Credentials pending approval",
    note: "Badges, affiliations, or ratings can be added only after APS validates them."
  }
];

export const propertyTypes = [
  { label: "Commercial properties", status: "Supported by current site language" },
  { label: "Retail centers", status: "Audience to validate" },
  { label: "Office parks", status: "Audience to validate" },
  { label: "Industrial sites", status: "Audience to validate" },
  { label: "Multi-family communities", status: "Audience to validate" },
  { label: "HOAs", status: "Audience to validate" }
];

export const serviceAreas = [
  "Lehigh Valley",
  "Walnutport",
  "Allentown",
  "Bethlehem",
  "Easton",
  "Nazareth",
  "Whitehall",
  "Emmaus",
  "Macungie",
  "Bath",
  "Palmerton",
  "Lehighton",
  "Northeast Pennsylvania",
  "Northampton County",
  "Lehigh County",
  "Carbon County"
];

export type VisualAsset = {
  id: string;
  title: string;
  alt: string;
  recommendedFile: string;
  usage: string;
  src?: string;
  status: "pending-approval" | "approved";
};

export const heroAsset: VisualAsset = {
  id: "hero-commercial-property",
  title: "Commercial property maintenance",
  alt: "Corporate building exterior used for APS commercial property maintenance positioning",
  recommendedFile: "CorporateBuildingExterior1.jpg",
  usage: "Homepage hero image showing a maintained commercial exterior, parking area, crew, or APS equipment.",
  src: "/approved-aps-assets/CorporateBuildingExterior1.jpg",
  status: "approved"
};

export const galleryAssets: VisualAsset[] = [
  {
    id: "commercial-exterior",
    title: "Commercial exterior maintenance",
    alt: "Corporate building exterior used for APS commercial exterior maintenance context",
    recommendedFile: "CorporateBuildingExterior2.jpg",
    usage: "Commercial property exterior with maintained grounds and visible site context.",
    src: "/approved-aps-assets/CorporateBuildingExterior2.jpg",
    status: "approved"
  },
  {
    id: "crew-equipment",
    title: "APS crews and equipment",
    alt: "APS snow plow equipment used for service equipment context",
    recommendedFile: "SnowPlowEquipment1.png",
    usage: "APS crew, truck, trailer, equipment, or work setup at an approved property.",
    src: "/approved-aps-assets/SnowPlowEquipment1.png",
    status: "approved"
  },
  {
    id: "snow-cleared-lot",
    title: "Snow-cleared parking lot",
    alt: "APS plowing photo used for snow and ice management context",
    recommendedFile: "Plowing1.png",
    usage: "Commercial lot or access area after snow service, if APS approves the image and service context.",
    src: "/approved-aps-assets/Plowing1.png",
    status: "approved"
  },
  {
    id: "parking-lot-work",
    title: "Parking lot work",
    alt: "APS sealcoating photo used for parking lot maintenance context",
    recommendedFile: "sealcoating.png",
    usage: "Paving, sealcoating, crack sealing, or line striping work shown clearly.",
    src: "/approved-aps-assets/sealcoating.png",
    status: "approved"
  },
  {
    id: "concrete-sitework",
    title: "Concrete and sitework",
    alt: "Approved APS concrete or sitework photo pending",
    recommendedFile: "concrete-sitework.jpg",
    usage: "Concrete, excavation, drainage, or sitework photo approved for public use.",
    status: "pending-approval"
  },
  {
    id: "building-maintenance",
    title: "Building / facility maintenance",
    alt: "APS building maintenance photo used for facility maintenance context",
    recommendedFile: "buildingmaintenance.png",
    usage: "Building maintenance, repair support, hauling, or special-project context approved by APS.",
    src: "/approved-aps-assets/buildingmaintenance.png",
    status: "approved"
  }
];


export const serviceOverviewAsset: VisualAsset = {
  id: "services-overview",
  title: "Organized commercial service paths",
  alt: "APS landscaping and grounds maintenance photo used for the services overview",
  recommendedFile: "Landscaping3.png",
  usage: "Service overview image showing APS work types, equipment, or commercial property context.",
  src: "/approved-aps-assets/Landscaping3.png",
  status: "approved"
};

export const propertyMaintenanceAsset: VisualAsset = {
  id: "property-building-maintenance",
  title: "Property and building maintenance",
  alt: "APS drywall repair photo used for property and building maintenance context",
  recommendedFile: "aps-drywall.jpeg",
  usage: "Flagship service image for property maintenance, building maintenance, hauling, or repair-support context.",
  src: "/approved-aps-assets/aps-drywall.jpeg",
  status: "approved"
};

export const contactAsset: VisualAsset = {
  id: "walkthrough-contact",
  title: "Property walkthrough request",
  alt: "Corporate building exterior used for the APS contact and walkthrough request page",
  recommendedFile: "CorporateBuildingExterior2.jpg",
  usage: "Contact page image showing a property walkthrough, APS representative, truck, or commercial site context if approved.",
  src: "/approved-aps-assets/CorporateBuildingExterior2.jpg",
  status: "approved"
};
export const recommendedAssetLocation = "/approved-aps-assets/";

export const managerReasons = [
  "Clear service routing instead of a long contractor list.",
  "One walkthrough path for recurring maintenance and special projects.",
  "Seasonal services stay visible without overpowering evergreen maintenance.",
  "Unapproved testimonials, badges, and claims stay out until APS validates them."
];

export const validationNotes = [
  "Stacking and Hauling wording requires client validation before final public copy.",
  "Line Striping should be validated against the current-site variant Line Stripping.",
  "Trust badges, testimonials, awards, certifications, warranties, guarantees, emergency-response language, and years-in-business claims are intentionally omitted."
];

