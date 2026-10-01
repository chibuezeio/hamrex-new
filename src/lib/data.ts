export type PropertyType = "Land Banking" | "Buy & Build" | "House";

export type Property = {
  slug: string;
  name: string;
  location: string;
  area: string;
  price: string;
  priceNote?: string;
  type: PropertyType;
  size: string;
  beds?: string;
  featured?: boolean;
  image: string;
  gallery: string[];
  summary: string;
  highlights: string[];
};

export const properties: Property[] = [
  {
    slug: "nextcity-estate",
    name: "NextCity Estate",
    location: "Tumbee, beside Afam Power Plant",
    area: "Oyigbo, Rivers State",
    price: "₦3M",
    type: "Land Banking",
    size: "400 sqm",
    featured: true,
    image: "/images/estates/estate-09.jpg",
    gallery: [
      "/images/estates/estate-09.jpg",
      "/images/hero-build.jpg",
      "/images/estates/estate-02.jpg",
    ],
    summary:
      "Our flagship land banking community beside the Afam Power Plant — planned for homes, rental cashflow, and long-term appreciation.",
    highlights: [
      "Afam Link Road, Tumbee",
      "Flexible payment from ₦500,000",
      "Verified title and documented allocation",
      "Built for first-time landlords",
    ],
  },
  {
    slug: "worthland-premium",
    name: "Worthland Premium",
    location: "Rumuodogho, opposite Vigilante Group",
    area: "Port Harcourt, Rivers State",
    price: "₦4M",
    type: "Buy & Build",
    size: "400 sqm",
    featured: true,
    image: "/images/estates/estate-11.jpg",
    gallery: [
      "/images/estates/estate-11.jpg",
      "/images/estates/estate-01.jpg",
      "/images/estates/estate-03.jpg",
    ],
    summary:
      "A gated premium layout in Rumuodogho with perimeter development already underway — for buyers who want to build, not wait.",
    highlights: [
      "Gated entrance already on site",
      "Perimeter fencing in progress",
      "Close-in Port Harcourt location",
      "Buy and build from day one",
    ],
  },
  {
    slug: "eden-luxury-resort",
    name: "Eden Luxury Resort",
    location: "Behind Salvation Ministry, Igwuruta",
    area: "Igwuruta, Rivers State",
    price: "₦30M",
    type: "Buy & Build",
    size: "400 sqm",
    featured: true,
    image: "/images/estates/estate-12.jpg",
    gallery: [
      "/images/estates/estate-12.jpg",
      "/images/progress-house.jpg",
      "/images/estates/estate-09.jpg",
    ],
    summary:
      "A rare resort-scale holding behind Salvation Ministry — positioned for premium homes, short-lets, and long-stay value.",
    highlights: [
      "Aerial-verified land holding",
      "Igwuruta growth corridor",
      "Ideal for luxury homes and hospitality",
      "Documented Hamrex allocation",
    ],
  },
  {
    slug: "grosvenor-estate",
    name: "Grosvenor Estate",
    location: "Aluu / Choba",
    area: "Port Harcourt, Rivers State",
    price: "From ₦15M",
    priceNote: "Self-contain ₦15M · 1 bedroom ₦25M",
    type: "House",
    size: "Built units",
    beds: "Studio / 1 bed",
    featured: true,
    image: "/images/estates/estate-07.jpg",
    gallery: [
      "/images/estates/estate-07.jpg",
      "/images/progress-house.jpg",
      "/images/hero-site.jpg",
    ],
    summary:
      "Residential apartments rising in Choba — designed for students, professionals, and investors who want rent-ready product.",
    highlights: [
      "Self-contain from ₦15M",
      "1 bedroom from ₦25M",
      "Aluu / Choba demand corridor",
      "Construction already on the ground",
    ],
  },
  {
    slug: "citycore-estate-phase-1",
    name: "Citycore Estate Phase 1",
    location: "Behind Wigwe University, Isiokpo",
    area: "Isiokpo, Rivers State",
    price: "₦2.8M",
    type: "Land Banking",
    size: "400 sqm",
    featured: true,
    image: "/images/estates/estate-02.jpg",
    gallery: [
      "/images/estates/estate-02.jpg",
      "/images/estates/estate-03.jpg",
      "/images/estates/estate-09.jpg",
    ],
    summary:
      "Phase 1 of Citycore — a cashflow-minded layout behind Wigwe University, built for people who want land that works.",
    highlights: [
      "Behind Wigwe University",
      "Perimeter walls on site",
      "Strong student and staff demand",
      "Allocation with Hamrex documentation",
    ],
  },
  {
    slug: "belle-garden-estate",
    name: "Belle Garden Estate",
    location: "Omunwei, Igwuruta",
    area: "Igwuruta, Rivers State",
    price: "₦8M",
    type: "Buy & Build",
    size: "400 sqm",
    featured: true,
    image: "/images/estates/estate-03.jpg",
    gallery: [
      "/images/estates/estate-03.jpg",
      "/images/progress-house.jpg",
      "/images/estates/estate-09.jpg",
    ],
    summary:
      "A quieter, higher-ticket layout in Igwuruta for families and investors who want space, access, and room to build properly.",
    highlights: [
      "Omunwei, Igwuruta",
      "Premium plot pricing",
      "Buy and build ready",
      "Completed bungalows also available",
    ],
  },
  {
    slug: "downtown-premium",
    name: "Downtown Premium",
    location: "Omagwa–Isiokpo Express Road",
    area: "Rivers State",
    price: "₦3.5M",
    type: "Buy & Build",
    size: "400 sqm",
    image: "/images/estates/estate-03.jpg",
    gallery: ["/images/estates/estate-03.jpg", "/images/estates/estate-02.jpg"],
    summary:
      "Premium plots on the Omagwa–Isiokpo express corridor — close to the airport axis and the city’s next growth line.",
    highlights: [
      "Express road frontage corridor",
      "Airport-side access",
      "Gated estate standard",
      "Verified Hamrex title process",
    ],
  },
  {
    slug: "downtown-estate",
    name: "Downtown Estate",
    location: "Beside Deeper Life Campground",
    area: "Rivers State",
    price: "₦2M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-02.jpg",
    gallery: ["/images/estates/estate-02.jpg", "/images/estates/estate-09.jpg"],
    summary:
      "An accessible ₦2M entry into a developing estate beside Deeper Life Campground — structured for first allocations.",
    highlights: [
      "Entry pricing at ₦2M",
      "400 sqm plots",
      "Perimeter development",
      "Payment plans available",
    ],
  },
  {
    slug: "citycore-estate-phase-2",
    name: "Citycore Estate Phase 2",
    location: "Behind Wigwe University, Isiokpo",
    area: "Isiokpo, Rivers State",
    price: "₦2.5M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-09.jpg",
    gallery: ["/images/estates/estate-09.jpg", "/images/estates/estate-04.jpg"],
    summary:
      "The next Citycore phase — same university corridor, a slightly gentler entry price for buyers who want in now.",
    highlights: [
      "Wigwe University corridor",
      "₦2.5M per plot",
      "Land banking with a build path",
      "Documented allocation",
    ],
  },
  {
    slug: "citycore-extension",
    name: "Citycore Extension",
    location: "Behind Wigwe University, Isiokpo",
    area: "Isiokpo, Rivers State",
    price: "₦2.6M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-02.jpg",
    gallery: ["/images/estates/estate-02.jpg", "/images/estates/estate-05.jpg"],
    summary:
      "An extension of the Citycore master layout — for buyers who missed Phase 1 and still want the university-side story.",
    highlights: [
      "Same Isiokpo growth story",
      "Extension plots at ₦2.6M",
      "400 sqm standard",
      "Inspection available weekly",
    ],
  },
  {
    slug: "nexport-estate",
    name: "Nexport Estate",
    location: "Elele Express Road",
    area: "Elele, Rivers State",
    price: "₦1.8M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-05.jpg",
    gallery: ["/images/estates/estate-05.jpg", "/images/hero-build.jpg"],
    summary:
      "Elele express-road land banking — priced for volume investors and first-time buyers who want a low, honest entry.",
    highlights: [
      "Elele express road",
      "₦1.8M entry",
      "Opening roads on site",
      "Hamrex documentation",
    ],
  },
  {
    slug: "citycore-phase-4",
    name: "Citycore Phase 4",
    location: "Behind Wigwe University, Isiokpo",
    area: "Isiokpo, Rivers State",
    price: "₦1.3M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-05.jpg",
    gallery: ["/images/estates/estate-05.jpg", "/images/estates/estate-09.jpg"],
    summary:
      "The most accessible Citycore phase — for buyers who want university-side land without stretching the first cheque.",
    highlights: [
      "₦1.3M per plot",
      "Wigwe University axis",
      "Start from ₦500,000",
      "Clear allocation process",
    ],
  },
  {
    slug: "airport-view-estate",
    name: "Airport View Estate",
    location: "Close to Port Harcourt International Airport, IPO",
    area: "Omagwa, Rivers State",
    price: "₦2M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-09.jpg",
    gallery: ["/images/estates/estate-09.jpg", "/images/estates/estate-03.jpg"],
    summary:
      "Airport-side plots for people who understand where Port Harcourt grows — access, visibility, and a ₦2M start.",
    highlights: [
      "Airport IPO corridor",
      "₦2M per plot",
      "Strong resale narrative",
      "Weekly site inspections",
    ],
  },
  {
    slug: "worthland-residence",
    name: "Worthland Residence",
    location: "Rumuodogho, opposite Vigilante Group",
    area: "Port Harcourt, Rivers State",
    price: "₦2.5M",
    type: "Buy & Build",
    size: "400 sqm",
    image: "/images/estates/estate-11.jpg",
    gallery: [
      "/images/estates/estate-11.jpg",
      "/images/estates/estate-01.jpg",
      "/images/estates/estate-03.jpg",
    ],
    summary:
      "The residential sister to Worthland Premium — gated, planted, and already presenting as a place you can show family.",
    highlights: [
      "Named gate on site",
      "Palm-lined approach",
      "₦2.5M plots",
      "Build-ready layout",
    ],
  },
  {
    slug: "citycore-phase-3",
    name: "Citycore Phase 3",
    location: "Behind Wigwe University, Isiokpo",
    area: "Isiokpo, Rivers State",
    price: "₦1.7M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-02.jpg",
    gallery: ["/images/estates/estate-02.jpg", "/images/estates/estate-04.jpg"],
    summary:
      "Phase 3 keeps the Citycore thesis simple: university-side land, documented, and priced to be bought — not admired.",
    highlights: [
      "₦1.7M per plot",
      "Isiokpo / Wigwe axis",
      "Land banking",
      "Flexible instalments",
    ],
  },
  {
    slug: "apexville-estate",
    name: "Apexville Estate",
    location: "Close to Port Harcourt Int'l Airport, Omademe",
    area: "Omademe, Rivers State",
    price: "₦3.5M",
    type: "Buy & Build",
    size: "400 sqm",
    image: "/images/estates/estate-09.jpg",
    gallery: ["/images/estates/estate-09.jpg", "/images/hero-site.jpg"],
    summary:
      "Airport-adjacent plots in Omademe for buyers who want a cleaner, higher-grade holding than the entry-level layouts.",
    highlights: [
      "Omademe / airport side",
      "₦3.5M plots",
      "Buy and build",
      "Inspection on request",
    ],
  },
  {
    slug: "three-bedroom-elele",
    name: "Three Bedroom Bungalow, Elele",
    location: "Beside Anti-Cultism, Elele",
    area: "Elele, Rivers State",
    price: "₦45M",
    type: "House",
    size: "Bungalow",
    beds: "3 bed",
    image: "/images/estates/estate-08.jpg",
    gallery: ["/images/estates/estate-08.jpg", "/images/progress-house.jpg"],
    summary:
      "A three-bedroom bungalow on the Elele axis — for buyers who want a finished home, not a plot they still have to interpret.",
    highlights: [
      "Three bedrooms",
      "Elele location",
      "Outright or structured payment",
      "Site inspection required",
    ],
  },
  {
    slug: "three-bedroom-belle-garden",
    name: "Three Bedroom Bungalow, Belle Garden",
    location: "Belle Garden Estate, Omunwei, Igwuruta",
    area: "Igwuruta, Rivers State",
    price: "₦50M",
    type: "House",
    size: "Bungalow",
    beds: "3 bed",
    image: "/images/progress-house.jpg",
    gallery: ["/images/progress-house.jpg", "/images/estates/estate-08.jpg"],
    summary:
      "A completed-family bungalow inside Belle Garden — quieter Igwuruta living with Hamrex documentation behind it.",
    highlights: [
      "Three bedrooms",
      "Inside Belle Garden Estate",
      "₦50M",
      "Book a walkthrough",
    ],
  },
  {
    slug: "nextport-premium",
    name: "Nextport Premium",
    location: "Beside Anti-Cultism, Elele",
    area: "Elele, Rivers State",
    price: "₦2.5M",
    type: "Buy & Build",
    size: "400 sqm",
    image: "/images/estates/estate-08.jpg",
    gallery: ["/images/estates/estate-08.jpg", "/images/estates/estate-05.jpg"],
    summary:
      "Premium plots beside the Elele bungalow programme — for buyers who want to own the land and build on Hamrex’s timeline.",
    highlights: [
      "Elele, Rivers State",
      "₦2.5M plots",
      "Buy and build",
      "Homes already rising nearby",
    ],
  },
  {
    slug: "tech-city-estate",
    name: "Tech City Estate",
    location: "Close to Wigwe University, Obelle–Isiokpo",
    area: "Isiokpo, Rivers State",
    price: "₦1.5M",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-05.jpg",
    gallery: ["/images/estates/estate-05.jpg", "/images/estates/estate-09.jpg"],
    summary:
      "A ₦1.5M university-side layout for people who want land near the knowledge economy — without a premium-phase price.",
    highlights: [
      "Obelle–Isiokpo",
      "Near Wigwe University",
      "₦1.5M entry",
      "Land banking",
    ],
  },
  {
    slug: "cashflow-gardens",
    name: "Cashflow Gardens",
    location: "Beside Nextport Estate, Elele",
    area: "Elele, Rivers State",
    price: "₦900k",
    type: "Land Banking",
    size: "400 sqm",
    image: "/images/estates/estate-05.jpg",
    gallery: ["/images/estates/estate-05.jpg", "/images/hero-build.jpg"],
    summary:
      "The most accessible Hamrex layout — named for what it is meant to do. Start a landlord story from ₦900,000.",
    highlights: [
      "From ₦900,000",
      "Beside Nextport, Elele",
      "Designed for rental cashflow",
      "Payment plans from ₦500,000",
    ],
  },
];

export const featuredProperties = properties.filter((p) => p.featured);

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export const services = [
  {
    num: "01",
    title: "Property Sales",
    copy: "Verified plots and homes across Port Harcourt’s growth corridors — with documents you can actually hold.",
  },
  {
    num: "02",
    title: "Land Banking",
    copy: "Buy today, pay tomorrow. Structured allocations from ₦500,000 for people building wealth on a calendar.",
  },
  {
    num: "03",
    title: "Construction",
    copy: "From opening roads to raising bungalows. We do not only point at land — we work it.",
  },
  {
    num: "04",
    title: "Lettings & Management",
    copy: "Tenant finding, rent collection, and upkeep for clients who want landlords’ income without landlords’ noise.",
  },
  {
    num: "05",
    title: "Investment Advisory",
    copy: "Which estate, which phase, which payment plan. Guidance for first plots and serious portfolios alike.",
  },
];

export const process = [
  {
    num: "01",
    title: "Choose a layout",
    copy: "Land banking, buy-and-build, or a finished home. We will tell you, plainly, which one matches the money you have.",
  },
  {
    num: "02",
    title: "Walk the land",
    copy: "Free site inspection. No WhatsApp fiction. You stand on the soil, see the gate, meet the team.",
  },
  {
    num: "03",
    title: "Pay on your terms",
    copy: "Start from ₦500,000. Buy today, pay tomorrow — with a paper trail, not a handshake in the dark.",
  },
  {
    num: "04",
    title: "Own, then build",
    copy: "Allocation, documentation, and a path to construction. The point is not a plot. The point is to become a landlord.",
  },
];

export const team = [
  { name: "Amadi Harry Excellent", role: "Managing Director" },
  { name: "Regina Harry-Amadi", role: "Deputy Managing Director" },
  { name: "Barr. Stella Elem, Esq.", role: "Legal Counsel" },
  { name: "Ujam Miracle", role: "Business Development" },
  { name: "Ndokwu Esther", role: "Admin Manager" },
  { name: "Ikeziem Ezebunwo", role: "Site Manager" },
  { name: "Anthony Chimene", role: "Head of Sales" },
];

export const testimonials = [
  {
    quote:
      "Hamrex did not sell me a dream from a group chat. They took me to the land, introduced the community, and the papers followed. I sleep.",
    name: "Chioma Okonkwo",
    role: "Property investor, Port Harcourt",
  },
  {
    quote:
      "I started with what I could actually pay. The instalment was real, the allocation was real, and the team did not disappear after the first deposit.",
    name: "Adebayo Johnson",
    role: "First-time landowner, Isiokpo",
  },
  {
    quote:
      "We needed a partner who understands Rivers land — not Lagos templates. Site visits, fencing, documentation. That is the job. They did it.",
    name: "Emmanuel Obi",
    role: "Landlord, Elele",
  },
];
