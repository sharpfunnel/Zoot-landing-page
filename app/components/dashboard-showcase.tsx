import Image from "next/image";
import dashboardShot from "../assets/dashboard-overview.png";
import { dashboardShotAlt } from "../lib/content";
import { Eyebrow } from "./ui";

export default function DashboardShowcase() {
  return (
    <section className="section" id="dashboard">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Real Dashboard</Eyebrow>
          <h2>One login. Every number that matters.</h2>
          <p>
            Not a mockup — this is a live client account. Visitors, leads, conversion rate, session
            duration, funnel drop-off, traffic sources and device split, all tied to one landing
            page.
          </p>
        </div>

        <div className="showcase" data-anim="zoom-in">
          <div className="showcase-shot">
            <Image
              src={dashboardShot}
              alt={dashboardShotAlt}
              placeholder="blur"
              quality={90}
              sizes="(max-width: 1240px) 100vw, 1140px"
            />
          </div>
        </div>

        <p className="showcase-note" data-anim="fade-up">
          <i aria-hidden="true" />
          Live client dashboard — real account, real numbers
        </p>
      </div>
    </section>
  );
}
