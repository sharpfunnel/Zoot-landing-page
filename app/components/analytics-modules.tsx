import { analyticsModules } from "../lib/content";
import { Eyebrow, GlassCard } from "./ui";

export default function AnalyticsModules() {
  return (
    <section className="section" id="modules">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Analytics Modules</Eyebrow>
          <h2>Every module a growth team actually uses</h2>
          <p>
            Turn modules on as you need them — nothing forces you to look at data you don&apos;t
            care about yet.
          </p>
        </div>
        <div className="grid-3">
          {analyticsModules.map((card) => (
            <GlassCard key={card.title} {...card} anim="zoom-in" />
          ))}
        </div>
      </div>
    </section>
  );
}
