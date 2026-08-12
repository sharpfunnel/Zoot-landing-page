import { deliverables } from "../lib/content";
import { Eyebrow, Tick } from "./ui";

export default function Deliverables() {
  return (
    <section className="section" id="deliverables">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>What&apos;s Included</Eyebrow>
          <h2>What You Actually Get</h2>
          <p>
            Not a feature list — the actual things that land in your hands when the project is
            done. Every one of them is included in the build.
          </p>
        </div>

        <div className="deliver-grid">
          {deliverables.map((item) => (
            <div className="deliver-card" key={item.title} data-anim="from-bottom">
              <Tick />
              <div>
                <div className="t">{item.title}</div>
                <div className="b">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
