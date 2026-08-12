import { compareRows, whyItems } from "../lib/content";
import { Eyebrow } from "./ui";

export default function WhyZoot() {
  return (
    <section className="section" id="why">
      <div className="wrap why-grid">
        <div data-anim="from-left">
          <Eyebrow>Why Zoot</Eyebrow>
          <h2 className="split-title">
            Most agencies hand you a website and disappear. We hand you a system you can watch
            work.
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Zoot Web Agency designs the page, builds the backend that tracks it, and stays in the
            dashboard with you — optimizing what the data shows, not what we assume.
          </p>
          <div className="why-list">
            {whyItems.map((item) => (
              <div className="why-item" key={item.num}>
                <span className="num">{item.num}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-visual" data-anim="from-right">
          <div className="glow" aria-hidden="true" />
          <div className="compare-mini">
            {compareRows.map((row) => (
              <div className={row.good ? "row good" : "row"} key={row.text}>
                <span>{row.text}</span>
                <span className="tag">{row.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
