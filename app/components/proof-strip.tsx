import { clientLogos, stats } from "../lib/content";

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

      <div className="wrap">
        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label} data-anim="from-bottom">
              <div className="n">{stat.n}</div>
              <div className="l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
