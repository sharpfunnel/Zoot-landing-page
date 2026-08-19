import ComparisonTable from "./components/comparison-table";
import DashboardViews from "./components/dashboard-views";
import Deliverables from "./components/deliverables";
import Faq from "./components/faq";
import FinalCta from "./components/final-cta";
import FlowCard from "./components/flow-card";
import Hero from "./components/hero";
import Journey from "./components/journey";
import LeadForm from "./components/lead-form";
import Pricing from "./components/pricing";
import ProofStrip from "./components/proof-strip";
import ScrollFx from "./components/scroll-fx";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import SocialProof from "./components/social-proof";
import StickyCta from "./components/sticky-cta";
import TrackingSetup from "./components/tracking-setup";
import ValueStack from "./components/value-stack";
import { faqs, site } from "./lib/content";

/*
 * Parked, not deleted — these components still exist in app/components/ and
 * can be dropped back in with a single import + tag if you want them:
 *
 *   dashboard-gallery   7 dashboard tabs    (superseded by TrackingSetup, which
 *                                            covers the same ground in more
 *                                            detail; its #dashboard anchors now
 *                                            point at #setup)
 *   dashboard-modules   8 module cards      (TrackingSetup already shows these)
 *   lead-table          lead attribution    (TrackingSetup's Leads tab covers it)
 *   what-you-get        3 feature rows      (overlaps Deliverables)
 *   three-things        ads/page/dashboard  (overlaps TrackingSetup's tabs)
 *   why-choose-us       10 reason cards     (overlaps Deliverables + comparison)
 *   industries          12 industry cards   (nice-to-have qualifier)
 *   results             3 stat + quote rows (overlaps SocialProof)
 *   ways-to-work        2 engagement cards  (overlaps Pricing's two plans)
 *   process             9 build steps       (FlowCard covers this in 3)
 *   video-section       video frame         (no footage exists yet)
 *   cta-band            mid-page CTA        (FinalCta covers it)
 *   announce-bar        scarcity + timer    (removed: overlapped the fixed
 *                                            header, and its countdown reset
 *                                            on every load)
 */

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
        {/* Hook → clarity → credibility */}
        <Hero />
        <TrackingSetup />
        <DashboardViews />
        <FlowCard />
        <ProofStrip />

        {/* Show the product, then what you receive, then how it works */}
        <Deliverables />
        <Journey />

        {/* Differentiate, then prove */}
        <ComparisonTable />
        <SocialProof />

        {/* Value → price → convert */}
        <ValueStack />
        <Pricing />

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

        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
      <StickyCta />
      <ScrollFx />
    </>
  );
}
