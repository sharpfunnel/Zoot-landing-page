import { metaAdsCards } from "../lib/content";
import { Eyebrow, GlassCard } from "./ui";

export default function MetaAds() {
  return (
    <section className="section" id="meta-ads">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Meta Ads</Eyebrow>
          <h2>Pixel, Conversion API and full campaign management</h2>
          <p>
            Not just tracking — we run the campaigns too, on the same data the dashboard shows you.
            Real estate lead campaigns — listings, open houses, buyer and renter inquiries — are
            where we spend the most time, alongside every other industry we work with.
          </p>
        </div>
        <div className="grid-4">
          {metaAdsCards.map((card) => (
            <GlassCard key={card.title} {...card} anim="from-right" />
          ))}
        </div>
      </div>
    </section>
  );
}
