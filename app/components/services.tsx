import { services } from "../lib/content";
import { Eyebrow, GlassCard } from "./ui";

export default function Services() {
  return (
    <section className="section-tight" id="services">
      <div className="wrap">
        <div className="section-head" data-anim="fade-up">
          <Eyebrow>Services</Eyebrow>
          <h2>What&apos;s included with Zoot Web Agency</h2>
        </div>
        <div className="grid-4">
          {services.map((card) => (
            <GlassCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
