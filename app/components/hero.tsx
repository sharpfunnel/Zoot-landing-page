import Image from "next/image";
import heroLaptop from "../assets/hero-laptop.png";
import { heroBadges, heroChecks, heroTrust, offer } from "../lib/content";
import { GoogleAdsMark, MetaMark, Tick } from "./ui";

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Decorative: the composite already carries its own feature callouts,
          so it's hidden from assistive tech and the copy stands alone. */}
      <div className="hero-bg" aria-hidden="true">
        <Image
          src={heroLaptop}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          loading="eager"
          fetchPriority="high"
          className="hero-bg-img"
        />
      </div>

      {/* Over the composite on a wide screen, a row under the copy on a narrow
          one. Named rather than decorative: which platforms we run is real
          information, not ornament. */}
      <ul className="hero-marks" aria-label="Platforms we run campaigns on">
        <li className="mark-a">
          <MetaMark className="hm-i meta" />
          Meta Ads
        </li>
        <li className="mark-b">
          <GoogleAdsMark className="hm-i" />
          Google Ads
        </li>
      </ul>

      <div className="wrap">
        <div className="hero-copy">
          <div className="hero-badges" data-anim="fade-up">
            {heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          <h1 data-anim="fade-up">
            For Businesses Ready to Turn{" "}
            <span className="accent">Meta &amp; Google Ads Into More Leads.</span>
          </h1>

          <p className="lead" data-anim="fade-up">
            We build your ads and your landing page, then put every lead in one simple dashboard —
            tagged with the exact ad, platform and date it came from.
          </p>

          {/* The entry package's price, not an anchored discount — there
              isn't one to anchor against. See the offer block in content.ts. */}
          <div className="price-anchor" data-anim="fade-up">
            <span className="price-from">From</span>
            <span className="price-now">{offer.now}</span>
            <span className="price-per">{offer.period}</span>
            <span className="price-note">
              Landing page, dashboard and tracking included — three packages, billed monthly.
            </span>
          </div>

          <div className="hero-ctas" data-anim="fade-up">
            <a href="#demo" className="btn btn-accent" data-ripple>
              Get My Free Demo
            </a>
            <a href="#setup" className="btn btn-ghost" data-ripple>
              See How Tracking Works ↓
            </a>
          </div>

          <ul className="hero-checks" data-anim="fade-up">
            {heroChecks.map((check) => (
              <li key={check}>
                <Tick />
                {check}
              </li>
            ))}
          </ul>

          <div className="hero-trust" data-anim="fade-up">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="avatars" aria-hidden="true">
                {heroTrust.initials.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
              <div className="trust-meta">
                <div className="v">{heroTrust.count}</div>
                <div className="l">{heroTrust.countLabel}</div>
              </div>
            </div>
            <div className="rating-badge">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="n">{heroTrust.rating}</span>
              <span className="l" style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {heroTrust.ratingLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
