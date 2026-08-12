import { comparison } from "../lib/content";
import { Eyebrow } from "./ui";

function Column({
  data,
  win,
}: {
  data: { title: string; items: readonly { text: string; has: boolean }[] };
  win?: boolean;
}) {
  return (
    <div className={win ? "compare-col win" : "compare-col"} data-anim={win ? "from-right" : "from-left"}>
      <h3>{data.title}</h3>
      <ul>
        {data.items.map((item) => (
          <li key={item.text} className={item.has ? undefined : "missing"}>
            <span className={item.has ? "mark mark-yes" : "mark mark-no"} aria-hidden="true">
              {item.has ? "✓" : "✕"}
            </span>
            {item.text}
            <span className="sr-only">{item.has ? " — included" : " — not included"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="section section-alt" id="compare">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>The Difference</Eyebrow>
          <h2>A page, or a page you can actually see into</h2>
          <p>Both look good on launch day. Only one tells you what happened next.</p>
        </div>

        <div className="compare-grid">
          <Column data={comparison.before} />
          <div className="versus" aria-hidden="true">
            VS
          </div>
          <Column data={comparison.after} win />
        </div>
      </div>
    </section>
  );
}
