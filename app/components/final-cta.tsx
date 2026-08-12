import { mailto } from "../lib/content";

export default function FinalCta() {
  return (
    <section className="section-tight" id="final-cta">
      <div className="wrap">
        <div className="cta-band" data-anim="zoom-in">
          <h2>Stop Guessing. Start Tracking Every Visitor.</h2>
          <p>
            Build a landing page that doesn&apos;t just collect leads — it helps you understand
            every visitor, optimise every campaign, and grow your business with real-time
            insights.
          </p>
          <div className="cta-actions">
            <a href="#demo" className="btn btn-accent" data-ripple>
              Book Free Consultation
            </a>
            <a href={mailto} className="btn btn-ghost" data-ripple>
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
