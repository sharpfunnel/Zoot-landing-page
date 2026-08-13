"use client";

import { useEffect, useState } from "react";
import { offer } from "../lib/content";

/**
 * Scarcity bar pinned above the header, mirroring the reference pages.
 *
 * The countdown is rendered blank on the server and filled in after mount —
 * a clock value baked into static HTML would be wrong the moment it's cached,
 * and would mismatch on hydration.
 *
 * NOTE: this timer restarts on every page load, which is a rolling deadline,
 * not a real one. Point it at a fixed end date before launch, or drop it.
 */
export default function AnnounceBar() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = Date.now() + offer.countdownHours * 3600 * 1000;
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts =
    left === null
      ? null
      : [
          Math.floor(left / 3_600_000),
          Math.floor((left % 3_600_000) / 60_000),
          Math.floor((left % 60_000) / 1000),
        ].map((n) => String(n).padStart(2, "0"));

  return (
    <div className="announce">
      <span className="dot" aria-hidden="true" />
      <b>{offer.bar}</b>
      {parts ? (
        <span className="count-chips" aria-label={`Offer ends in ${parts.join(":")}`}>
          <i>{parts[0]}h</i>
          <i>{parts[1]}m</i>
          <i>{parts[2]}s</i>
        </span>
      ) : null}
    </div>
  );
}
