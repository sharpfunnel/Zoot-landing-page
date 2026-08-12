import { processSteps } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Process() {
  return (
    <section className="section-tight" id="process">
      <div className="wrap">
        <div className="section-head" data-anim="fade-up">
          <Eyebrow>The Process</Eyebrow>
          <h2>From First Call to Live Dashboard</h2>
        </div>

        <div className="step-grid">
          {processSteps.map((step) => (
            <div className="step-card" key={step.n} data-anim="from-bottom">
              <div className="n">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
