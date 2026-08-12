import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import { site } from "./lib/content";
import "./globals.css";

// The v3 design specifies these three; self-hosted by next/font, so no
// request leaves the browser for Google Fonts.
const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = "Meta Ads, Landing Pages & Live Dashboard";
const description =
  "We run Meta Ads for real estate brokers, developers and agencies — with a custom landing page and live dashboard showing exactly which listing ad brought in each lead. Get a free demo.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    title,
    description:
      "Get more real estate leads. Know exactly which listing ad brought each one in — landing page and live dashboard included.",
    url: site.url,
    siteName: site.name,
    images: [site.logo],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Real estate ad campaigns, landing pages and a live dashboard that shows exactly where every lead came from.",
    images: [site.logo],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

// Arms the reveal-on-scroll styles before first paint. Without JavaScript the
// class is never set, so every `[data-anim]` element renders fully visible.
const FX_READY = `document.documentElement.classList.add('fx-ready')`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: FX_READY }} />
        {children}
      </body>
    </html>
  );
}
