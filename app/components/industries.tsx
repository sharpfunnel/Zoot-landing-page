import { industries } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Industries() {
  return (
    <section className="section-tight" id="who-for">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Who Is This For?</Eyebrow>
          <h2>Built for anyone spending real money on ads</h2>
          <p>
            Real estate is where we spend most of our time — but the same page and dashboard work
            for any business that needs to know what happens after the click.
          </p>
        </div>

        <div className="industry-grid">
          {industries.map((item) => (
            <div className="industry-card" key={item.name} data-anim="from-bottom">
              <div className="ic" aria-hidden="true">
                {item.icon}
              </div>
              <div className="n">{item.name}</div>
              {item.note ? <div className="note">{item.note}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
