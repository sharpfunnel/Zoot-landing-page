"use client";

import { useState } from "react";
import { faqs } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Faq() {
  // Accordion: one panel open at a time, matching the original page.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>FAQ</Eyebrow>
          <h2>Questions we get before every build</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={open ? "faq-item open" : "faq-item"} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <h4>{item.q}</h4>
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </button>
                {/* Collapsed panels are inert so screen readers and tab order
                    skip answers the user hasn't opened. */}
                <div
                  className="faq-a"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  inert={!open}
                >
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
