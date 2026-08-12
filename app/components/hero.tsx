import { heroFloatCards, heroFunnel, heroKpis, mailto } from "../lib/content";
import { Eyebrow, FunnelRow } from "./ui";

/**
 * Entrance direction and parallax speed per floating card, matched to where
 * each one sits around the dashboard so they scatter into place.
 */
const FLOAT_ANIM = ["from-right", "from-bottom-right", "from-bottom-left"];
const FLOAT_PARALLAX = [0.12, -0.08, 0.1];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div data-anim="fade-up">
            <Eyebrow>Zoot Web Agency</Eyebrow>
          </div>
          <h1 data-anim="fade-up">
            We run Meta Ads that convert.{" "}
            <span className="accent">The landing page and live dashboard come built in.</span>
          </h1>
          <p className="lead" data-anim="fade-up">
            Meta Ads is what we do — campaign setup, creative testing, retargeting and scaling.
            Every campaign ships with the landing page and analytics backend behind it, so you see
            leads, sessions and ad spend in one dashboard. Built for every industry, with a
            dedicated focus on real estate ad campaigns.
          </p>
          <div className="hero-ctas" data-anim="fade-up">
            <a href={mailto} className="btn btn-accent" data-ripple>
              Book a free strategy call
            </a>
            <a href="#dashboard" className="btn btn-ghost" data-ripple>
              See the dashboard ↓
            </a>
          </div>
          <div className="trust-row" data-anim="fade-up">
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>
            <span>
              Trusted by real estate teams and growing businesses across the US, UK, Australia
              &amp; Canada
            </span>
          </div>
        </div>

        <div className="hero-stage">
          <div className="dash" data-anim="zoom-in" data-parallax="0.06">
            <div className="dash-top">
              <div className="dash-tabs">
                <span className="active">Overview</span>
                <span>Leads</span>
                <span>Funnels</span>
              </div>
              <div className="live-pill">
                <i aria-hidden="true" />
                LIVE
              </div>
            </div>

            <div className="kpi-grid">
              {heroKpis.map((kpi) => (
                <div className="kpi" key={kpi.label}>
                  <div className="label">{kpi.label}</div>
                  <div className="num" data-count={kpi.count}>
                    0
                  </div>
                  <div className="delta">{kpi.delta}</div>
                </div>
              ))}
            </div>

            <div className="funnel-mini">
              <div className="label">Live conversion funnel</div>
              {heroFunnel.map((row) => (
                <FunnelRow key={row.name} {...row} />
              ))}
            </div>
          </div>

          {heroFloatCards.map((card, i) => (
            <div
              key={card.label}
              className={`fc float-card fc-${i + 1}`}
              data-anim={FLOAT_ANIM[i]}
              data-parallax={FLOAT_PARALLAX[i]}
            >
              <div className="l">{card.label}</div>
              <div className="v">{card.value}</div>
              <div className={card.positive ? "d" : "d d-neutral"}>{card.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
