import { clientLogos, stats, trustPoints } from "../lib/content";
import { Eyebrow } from "./ui";

export default function ProofStrip() {
  return (
    <>
      <section className="logo-strip">
        <div className="wrap">
          <div className="label" data-anim="fade-up">
            Trusted by real estate teams, developers and growing businesses
          </div>
          {/* Rendered twice so the track can loop seamlessly at -50%. The
              second pass is decorative, so it's hidden from assistive tech. */}
          <div className="logo-marquee" data-anim="fade-up">
            <div className="logo-track">
              {clientLogos.map((name) => (
                <span key={name}>{name}</span>
              ))}
              {clientLogos.map((name) => (
                <span key={`dup-${name}`} aria-hidden="true">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" id="numbers">
        <div className="wrap">
          <div className="section-head center" data-anim="fade-up">
            <Eyebrow center>By The Numbers</Eyebrow>
            <h2>Built, tracked and measured — at scale</h2>
          </div>

          <div className="numbers-row">
            {stats.map((stat) => (
              <div className="stat" key={stat.label} data-anim="from-bottom">
                <div
                  className="n"
                  data-count={stat.count}
                  data-decimals={stat.decimals ?? 0}
                  data-suffix={stat.suffix}
                >
                  {`0${stat.suffix}`}
                </div>
                <div className="l">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="trust-row">
            {trustPoints.map((point) => (
              <div className="trust-item" key={point.title} data-anim="fade-up">
                <span className="ic" aria-hidden="true">
                  {point.icon}
                </span>
                <div>
                  <div className="t">{point.title}</div>
                  <div className="b">{point.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
