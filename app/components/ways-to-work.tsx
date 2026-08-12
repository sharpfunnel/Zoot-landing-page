import { waysToWork } from "../lib/content";
import { CheckList, Eyebrow } from "./ui";

export default function WaysToWork() {
  return (
    <section className="section-tight" id="ways">
      <div className="wrap">
        <div className="section-head" data-anim="fade-up">
          <Eyebrow>Ways to Work</Eyebrow>
          <h2>Two Ways to Work With Us</h2>
          <p>
            Start with your property page and dashboard, start with your listing ads, or do both
            together.
          </p>
        </div>

        <div className="offer-grid">
          {waysToWork.map((way, i) => (
            <div
              className={way.featured ? "offer-card featured" : "offer-card"}
              key={way.title}
              data-anim={i === 0 ? "from-left" : "from-right"}
            >
              <div className="tag">{way.tag}</div>
              <h3>{way.title}</h3>
              <p>{way.body}</p>
              <CheckList items={way.checks} />
              <a href="#demo" className="btn btn-ghost btn-block" data-ripple>
                {way.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
