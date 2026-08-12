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
            Every business is different, so pricing is based on your scope and goals — get a free
            custom quote either way.
          </p>
        </div>

        <div className="offer-grid">
          {pricingPlans.map((plan, i) => (
            <div
              className={plan.featured ? "offer-card featured" : "offer-card"}
              key={plan.title}
              data-anim={i === 0 ? "from-left" : "from-right"}
            >
              {plan.badge ? <span className="badge-top">{plan.badge}</span> : null}
              <h3>{plan.title}</h3>
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
          No fixed packages forced on you — we quote it once we understand your traffic and goals.
        </p>
      </div>
    </section>
  );
}
