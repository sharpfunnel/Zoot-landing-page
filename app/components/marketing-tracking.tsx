import { ctaTracking } from "../lib/content";
import { Eyebrow, FunnelRow } from "./ui";

export default function MarketingTracking() {
  return (
    <section className="section-tight" id="tracking">
      <div className="wrap why-grid">
        <div className="why-visual visual-last" data-anim="from-left">
          <div className="glow" aria-hidden="true" />
          <div className="inner">
            <div className="funnel-mini" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="label">CTA click tracking</div>
              {ctaTracking.map((row) => (
                <FunnelRow key={row.name} {...row} />
              ))}
            </div>
          </div>
        </div>

        <div data-anim="from-right">
          <Eyebrow>Marketing Tracking</Eyebrow>
          <h2 className="split-title">Every click, form and page view — labelled and counted</h2>
          <p className="split-lead">
            Book Now, Call Now, WhatsApp, Get Quote, Download — every CTA on the page is tracked
            individually, alongside form views, starts, completions and drop-offs.
          </p>
          <div className="why-list">
            <div className="why-item">
              <span className="num" aria-hidden="true">
                →
              </span>
              <div>
                <h4>Forms analytics</h4>
                <p>
                  See exactly which field or step is losing people, not just that the form
                  &quot;isn&apos;t converting.&quot;
                </p>
              </div>
            </div>
            <div className="why-item">
              <span className="num" aria-hidden="true">
                →
              </span>
              <div>
                <h4>Error monitoring</h4>
                <p>
                  JavaScript errors, API errors, broken pages and 404s, flagged before they cost
                  you leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
