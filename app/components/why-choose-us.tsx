import { whyChooseUs } from "../lib/content";
import { Eyebrow } from "./ui";

export default function WhyChooseUs() {
  return (
    <section className="section-tight" id="why-us">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Why Businesses Choose Us</Eyebrow>
          <h2>Ten things, one team, one invoice</h2>
          <p>
            The usual alternative is a designer, a developer, an ads freelancer and an analytics
            consultant who never speak to each other.
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <div className="why-card" key={item.title} data-anim="from-bottom">
              <div className="ic" aria-hidden="true">
                {item.icon}
              </div>
              <div className="t">{item.title}</div>
              <div className="b">{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
