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
  alt: "Approved APS commercial property maintenance photo pending",
  recommendedFile: "commercial-property-exterior.jpg",
  usage: "Homepage hero image showing a maintained commercial exterior, parking area, crew, or APS equipment.",
  status: "pending-approval"
};

export const galleryAssets: VisualAsset[] = [
  {
    id: "commercial-exterior",
    title: "Commercial exterior maintenance",
    alt: "Approved APS commercial exterior maintenance photo pending",
    recommendedFile: "commercial-exterior-maintenance.jpg",
    usage: "Commercial property exterior with maintained grounds and visible site context.",
    status: "pending-approval"
  },
  {
    id: "crew-equipment",
    title: "APS crews and equipment",
    alt: "Approved APS crew or equipment photo pending",
    recommendedFile: "aps-crew-equipment.jpg",
    usage: "APS crew, truck, trailer, equipment, or work setup at an approved property.",
    status: "pending-approval"
  },
  {
    id: "snow-cleared-lot",
    title: "Snow-cleared parking lot",
    alt: "Approved APS snow-cleared commercial parking lot photo pending",
    recommendedFile: "snow-cleared-parking-lot.jpg",
    usage: "Commercial lot or access area after snow service, if APS approves the image and service context.",
    status: "pending-approval"
  },
  {
    id: "parking-lot-work",
    title: "Parking lot work",
    alt: "Approved APS paving, sealcoating, or line striping photo pending",
    recommendedFile: "parking-lot-sealcoating-striping.jpg",
    usage: "Paving, sealcoating, crack sealing, or line striping work shown clearly.",
    status: "pending-approval"
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
    alt: "Approved APS building or facility maintenance photo pending",
    recommendedFile: "building-facility-maintenance.jpg",
    usage: "Building maintenance, repair support, hauling, or special-project context approved by APS.",
    status: "pending-approval"
  }
];


export const serviceOverviewAsset: VisualAsset = {
  id: "services-overview",
  title: "Organized commercial service paths",
  alt: "Approved APS service overview photo pending",
  recommendedFile: "aps-service-overview.jpg",
  usage: "Service overview image showing APS work types, equipment, or commercial property context.",
  status: "pending-approval"
};

export const propertyMaintenanceAsset: VisualAsset = {
  id: "property-building-maintenance",
  title: "Property and building maintenance",
  alt: "Approved APS property and building maintenance photo pending",
  recommendedFile: "property-building-maintenance.jpg",
  usage: "Flagship service image for property maintenance, building maintenance, hauling, or repair-support context.",
  status: "pending-approval"
};

export const contactAsset: VisualAsset = {
  id: "walkthrough-contact",
  title: "Property walkthrough request",
  alt: "Approved APS contact or walkthrough photo pending",
  recommendedFile: "property-walkthrough-contact.jpg",
  usage: "Contact page image showing a property walkthrough, APS representative, truck, or commercial site context if approved.",
  status: "pending-approval"
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


