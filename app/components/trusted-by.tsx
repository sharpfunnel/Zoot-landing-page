import { clientLogos } from "../lib/content";

export default function TrustedBy() {
  return (
    <section className="trustedby">
      <div className="wrap">
        <div className="label" data-anim="fade-up">
          Built for real estate teams — and every business spending real budget on Google, Meta
          &amp; LinkedIn Ads
        </div>
        {/* Rendered twice so the track can loop seamlessly at -50%. The second
            pass is decorative duplication, so it's hidden from assistive tech. */}
        <div className="logo-marquee" data-anim="from-bottom">
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
  );
}
