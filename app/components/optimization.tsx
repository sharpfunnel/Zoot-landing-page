import { budgetSplit, cpaByChannel } from "../lib/content";
import { Eyebrow, FunnelRow } from "./ui";

export default function Optimization() {
  return (
    <section className="section" id="optimization">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Campaign Optimization</Eyebrow>
          <h2>Budget goes where the data says it should</h2>
          <p>A smart allocation view shows your best and worst performing campaigns side by side.</p>
        </div>

        <div className="showcase" data-anim="zoom-in">
          <div className="showcase-inner">
            <div className="showcase-lower">
              <div className="chart-box">
                <div className="l">Recommended budget split</div>
                <div className="funnel-mini funnel-bare">
                  {budgetSplit.map((row) => (
                    <FunnelRow key={row.name} {...row} />
                  ))}
                </div>
              </div>

              <div className="list-box">
                <div className="l">CPA by channel</div>
                {cpaByChannel.map((row) => (
                  <div className="row" key={row.name}>
                    <span className="name">{row.name}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
