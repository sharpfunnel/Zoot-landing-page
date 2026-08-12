import Image from "next/image";
import heroLaptop from "../assets/hero-laptop.png";
import { heroBadges, heroChecks } from "../lib/content";
import { Tick } from "./ui";

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

      <div className="wrap">
        <div className="hero-copy">
          <div className="hero-badges" data-anim="fade-up">
            {heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          <h1 data-anim="fade-up">
            Stop guessing.{" "}
            <span className="accent">Start seeing which ads actually bring you leads.</span>
          </h1>

          <p className="lead" data-anim="fade-up">
            We build your ads and your landing page, then put every lead in one simple dashboard —
            tagged with the exact ad, platform and date it came from.
          </p>

          <div className="hero-ctas" data-anim="fade-up">
            <a href="#demo" className="btn btn-accent" data-ripple>
              Get My Free Demo
            </a>
            <a href="#dashboard" className="btn btn-ghost" data-ripple>
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
        </div>
      </div>
    </section>
  );
}
