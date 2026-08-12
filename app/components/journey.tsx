import { journeySteps } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Journey() {
  return (
    <section className="section section-alt" id="journey">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>How Everything Works</Eyebrow>
          <h2>From ad click to report, nothing falls through</h2>
          <p>
            Most agencies stop at step two. This is the whole path a visitor takes — and every
            stage of it is recorded in your dashboard.
          </p>
        </div>

        <ol className="journey">
          {journeySteps.map((step) => (
            <li className="journey-step" key={step.n} data-anim="from-bottom">
              <div className="n">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
