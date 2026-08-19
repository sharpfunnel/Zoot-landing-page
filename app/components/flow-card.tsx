import { specChips } from "../lib/content";

const ROWS = [
  { ic: "◷", t: "Book a free demo", b: "One call — we look at your current funnel." },
  { ic: "◱", t: "We build page + dashboard", b: "Live in seven days, tested end to end." },
  { ic: "◎", t: "Watch every lead land", b: "Tagged to the exact ad that produced it." },
];

export default function FlowCard() {
  return (
    <section className="section-tight" id="flow">
      <div className="wrap">
        <div className="flow-card" data-anim="zoom-in">
          <h2>How working with us actually goes</h2>
          <div className="flow-rows">
            {ROWS.map((row, i) => (
              <div className="flow-row" key={row.t}>
                <span className="ic" aria-hidden="true">
                  {row.ic}
                </span>
                <div>
                  <div className="t">{row.t}</div>
                  <div className="b">{row.b}</div>
                </div>
                <span className="num" aria-hidden="true">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-row" style={{ marginTop: 26 }} data-anim="fade-up">
          {specChips.map((chip) => (
            <div className="spec-chip" key={chip.l}>
              <div className="v">{chip.v}</div>
              <div className="l">{chip.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
