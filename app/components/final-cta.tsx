import { mailto } from "../lib/content";
import { Eyebrow } from "./ui";

export default function FinalCta() {
  return (
    <section className="section-tight" id="final-cta">
      <div className="wrap">
        <div className="cta-banner" data-anim="zoom-in">
          <Eyebrow center>Get started</Eyebrow>
          <h2>Stop launching pages you can&apos;t see into.</h2>
          <p>
            Book a free strategy call. We&apos;ll map your current funnel, show you what a live
            dashboard would look like on your traffic, and give you a straight answer on scope and
            pricing.
          </p>
          <a href={mailto} className="btn btn-accent" data-ripple>
            Book a free strategy call
          </a>
        </div>
      </div>
    </section>
  );
}
