import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Loader } from "@/components/Loader";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamrexproperties.org"),
  title: {
    default: "Hamrex Properties | Verified land in Port Harcourt",
    template: "%s | Hamrex Properties",
  },
  description: site.description,
  keywords: [
    "Hamrex Properties",
    "Port Harcourt land",
    "Rivers State real estate",
    "land banking Nigeria",
    "NextCity Estate",
    "verified land",
  ],
  openGraph: {
    title: "Hamrex Properties",
    description: site.description,
    type: "website",
    locale: "en_NG",
    images: [{ url: "/images/hero-corridor.jpg", width: 1024, height: 682 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#041e3a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body
        className={`${inter.className} min-h-full bg-white text-navy antialiased`}
      >
        <Loader />
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
