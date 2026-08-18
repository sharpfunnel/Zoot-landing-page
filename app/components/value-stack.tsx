import { offer, valueStack } from "../lib/content";
import { Eyebrow, Tick } from "./ui";

export default function ValueStack() {
  return (
    <section className="section-tight" id="value">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>What It&apos;s Worth</Eyebrow>
          <h2>Everything included, and what it costs separately</h2>
          <p>
            Bought piece by piece from separate suppliers, this is roughly what the same stack
            costs every month. Every package includes all of it.
          </p>
        </div>

        <div className="stack-list" data-anim="fade-up">
          {valueStack.map((item) => (
            <div className="stack-item" key={item.title}>
              <span className="name">
                <Tick />
                {item.title}
              </span>
              <span className="val">{item.value}</span>
            </div>
          ))}
          <div className="stack-total">
            <span>Total value</span>
            <span>
              {offer.worth}
              <em>{offer.period}</em>
            </span>
          </div>
        </div>

        <div className="savings-bar" data-anim="fade-up">
          <div>
            <div className="l">You pay</div>
            <div className="v">
              {offer.now}
              <span>{offer.period}</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="l">You save</div>
            <div className="v">
              {offer.saves}
              <span>{offer.period}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
