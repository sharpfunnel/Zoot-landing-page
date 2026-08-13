import { comparison3 } from "../lib/content";
import { Eyebrow } from "./ui";

function Cell({ on }: { on: boolean }) {
  return (
    <>
      <span className={on ? "mark mark-yes" : "mark mark-no"} aria-hidden="true">
        {on ? "✓" : "✕"}
      </span>
      <span className="sr-only">{on ? "Included" : "Not included"}</span>
    </>
  );
}

export default function ComparisonTable() {
  return (
    <section className="section section-alt" id="compare">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>The Difference</Eyebrow>
          <h2>Why businesses choose us over the alternatives</h2>
          <p>The same page from three places. Only one tells you what happened after the click.</p>
        </div>

        <div className="cmp-wrap" data-anim="fade-up">
          <table className="cmp">
            <thead>
              <tr>
                <th scope="col">What you get</th>
                {comparison3.columns.map((col, i) => (
                  <th scope="col" key={col} className={i === 0 ? "us" : undefined}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison3.rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row" style={{ fontWeight: 500 }}>
                    {row.feature}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={comparison3.columns[i]} className={i === 0 ? "us" : undefined}>
                      <Cell on={v} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="cost-row">
                <th scope="row">Typical cost</th>
                {comparison3.cost.map((c, i) => (
                  <td key={comparison3.columns[i]} className={i === 0 ? "us" : undefined}>
                    {c}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
