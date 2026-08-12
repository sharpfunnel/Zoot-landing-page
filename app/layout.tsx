import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope, Nunito_Sans } from "next/font/google";
import { site } from "./lib/content";
import "./globals.css";

/**
 * The three typefaces zootwebagency.com actually ships, taken from the
 * Elementor global kit: DM Sans for headings, Manrope for body and UI, and
 * Nunito Sans for the uppercase micro-labels. Self-hosted by next/font, so no
 * request leaves the browser for Google Fonts.
 */
const display = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Nunito_Sans({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const title = "Zoot Web Agency | Landing Pages + Live Analytics Dashboard";
const description =
  "Zoot Web Agency pairs a high-converting landing page with a private analytics dashboard — built for every business, with a dedicated focus on real estate ad campaigns. Leads, sessions, funnels, heatmaps, Meta CAPI and ad performance in one system.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: site.pageUrl },
  openGraph: {
    type: "website",
    title,
    description:
      "Not just a website — a complete marketing system. Landing pages wired to a live analytics dashboard, built by Zoot Web Agency.",
    url: site.pageUrl,
    siteName: site.name,
    images: [site.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoot Web Agency | Landing Pages + Analytics Dashboard",
    description:
      "Landing pages wired to a live analytics dashboard — leads, sessions, funnels, heatmaps, ad performance and Meta CAPI.",
    images: [site.logo],
  },
};

export const viewport: Viewport = {
  themeColor: "#091028",
};

// Arms the reveal-on-scroll styles before first paint. Without JavaScript the
// class is never set, so every `[data-anim]` element renders fully visible.
const FX_READY = `document.documentElement.classList.add('fx-ready')`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${label.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: FX_READY }} />
        {children}
      </body>
    </html>
  );
}
