"use client";

import { useCallback, useRef, useState } from "react";
import { dashboardViews } from "../lib/content";
import { Eyebrow } from "./ui";

/* -------------------------------------------------------------- icons */

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.7 } as const;

const I: Record<string, React.ReactElement> = {
  grid: (
    <svg viewBox="0 0 20 20" {...S}>
      <rect x="2.8" y="2.8" width="5.6" height="5.6" rx="1.4" />
      <rect x="11.6" y="2.8" width="5.6" height="5.6" rx="1.4" />
      <rect x="2.8" y="11.6" width="5.6" height="5.6" rx="1.4" />
      <rect x="11.6" y="11.6" width="5.6" height="5.6" rx="1.4" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <circle cx="7.6" cy="6.6" r="2.7" />
      <circle cx="14" cy="7.6" r="2.1" />
      <path d="M2.2 16c0-2.7 2.4-4.4 5.4-4.4s5.4 1.7 5.4 4.4H2.2z" />
      <path d="M14 11.7c2.3.2 3.8 1.8 3.8 4.3h-4c0-1.7-.4-3-1.1-4.1.4-.1.9-.2 1.3-.2z" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.6 10.4h3l2-5.2 3 10 2.2-6.2 1.6 3h3" />
    </svg>
  ),
  userPlus: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <circle cx="8.4" cy="6.4" r="3.1" />
      <path d="M2.4 16.6c0-3.1 2.7-5 6-5 1 0 1.9.2 2.7.5-.5.8-.8 1.7-.8 2.7 0 .6.1 1.2.3 1.8z" />
      <path d="M15 11.4h1.5v2h2v1.5h-2v2H15v-2h-2v-1.5h2z" />
    </svg>
  ),
  percent: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <path d="M15 5L5 15" />
      <circle cx="6.6" cy="6.6" r="2.1" />
      <circle cx="13.4" cy="13.4" r="2.1" />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4.4h12l-4.6 5.6v5.6l-2.8-1.6v-4z" />
    </svg>
  ),
  tap: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <circle cx="10" cy="10" r="3.1" />
      <path d="M10 2.6v1.8M10 15.6v1.8M2.6 10h1.8M15.6 10h1.8M4.8 4.8l1.3 1.3M13.9 13.9l1.3 1.3M15.2 4.8l-1.3 1.3M6.1 13.9l-1.3 1.3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 20 20" {...S}>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 5.8V10l3 1.8" strokeLinecap="round" />
    </svg>
  ),
  exit: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.6H4.6v12.8H12" />
      <path d="M9.4 10h7.6M14 7l3 3-3 3" />
    </svg>
  ),
  repeat: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.4 8.2a6.6 6.6 0 0110.9-2.4l2 2" />
      <path d="M16.6 11.8a6.6 6.6 0 01-10.9 2.4l-2-2" />
      <path d="M16.4 3.6v4.2h-4.2M3.6 16.4v-4.2h4.2" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M7.4 2.6l1.2 3.2 3.2 1.2-3.2 1.2-1.2 3.2-1.2-3.2L3 7l3.2-1.2z" />
      <path d="M14 10.4l.8 2.1 2.2.8-2.2.8-.8 2.1-.8-2.1-2.2-.8 2.2-.8z" />
    </svg>
  ),
  down: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3.4v8.4M6.6 8.6L10 12l3.4-3.4" />
      <path d="M4 14.2v1.6a1 1 0 001 1h10a1 1 0 001-1v-1.6" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 3.6h5.4V9" />
      <path d="M16.4 3.6L9 11" />
      <path d="M14.4 11.6v4.8H3.6V5.6h4.8" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M5.4 14.2V9.4a4.6 4.6 0 019.2 0v4.8l1.2 1.6H4.2z" />
      <path d="M8.4 15.8a1.7 1.7 0 003.2 0" strokeLinecap="round" />
    </svg>
  ),
  logout: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3.6H4.6v12.8H8" />
      <path d="M8.4 10H17M13.6 7l3 3-3 3" />
    </svg>
  ),
  cal: (
    <svg viewBox="0 0 20 20" {...S}>
      <rect x="3" y="4.5" width="14" height="12.5" rx="2" />
      <path d="M3 8.4h14M7 2.8v3.2M13 2.8v3.2" strokeLinecap="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7.2" />
      <path d="M6.6 10.2l2.4 2.4 4.4-4.9" />
    </svg>
  ),
  cup: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M5.6 3.2h8.8v4.2a4.4 4.4 0 01-8.8 0z" />
      <path d="M5.6 4.4H3.2v1.4a2.6 2.6 0 002.6 2.6M14.4 4.4h2.4v1.4a2.6 2.6 0 01-2.6 2.6" />
      <path d="M10 11.8v3M7 16.8h6" strokeLinecap="round" />
    </svg>
  ),
  xmark: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <circle cx="10" cy="10" r="7.2" />
      <path d="M7.8 7.8l4.4 4.4M12.2 7.8l-4.4 4.4" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <circle cx="9" cy="9" r="5.6" />
      <path d="M13.2 13.2l3.4 3.4" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M17.2 3.2L2.6 8.5l5.6 2.3 2.3 5.6z" />
      <path d="M8.2 10.8l3.4-3.4" strokeLinecap="round" />
    </svg>
  ),
  live: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <path d="M3.4 8.4v3.2M6.8 5.6v8.8M10 3.2v13.6M13.2 6.8v6.4M16.6 9v2" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <rect x="2.6" y="4" width="14.8" height="9.6" rx="1.4" />
      <path d="M7.4 17h5.2M10 13.6V17" strokeLinecap="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <rect x="5.8" y="2.4" width="8.4" height="15.2" rx="1.8" />
      <path d="M8.8 15.2h2.4" strokeLinecap="round" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M6.6 4.2l9.4 5.8-9.4 5.8z" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M2.8 3.5h14.4l-5.7 6.8V17l-3-1.8v-4.9z" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M14.2 3.6v12.8L7.6 13.2v-.2H6.2a2.8 2.8 0 010-5.6h1.4v-.2z" />
      <path d="M16.2 7.2a3.2 3.2 0 010 5.6" strokeLinecap="round" />
      <path d="M7.8 13.6h2l.7 3h-2z" />
    </svg>
  ),
};

/* --------------------------------------------------------------- data */

/* The app's own tab strip inside the mock — decorative, and shorter than the
   real product's so it fits one line at this width. */
const DV_NAV = [
  "Overview",
  "Leads",
  "Sessions",
  "Campaigns",
  "Funnels",
  "CTAs",
  "Forms",
  "Heatmap",
  "Performance",
  "Errors",
  "Tech Stack",
  "Meta CAPI",
];

const DV_KPIS = [
  ["users", "Total Visitors", "8,742", "128.6%", true],
  ["pulse", "Total Sessions", "10,351", "97.3%", true],
  ["userPlus", "Total Leads", "327", "45.8%", true],
  ["percent", "Conversion Rate", "3.16%", "18.7%", true],
  ["scroll", "Scroll Depth (50%)", "58.4%", "22.1%", true],
  ["tap", "CTA Clicks", "1,298", "34.2%", true],
  ["clock", "Avg Session Duration", "4m 37s", "12.6%", true],
  ["exit", "Bounce Rate", "42.7%", "8.3%", false],
  ["repeat", "Returning Visitors", "1,245", "26.3%", true],
  ["spark", "New Visitors", "7,497", "119.4%", true],
] as const;

/* Visitors, sessions and leads over the week. The axis tops out at 3K, so
   y = 120 − value / 25. */
const DV_SERIES = [
  {
    key: "visitors",
    pts: [92, 84, 74, 50, 4, 24, 60, 74, 80, 68, 52, 60, 78],
  },
  {
    key: "sessions",
    pts: [104, 99, 92, 72, 34, 50, 78, 88, 92, 84, 74, 80, 92],
  },
  {
    key: "leads",
    pts: [114, 112, 110, 105, 92, 95, 105, 108, 109, 107, 103, 105, 108],
  },
];

const DV_DEVICES = [
  ["Mobile", "61.2%", 61.2],
  ["Other", "18.7%", 18.7],
  ["Desktop", "16.8%", 16.8],
  ["Tablet", "3.3%", 3.3],
] as const;

const DV_FUNNEL = [
  ["1", "Visitors", "10,351", "100.0%", null, 100],
  ["2", "Scrolled 25%", "7,024", "67.8%", "32.2%", 67.8],
  ["3", "Scrolled 50%", "5,134", "49.6%", "26.9%", 49.6],
  ["4", "Scrolled 75%", "3,412", "32.9%", "16.7%", 32.9],
  ["5", "Clicked CTA", "1,842", "17.8%", "45.9%", 17.8],
  ["6", "Opened Form", "912", "8.8%", "50.5%", 8.8],
  ["7", "Started Form", "623", "6.0%", "31.7%", 6],
  ["8", "Submitted Form", "327", "3.2%", "52.3%", 3.2],
  ["9", "Lead Generated", "327", "3.2%", "0.0%", 3.2],
] as const;

const DV_SOURCES = [
  ["Google", "cpc", "Summer Sale Campaign", "4,215", "142", "3.37%"],
  ["Facebook", "cpc", "Lead Gen - May", "2,841", "96", "3.38%"],
  ["Instagram", "cpc", "Brand Awareness", "1,732", "46", "2.66%"],
  ["Direct", "(none)", "(direct)", "1,023", "28", "2.74%"],
  ["Google", "cpc", "Remarketing Campaign", "540", "15", "2.78%"],
];

const DV_BROWSERS = [
  ["Chrome", "54.3%", 54.3],
  ["Safari", "19.8%", 19.8],
  ["Mobile Safari", "12.6%", 12.6],
  ["Edge", "6.1%", 6.1],
  ["Firefox", "4.2%", 4.2],
  ["Others", "3.0%", 3],
] as const;

const DV_COUNTRIES = [
  ["IN", "India", "2,842", 100],
  ["US", "United States", "2,103", 74],
  ["GB", "United Kingdom", "1,024", 36],
  ["CA", "Canada", "645", 23],
  ["AU", "Australia", "536", 19],
  ["AE", "UAE", "421", 15],
  ["SG", "Singapore", "316", 11],
];

const DV_PAGES = [
  ["/", "4,215"],
  ["/services", "2,103"],
  ["/about", "1,024"],
  ["/contact", "645"],
  ["/pricing", "536"],
];

/* ---------------------------------------------------------- helpers */

const path = (pts: readonly number[]) =>
  pts.map((y, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * 300} ${y}`).join("");

/** Clicking a rail item switches the tab, so every view is handed the setter. */
type Picker = { onPick: (label: string) => void };

/** The app's own top rail, shared by every view — only the open tab differs. */
function Rail({ active, onPick }: { active: string; onPick: (label: string) => void }) {
  return (
    <div className="dv-nav">
      <span className="lg">DA</span>
      <b className="nm">Dashboard</b>
      <span className="tabs">
        {DV_NAV.map((label) => {
          const built = dashboardViews.some((v) => v.label === label);
          const cls = ["it", label === active ? "on" : "", built ? "lnk" : ""]
            .filter(Boolean)
            .join(" ");
          /* A real button for the pointer, but out of the tab order: the whole
             mock is aria-hidden, and the tab strip above it is the accessible
             way to the same views. A focusable control in here would be a stop
             on the keyboard path that a screen reader never announces. */
          return (
            <button
              type="button"
              className={cls}
              key={label}
              tabIndex={-1}
              onClick={built ? () => onPick(label) : undefined}
            >
              {label === active ? I.grid : null}
              {label}
            </button>
          );
        })}
      </span>
      <span className="rt">
        <s className="btn">
          {I.link}
          View Website
        </s>
        <s className="ic">{I.bell}</s>
        <s className="ic">{I.logout}</s>
      </span>
    </div>
  );
}

/**
 * A ring built from one circle per slice on a shared track: `pathLength=100`
 * lets each slice be sized in percent directly, offset by everything before it.
 */
function Ring({
  slices,
  total,
  label,
}: {
  slices: readonly (readonly [string, string, number])[];
  total: string;
  label: string;
}) {
  const offsets = slices.map((_, i) =>
    slices.slice(0, i).reduce((sum, [, , pct]) => sum + pct, 0),
  );

  return (
    <span className="dv-ring">
      <svg viewBox="0 0 42 42">
        {slices.map(([name, , pct], i) => (
          <circle
            cx="21"
            cy="21"
            r="15.5"
            className={`s${i}`}
            pathLength="100"
            strokeDasharray={`${pct} ${100 - pct}`}
            strokeDashoffset={-offsets[i]}
            key={name}
          />
        ))}
      </svg>
      <span className="c">
        <b>{total}</b>
        <i>{label}</i>
      </span>
    </span>
  );
}

/* ---------------------------------------------------------- the mock */

/**
 * The Overview view of the client dashboard, rebuilt from the design as CSS
 * and SVG rather than a screenshot — it stays sharp at any width and its copy
 * is editable. Hidden from assistive tech: every figure in it is a picture of
 * a product, not information about this page.
 */
function OverviewView({ onPick }: Picker) {
  return (
    <div className="dv" aria-hidden="true">
      <Rail active="Overview" onPick={onPick} />

      <div className="dv-body">
        <div className="dv-head">
          <span className="ht">
            <b>Overview</b>
            <i>Real-time performance of your landing page</i>
          </span>
          <span className="ctl">
            <s className="live">Live now</s>
            <s className="seg">
              <em>Today</em>
              <em>Yesterday</em>
              <em className="on">7D</em>
              <em>30D</em>
              <em>90D</em>
            </s>
            <s className="exp">
              {I.down}
              Export
            </s>
          </span>
        </div>

        <div className="dv-kpis">
          {DV_KPIS.map(([icon, label, value, delta, up]) => (
            <div className="dv-card dv-kpi" key={label}>
              <span className="top">
                <i className="ic">{I[icon]}</i>
                <b className="n">{label}</b>
                <em className={up ? "up" : "dn"}>
                  {up ? "↑" : "↓"} {delta}
                </em>
              </span>
              <span className="v">{value}</span>
            </div>
          ))}
        </div>

        <div className="dv-r2">
          <div className="dv-card">
            <span className="ct">
              Visitors Analytics
              <i>Visitors, sessions and leads over time</i>
            </span>
            <span className="dv-key">
              {["Visitors", "Sessions", "Leads"].map((k, i) => (
                <em key={k}>
                  <b className={`d s${i}`} />
                  {k}
                </em>
              ))}
            </span>
            <div className="dv-plot">
              <span className="ax">
                {["3K", "2.3K", "1.5K", "750", "0"].map((t, i) => (
                  <i style={{ top: `${(i / 4) * 100}%` }} key={t}>
                    {t}
                  </i>
                ))}
              </span>
              <div className="gr">
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="gl">
                  {[0, 30, 60, 90, 120].map((y) => (
                    <line x1="0" y1={y} x2="300" y2={y} key={y} />
                  ))}
                </svg>
                {DV_SERIES.map((s, i) => (
                  <svg
                    viewBox="0 0 300 120"
                    preserveAspectRatio="none"
                    className={`ln s${i}`}
                    key={s.key}
                  >
                    <path className="ar" d={`${path(s.pts)}L300 120L0 120Z`} />
                    <path className="st" d={path(s.pts)} />
                  </svg>
                ))}
                {DV_SERIES.map((s, i) =>
                  s.pts.map((y, j) =>
                    j % 2 === 0 ? (
                      <span
                        className={`dt s${i}`}
                        key={`${s.key}${j}`}
                        style={{ left: `${(j / (s.pts.length - 1)) * 100}%`, top: `${(y / 120) * 100}%` }}
                      />
                    ) : null,
                  ),
                )}
              </div>
              <span className="xax">
                {["13 May", "14 May", "15 May", "16 May", "17 May", "18 May", "19 May"].map((d) => (
                  <i key={d}>{d}</i>
                ))}
              </span>
            </div>
          </div>

          <div className="dv-card">
            <span className="ct">Device Distribution</span>
            <div className="dv-split">
              <Ring slices={DV_DEVICES} total="10,351" label="Sessions" />
              <span className="dv-legend">
                {DV_DEVICES.map(([name, pct], i) => (
                  <span key={name}>
                    <i className={`d s${i}`} />
                    <span className="n">{name}</span>
                    <b>{pct}</b>
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>

        <div className="dv-r3">
          <div className="dv-card">
            <span className="ct">
              Conversion Funnel
              <i>Visitor → lead journey</i>
            </span>
            <span className="dv-funnel">
              {DV_FUNNEL.map(([n, name, count, pct, drop, w]) => (
                <span key={name}>
                  <span className="hd">
                    <i className="n">{n}</i>
                    <b>{name}</b>
                    <em className="c">{count}</em>
                    <em className="p">{pct}</em>
                    <em className="dp">{drop ? `↓ ${drop}` : ""}</em>
                  </span>
                  <span className="tk">
                    <s style={{ width: `${w}%` }} />
                  </span>
                </span>
              ))}
            </span>
          </div>

          <div className="dv-card">
            <span className="ct">
              Traffic Sources
              <i>Where your leads come from</i>
            </span>
            <span className="dv-tbl">
              <span className="hd">
                <i>Source</i>
                <i>Medium</i>
                <i>Campaign</i>
                <i className="r">Sessions</i>
                <i className="r">Leads</i>
                <i className="r">Conv.</i>
              </span>
              {DV_SOURCES.map(([src, med, camp, sess, leads, conv], i) => (
                <span className="rw" key={`${camp}${i}`}>
                  <i className="sc">{src}</i>
                  <i>{med}</i>
                  <i>{camp}</i>
                  <i className="r">{sess}</i>
                  <i className="r">{leads}</i>
                  <i className="r cv">{conv}</i>
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="dv-r4">
          <div className="dv-card">
            <span className="ct">Browsers</span>
            <div className="dv-split">
              <Ring slices={DV_BROWSERS} total="10,351" label="Sessions" />
              <span className="dv-legend">
                {DV_BROWSERS.map(([name, pct], i) => (
                  <span key={name}>
                    <i className={`d b${i}`} />
                    <span className="n">{name}</span>
                    <b>{pct}</b>
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div className="dv-card">
            <span className="ct">Top Countries</span>
            <span className="dv-geo">
              {DV_COUNTRIES.map(([code, name, count, w]) => (
                <span key={code}>
                  <i className="cc">{code}</i>
                  <span className="n">{name}</span>
                  <i className="tk">
                    <s style={{ width: `${w}%` }} />
                  </i>
                  <b>{count}</b>
                </span>
              ))}
            </span>
          </div>

          <div className="dv-card">
            <span className="ct">Top Pages</span>
            <span className="dv-pages">
              {DV_PAGES.map(([page, hits]) => (
                <span key={page}>
                  <span className="n">{page}</span>
                  <b>{hits}</b>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


/* Six tiles over the table. The totals agree with the Overview view — a
   visitor can flip between the two tabs, so they can't disagree. */
const LV_KPIS = [
  ["users", "Total Leads", "327", null],
  ["cal", "Today", "12", null],
  ["check", "Qualified", "148", null],
  ["cup", "Won", "46", "win"],
  ["xmark", "Lost", "23", "loss"],
  ["pulse", "Conv. Rate", "3.16%", null],
] as const;

/**
 * Invented leads. The design came from a live dashboard, so the names, phone
 * numbers and record ids there were real people's — none of that belongs on a
 * public page, and none of it is reproduced here.
 */
const LV_ROWS = [
  {
    name: "Aarav Sharma",
    id: "cmld4k29a0001x7fq2ub9nzew",
    phone: "98765 43210",
    interest: "Retail",
    budget: "—",
    city: "Mumbai",
    source: "Facebook",
    sub: "facebook/paid_social · 3BHK Launch — Leads",
    device: "MOBILE",
    capi: "sent",
    created: "4d ago",
  },
  {
    name: "Neha Kulkarni",
    id: "cmld3v81m0004p2ha7cwqk5td",
    phone: "98220 11347",
    interest: "Office",
    budget: "—",
    city: "Mumbai",
    source: "Direct",
    sub: null,
    device: "DESKTOP",
    capi: "sent",
    created: "5d ago",
  },
  {
    name: "Rohan Desai",
    id: "cmlcz7t4x0002g8kd1rvme903",
    phone: "91670 88204",
    interest: "Office",
    budget: "Under ₹1 Cr",
    city: "Mumbai",
    source: "Google",
    sub: "google/cpc · Office Space — Search",
    device: "DESKTOP",
    capi: "sent",
    created: "11 Aug",
  },
  {
    name: "Priya Nair",
    id: "cmlcy0hs70007b3nz6dfwq182",
    phone: "80975 22613",
    interest: "Office",
    budget: "—",
    city: "—",
    source: "Direct",
    sub: null,
    device: "DESKTOP",
    capi: "sent",
    created: "5 Aug",
  },
  {
    name: "Site Visit Team",
    id: "cmlcxm4b90003d1qs8ptrz740",
    phone: "99304 55128",
    interest: "Office",
    budget: "—",
    city: "Mumbai",
    source: "Direct",
    sub: null,
    device: "DESKTOP",
    capi: null,
    created: "5 Aug",
  },
  {
    name: "Ishita Rao",
    id: "cmlcw8p2k0006j5tv3ynbc419",
    phone: "70214 96635",
    interest: "Both",
    budget: "—",
    city: "—",
    source: "Instagram",
    sub: "instagram/paid_social · Weekend Site Visit",
    device: "MOBILE",
    capi: null,
    created: "5 Aug",
  },
  {
    name: "Karan Mehta",
    id: "cmlcv1z6r0005h9wp4kaxu268",
    phone: "78281 90045",
    interest: "Office",
    budget: "—",
    city: "Mumbai",
    source: "Direct",
    sub: null,
    device: "DESKTOP",
    capi: "failed",
    created: "1 Aug",
  },
  {
    name: "Meera Joshi",
    id: "cmlcu6qd10008n4bx2ejft507",
    phone: "90083 20011",
    interest: "Office",
    budget: "Under ₹1 Cr",
    city: "Mumbai",
    source: "Direct",
    sub: null,
    device: "DESKTOP",
    capi: null,
    created: "1 Aug",
  },
  {
    name: "Devansh Patel",
    id: "cmlct9wf40009m2cr7uzhd613",
    phone: "96193 40772",
    interest: "Retail",
    budget: "—",
    city: "Mumbai",
    source: "yourbrand.com",
    sub: null,
    device: "DESKTOP",
    capi: null,
    created: "1 Aug",
  },
];

/**
 * The Leads view: the CRM side of the dashboard, one row per form submission.
 * Same chassis as the Overview view — the app's rail, then a header row, then
 * cards — with a filter bar and a wide table instead of charts.
 */
function LeadsView({ onPick }: Picker) {
  return (
    <div className="dv lv" aria-hidden="true">
      <Rail active="Leads" onPick={onPick} />

      <div className="dv-body">
        <div className="dv-head">
          <span className="ht">
            <b>Leads</b>
            <i>Lightweight CRM for every form submission</i>
          </span>
          <span className="ctl">
            <s className="exp">
              {I.down}
              Export
            </s>
          </span>
        </div>

        <div className="lv-kpis">
          {LV_KPIS.map(([icon, label, value, tone]) => (
            <div className="dv-card lv-kpi" key={label}>
              <span className="top">
                <i className={tone ? `ic ${tone}` : "ic"}>{I[icon]}</i>
                <b className="n">{label}</b>
              </span>
              <span className={tone ? `v ${tone}` : "v"}>{value}</span>
            </div>
          ))}
        </div>

        <div className="lv-bar">
          <span className="srch">
            {I.search}
            Search name, phone, email, city...
          </span>
          <span className="sel">
            All statuses
            <em>⌄</em>
          </span>
          <span className="sel">
            All sources
            <em>⌄</em>
          </span>
          <span className="cnt">327 leads</span>
        </div>

        <div className="dv-card lv-tblwrap">
          <span className="lv-tbl">
            <span className="hd">
              <i>Lead</i>
              <i>Phone</i>
              <i>Interest</i>
              <i>Budget</i>
              <i>City</i>
              <i>Source</i>
              <i>Device</i>
              <i>Status</i>
              <i>Meta CAPI</i>
              <i>Created</i>
            </span>
            {LV_ROWS.map((r) => (
              <span className="rw" key={r.id}>
                <i className="lv-ld">
                  <b>{r.name}</b>
                  <em>{r.id}</em>
                </i>
                <i>{r.phone}</i>
                <i>{r.interest}</i>
                <i>{r.budget}</i>
                <i>{r.city}</i>
                <i className="lv-sr">
                  <b>{r.source}</b>
                  {r.sub ? <em>{r.sub}</em> : null}
                </i>
                <i className="dv-dev">{r.device}</i>
                <i>
                  <b className="pill-new">New</b>
                </i>
                <i className="capi">
                  {r.capi === "sent" ? <b className="ok">✓ Sent</b> : null}
                  {r.capi === "failed" ? <b className="bad">✕ Failed</b> : null}
                  <b className="send">{I.send} Send</b>
                </i>
                <i className="cr">{r.created}</i>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}


/* Simplified flags — inline SVG, since emoji flags don't render on Windows. */
const SV_FLAGS: Record<string, React.ReactElement> = {
  IN: (
    <svg viewBox="0 0 16 12" className="fl">
      <rect width="16" height="4" fill="#ff9933" />
      <rect y="4" width="16" height="4" fill="#ffffff" />
      <rect y="8" width="16" height="4" fill="#138808" />
      <circle cx="8" cy="6" r="1.5" fill="none" stroke="#0a3d91" strokeWidth="0.7" />
    </svg>
  ),
  US: (
    <svg viewBox="0 0 16 12" className="fl">
      <rect width="16" height="12" fill="#ffffff" />
      {[0, 2, 4, 6, 8, 10].map((y) => (
        <rect y={y} width="16" height="1.4" fill="#b22234" key={y} />
      ))}
      <rect width="7" height="6.4" fill="#3c3b6e" />
    </svg>
  ),
  XX: (
    <svg viewBox="0 0 16 12" className="fl gl" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="8" cy="6" r="4.6" />
      <path d="M3.4 6h9.2M8 1.4c2.4 2.6 2.4 6.6 0 9.2-2.4-2.6-2.4-6.6 0-9.2z" />
    </svg>
  ),
};

const SV_KPIS = [
  ["pulse", "Total Sessions", "10,351", null],
  ["live", "Live Visitors", "8", "live"],
  ["repeat", "Returning", "1,245", null],
  ["clock", "Avg Duration", "4m 37s", null],
  ["exit", "Bounce Rate", "42.7%", null],
] as const;

/**
 * Invented sessions. The design came from a live dashboard, so the IP
 * addresses and campaign name in it were a real audience's — the addresses
 * here are from the ranges reserved for documentation (192.0.2.0/24,
 * 198.51.100.0/24, 203.0.113.0/24), which can never belong to anyone.
 */
const SV_ROWS = [
  ["IN", "Mumbai", "203.0.113.24", "win", "Windows · Chrome", "Direct", null, null, "1", "3s", "0%", null, "29m ago"],
  ["XX", "—", "—", null, "— — —", "Direct", null, null, "1", "3s", "75%", null, "1h ago"],
  ["IN", "Mumbai", "198.51.100.76", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "3s", "75%", null, "2h ago"],
  ["US", "Forest City", "192.0.2.127", null, "— — —", "Direct", null, null, "1", "5s", "0%", null, "2h ago"],
  ["US", "Social Circle", "192.0.2.184", "mob", "iOS · Mobile Safari", "Direct", null, null, "1", "25s", "0%", null, "2h ago"],
  ["US", "Ashburn", "192.0.2.19", "win", "Windows · Chrome", "Direct", null, null, "0", "0s", "0%", null, "2h ago"],
  ["IN", "Nagpur", "203.0.113.65", null, "— — —", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "20s", "75%", null, "2h ago"],
  ["XX", "—", "—", null, "— — —", "Direct", null, null, "1", "26m 32s", "100%", null, "2h ago"],
  ["IN", "Mumbai", "203.0.113.24", "win", "Windows · Chrome", "Direct", null, null, "1", "1h 50m", "0%", "Form", "4h ago"],
  ["IN", "Mumbai", "203.0.113.24", "win", "Windows · Chrome", "Direct", null, null, "1", "9s", "0%", null, "4h ago"],
  ["IN", "Supaul", "198.51.100.158", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "6s", "0%", null, "5h ago"],
  ["IN", "Pothia", "203.0.113.148", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "9s", "75%", null, "5h ago"],
  ["IN", "Noida", "198.51.100.183", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "3s", "75%", null, "6h ago"],
  ["IN", "Patna", "203.0.113.140", "mob", "Android · Instagram", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "3", "9s", "75%", null, "6h ago"],
  ["IN", "Jaipur", "198.51.100.134", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "3s", "75%", null, "7h ago"],
  ["IN", "Varanasi", "203.0.113.15", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "3s", "75%", null, "7h ago"],
  ["IN", "New Delhi", "198.51.100.220", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "1s", "0%", null, "7h ago"],
  ["IN", "Delhi", "203.0.113.19", "mob", "Android · Facebook", "Facebook", "3BHK Launch — Leads", "facebook/paid_social", "1", "39s", "100%", null, "7h ago"],
] as const;

/**
 * The Sessions view: one row per visit, with the replay control on the end.
 * The widest of the views — thirteen columns — so it sets the width the
 * frame scrolls to on a narrow screen.
 */
function SessionsView({ onPick }: Picker) {
  return (
    <div className="dv sv" aria-hidden="true">
      <Rail active="Sessions" onPick={onPick} />

      <div className="dv-body">
        <div className="dv-head">
          <span className="ht">
            <b>Sessions</b>
            <i>Every visitor session, with replay</i>
          </span>
          <span className="ctl">
            <s className="exp">
              {I.down}
              Export
            </s>
          </span>
        </div>

        <div className="sv-kpis">
          {SV_KPIS.map(([icon, label, value, tone]) => (
            <div className="dv-card lv-kpi" key={label}>
              <span className="top">
                <i className="ic">{I[icon]}</i>
                <b className="n">{label}</b>
                {tone ? <em className="lv-live">LIVE</em> : null}
              </span>
              <span className="v">{value}</span>
            </div>
          ))}
        </div>

        <div className="lv-bar">
          <span className="srch">
            {I.search}
            Search session, visitor, city, IP...
          </span>
          <span className="seg">
            {["All", "Desktop", "Mobile", "Tablet"].map((t, i) => (
              <em className={i === 0 ? "on" : undefined} key={t}>
                {t}
              </em>
            ))}
          </span>
          <span className="cnt">200 sessions</span>
        </div>

        <div className="dv-card lv-tblwrap">
          <span className="sv-tbl">
            <span className="hd">
              <i>Location</i>
              <i>IP address</i>
              <i>Device</i>
              <i>Source</i>
              <i>Campaign / UTM</i>
              <i>Params</i>
              <i className="r">Pages</i>
              <i className="r">Duration</i>
              <i className="r">Scroll</i>
              <i>Engagement</i>
              <i>Status</i>
              <i>Time</i>
              <i>Replay</i>
            </span>
            {SV_ROWS.map((r, i) => {
              const [cc, city, ip, dev, devLabel, src, camp, utm, pages, dur, scroll, eng, time] =
                r;
              return (
                <span className="rw" key={`${ip}${i}`}>
                  <i className="loc">
                    {SV_FLAGS[cc]}
                    <b>{cc === "XX" ? "" : cc}</b>
                    <em>{city}</em>
                  </i>
                  <i className="ip">{ip}</i>
                  <i className="dev">
                    {dev ? <b className="ic">{dev === "win" ? I.monitor : I.phone}</b> : null}
                    <em>{devLabel}</em>
                  </i>
                  <i>{src}</i>
                  <i className="lv-sr">
                    {camp ? (
                      <>
                        <b>{camp}</b>
                        <em>{utm}</em>
                      </>
                    ) : (
                      "—"
                    )}
                  </i>
                  <i>{camp ? <b className="prm">11 params</b> : "—"}</i>
                  <i className="r">{pages}</i>
                  <i className="r">{dur}</i>
                  <i className="r">{scroll}</i>
                  <i>{eng ? <b className="pill-form">{eng}</b> : "—"}</i>
                  <i>
                    <b className="pill-live">Live</b>
                  </i>
                  <i className="cr">{time}</i>
                  <i>
                    <b className="watch">{I.play} Watch</b>
                  </i>
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}


/**
 * The two funnels side by side. Percentages are of the first step; the drop
 * is against the step above, so both are arithmetic on the counts and move
 * with them. The totals agree with the Overview view's funnel.
 */
const FN_FUNNELS = [
  {
    key: "all",
    icon: "funnel",
    title: "All traffic",
    sub: "Every session in the window",
    badge: "327 leads",
    steps: [
      ["1", "Page View", "10,351", "100.0%", null, 100],
      ["2", "Scrolled 25%+", "7,024", "67.9%", "32%", 67.9],
      ["3", "CTA Click", "1,842", "17.8%", "74%", 17.8],
      ["4", "Form Start", "623", "6.0%", "66%", 6],
      ["5", "Lead Submit", "327", "3.2%", "48%", 3.2],
    ],
  },
  {
    key: "meta",
    icon: "megaphone",
    title: "Meta ads only",
    sub: "Sessions carrying an fbclid or Meta campaign id",
    badge: "168 leads",
    steps: [
      ["1", "Page View", "4,182", "100.0%", null, 100],
      ["2", "Scrolled 25%+", "2,986", "71.4%", "29%", 71.4],
      ["3", "CTA Click", "842", "20.1%", "72%", 20.1],
      ["4", "Form Start", "301", "7.2%", "64%", 7.2],
      ["5", "Lead Submit", "168", "4.0%", "44%", 4],
    ],
  },
] as const;

/**
 * The Funnels view: the same journey twice, once for everything and once for
 * the sessions that carry a Meta click id, so the two can be read against
 * each other.
 */
function FunnelsView({ onPick }: Picker) {
  return (
    <div className="dv fn" aria-hidden="true">
      <Rail active="Funnels" onPick={onPick} />

      <div className="dv-body">
        <div className="dv-head">
          <span className="ht">
            <b>Funnels</b>
            <i>Where visitors drop out on the way to becoming a lead</i>
          </span>
          <span className="ctl">
            <s className="seg">
              <em>7d</em>
              <em className="on">30d</em>
              <em>90d</em>
              <em>All</em>
            </s>
          </span>
        </div>

        <div className="fn-r">
          {FN_FUNNELS.map((f) => (
            <div className="dv-card fn-card" key={f.key}>
              <span className="fn-top">
                <i className="ic">{I[f.icon]}</i>
                <span className="tx">
                  <b>{f.title}</b>
                  <em>{f.sub}</em>
                </span>
                <s className="bdg">{f.badge}</s>
              </span>

              <span className="fn-steps">
                {f.steps.map(([n, name, count, pct, drop, w]) => (
                  <span key={name}>
                    <span className="hd">
                      <i className="n">{n}</i>
                      <b>{name}</b>
                      <em className="c">{count}</em>
                      <em className="p">{pct}</em>
                      <em className="dp">{drop ? `↓ ${drop}` : ""}</em>
                    </span>
                    <span className="tk">
                      <s style={{ width: `${w}%` }} />
                    </span>
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function View({ kind, onPick }: { kind: string } & Picker) {
  if (kind === "leads") return <LeadsView onPick={onPick} />;
  if (kind === "sessions") return <SessionsView onPick={onPick} />;
  if (kind === "funnels") return <FunnelsView onPick={onPick} />;
  return <OverviewView onPick={onPick} />;
}

/* -------------------------------------------------------------- section */

export default function DashboardViews() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = dashboardViews[active];

  /* The mock's own rail is a second way into the same views — the labels
     there match dashboardViews, so the label is enough to find the tab. */
  const onPick = useCallback((label: string) => {
    const i = dashboardViews.findIndex((v) => v.label === label);
    if (i >= 0) setActive(i);
  }, []);

  /* Roving tabindex, so only the selected tab is in the tab order and the
     arrow keys reach the rest. */
  function onKeyDown(e: React.KeyboardEvent) {
    const last = dashboardViews.length - 1;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="section section-alt" id="dashboard">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Your Dashboard</Eyebrow>
          <h2>The dashboard you get on day one</h2>
          <p>
            Your own login, your own data, and every view below built around the page we build for
            you. Pick a tab to see what it shows.
          </p>
        </div>

        <div
          className="dv-tabs"
          role="tablist"
          aria-label="Dashboard views"
          onKeyDown={onKeyDown}
          data-anim="fade-up"
        >
          {dashboardViews.map((item, i) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              id={`dv-tab-${item.key}`}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              aria-selected={i === active}
              aria-controls="dv-stage"
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "dv-tab on" : "dv-tab"}
              onClick={() => setActive(i)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="dv-cap" data-anim="fade-up">
          {view.body}
        </p>

        <div
          className="dv-stage"
          role="tabpanel"
          id="dv-stage"
          aria-labelledby={`dv-tab-${view.key}`}
          tabIndex={0}
          data-anim="fade-up"
        >
          {/* Re-keyed so the view remounts and its bars re-fill on change. */}
          <div className="dv-frame" key={view.key}>
            <View kind={view.view} onPick={onPick} />
          </div>
        </div>

        <p className="mock-note">Representative views — your dashboard shows your own data</p>
      </div>
    </section>
  );
}
