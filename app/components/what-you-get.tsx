import { featureRows } from "../lib/content";
import { CheckList, Eyebrow, MiniPanel } from "./ui";

export default function WhatYouGet() {
  return (
    <section className="section" id="what-you-get">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>What You Get</Eyebrow>
          <h2>Built to Get You Leads You Can Actually See</h2>
          <p>
            Every part of what we build is meant to show you more — more clarity, more control,
            more proof it&apos;s working.
          </p>
        </div>

        {featureRows.map((row, i) => (
          <div className="feature-row" key={row.title}>
            {/* Alternate which column leads, so the eye zig-zags down the page. */}
            <div data-anim={i % 2 === 0 ? "from-left" : "from-right"}>
              <Eyebrow>{row.eyebrow}</Eyebrow>
              <h3>{row.title}</h3>
              <p>{row.body}</p>
              <CheckList items={row.checks} />
            </div>
            <div
              className={i % 2 === 0 ? undefined : "visual-first"}
              data-anim={i % 2 === 0 ? "from-right" : "from-left"}
            >
              <MiniPanel variant={row.visual} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
