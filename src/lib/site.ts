export const site = {
  name: "Hamrex Properties",
  tagline: "Safe. Simple. Profitable.",
  mission: "Making housing accessible to all Africans. One million landlords by 2050.",
  description:
    "Hamrex Properties acquires, develops, and sells verified land in Port Harcourt — with flexible plans from ₦500,000.",
  url: "https://hamrexproperties.org",
  phone: "+234 814 8143 267",
  phoneHref: "tel:+2348148143267",
  email: "info@hamrexproperties.org",
  whatsapp: "+234 904 939 3966",
  address: "124 NTA Rd, Mgbuoba, Port Harcourt 500272, Rivers State",
  mapsUrl:
    "https://www.google.com/maps?q=124+NTA+Rd,+Mgbuoba,+Port+Harcourt&output=embed",
  social: {
    facebook: "https://www.facebook.com/hamrexpropertieslimited",
    instagram: "https://instagram.com/hamrexpropertieslimited",
    youtube: "https://youtube.com/@HamrexProperties",
    whatsapp: "https://wa.me/2349049393966",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Estates" },
  { href: "/about", label: "About" },
  { href: "/invest", label: "NextCity" },
  { href: "/contact", label: "Contact" },
] as const;
