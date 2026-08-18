"use client";

import { useEffect, useState } from "react";
import { offer, site } from "../lib/content";

/**
 * Persistent bottom bar. Appears once the hero is out of the way and hides
 * again over the footer, so it never covers the final CTA or the contact
 * details someone has just scrolled to.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        y + window.innerHeight > document.documentElement.scrollHeight - 620;
      setShow(y > 700 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const waNumber = site.phone.replace(/[^\d]/g, "");
  const waText = encodeURIComponent(
    "Hi Zoot — I'd like a demo of the landing page and dashboard.",
  );

  return (
    <div className={show ? "sticky-cta show" : "sticky-cta"} aria-hidden={!show}>
      <div className="sticky-inner">
        <div className="sticky-copy">
          <div className="sticky-price">
            <span className="from">From</span>
            <span className="now">{offer.now}</span>
            <span className="per">{offer.period}</span>
          </div>
          <div className="b">Free demo, no obligation — we reply the same day.</div>
        </div>
        <div className="sticky-actions">
          <a href="#demo" className="btn btn-accent btn-sm" data-ripple tabIndex={show ? 0 : -1}>
            Book Free Demo
          </a>
          <a href="#pricing" className="btn btn-ghost btn-sm" data-ripple tabIndex={show ? 0 : -1}>
            Get Quote
          </a>
          <a
            href={`https://wa.me/${waNumber}?text=${waText}`}
            className="btn btn-ghost btn-sm btn-wa"
            target="_blank"
            rel="noreferrer noopener"
            tabIndex={show ? 0 : -1}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
