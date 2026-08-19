"use client";

import { useRef, useState } from "react";
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
function OverviewView() {
  return (
    <div className="dv" aria-hidden="true">
      <div className="dv-nav">
        <span className="lg">DA</span>
        <b className="nm">Dashboard</b>
        <span className="tabs">
          {DV_NAV.map((label, i) => (
            <span className={i === 0 ? "on" : undefined} key={label}>
              {i === 0 ? I.grid : null}
              {label}
            </span>
          ))}
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

function View({ kind }: { kind: string }) {
  if (kind === "overview") return <OverviewView />;
  return <OverviewView />;
}

/* -------------------------------------------------------------- section */

export default function DashboardViews() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = dashboardViews[active];

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
            <View kind={view.view} />
          </div>
        </div>

        <p className="mock-note">Representative views — your dashboard shows your own data</p>
      </div>
    </section>
  );
}
