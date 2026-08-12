import { caseStudies } from "../lib/content";
import { Eyebrow } from "./ui";

export default function CaseStudies() {
  return (
    <section className="section-tight" id="case-studies">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Case Studies</Eyebrow>
          <h2>What the dashboard looks like once it&apos;s working</h2>
        </div>
        <div className="case-grid">
          {caseStudies.map((item) => (
            <div className="case-card" data-anim="from-bottom" key={item.tag}>
              <div className="tag">{item.tag}</div>
              <div
                className="stat"
                data-count={item.count}
                data-decimals={item.decimals}
                data-suffix={item.suffix}
              >
                {`0${item.suffix}`}
              </div>
              <div className="stat-label">{item.statLabel}</div>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
