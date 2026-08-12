import { results } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Real Results</Eyebrow>
          <h2>Real Campaigns. Real Dashboards. Real Results.</h2>
        </div>

        {results.map((item, i) => (
          <div className="result-row" key={item.stat}>
            {/* Alternate the stat between left and right down the column. */}
            <div
              className={i % 2 === 0 ? "result-stat" : "result-stat visual-first"}
              data-anim={i % 2 === 0 ? "from-left" : "from-right"}
            >
              <div className="n">{item.stat}</div>
              <div className="l">{item.label}</div>
            </div>

            <figure className="quote-card" data-anim={i % 2 === 0 ? "from-right" : "from-left"}>
              <div className="stars" aria-label="Rated 5 out of 5">
                ★★★★★
              </div>
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="person">
                <div className="avatar" aria-hidden="true">
                  {item.initials}
                </div>
                <div>
                  <div className="name">{item.name}</div>
                  <div className="role">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
