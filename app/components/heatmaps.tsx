import Image from "next/image";
import heatmapShot from "../assets/heatmap-overview.png";
import { heatmapShotAlt } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Heatmaps() {
  return (
    <section className="section-tight" id="heatmaps">
      <div className="wrap why-grid">
        <div data-anim="from-left">
          <Eyebrow>Heatmaps</Eyebrow>
          <h2 className="split-title">See what people actually do on the page</h2>
          <p className="split-lead">
            Click heatmaps, scroll heatmaps and attention areas show you the real behaviour behind
            the numbers — where people hover, where they stop scrolling, and what they never notice
            at all.
          </p>
          <div className="why-list">
            <div className="why-item">
              <span className="num" aria-hidden="true">
                →
              </span>
              <div>
                <h4>Scroll depth</h4>
                <p>Know exactly how far down the page people actually go.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="num" aria-hidden="true">
                →
              </span>
              <div>
                <h4>Attention areas</h4>
                <p>Spot the sections drawing focus — and the ones being skipped entirely.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shot-frame" data-anim="from-right">
          <Image
            src={heatmapShot}
            alt={heatmapShotAlt}
            placeholder="blur"
            quality={90}
            sizes="(max-width: 980px) 100vw, 600px"
          />
        </div>
      </div>
    </section>
  );
}
