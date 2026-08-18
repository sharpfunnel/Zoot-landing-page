import { pricingPlans } from "../lib/content";
import { CheckList, Eyebrow } from "./ui";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Pricing</Eyebrow>
          <h2>Choose How You Want to Start</h2>
          <p>
            Three packages, priced monthly. Start where your campaigns are today and move up when
            the numbers say it&apos;s time — no lock-in either way.
          </p>
        </div>

        <div className="offer-grid">
          {pricingPlans.map((plan, i) => (
            <div
              className={plan.featured ? "offer-card featured" : "offer-card"}
              key={plan.title}
              data-anim={i === 0 ? "from-left" : i === 1 ? "fade-up" : "from-right"}
            >
              {plan.badge ? <span className="badge-top">{plan.badge}</span> : null}
              <h3>{plan.title}</h3>
              <p className="offer-price">
                {plan.price}
                <span>{plan.period}</span>
              </p>
              <p>{plan.body}</p>
              <CheckList items={plan.checks} />
              <a
                href="#demo"
                className={plan.featured ? "btn btn-accent btn-block" : "btn btn-ghost btn-block"}
                data-ripple
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="table-note" data-anim="fade-up">
          Ad spend is billed separately, straight to Meta — these are management fees only.
        </p>
      </div>
    </section>
  );
}
