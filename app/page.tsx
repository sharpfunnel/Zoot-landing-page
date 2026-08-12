import AnalyticsModules from "./components/analytics-modules";
import Benefits from "./components/benefits";
import CaseStudies from "./components/case-studies";
import DashboardShowcase from "./components/dashboard-showcase";
import Faq from "./components/faq";
import FinalCta from "./components/final-cta";
import Heatmaps from "./components/heatmaps";
import Hero from "./components/hero";
import MarketingTracking from "./components/marketing-tracking";
import MetaAds from "./components/meta-ads";
import Optimization from "./components/optimization";
import Process from "./components/process";
import Reports from "./components/reports";
import ScrollFx from "./components/scroll-fx";
import Services from "./components/services";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import Testimonials from "./components/testimonials";
import TrustedBy from "./components/trusted-by";
import WhyZoot from "./components/why-zoot";
import { faqs, site } from "./lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: site.logo,
      email: site.email,
      telephone: site.phone,
      foundingDate: site.foundingDate,
      sameAs: [site.social.youtube, site.social.instagram, site.social.linkedin],
    },
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A landing page and marketing analytics platform combining conversion-focused page design with a live dashboard for lead tracking, funnels, heatmaps, campaign performance and Meta CAPI.",
      brand: { "@type": "Organization", name: site.name },
      offers: { "@type": "Offer", url: site.pageUrl, priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* `<` is escaped so no page copy can break out of the script tag. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader />

      <main>
        <Hero />
        <TrustedBy />
        <WhyZoot />
        <DashboardShowcase />
        <Services />
        <AnalyticsModules />
        <MarketingTracking />
        <MetaAds />
        <Heatmaps />
        <Optimization />
        <Reports />
        <Process />
        <CaseStudies />
        <Benefits />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
      <ScrollFx />
    </>
  );
}
