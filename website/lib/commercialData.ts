export const business = {
  name: "American Property Solutions",
  phone: "610-760-0600",
  phoneHref: "tel:+16107600600",
  paAddress: "4531 Lehigh Dr, Walnutport, PA 18088",
  nyAddress: "3209 Steward Road, Vestal, NY 13850",
  hours: "M-F 9AM-4PM",
  demoNote: "Commercial properties and facilities | 610-760-0600"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Exterior Facilities", href: "/services/exterior-facilities-maintenance" },
  { label: "Commercial Services", href: "/services" },
  { label: "Commercial Work", href: "/commercial-work" },
  { label: "Contact", href: "/contact" }
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

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  group: string;
  summary: string;
  intro: string;
  sourceUrl: string;
  sourceNote: string;
  image: VisualAsset;
  handles: string[];
  needs: string[];
  related: string[];
  externalCta?: { label: string; href: string };
  approvalNotes?: string[];
};

export const snowPartner = {
  name: "American Snow & Ice Solutions",
  href: "https://americansnowandicesolutions.com/"
};

export const logoAsset: VisualAsset = {
  id: "aps-logo",
  title: "American Property Solutions logo",
  alt: "American Property Solutions logo",
  recommendedFile: "aps-3letter-logo.png",
  usage: "Header and footer brand mark.",
  src: "/approved-aps-assets/aps-3letter-logo.png",
  status: "approved"
};

export const heroAsset: VisualAsset = {
  id: "hero-commercial-property",
  title: "Commercial exterior facilities maintenance",
  alt: "Maintained commercial building exterior",
  recommendedFile: "corporate-building-exterior-1.jpg",
  usage: "Homepage and flagship service hero.",
  src: "/approved-aps-assets/corporate-building-exterior-1.jpg",
  status: "approved"
};

export const homeHeroSlides: VisualAsset[] = [
  heroAsset,
  {
    id: "hero-commercial-maintenance",
    title: "Commercial maintenance work",
    alt: "Maintenance work supporting a commercial facility",
    recommendedFile: "aps-roller-scaled.jpeg",
    usage: "Homepage hero background.",
    src: "/approved-aps-assets/aps-roller-scaled.jpeg",
    status: "approved"
  },
  {
    id: "hero-commercial-exterior-alt",
    title: "Commercial exterior maintenance",
    alt: "Maintained commercial building exterior and access area",
    recommendedFile: "corporate-building-exterior-2.jpg",
    usage: "Homepage hero background.",
    src: "/approved-aps-assets/corporate-building-exterior-2.jpg",
    status: "approved"
  }
];

export const serviceOverviewAsset: VisualAsset = {
  id: "services-overview",
  title: "Commercial exterior facilities services",
  alt: "Exterior maintenance work at a commercial property",
  recommendedFile: "landscaping-3.png",
  usage: "Commercial services overview.",
  src: "/approved-aps-assets/landscaping-3.png",
  status: "approved"
};

export const contactAsset: VisualAsset = {
  id: "walkthrough-contact",
  title: "Commercial property walkthrough request",
  alt: "American Property Solutions location",
  recommendedFile: "location.png",
  usage: "Contact page.",
  src: "/approved-aps-assets/location.png",
  status: "approved"
};

export const galleryAssets: VisualAsset[] = [
  {
    id: "commercial-exterior",
    title: "Commercial exterior maintenance",
    alt: "Commercial building exterior and maintained site",
    recommendedFile: "corporate-building-exterior-2.jpg",
    usage: "Commercial exterior context.",
    src: "/approved-aps-assets/corporate-building-exterior-2.jpg",
    status: "approved"
  },
  {
    id: "commercial-grounds",
    title: "Commercial grounds support",
    alt: "APS exterior grounds maintenance work",
    recommendedFile: "landscaping.png",
    usage: "Commercial grounds context.",
    src: "/approved-aps-assets/landscaping.png",
    status: "approved"
  },
  {
    id: "commercial-winter",
    title: "Commercial winter operations",
    alt: "Commercial snow and ice equipment",
    recommendedFile: "snow-plow-equipment-1.png",
    usage: "Commercial winter operations context.",
    src: "/approved-aps-assets/snow-plow-equipment-1.png",
    status: "approved"
  },
  {
    id: "commercial-parking",
    title: "Parking and access-area maintenance",
    alt: "APS sealcoating work in a commercial parking area",
    recommendedFile: "parking_lot_sealcoating.png",
    usage: "Commercial pavement context.",
    src: "/approved-aps-assets/parking_lot_sealcoating.png",
    status: "approved"
  },
  {
    id: "commercial-building",
    title: "Facility repair support",
    alt: "APS building maintenance work",
    recommendedFile: "buildingmaintenance.png",
    usage: "Commercial facility maintenance context.",
    src: "/approved-aps-assets/buildingmaintenance.png",
    status: "approved"
  }
];

const concreteAsset: VisualAsset = {
  id: "commercial-concrete-sitework",
  title: "Commercial concrete and site work",
  alt: "Commercial concrete and site work service category",
  recommendedFile: "commercial-concrete-sitework.jpg",
  usage: "Direct commercial concrete photography requested from APS.",
  status: "pending-approval"
};

const siteworkAsset: VisualAsset = {
  id: "commercial-excavation-sitework",
  title: "Commercial excavation and site work",
  alt: "Equipment supporting commercial site preparation and access-area work",
  recommendedFile: "parking_lot_Asphalt.jpg",
  usage: "Approved sitework-adjacent image until direct excavation photography is supplied.",
  src: "/approved-aps-assets/parking_lot_Asphalt.jpg",
  status: "approved"
};

const repairAsset: VisualAsset = {
  id: "commercial-repair-support",
  title: "Commercial repair and maintenance support",
  alt: "APS maintenance work supporting a commercial facility",
  recommendedFile: "aps-roller-scaled.jpeg",
  usage: "Commercial facility repair context.",
  src: "/approved-aps-assets/aps-roller-scaled.jpeg",
  status: "approved"
};

export const serviceCatalog: ServiceDetail[] = [
  {
    slug: "exterior-facilities-maintenance",
    title: "Exterior Facilities Maintenance",
    eyebrow: "Year-round commercial support",
    group: "Exterior Facilities Maintenance",
    summary: "Year-round exterior facilities maintenance for commercial properties that need one reliable place to start.",
    intro: "APS works as a long-term exterior property resource for facility and property teams. A walkthrough helps connect recurring upkeep, repairs, access areas, drainage, site work, concrete, improvements, and seasonal needs into one practical relationship.",
    sourceUrl: "https://aps-pa.com/",
    sourceNote: "Approved commercial-only direction and existing APS four-season property maintenance positioning.",
    image: heroAsset,
    handles: [
      "Exterior property walkthroughs and maintenance planning",
      "Commercial grounds and common-area upkeep",
      "Parking areas, access routes, and exterior circulation",
      "Concrete, pavement, and exterior repair coordination",
      "Drainage, grading, excavation, and site needs",
      "Commercial property improvements and special projects",
      "Ongoing repair and maintenance support",
      "Seasonal coordination with the specialized commercial snow and ice team"
    ],
    needs: [
      "A facility has recurring exterior needs that cross multiple service categories.",
      "A property manager wants fewer disconnected contractor conversations throughout the year.",
      "A commercial property needs a walkthrough to prioritize maintenance, repair, and improvement work."
    ],
    related: ["commercial-concrete-site-work", "excavation-grading-drainage", "ongoing-repair-maintenance"]
  },
  {
    slug: "commercial-concrete-site-work",
    title: "Commercial Concrete & Site Work",
    eyebrow: "Exterior construction",
    group: "Concrete & Site Work",
    summary: "Commercial concrete, flatwork, pavement-related repairs, site preparation, and connected exterior work.",
    intro: "APS can discuss concrete and site needs in the context of how a commercial property functions, from pedestrian routes and curbing to slabs, access areas, repair work, and preparation for improvements.",
    sourceUrl: "https://aps-pa.com/concrete-contractor/",
    sourceNote: "Existing APS concrete and site work content, narrowed to commercial intent.",
    image: concreteAsset,
    handles: [
      "Commercial concrete flatwork",
      "Sidewalks and pathways",
      "Slabs and concrete floors",
      "Concrete curbing and drainage connections",
      "Concrete repairs, staining, and sealing",
      "Parking-area and access-route repairs",
      "Site preparation for exterior improvements",
      "Related excavation and grading"
    ],
    needs: [
      "A commercial property has damaged or aging concrete that needs evaluation.",
      "Pedestrian, loading, parking, or access areas need coordinated site and concrete work.",
      "A facility improvement requires preparation, grading, or connected exterior repairs."
    ],
    related: ["excavation-grading-drainage", "commercial-property-improvements", "exterior-facilities-maintenance"],
    approvalNotes: ["Direct commercial concrete photography and fact-rich case studies are still needed."]
  },
  {
    slug: "excavation-grading-drainage",
    title: "Excavation, Grading & Drainage",
    eyebrow: "Commercial site support",
    group: "Excavation, Grading & Drainage",
    summary: "Commercial excavation, grading, drainage, material handling, building pads, and site preparation.",
    intro: "APS supports commercial properties where water, elevations, access, or site preparation affect maintenance and planned improvements.",
    sourceUrl: "https://aps-pa.com/excavation-and-sitework/",
    sourceNote: "Existing APS excavation and site work content, revised for commercial buyers.",
    image: siteworkAsset,
    handles: [
      "Commercial drainage work",
      "Grading and elevation correction",
      "Ditch digging and drainage routes",
      "Building pads and site preparation",
      "Commercial access-area stone",
      "Material delivery, relocation, and hauling",
      "Preparation for concrete and property improvements"
    ],
    needs: [
      "Drainage or grading problems are affecting a commercial property.",
      "A planned project needs excavation or site preparation before construction.",
      "Access areas, material movement, or site elevations need a coordinated solution."
    ],
    related: ["commercial-concrete-site-work", "commercial-property-improvements", "exterior-facilities-maintenance"]
  },
  {
    slug: "commercial-property-improvements",
    title: "Commercial Property Improvements",
    eyebrow: "Construction & special projects",
    group: "Commercial Property Improvements",
    summary: "Commercial exterior improvements, construction support, and special projects coordinated around facility needs.",
    intro: "APS helps commercial property teams discuss improvement projects in the context of the surrounding site, access, drainage, concrete, and ongoing maintenance needs.",
    sourceUrl: "https://aps-pa.com/building-maintenance/",
    sourceNote: "Existing APS construction and building-maintenance content, narrowed to commercial property improvements.",
    image: galleryAssets[4],
    handles: [
      "Exterior commercial property improvements",
      "Construction and special-project support",
      "Walkways, retaining walls, and site features",
      "Commercial common-area improvements",
      "Painting, drywall, flooring, and repair work where confirmed by scope",
      "Coordination with concrete, grading, drainage, and site preparation"
    ],
    needs: [
      "A facility has a defined improvement project that crosses exterior and building needs.",
      "A commercial property needs repair and construction work coordinated with the surrounding site.",
      "A property team wants to discuss a special project before final scope is established."
    ],
    related: ["ongoing-repair-maintenance", "commercial-concrete-site-work", "excavation-grading-drainage"],
    approvalNotes: ["Licensing-sensitive trades and exact construction scopes must be confirmed for each project."]
  },
  {
    slug: "ongoing-repair-maintenance",
    title: "Ongoing Repair & Maintenance Support",
    eyebrow: "Facility repair support",
    group: "Ongoing Repair & Maintenance",
    summary: "Commercial repair and maintenance support for recurring exterior, site, access, and building-related needs.",
    intro: "APS gives facility and property managers a practical place to start when smaller repairs, maintenance issues, and connected property needs accumulate over time.",
    sourceUrl: "https://aps-pa.com/building-maintenance/",
    sourceNote: "Existing APS property and building maintenance content, revised for commercial-only intent.",
    image: repairAsset,
    handles: [
      "Exterior property repairs",
      "Parking and access-area maintenance",
      "Concrete and pavement repair coordination",
      "Grounds and drainage maintenance",
      "Building-related repair support",
      "Recurring maintenance conversations",
      "Special projects identified during property walkthroughs"
    ],
    needs: [
      "A facility has multiple repairs that do not fit neatly into one trade.",
      "A property team needs an ongoing resource familiar with the site.",
      "Maintenance priorities need to be reviewed and routed through one commercial contact."
    ],
    related: ["exterior-facilities-maintenance", "commercial-property-improvements", "commercial-concrete-site-work"]
  },
  {
    slug: "commercial-snow-ice-management",
    title: "Commercial Snow & Ice Management",
    eyebrow: "Specialized winter operations",
    group: "Commercial Snow & Ice",
    summary: "Commercial snow and ice management is part of the year-round facility relationship, with full winter-service details provided by American Snow & Ice Solutions.",
    intro: "APS can include winter planning in the broader property conversation. American Snow & Ice Solutions remains the dedicated commercial snow and ice website for service planning, preparedness, documentation, verification, and property-specific winter operations.",
    sourceUrl: snowPartner.href,
    sourceNote: "Approved separate-site strategy for American Property Solutions and American Snow & Ice Solutions.",
    image: galleryAssets[2],
    handles: [
      "Commercial winter-service planning",
      "Property-specific snow and ice requirements",
      "Snow plowing, deicing, and walkway needs",
      "Equipment-readiness and storm-preparedness conversations",
      "Documentation and service-verification considerations"
    ],
    needs: [
      "A commercial facility wants winter needs considered alongside year-round exterior maintenance.",
      "A property manager needs the dedicated commercial snow and ice team.",
      "A facility needs a property-specific winter-service discussion."
    ],
    related: ["exterior-facilities-maintenance", "ongoing-repair-maintenance"],
    externalCta: { label: "Visit American Snow & Ice Solutions", href: snowPartner.href }
  }
];

export const supplementalPages = [
  {
    title: "Service Partner Network",
    href: "/contact",
    summary: "Service partner questions can start through the APS contact path."
  },
  {
    title: "Careers / Hiring",
    href: "/contact",
    summary: "Careers questions can start through the APS contact path."
  }
];

export const serviceGroups = serviceCatalog.map((service) => ({
  title: service.title,
  href: `/services/${service.slug}`,
  eyebrow: service.eyebrow,
  summary: service.summary,
  items: service.handles.slice(0, 3)
}));

const serviceDirectoryGroupBlueprints = [
  {
    title: "Exterior Facilities Maintenance",
    eyebrow: "The APS relationship",
    summary: "The commercial starting point for recurring exterior, access, site, repair, improvement, and seasonal needs.",
    serviceSlugs: ["exterior-facilities-maintenance"]
  },
  {
    title: "Site, Concrete & Improvements",
    eyebrow: "Commercial projects",
    summary: "Concrete, excavation, grading, drainage, construction support, and exterior improvement work.",
    serviceSlugs: ["commercial-concrete-site-work", "excavation-grading-drainage", "commercial-property-improvements"]
  },
  {
    title: "Ongoing & Seasonal Support",
    eyebrow: "Year-round continuity",
    summary: "Recurring repair support plus a clear path to the dedicated commercial snow and ice operation.",
    serviceSlugs: ["ongoing-repair-maintenance", "commercial-snow-ice-management"]
  }
];

export const serviceDirectoryGroups = serviceDirectoryGroupBlueprints.map((group) => ({
  ...group,
  services: group.serviceSlugs
    .map((slug) => serviceCatalog.find((service) => service.slug === slug))
    .filter((service): service is ServiceDetail => Boolean(service))
}));

export const servicePriority = serviceCatalog.map((service) => service.title);

export const audienceLabels = [
  "Facility managers",
  "Property managers",
  "Industrial property operators",
  "Warehouse and distribution facility managers",
  "Manufacturing facilities",
  "Commercial property owners",
  "Corporate real estate and facilities teams"
];

export const trustBarItems = [
  { label: "Commercial-only focus", note: "APS is focused exclusively on commercial properties and facilities." },
  { label: "Exterior facilities maintenance", note: "One relationship for recurring exterior work across the property." },
  { label: "Walnutport base", note: "Service availability is confirmed by property location, scope, and timing." },
  { label: "One call does it all", note: "Start with the facility need and keep connected work with one practical contact." }
];

export const propertyTypes = [
  { label: "Warehouses & distribution facilities", status: "Exterior access, drainage, pavement, repairs, site work, and seasonal planning." },
  { label: "Manufacturing & industrial properties", status: "Commercial site, access, exterior maintenance, and improvement needs." },
  { label: "Office complexes", status: "Exterior appearance, access routes, repairs, drainage, and maintenance support." },
  { label: "Commercial portfolios", status: "A consistent starting point for property managers and commercial owners." },
  { label: "Corporate real estate teams", status: "Facility needs coordinated across exterior maintenance and project categories." },
  { label: "Other commercial facilities", status: "Property-specific exterior work reviewed during a commercial walkthrough." }
];

export const facilityFaqs = [
  {
    question: "What does exterior facilities maintenance include?",
    answer: "At APS, it is the commercial relationship that connects exterior upkeep, access areas, repairs, concrete, drainage, site work, improvements, and seasonal needs. The exact scope is confirmed for each property."
  },
  {
    question: "Can APS discuss several needs during one property walkthrough?",
    answer: "Yes. The walkthrough is designed to review the property context, identify connected needs, and route each item to the appropriate next conversation."
  },
  {
    question: "What types of properties is this site built for?",
    answer: "APS is focused exclusively on commercial properties and facilities, including warehouses, distribution sites, manufacturing and industrial properties, office complexes, and commercial portfolios."
  },
  {
    question: "How does APS handle commercial snow and ice management?",
    answer: "APS includes winter needs in the year-round facility conversation, while American Snow & Ice Solutions provides the dedicated commercial snow and ice offering."
  },
  {
    question: "How do we get started?",
    answer: "Request a commercial property walkthrough or call APS with the property location, facility need, and timing. APS can then confirm service availability and the appropriate next step."
  }
];

export const serviceAreas = [
  "Lehigh Valley",
  "Allentown",
  "Bethlehem",
  "Easton",
  "Walnutport",
  "Palmerton",
  "Lehighton",
  "Nazareth",
  "Whitehall",
  "Fogelsville",
  "Emmaus",
  "Breinigsville",
  "Macungie",
  "Bath",
  "Northampton County",
  "Lehigh County",
  "Carbon County",
  "Berks County",
  "Schuylkill County"
];

export const approvalNeededClaims = [
  "Final active service territory by service line.",
  "Current status of both public addresses and business hours.",
  "Exact commercial grounds, hardscape, interior repair, construction, electrical, and recurring-maintenance scope.",
  "Named case studies, testimonials, credentials, affiliations, years of experience, guarantees, awards, reviews, and ratings.",
  "Approved details and publication permission for the Phillipsburg relationship."
];

export const validationNotes = [
  "The public catalog and inquiry form are commercial-only.",
  "The Phillipsburg relationship is used only as an internal positioning model until publication details are approved.",
  "Production indexing, analytics, deployment, and DNS remain approval-gated."
];

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}

export function getRelatedServices(service: ServiceDetail) {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is ServiceDetail => Boolean(item));
}

