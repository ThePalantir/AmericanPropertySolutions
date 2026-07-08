export const business = {
  name: "American Property Solutions",
  phone: "610-760-0600",
  phoneHref: "tel:+16107600600",
  paAddress: "4531 Lehigh Dr, Walnutport, PA 18088",
  nyAddress: "3209 Steward Road, Vestal, NY 13850",
  hours: "M-F 9AM-4PM",
  demoNote:
    "Walnutport, PA | M-F 9AM-4PM | 610-760-0600"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
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
  approvalNotes?: string[];
};

export const recommendedAssetLocation = "/approved-aps-assets/";

export const logoAsset: VisualAsset = {
  id: "aps-logo",
  title: "American Property Solutions logo",
  alt: "American Property Solutions logo",
  recommendedFile: "aps-3letter-logo.png",
  usage: "Header and footer brand mark (square APS star lockup).",
  src: "/approved-aps-assets/aps-3letter-logo.png",
  status: "approved"
};

export const heroAsset: VisualAsset = {
  id: "hero-commercial-property",
  title: "Commercial property maintenance",
  alt: "Corporate building exterior used for APS commercial property maintenance positioning",
  recommendedFile: "corporate-building-exterior-1.jpg",
  usage: "Homepage hero image showing a maintained commercial exterior, parking area, crew, or APS equipment.",
  src: "/approved-aps-assets/corporate-building-exterior-1.jpg",
  status: "approved"
};


/* Hero rotation is limited to the high-resolution approved assets (>=2048px)
   so full-bleed display with the Ken Burns zoom stays sharp. The ~1077px
   landscaping/snow/sealcoating photos read soft at hero scale; they remain in
   service pages and the gallery where their display size fits the source. */
export const homeHeroSlides: VisualAsset[] = [
  heroAsset,
  {
    id: "hero-paving-equipment",
    title: "Paving and site equipment",
    alt: "APS roller equipment during paving work used for homepage motion background",
    recommendedFile: "aps-roller-scaled.jpeg",
    usage: "Homepage cinematic hero background slide.",
    src: "/approved-aps-assets/aps-roller-scaled.jpeg",
    status: "approved"
  },
  {
    id: "hero-commercial-exterior-alt",
    title: "Commercial exterior maintenance",
    alt: "Corporate building exterior used for APS homepage motion background",
    recommendedFile: "corporate-building-exterior-2.jpg",
    usage: "Homepage cinematic hero background slide.",
    src: "/approved-aps-assets/corporate-building-exterior-2.jpg",
    status: "approved"
  }
];
export const serviceOverviewAsset: VisualAsset = {
  id: "services-overview",
  title: "Property maintenance services",
  alt: "APS landscaping and grounds maintenance photo used for the services overview",
  recommendedFile: "landscaping-3.png",
  usage: "Service overview image showing APS work types, equipment, or commercial property context.",
  src: "/approved-aps-assets/landscaping-3.png",
  status: "approved"
};

export const contactAsset: VisualAsset = {
  id: "walkthrough-contact",
  title: "Property walkthrough request",
  alt: "APS location image used for the contact and service area page visual",
  recommendedFile: "location.png",
  usage: "Contact page image showing a property walkthrough, APS representative, truck, or commercial site context if approved.",
  src: "/approved-aps-assets/location.png",
  status: "approved"
};

export const galleryAssets: VisualAsset[] = [
  {
    id: "commercial-exterior",
    title: "Commercial exterior maintenance",
    alt: "Corporate building exterior used for APS commercial exterior maintenance context",
    recommendedFile: "corporate-building-exterior-2.jpg",
    usage: "Commercial property exterior with maintained grounds and visible site context.",
    src: "/approved-aps-assets/corporate-building-exterior-2.jpg",
    status: "approved"
  },
  {
    id: "grounds-landscape",
    title: "Grounds and landscaping",
    alt: "APS landscaping photo used for grounds maintenance context",
    recommendedFile: "landscaping.png",
    usage: "Landscape, turf, shrub, bed maintenance, and exterior grounds context.",
    src: "/approved-aps-assets/landscaping.png",
    status: "approved"
  },
  {
    id: "snow-equipment",
    title: "Snow and ice equipment",
    alt: "APS snow plow equipment used for snow and ice management context",
    recommendedFile: "snow-plow-equipment-1.png",
    usage: "Snow service equipment context without adding response-time claims.",
    src: "/approved-aps-assets/snow-plow-equipment-1.png",
    status: "approved"
  },
  {
    id: "parking-lot-work",
    title: "Parking lot work",
    alt: "APS sealcoating photo used for parking lot maintenance context",
    recommendedFile: "parking_lot_sealcoating.png",
    usage: "Paving, sealcoating, crack sealing, or line striping work shown clearly.",
    src: "/approved-aps-assets/parking_lot_sealcoating.png",
    status: "approved"
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

const pendingConcreteAsset: VisualAsset = {
  id: "concrete-sitework",
  title: "Concrete and sitework",
  alt: "Concrete and sitework service category",
  recommendedFile: "concrete-sitework.jpg",
  usage: "Concrete, excavation, drainage, or sitework photo approved for public use.",
  status: "pending-approval"
};

export const serviceCatalog: ServiceDetail[] = [
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    eyebrow: "Four-season support",
    group: "One Call, Full Property Coverage",
    summary: "Commercial property maintenance, exterior upkeep, parking-area support, sitework, and repair coordination.",
    intro:
      "APS gives owners and managers one place to start when a property has exterior, access, sitework, or building repair needs.",
    sourceUrl: "https://aps-pa.com/",
    sourceNote: "Homepage service list and four-season property maintenance positioning.",
    image: heroAsset,
    handles: [
      "Commercial property maintenance",
      "Four-season property support",
      "Grading and excavation coordination",
      "Driveways and access areas",
      "Building pads and site preparation",
      "Concrete flatwork",
      "Blacktop repairs",
      "Crack sealing, sealcoating, and line striping",
      "Building maintenance and repair support"
    ],
    needs: [
      "A property has multiple exterior and building issues and needs a single place to start.",
      "A manager needs recurring seasonal upkeep without sorting through a scattered contractor list.",
      "A business owner needs a practical walkthrough before choosing the right service."
    ],
    related: ["parking-lot-maintenance", "building-maintenance-repairs", "excavation-sitework"]
  },
  {
    slug: "lawn-landscaping",
    title: "Lawn & Landscaping",
    eyebrow: "Grounds & Landscape",
    group: "Grounds & Landscape",
    summary: "Grounds maintenance, lawn care, planting, drainage, turf, hardscape, and landscape installation services for commercial and property-maintenance needs.",
    intro:
      "APS supports grounds maintenance, planting, drainage, turf, hardscape, and seasonal landscape needs.",
    sourceUrl: "https://aps-pa.com/american-property-solutions-lawn-and-landscaping-services/",
    sourceNote: "Lawn and landscaping page service bullets and landscape installation copy.",
    image: {
      id: "lawn-landscaping-visual",
      title: "Lawn and landscaping",
      alt: "APS landscaping photo used for lawn and landscape maintenance context",
      recommendedFile: "landscaping.png",
      usage: "Lawn, landscape, shrub, bed, and grounds maintenance context.",
      src: "/approved-aps-assets/landscaping.png",
      status: "approved"
    },
    handles: [
      "Shrubs",
      "Sod installation",
      "Seeding",
      "Fertilization",
      "Lawn maintenance",
      "Mulching and bed maintenance",
      "Water systems and drainage",
      "Hardscapes and retaining walls",
      "Tree planting",
      "Shrub and flower planting",
      "Grading and new lawn installation"
    ],
    needs: [
      "Commercial grounds need routine upkeep, seasonal cleanup, or planting refreshes.",
      "A property needs drainage, grading, sod, or new lawn installation after site work.",
      "Exterior areas need a cleaner, better-maintained first impression."
    ],
    related: ["decks-patios-hardscapes", "excavation-sitework", "property-maintenance"],
    approvalNotes: ["Over 40 years of experience appears on the source page and remains approval-needed before public use."]
  },
  {
    slug: "snow-ice-management",
    title: "Snow & Ice Management",
    eyebrow: "Seasonal operations",
    group: "Snow & Ice",
    summary: "Commercial snow plowing, parking-lot winter service, deicing, sidewalk clearing, snow relocation, and storm-readiness support.",
    intro:
      "APS supports winter property access with snow plowing, deicing, sidewalk support, parking-lot service, and snow relocation conversations.",
    sourceUrl: "https://aps-pa.com/snow-plowing-company/",
    sourceNote: "Snow plowing page winter-service details, service-area claims, deicing, sidewalks, hauling/relocating, weather system, and service partner content.",
    image: {
      id: "snow-ice-visual",
      title: "Snow and ice management",
      alt: "APS plowing photo used for snow and ice management context",
      recommendedFile: "plowing-1.png",
      usage: "Snow plowing and winter property service context.",
      src: "/approved-aps-assets/plowing-1.png",
      status: "approved"
    },
    handles: [
      "Snow plowing",
      "Snow and ice management",
      "Parking lot snow service",
      "Deicing and salting",
      "Sidewalk clearing support",
      "Snow hauling and relocating",
      "Winter service partner coordination"
    ],
    needs: [
      "A commercial property needs winter access for customers, staff, and deliveries.",
      "Snow piles are reducing usable parking and may need relocation or hauling.",
      "Walkways and parking areas need planned winter service before storms arrive."
    ],
    related: ["parking-lot-maintenance", "property-maintenance", "service-partner-network"],
    approvalNotes: [
      "Eastern PA, Western New Jersey, and Southern NY snow coverage is source-derived and approval-needed.",
      "Over 40 years of snow and ice experience is source-derived and approval-needed.",
      "Weather alert, refreeze monitoring, Yeti/mobile app, and technology-process claims are source-derived and approval-needed.",
      "Any emergency, 24-hour, or priority response wording remains approval-needed."
    ]
  },
  {
    slug: "parking-lot-maintenance",
    title: "Parking Lot Maintenance",
    eyebrow: "Lots & pavement",
    group: "Parking Lots & Pavement",
    summary: "Parking lot and driveway maintenance, asphalt repairs, sealcoating, crack sealing, line striping, drainage, sidewalk repair, and related site support.",
    intro:
      "APS helps maintain parking areas, driveways, striping, drainage, sidewalks, and pavement surfaces that affect property access and appearance.",
    sourceUrl: "https://aps-pa.com/parking-lot-maintenance/",
    sourceNote: "Parking lot maintenance page service list.",
    image: {
      id: "parking-lot-visual",
      title: "Parking lot maintenance",
      alt: "APS sealcoating photo used for parking lot maintenance context",
      recommendedFile: "parking_lot_sealcoating.png",
      usage: "Parking lot maintenance and sealcoating context.",
      src: "/approved-aps-assets/parking_lot_sealcoating.png",
      status: "approved"
    },
    handles: [
      "Driveway and parking lot services",
      "Asphalt repairs and overlays",
      "Asphalt patches",
      "Sealcoating",
      "Crack sealing",
      "Line striping",
      "Concrete repairs and flatwork",
      "Excavation and sitework",
      "Drainage repairs",
      "Sinkhole remediation",
      "Sidewalk repairs"
    ],
    needs: [
      "Parking areas need better appearance, safer access, or clearer striping.",
      "Cracks, patches, drainage issues, or sidewalk damage are creating maintenance concerns.",
      "A property needs pavement, concrete, and sitework evaluated together."
    ],
    related: ["concrete-services", "excavation-sitework", "snow-ice-management"]
  },
  {
    slug: "concrete-services",
    title: "Concrete Services",
    eyebrow: "Concrete & flatwork",
    group: "Concrete & Sitework",
    summary: "Concrete driveways, sidewalks, patios, slabs, floors, decorative concrete, retaining walls, curbing, repairs, staining, sealing, excavation, and grading.",
    intro:
      "APS handles concrete conversations for driveways, parking areas, sidewalks, patios, slabs, repairs, curbing, and related grading.",
    sourceUrl: "https://aps-pa.com/concrete-contractor/",
    sourceNote: "Concrete contractor page service list.",
    image: pendingConcreteAsset,
    handles: [
      "Concrete driveways and parking lots",
      "Concrete sidewalks and pathways",
      "Concrete patios and outdoor living spaces",
      "Concrete foundations and slabs",
      "Concrete flooring",
      "Decorative concrete",
      "Retaining walls",
      "Concrete repairs",
      "Concrete curbing and sewer drains",
      "Concrete staining and sealing",
      "Excavation and grading"
    ],
    needs: [
      "A property needs concrete repair, replacement, or new flatwork.",
      "Sidewalks, patios, or curbing need attention as part of exterior maintenance.",
      "Concrete work needs grading or excavation support before installation."
    ],
    related: ["parking-lot-maintenance", "excavation-sitework", "decks-patios-hardscapes"],
    approvalNotes: ["No clearly matching approved local concrete image is currently available, so this service uses a placeholder."]
  },
  {
    slug: "excavation-sitework",
    title: "Excavation & Sitework",
    eyebrow: "Site support",
    group: "Concrete & Sitework",
    summary: "Drainage design, grading, hauling, driveway stone, ditch digging, hardscape excavation, driveway repair, building pads, and site preparation.",
    intro:
      "Excavation and sitework are tied to drainage, access, grading, and prep for other exterior improvements.",
    sourceUrl: "https://aps-pa.com/excavation-and-sitework/",
    sourceNote: "Excavation and sitework page service list.",
    image: {
      id: "excavation-sitework-visual",
      title: "Excavation and sitework",
      alt: "APS paving and site work photo used for excavation and property support context",
      recommendedFile: "aps-roller-scaled.jpeg",
      usage: "Sitework-adjacent image used until a more direct excavation image is approved.",
      src: "/approved-aps-assets/aps-roller-scaled.jpeg",
      status: "approved"
    },
    handles: [
      "Drainage design",
      "Grading",
      "Hauling away and delivering material",
      "Driveway stone",
      "Ditch digging",
      "Hardscape excavation",
      "Driveway repair",
      "Building pads",
      "Site preparation"
    ],
    needs: [
      "Water, grading, or access issues are affecting property use.",
      "A site needs preparation before concrete, hardscape, driveway, or building-pad work.",
      "Material needs to be delivered, moved, or hauled away as part of a property project."
    ],
    related: ["concrete-services", "parking-lot-maintenance", "property-maintenance"]
  },
  {
    slug: "building-maintenance-repairs",
    title: "Building Maintenance & Repairs",
    eyebrow: "Building support",
    group: "Building & Interior Repairs",
    summary: "Interior repair and maintenance support including drywall, construction, painting, lighting, flooring, electrical, remodeling, and general repairs.",
    intro:
      "APS supports building maintenance and repair conversations for interior and building-related property needs.",
    sourceUrl: "https://aps-pa.com/building-maintenance/",
    sourceNote: "Building maintenance and repairs page interior services list.",
    image: {
      id: "building-maintenance-visual",
      title: "Building maintenance and repairs",
      alt: "APS building maintenance photo used for repair support context",
      recommendedFile: "buildingmaintenance.png",
      usage: "Building maintenance and facility repair context.",
      src: "/approved-aps-assets/buildingmaintenance.png",
      status: "approved"
    },
    handles: [
      "Remodeling services",
      "Drywall repairs and installs",
      "Construction services",
      "Painting services",
      "Lighting installation and repairs",
      "Tile, laminate, and hardwood installation and refinishing",
      "Electrical",
      "General building repairs"
    ],
    needs: [
      "A commercial or managed property needs interior repair support.",
      "Maintenance issues cross between construction, painting, drywall, lighting, or flooring.",
      "A property manager needs a building-repair conversation before defining final scope."
    ],
    related: ["remodeling-services", "property-maintenance", "concrete-services"],
    approvalNotes: ["Exact electrical and construction scopes should be confirmed before final public copy."]
  },
  {
    slug: "decks-patios-hardscapes",
    title: "Decks, Patios & Hardscapes",
    eyebrow: "Outdoor improvements",
    group: "Decks, Patios & Hardscapes",
    summary: "Deck building, patio installation, paver installation, hardscapes, retaining walls, walkways, railings, and outdoor living spaces.",
    intro:
      "APS handles decks, patios, pavers, hardscapes, walkways, railings, retaining walls, and related outdoor improvements.",
    sourceUrl: "https://aps-pa.com/decks-and-patios/",
    sourceNote: "Decks and patios page service list.",
    image: {
      id: "hardscapes-visual",
      title: "Decks, patios, and hardscapes",
      alt: "APS hardscape and landscape photo used for decks and patio context",
      recommendedFile: "turf.png",
      usage: "Hardscape and outdoor improvement context.",
      src: "/approved-aps-assets/turf.png",
      status: "approved"
    },
    handles: [
      "Deck building",
      "Deck composite installation",
      "Staircase construction",
      "Patio installation",
      "Paver installation",
      "Stone walkways",
      "Railings",
      "Hardscape services",
      "Retaining walls",
      "Outdoor living spaces"
    ],
    needs: [
      "A property needs an outdoor gathering, walkway, or hardscape improvement.",
      "A patio, deck, paver, or railing project needs a practical contractor conversation.",
      "Landscape and hardscape work need to coordinate with grading or drainage."
    ],
    related: ["lawn-landscaping", "concrete-services", "excavation-sitework"]
  },
  {
    slug: "remodeling-services",
    title: "Remodeling Services",
    eyebrow: "Special projects",
    group: "Building & Interior Repairs",
    summary: "Remodeling and special-project support connected to building maintenance, drywall, painting, flooring, lighting, construction, and general repairs.",
    intro:
      "APS supports remodeling and special-project conversations connected to building maintenance and interior service needs.",
    sourceUrl: "https://aps-pa.com/building-maintenance/",
    sourceNote: "Building maintenance page and navigation label for Remodeling Services.",
    image: {
      id: "remodeling-visual",
      title: "Remodeling services",
      alt: "APS drywall repair photo used for remodeling service context",
      recommendedFile: "aps-drywall.jpeg",
      usage: "Drywall and interior repair context for remodeling service path.",
      src: "/approved-aps-assets/aps-drywall.jpeg",
      status: "approved"
    },
    handles: [
      "Remodeling services",
      "Drywall repairs and installs",
      "Construction services",
      "Painting services",
      "Lighting installation and repairs",
      "Flooring installation and refinishing",
      "Electrical coordination",
      "General building repairs"
    ],
    needs: [
      "A property needs a special repair or improvement project scoped clearly.",
      "Interior maintenance work has grown into a larger remodeling need.",
      "A business owner needs practical next steps before selecting the right repair path."
    ],
    related: ["building-maintenance-repairs", "property-maintenance", "decks-patios-hardscapes"],
    approvalNotes: ["Final remodeling scope, licensing-sensitive trades, and customer-facing wording require APS approval."]
  }
];

export const supplementalPages = [
  {
    title: "Service Partner Network",
    href: "/contact",
    summary:
      "Service partner interest can start through the APS contact path.",
    sourceUrl: "https://aps-pa.com/american-property-solutions-service-partner-network/",
    approvalNeeded: "Partner claims, form fields, and service partner process require APS approval before public launch."
  },
  {
    title: "Careers / Hiring",
    href: "/contact",
    summary:
      "Careers and hiring questions can start through the APS contact path.",
    sourceUrl: "https://aps-pa.com/careers/",
    approvalNeeded: "Hiring status, open roles, resume handling, and form routing require APS approval before public launch."
  }
];

export const serviceGroups = [
  {
    title: "Grounds & Landscape",
    href: "/services/lawn-landscaping",
    eyebrow: "Grounds",
    summary: "Lawn, landscaping, planting, turf, drainage, and hardscape support for maintained exterior spaces.",
    items: ["Lawn & Landscaping", "Sod / seeding", "Mulch and bed maintenance"]
  },
  {
    title: "Snow & Ice",
    href: "/services/snow-ice-management",
    eyebrow: "Seasonal",
    summary: "Snow plowing, deicing, sidewalk support, parking-lot winter service, and snow relocation.",
    items: ["Snow plowing", "Deicing", "Snow hauling / relocating"]
  },
  {
    title: "Parking Lots & Pavement",
    href: "/services/parking-lot-maintenance",
    eyebrow: "Access areas",
    summary: "Parking lot maintenance, asphalt repairs, sealcoating, crack sealing, line striping, and sidewalks.",
    items: ["Asphalt repairs", "Sealcoating", "Line striping"]
  },
  {
    title: "Concrete & Sitework",
    href: "/services/concrete-services",
    eyebrow: "Site support",
    summary: "Concrete services, grading, excavation, drainage, driveway stone, building pads, and site preparation.",
    items: ["Concrete flatwork", "Excavation", "Drainage and grading"]
  },
  {
    title: "Building & Interior Repairs",
    href: "/services/building-maintenance-repairs",
    eyebrow: "Facility support",
    summary: "Drywall, painting, flooring, lighting, electrical coordination, remodeling, construction, and general repairs.",
    items: ["Building repairs", "Drywall / painting", "Remodeling"]
  },
  {
    title: "Decks, Patios & Hardscapes",
    href: "/services/decks-patios-hardscapes",
    eyebrow: "Outdoor projects",
    summary: "Decks, patios, pavers, walkways, retaining walls, railings, and outdoor living improvements.",
    items: ["Decks", "Patios", "Pavers / hardscapes"]
  }
];

const serviceDirectoryGroupBlueprints = [
  {
    title: "Full Property Maintenance",
    eyebrow: "One call",
    summary:
      "A starting point for properties with several exterior, access, sitework, or repair needs.",
    serviceSlugs: ["property-maintenance"]
  },
  {
    title: "Grounds & Seasonal Exterior Care",
    eyebrow: "Exterior upkeep",
    summary:
      "Routine grounds care and winter operations grouped around keeping exterior spaces usable and maintained.",
    serviceSlugs: ["lawn-landscaping", "snow-ice-management"]
  },
  {
    title: "Pavement, Concrete & Sitework",
    eyebrow: "Access and site support",
    summary:
      "Parking areas, flatwork, drainage, grading, excavation, and related site preparation in one practical family.",
    serviceSlugs: ["parking-lot-maintenance", "concrete-services", "excavation-sitework"]
  },
  {
    title: "Building & Interior Support",
    eyebrow: "Facility repairs",
    summary:
      "Building repair, maintenance, remodeling, and special-project conversations routed together.",
    serviceSlugs: ["building-maintenance-repairs", "remodeling-services"]
  },
  {
    title: "Outdoor Improvements",
    eyebrow: "Exterior projects",
    summary:
      "Decks, patios, pavers, walkways, retaining walls, and related outdoor improvement work.",
    serviceSlugs: ["decks-patios-hardscapes"]
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
  "Commercial property owners",
  "Property managers",
  "Local businesses",
  "Facilities and operations managers",
  "Residential homeowners with exterior property needs"
];

export const trustBarItems = [
  {
    label: "Property maintenance",
    note: "Grounds, lots, sitework, building repairs, and seasonal needs in one place."
  },
  {
    label: "Snow & ice management",
    note: "Plowing, deicing, sidewalk support, and winter property service conversations."
  },
  {
    label: "Lehigh Valley base",
    note: "Based in Walnutport, with service availability confirmed by location and scope."
  },
  {
    label: "Walkthrough first",
    note: "Tell APS what is happening at the property and get routed to the right service."
  }
];

export const propertyTypes = [
  {
    label: "Property managers",
    status: "Coordinate grounds, pavement, snow, sitework, and repair needs."
  },
  {
    label: "Business owners",
    status: "Keep exterior areas, lots, walkways, and buildings presentable."
  },
  {
    label: "Facility teams",
    status: "Plan maintenance work across seasons and service categories."
  },
  {
    label: "Commercial properties",
    status: "Combine grounds, access areas, concrete, and building support."
  },
  {
    label: "Residential homeowners",
    status: "Start conversations for exterior projects and improvements."
  },
  {
    label: "Seasonal property needs",
    status: "Route snow, landscape, and maintenance work to the right service conversation."
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
  "Final service-area wording and active territory, including Eastern Pennsylvania, Western New Jersey, Southern New York, Berks County, and Schuylkill County.",
  "Any 24-hour appointment wording or emergency-response language.",
  "Over 40 years of experience language on landscaping and snow pages.",
  "Weather alert system, refreeze monitoring, third-party weather station, Yeti/mobile app, real-time tracking, and technology/process claims.",
  "Industrial complexes, commercial retail centers, and medical centers as target snow-service property types.",
  "BBB, Chamber, ASCA, SIMA, star/rating-style graphics, badges, affiliations, ratings, certifications, awards, warranties, guarantees, testimonials, and reviews.",
  "Exact electrical, construction, remodeling, partner-network, hiring, and form-routing scope."
];

export const validationNotes = [
  "Stacking and Hauling wording requires client validation before final public copy.",
  "Line Striping should be validated against the current-site variant Line Stripping.",
  "Source-derived service areas, snow operations claims, trust badges, testimonials, awards, certifications, warranties, guarantees, emergency-response language, and years-in-business claims require APS approval."
];

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}

export function getRelatedServices(service: ServiceDetail) {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is ServiceDetail => Boolean(item));
}
