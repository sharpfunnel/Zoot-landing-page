import BeforeAfter from "./components/before-after";
import CtaBand from "./components/cta-band";
import DashboardGallery from "./components/dashboard-gallery";
import DashboardModules from "./components/dashboard-modules";
import Deliverables from "./components/deliverables";
import Faq from "./components/faq";
import FinalCta from "./components/final-cta";
import Hero from "./components/hero";
import Industries from "./components/industries";
import Journey from "./components/journey";
import LeadForm from "./components/lead-form";
import LeadTable from "./components/lead-table";
import Pricing from "./components/pricing";
import Process from "./components/process";
import ProofStrip from "./components/proof-strip";
import Results from "./components/results";
import ScrollFx from "./components/scroll-fx";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import StickyCta from "./components/sticky-cta";
import ThreeThings from "./components/three-things";
import VideoSection from "./components/video-section";
import WaysToWork from "./components/ways-to-work";
import WhatYouGet from "./components/what-you-get";
import WhyChooseUs from "./components/why-choose-us";
import { faqs, site } from "./lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      url: site.url,
      email: site.email,
      foundingDate: site.foundingDate,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressCountry: site.country,
      },
      sameAs: [site.social.youtube, site.social.instagram, site.social.linkedin],
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

        <LeadForm
          id="demo"
          eyebrow="Free Demo"
          title="Get Your Free Landing Page + Dashboard Demo"
          body="Share your details and we'll show you exactly what your dashboard would look like — no pressure, no jargon."
          checks={[
            "See a real demo on your own business",
            "Real estate or any other industry — we guide you either way",
            "We call you back within 24 hours",
          ]}
        />

        {/* Proof, then what you receive, then how it all connects. */}
        <ProofStrip />
        <Deliverables />
        <Journey />

        {/* The product itself: gallery, then the modules behind it. */}
        <DashboardGallery />
        <DashboardModules />
        <LeadTable />

        <CtaBand />

        {/* Positioning: who it's for, and how it differs. */}
        <Industries />
        <BeforeAfter />
        <WhyChooseUs />

        <VideoSection />

        {/* The offer and the evidence. */}
        <WhatYouGet />
        <ThreeThings />
        <WaysToWork />
        <Results />
        <Process />

        <LeadForm
          id="details"
          eyebrow="Get Details"
          title="Still Deciding? Get the Full Details"
          body="Tell us what you're looking for and we'll send over exactly what's included, with honest pricing — no guesswork."
          checks={[
            "Real estate or any other industry — we guide you either way",
            "A written breakdown of what's included",
            "Callback within 24 hours",
          ]}
          submitLabel="Get Details"
        />

        <Pricing />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
      <StickyCta />
      <ScrollFx />
    </>
  );
}
