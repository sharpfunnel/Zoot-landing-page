import { processSteps } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head" data-anim="fade-up">
          <Eyebrow>How it works</Eyebrow>
          <h2>From strategy call to live optimization</h2>
        </div>
        <div className="steps">
          {processSteps.map((step) => (
            <div className="step" data-anim="from-left" key={step.num}>
              <div className="marker">{step.num}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
