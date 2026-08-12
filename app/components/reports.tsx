import { reportCards } from "../lib/content";
import { Eyebrow, GlassCard } from "./ui";

export default function Reports() {
  return (
    <section className="section-tight" id="reports">
      <div className="wrap">
        <div className="section-head" data-anim="fade-up">
          <Eyebrow>Reports</Eyebrow>
          <h2>Reporting that shows up, so you don&apos;t have to ask</h2>
        </div>
        <div className="grid-3">
          {reportCards.map((card) => (
            <GlassCard key={card.title} {...card} anim="from-left" />
          ))}
        </div>
      </div>
    </section>
  );
}
