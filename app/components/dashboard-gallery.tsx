"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import dashboardShot from "../assets/dashboard-overview.png";
import heatmapShot from "../assets/heatmap-overview.png";
import { galleryTabs } from "../lib/content";
import { Eyebrow } from "./ui";

const SHOTS: Record<string, StaticImageData> = {
  dashboard: dashboardShot,
  heatmap: heatmapShot,
};

/** Styled stand-ins for the tabs we don't have a real capture of yet. */
function MockPanel({ kind }: { kind: string }) {
  if (kind === "leads") {
    return (
      <div className="gallery-mock">
        <div className="table-wrap" style={{ boxShadow: "none" }}>
          <table>
            <thead>
              <tr>
                <th scope="col">Lead</th>
                <th scope="col">Source</th>
                <th scope="col">Campaign</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Aditya Sharma", "Facebook", "pill-blue", "3BHK Launch Offer", "New", "pill-blue"],
                ["Ruhi Mehta", "Instagram", "pill-amber", "Weekend Site Visit", "Contacted", "pill-amber"],
                ["Priya Nair", "Google", "pill-green", "Office Space — Search", "Site Visit", "pill-green"],
              ].map((r) => (
                <tr key={r[0]}>
                  <td className="lead-name">{r[0]}</td>
                  <td>
                    <span className={`pill ${r[2]}`}>{r[1]}</span>
                  </td>
                  <td>{r[3]}</td>
                  <td>
                    <span className={`pill ${r[5]}`}>{r[4]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (kind === "funnel") {
    return (
      <div className="gallery-mock">
        {[
          { name: "Visitors", value: 100 },
          { name: "Scrolled 50%", value: 71 },
          { name: "CTA click", value: 23 },
          { name: "Form start", value: 16 },
          { name: "Lead sent", value: 10 },
        ].map((row) => (
          <div className="mini-bar" key={row.name}>
            <span className="bn">{row.name}</span>
            <span className="bt">
              <span className="bf" style={{ width: `${row.value}%` }} />
            </span>
            <span className="bv">{row.value}%</span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "performance") {
    return (
      <div className="gallery-mock">
        <div className="mini-kpis" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {[
            ["LCP", "1.4s"],
            ["CLS", "0.02"],
            ["INP", "94ms"],
          ].map(([l, v]) => (
            <div className="mini-kpi" key={l}>
              <div className="l">{l}</div>
              <div className="v">{v}</div>
            </div>
          ))}
        </div>
        <div className="mini-row" style={{ marginTop: 14 }}>
          <span className="name">JavaScript errors (7d)</span>
          <span className="pill pill-green">0</span>
        </div>
        <div className="mini-row">
          <span className="name">Broken links / 404s</span>
          <span className="pill pill-green">0</span>
        </div>
      </div>
    );
  }

  if (kind === "reports") {
    return (
      <div className="gallery-mock">
        {[
          ["Weekly summary — 5–11 Aug", "PDF"],
          ["Monthly performance — July", "PDF"],
          ["Lead export — all sources", "Excel"],
          ["Campaign & ROAS breakdown", "Excel"],
        ].map(([name, fmt]) => (
          <div className="mini-row" key={name}>
            <span className="name">{name}</span>
            <span className="pill pill-blue">{fmt}</span>
          </div>
        ))}
      </div>
    );
  }

  // "kpis" — sessions overview
  return (
    <div className="gallery-mock">
      <div className="mini-kpis" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        {[
          ["Sessions", "41"],
          ["Avg. duration", "44m 32s"],
          ["Bounce rate", "80.5%"],
        ].map(([l, v]) => (
          <div className="mini-kpi" key={l}>
            <div className="l">{l}</div>
            <div className="v">{v}</div>
          </div>
        ))}
      </div>
      <div className="mini-row" style={{ marginTop: 14 }}>
        <span className="name">Desktop</span>
        <span>58.5%</span>
      </div>
      <div className="mini-row">
        <span className="name">Mobile</span>
        <span>12.2%</span>
      </div>
      <div className="mini-row">
        <span className="name">Other</span>
        <span>29.3%</span>
      </div>
    </div>
  );
}

export default function DashboardGallery() {
  const [active, setActive] = useState(0);
  const tab = galleryTabs[active];
  const shot = tab.shot ? SHOTS[tab.shot] : null;

  return (
    <section className="section" id="dashboard">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Dashboard Gallery</Eyebrow>
          <h2>One login. Every view your team needs.</h2>
          <p>Click through the tabs to see what each part of your dashboard shows.</p>
        </div>

        <div className="gallery" data-anim="fade-up">
          <div className="gallery-tabs" role="tablist" aria-label="Dashboard views">
            {galleryTabs.map((item, i) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                id={`gal-tab-${item.key}`}
                aria-selected={i === active}
                aria-controls="gal-stage"
                tabIndex={i === active ? 0 : -1}
                className={i === active ? "gallery-tab active" : "gallery-tab"}
                onClick={() => setActive(i)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className="gallery-stage"
            role="tabpanel"
            id="gal-stage"
            aria-labelledby={`gal-tab-${tab.key}`}
          >
            <div className="gallery-head">
              <h3>{tab.title}</h3>
              <p>{tab.body}</p>
            </div>

            {shot ? (
              <div className="gallery-shot">
                <Image
                  src={shot}
                  alt={`${tab.label} view of the Zoot Web Agency dashboard`}
                  placeholder="blur"
                  quality={90}
                  sizes="(max-width: 1080px) 100vw, 820px"
                />
              </div>
            ) : (
              <>
                <MockPanel kind={tab.panel ?? "kpis"} />
                <p className="mock-note">
                  Representative view — real screenshot coming
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
