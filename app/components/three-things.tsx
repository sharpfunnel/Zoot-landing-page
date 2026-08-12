"use client";

import { useState } from "react";
import { threeThings } from "../lib/content";
import { CheckList, Eyebrow, MiniPanel } from "./ui";

export default function ThreeThings() {
  const [active, setActive] = useState(0);
  const panel = threeThings[active];

  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>How It Works</Eyebrow>
          <h2>Three Things, Working Together</h2>
          <p>Click through to see how your ads, page and dashboard all fit together.</p>
        </div>

        <div className="tab-row" role="tablist" aria-label="What we build">
          {threeThings.map((item, i) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              id={`tab-${item.key}`}
              aria-selected={i === active}
              aria-controls={`panel-${item.key}`}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "tab-btn active" : "tab-btn"}
              onClick={() => setActive(i)}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div
          className="tab-panel"
          role="tabpanel"
          id={`panel-${panel.key}`}
          aria-labelledby={`tab-${panel.key}`}
          // Re-keyed so the panel remounts and re-animates on tab change.
          key={panel.key}
        >
          <div>
            <h3 style={{ fontSize: "clamp(21px,2.4vw,26px)", marginBottom: 12 }}>{panel.title}</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: 18 }}>{panel.body}</p>
            <CheckList items={panel.checks} />
          </div>
          <MiniPanel variant={panel.visual} />
        </div>
      </div>
    </section>
  );
}
