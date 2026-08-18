"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { setupAds, setupSnippet, setupSteps } from "../lib/content";
import { Eyebrow, GoogleAdsMark, MetaMark } from "./ui";

/* -------------------------------------------------------------- mocks */

/** The small illustration beside each wizard step. */
const SU_ART: Record<string, React.ReactElement> = {
  account: (
    <span className="su-art acct">
      <i className="av" />
      <span className="ls">
        <i />
        <i className="sm" />
        <i className="xs" />
      </span>
      <b className="ok">✓</b>
    </span>
  ),
  site: (
    <span className="su-art site">
      <span className="bar">
        <i />
        <i />
        <i className="rd" />
      </span>
      <span className="fld">www.</span>
    </span>
  ),
  code: <span className="su-art glyph">&lt;/&gt;</span>,
  chart: (
    <span className="su-art">
      <svg className="grow" viewBox="0 0 46 32">
        <rect x="2" y="20" width="8" height="10" rx="2.4" fill="#34A853" opacity="0.45" />
        <rect x="13" y="15" width="8" height="15" rx="2.4" fill="#34A853" opacity="0.7" />
        <rect x="24" y="9" width="8" height="21" rx="2.4" fill="#34A853" />
        <path
          d="M5 15L16 8l6 4 11-8"
          fill="none"
          stroke="#1e9e4a"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 3.4h7v7"
          fill="none"
          stroke="#1e9e4a"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ),
};

/** Bar chart in the "Tracking Active" card. `on` marks the solid-blue bars. */
const SU_BARS = [
  { h: 38, on: false },
  { h: 78, on: true },
  { h: 24, on: false },
  { h: 54, on: false },
  { h: 34, on: true },
  { h: 68, on: false },
  { h: 50, on: false },
  { h: 96, on: true },
];

/**
 * The setup wizard, rebuilt from the reference artwork: progress rail on the
 * left, snippet card top right, and a browser with a "Tracking Active" card
 * overlapping its corner below, joined by the dashed arrow.
 *
 * Markup rather than a flat image, so it stays sharp at any width, follows
 * the site's own tokens, and the copy stays editable from content.ts. It is a
 * picture of the screen, not a working one — the Copy Code bar is a styled
 * span, not a button, so nothing here offers a control that does nothing.
 */
function SetupPanel() {
  return (
    <div className="su">
      <div className="su-side">
        <h4 className="su-h">Let&apos;s Set Up Your Project</h4>
        <div className="su-steps">
          {setupSnippet.wizard.map((s) => (
            <div className={`su-step ${s.state}`} key={s.n}>
              <span className="su-dot" aria-hidden="true">
                {s.state === "done" ? "✓" : s.n}
              </span>
              <span className="su-tx">
                <span className="su-t">{s.title}</span>
                <span className="su-b">{s.body}</span>
              </span>
              {SU_ART[s.art]}
            </div>
          ))}
        </div>
      </div>

      <div className="su-card">
        <span className="su-badge" aria-hidden="true">
          &lt;/&gt;
        </span>
        <div className="su-card-t">Add this code to your site</div>
        <p className="su-card-b">{setupSnippet.intro}</p>

        <pre className="su-code">
          <span className="cm">{setupSnippet.open}</span>
          {"\n"}
          {setupSnippet.tag}
          {"\n"}
          <span className="cm">{setupSnippet.close}</span>
        </pre>

        <span className="su-copy" aria-hidden="true">
          ⧉ Copy Code
        </span>
      </div>

      <div className="su-stack">
        {/* Dashed arrow from the snippet card down into the live card. */}
        <svg className="su-arrow" viewBox="0 0 80 144" fill="none" aria-hidden="true">
          <path
            d="M66 6C76 62 70 108 28 120"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="7 7"
            strokeLinecap="round"
          />
          <path
            d="M40 110L27 120.5L40 131"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="su-browser" aria-hidden="true">
          <div className="su-browser-bar">
            <i />
            <i />
            <i className="off" />
          </div>
          <div className="su-browser-body">
            <div className="su-thumb">
              <svg viewBox="0 0 64 48" fill="#ffffff">
                <circle cx="21" cy="17" r="5" />
                <path d="M6 40l14-17 10 12 8-8 14 13H6z" />
              </svg>
            </div>
            <div className="su-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="su-wide">
            <i />
            <i />
          </div>
        </div>

        <div className="su-live">
          <div className="su-live-h">
            <span className="ic" aria-hidden="true">
              ✓
            </span>
            <span className="t">Tracking Active</span>
          </div>
          <div className="su-bars" aria-hidden="true">
            {SU_BARS.map((b, i) => (
              <i className={b.on ? "on" : undefined} style={{ height: `${b.h}%` }} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="su-ads">
        <div className="su-connect">
          <span className="tx">
            <b>{setupAds.title}</b>
            <i>{setupAds.body}</i>
          </span>
          <span className="brands">
            <span className="br">
              <GoogleAdsMark />
              Google Ads
            </span>
            <span className="div" />
            <span className="br">
              <MetaMark />
              Meta Ads
            </span>
          </span>
        </div>

        <div className="su-accounts">
          {setupAds.accounts.map((a, i) => (
            <span className="acc" key={a.key}>
              <span className="hd">
                {a.key === "google" ? <GoogleAdsMark /> : <MetaMark />}
                <b>{a.name}</b>
                <span className="pill pill-green">Connected</span>
              </span>
              <span className="st">
                <span>
                  <i>Clicks</i>
                  <b>{a.clicks}</b>
                </span>
                <span>
                  <i>Conversions</i>
                  <b>{a.conversions}</b>
                </span>
                <svg className={i === 0 ? "spark g" : "spark"} viewBox="0 0 70 26" fill="none">
                  <path d="M2 22C9 22 11 13 17 14.5s8 6 14 2.5 10-11 15-12 12 6 20 3" />
                </svg>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Small external-link glyph used on the floating card's buttons. */
function LinkIcon() {
  return (
    <svg className="lp-i" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 2h5v5" strokeLinecap="round" />
      <path d="M14 2L7.5 8.5" strokeLinecap="round" />
      <path d="M12 9.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h3.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Chart geometry helpers, shared by both mock charts.
 *
 * The line is drawn in an SVG with `preserveAspectRatio="none"` so it stretches
 * to its box; its points are then placed as HTML dots at the same percentages.
 * A second SVG for the dots doesn't work — without `none` it scales uniformly
 * and the dots slide off the line, and with `none` they turn into ellipses.
 * Percent-positioned HTML stays round and stays on the line.
 */
const asPath = (pts: number[][]) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join("");
const asPoints = (pts: number[][], w: number, h: number) =>
  pts.map(([x, y]) => ({ left: `${(x / w) * 100}%`, top: `${(y / h) * 100}%` }));

const LP_POINTS = [
  [4, 88],
  [36, 80],
  [68, 84],
  [100, 64],
  [132, 68],
  [164, 44],
  [196, 50],
  [228, 26],
  [256, 12],
];

const LP_FEATURES = [
  {
    title: "Understand Users",
    body: "See how users interact with your site.",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <circle cx="7.5" cy="6.5" r="2.8" />
        <circle cx="14" cy="7.5" r="2.2" />
        <path d="M2 16c0-2.8 2.5-4.6 5.5-4.6S13 13.2 13 16H2z" />
        <path d="M14 11.6c2.4.2 4 1.9 4 4.4h-4.2c0-1.7-.4-3.1-1.1-4.2.4-.1.9-.2 1.3-.2z" />
      </svg>
    ),
  },
  {
    title: "Track Events",
    body: "Track every important action effortlessly.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="10" cy="10" r="7.2" />
        <circle cx="10" cy="10" r="3.4" />
        <circle cx="10" cy="10" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Make Data-Driven Decisions",
    body: "Turn analytics into growth.",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <rect x="3" y="11" width="3.2" height="6" rx="1" />
        <rect x="8.4" y="6" width="3.2" height="11" rx="1" />
        <rect x="13.8" y="9" width="3.2" height="8" rx="1" />
      </svg>
    ),
  },
];

/**
 * The finished landing page: the built page in a browser, the "page created"
 * confirmation card overlapping it, and the live URL bar underneath.
 *
 * Rebuilt from the reference artwork in markup so it stays sharp and stays
 * editable. The whole block is hidden from assistive tech — it's a picture of
 * a page, and every number and line of copy inside belongs to that picture,
 * not to this site. The accordion entry beside it carries the actual meaning.
 */
function PagePanel() {
  return (
    <div className="lp" aria-hidden="true">
      <div className="lp-browser">
        <div className="lp-bar">
          <i className="on" />
          <i />
          <i />
        </div>

        <div className="lp-page">
          <div className="lp-nav">
            <span className="lp-logo">H</span>
            <span className="lp-links">
              <b>Features</b>
              <b>Pricing</b>
              <b>Testimonials</b>
              <b>Contact</b>
            </span>
            <span className="lp-btn">Get Started</span>
          </div>

          <div className="lp-hero">
            <div className="lp-copy">
              <span className="lp-badge">Trusted by 10,000+ users</span>
              <div className="lp-h">
                Track. Analyze.
                <br />
                <em>Grow Faster.</em>
              </div>
              <p className="lp-p">
                Powerful insights to help you understand your users and grow your business.
              </p>
              <span className="lp-cta">Get Started Free →</span>
              <span className="lp-note">No credit card required</span>
            </div>

            <div className="lp-viz">
              <div className="lp-chart">
                <svg viewBox="0 0 260 104" preserveAspectRatio="none" className="lp-grid">
                  {[26, 52, 78].map((y) => (
                    <line x1="0" y1={y} x2="260" y2={y} key={y} />
                  ))}
                  {[65, 130, 195].map((x) => (
                    <line x1={x} y1="0" x2={x} y2="104" key={x} />
                  ))}
                </svg>
                <svg viewBox="0 0 260 104" preserveAspectRatio="none" className="lp-line">
                  <path className="area" d={`${asPath(LP_POINTS)}L256 104L4 104Z`} />
                  <path className="stroke" d={asPath(LP_POINTS)} />
                </svg>
                {asPoints(LP_POINTS.slice(1), 260, 104).map((p) => (
                  <span className="vd-dot" style={p} key={p.left} />
                ))}
              </div>

              <div className="lp-stat lp-float">
                <span className="l">Total Visitors</span>
                <span className="v">24,580</span>
                <span className="up">↑ 23.6%</span>
                <svg className="lp-spark" viewBox="0 0 70 30" fill="none">
                  <path d="M2 24C10 24 12 12 20 14s10 10 17 6 12-14 19-16" />
                </svg>
              </div>

              <div className="lp-row">
                <div className="lp-stat">
                  <span className="l">Page Views</span>
                  <span className="v">78,320</span>
                  <span className="up">↑ 18.7%</span>
                </div>
                <div className="lp-stat">
                  <span className="l">Events</span>
                  <span className="v">12,430</span>
                  <span className="up">↑ 15.3%</span>
                </div>
                <div className="lp-stat lp-dev">
                  <span className="l">Top Device</span>
                  <svg className="lp-donut" viewBox="0 0 42 42">
                    <circle className="t" cx="21" cy="21" r="16" />
                    {/* 62% of the 100.5 circumference, gap left at the top. */}
                    <circle
                      className="f"
                      cx="21"
                      cy="21"
                      r="16"
                      strokeDasharray="62 38"
                      pathLength="100"
                    />
                    <text x="21" y="24">
                      62%
                    </text>
                  </svg>
                  <span className="sub">Mobile</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lp-feats">
            {LP_FEATURES.map((f) => (
              <div className="lp-feat" key={f.title}>
                <span className="ic">{f.icon}</span>
                <span>
                  <span className="t">{f.title}</span>
                  <span className="b">{f.body}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lp-live">
        <span className="ic">
          <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <ellipse cx="11" cy="11" rx="3.6" ry="8" />
            <path d="M3.4 8.4h15.2M3.4 13.6h15.2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="tx">
          <span className="t">Your landing page is live:</span>
          <span className="u">https://yourdomain.addsetup.com/landing-page</span>
        </span>
        <span className="lp-open">
          Open Page <LinkIcon />
        </span>
      </div>

      <div className="lp-card">
        <span className="lp-tick">
          <svg className="sparks" viewBox="0 0 96 96" stroke="currentColor" strokeWidth="4">
            {[10, 48, 82, 128, 168, 200, 232, 300, 336].map((deg) => (
              <line
                x1="48"
                y1="14"
                x2="48"
                y2="5"
                key={deg}
                transform={`rotate(${deg} 48 48)`}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="dot">✓</span>
        </span>
        <div className="t">Landing Page Created!</div>
        <p>
          Your landing page is ready.
          <br />
          Start sharing and tracking now.
        </p>
        <span className="b1">
          <LinkIcon /> View Landing Page
        </span>
        <span className="b2">
          <LinkIcon /> Copy URL
        </span>
      </div>

      <svg className="lp-arrow" viewBox="0 0 120 92" fill="none">
        <path
          d="M4 74C34 92 88 86 100 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
        <path
          d="M90 26L100 12L110 26"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ---- icon set for the analytics dashboard mock ---- */

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.7 } as const;

const ICONS: Record<string, React.ReactElement> = {
  home: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M3 9l7-5.5L17 9v7a1 1 0 01-1 1h-3.5v-4.5h-5V17H4a1 1 0 01-1-1z" />
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
  target: (
    <svg viewBox="0 0 20 20" {...S}>
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="3.3" />
      <circle cx="10" cy="10" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  page: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M5 2.5h6l4 4V17a.5.5 0 01-.5.5h-9A.5.5 0 015 17z" />
      <path d="M11 2.5v4h4" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M2.8 3.5h14.4l-5.7 6.8V17l-3-1.8v-4.9z" />
    </svg>
  ),
  bars: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <rect x="3" y="11" width="3" height="6" rx="1" />
      <rect x="8.5" y="6" width="3" height="11" rx="1" />
      <rect x="14" y="8.5" width="3" height="8.5" rx="1" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 20 20" {...S}>
      <circle cx="10" cy="10" r="2.8" />
      <circle cx="10" cy="10" r="6.4" strokeDasharray="2.6 2.6" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 20 20" {...S}>
      <path d="M10 4.6c4.2 0 7 5.4 7 5.4s-2.8 5.4-7 5.4S3 10 3 10s2.8-5.4 7-5.4z" />
      <circle cx="10" cy="10" r="2.2" />
    </svg>
  ),
  cursor: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M5 2.6l10.4 6.2-4.3 1.3 2.1 4.6-2.1 1-2.1-4.7-3 3.3z" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <circle cx="10" cy="6.4" r="3.1" />
      <path d="M3.6 17c0-3.2 2.8-5.2 6.4-5.2s6.4 2 6.4 5.2H3.6z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M10 2.4l6.4 2.6v4.6c0 4.2-2.7 6.9-6.4 8.3-3.7-1.4-6.4-4.1-6.4-8.3V5z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 20 20" {...S}>
      <rect x="3" y="4.5" width="14" height="12.5" rx="2" />
      <path d="M3 8.4h14M7 2.8v3.2M13 2.8v3.2" strokeLinecap="round" />
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      {[
        [3, 8.5, 3],
        [6.4, 5, 10],
        [9.8, 2, 16],
        [13.2, 6, 8],
        [16.6, 8.5, 3],
      ].map(([x, y, h]) => (
        <rect x={x} y={y} width="2" height={h} rx="1" key={x} />
      ))}
    </svg>
  ),
  play: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <rect x="2.5" y="4" width="15" height="12" rx="3" />
      <path d="M8.6 7.6l4.4 2.4-4.4 2.4z" fill="#fff" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M10 2.6c3 3 4.6 5.2 4.6 8a4.6 4.6 0 11-9.2 0c0-1.4.6-2.6 1.6-3.6.3 1.2.9 1.9 1.7 2 0-2.4.4-4.4 1.3-6.4z" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M3 5.4A1.4 1.4 0 014.4 4h11.2A1.4 1.4 0 0117 5.4v7a1.4 1.4 0 01-1.4 1.4H7.6L4 16.6v-2.8A1.4 1.4 0 013 12.4z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 20 20" {...S}>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 5.8V10l3 1.8" strokeLinecap="round" />
    </svg>
  ),
  tap: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 2.8l9.6 6.8-4.3 1.1 2 4.6-2.2 1-2-4.7-3.1 3z" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <rect x="2.4" y="4" width="15.2" height="10" rx="1.6" />
      <path d="M7 17h6M10 14v3" strokeLinecap="round" />
    </svg>
  ),
  filter: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M3.4 4.4h13.2l-5.1 6.1V16l-3-1.7v-3.8z" />
    </svg>
  ),
  view: (
    <svg viewBox="0 0 20 20" {...S}>
      <path d="M10 4.6c4.2 0 7 5.4 7 5.4s-2.8 5.4-7 5.4S3 10 3 10s2.8-5.4 7-5.4z" />
      <circle cx="10" cy="10" r="2.2" />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <path d="M10 3.6v12.8M5.6 12l4.4 4.4 4.4-4.4" />
    </svg>
  ),
  start: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <path d="M10 5v10M5 10h10" />
    </svg>
  ),
  end: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <rect x="5.5" y="5.5" width="9" height="9" rx="1.6" />
    </svg>
  ),
  expand: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.4 3.4H3.4v4M12.6 3.4h4v4M16.6 12.6v4h-4M3.4 12.6v4h4" />
    </svg>
  ),
  volume: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M9.6 3.8L5.8 7H3v6h2.8l3.8 3.2z" />
      <path d="M13.2 7.4a3.8 3.8 0 010 5.2" strokeLinecap="round" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <rect x="2.6" y="4.6" width="14.8" height="10.8" rx="1.8" />
      <path d="M2.6 6.4L10 11l7.4-4.6" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13.6l4.6-4.6 3.2 3.2L17 6" />
      <path d="M12.6 6H17v4.4" />
    </svg>
  ),
  ctr: (
    <svg viewBox="0 0 20 20" {...S}>
      <circle cx="10" cy="10" r="7" />
      <path d="M7 13l6-6" strokeLinecap="round" />
      <circle cx="7.8" cy="7.8" r="1.2" />
      <circle cx="12.2" cy="12.2" r="1.2" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="14" height="14" rx="3.6" />
      <path d="M6.7 10.2l2.4 2.4 4.3-4.9" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeWidth="2.1">
      <path d="M6.2 6.2l7.6 7.6M13.8 6.2l-7.6 7.6" />
    </svg>
  ),
  help: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7" />
      <path d="M8.2 8.1a1.9 1.9 0 113 1.9c-.6.4-1.2.8-1.2 1.7" />
      <path d="M10 14.3v.2" />
    </svg>
  ),
  xcircle: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <circle cx="10" cy="10" r="7" />
      <path d="M7.8 7.8l4.4 4.4M12.2 7.8l-4.4 4.4" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.3 12.9a4.9 4.9 0 115.4 0v1.7H7.3z" />
      <path d="M8.4 17h3.2" />
    </svg>
  ),
  /* The floating card's badge: a white form with the accent-blue cross on it.
     `cut` and `cut-f` are painted in the tile's own blue by the .fm rules —
     currentColor is white here, so the knock-outs can't use it. */
  formx: (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="4.2" y="2.2" width="11.6" height="15.6" rx="1.8" fill="currentColor" />
      <path
        className="cut"
        d="M6.9 6.4h6.2M6.9 9.2h6.2M6.9 12h2.2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle className="cut-f" cx="12.3" cy="13.6" r="3.4" />
      <path
        d="M11.1 12.4l2.4 2.4M13.5 12.4l-2.4 2.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <circle cx="10" cy="10" r="7" />
      <path d="M12.1 7.6c-.4-.8-1.2-1.2-2.1-1.2-1.2 0-2 .6-2 1.6 0 2.3 4.2 1 4.2 3.4 0 1.1-.9 1.8-2.2 1.8-1 0-1.8-.4-2.2-1.3" />
      <path d="M10 5.1v9.8" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M5.4 14.2V9.4a4.6 4.6 0 019.2 0v4.8l1.2 1.6H4.2z" />
      <path d="M8.4 15.8a1.7 1.7 0 003.2 0" strokeLinecap="round" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <path d="M17.2 3.2L2.6 8.5l5.6 2.3 2.3 5.6z" />
      <path d="M8.2 10.8l3.4-3.4" strokeLinecap="round" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3.2v8.4M6.4 8.4L10 12l3.6-3.6" />
      <path d="M3.6 13.6v2.2a1 1 0 001 1h10.8a1 1 0 001-1v-2.2" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 20 20" {...S} strokeLinecap="round">
      <path d="M3 6h3.4M9.4 6H17M3 14h7.6M13.6 14H17" />
      <circle cx="8" cy="6" r="1.6" />
      <circle cx="12.2" cy="14" r="1.6" />
    </svg>
  ),
  idcard: (
    <svg viewBox="0 0 20 20" {...S} strokeLinejoin="round">
      <rect x="2.8" y="3.6" width="14.4" height="12.8" rx="2.4" />
      <circle cx="10" cy="8.6" r="1.9" />
      <path d="M6.8 14c0-1.7 1.4-2.7 3.2-2.7s3.2 1 3.2 2.7" />
    </svg>
  ),
  /* The leads badge: a horseshoe magnet drawing two visitors in. `cut` is
     painted in the tile's own colour to notch the pole tips apart. */
  magnet: (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M3.3 16.6V9.7a3.7 3.7 0 017.4 0v6.9" stroke="currentColor" strokeWidth="2.8" />
      <path className="cut" d="M3.3 14.8h7.4" strokeWidth="1.3" />
      <circle cx="16" cy="5" r="1.65" fill="currentColor" />
      <path d="M13.3 9.6c0-1.6 1.2-2.6 2.7-2.6s2.7 1 2.7 2.6z" fill="currentColor" />
      <circle cx="15.6" cy="12.2" r="1.4" fill="currentColor" />
      <path d="M13.3 16.3c0-1.4 1-2.2 2.3-2.2s2.3.8 2.3 2.2z" fill="currentColor" />
    </svg>
  ),
};

const VD_NAV = [
  ["home", "Overview"],
  ["users", "Visitors"],
  ["target", "Events"],
  ["page", "Pages"],
  ["funnel", "Funnels"],
  ["bars", "Reports"],
  ["gear", "Settings"],
];

const VD_KPIS = [
  ["users", "Total Visitors", "24,580", "23.6%"],
  ["eye", "Page Views", "78,320", "18.7%"],
  ["cursor", "Events", "12,430", "15.3%"],
  ["person", "Conversions", "1,982", "12.4%"],
];

const VD_CHANNELS = [
  ["Organic Search", "45.2%", 45.2],
  ["Direct", "24.6%", 24.6],
  ["Referral", "15.8%", 15.8],
  ["Social Media", "9.8%", 9.8],
  ["Email", "4.6%", 4.6],
] as const;

const VD_DEVICES = [
  ["Desktop", "62.3%", 62.3],
  ["Mobile", "34.1%", 34.1],
  ["Tablet", "3.6%", 3.6],
] as const;

/* X runs 0–300 in even steps so every other point lands under an axis label. */
const VD_POINTS = [
  [0, 76],
  [25, 68],
  [50, 56],
  [75, 78],
  [100, 52],
  [125, 62],
  [150, 46],
  [175, 58],
  [200, 48],
  [225, 34],
  [250, 42],
  [275, 28],
  [300, 16],
];
const VD_LINE = asPath(VD_POINTS);
const VD_AREA = `${VD_LINE}L300 120L0 120Z`;
const VD_DOTS = asPoints(VD_POINTS, 300, 120);

const VD_PAGES = [
  ["/landing-page", "12,430"],
  ["/features", "9,210"],
  ["/pricing", "8,150"],
  ["/blog/analytics-guide", "6,320"],
  ["/contact", "4,850"],
];

/** Simplified flags — inline SVG, since emoji flags don't render on Windows. */
const FLAGS: Record<string, React.ReactElement> = {
  us: (
    <svg viewBox="0 0 20 14">
      <rect width="20" height="14" fill="#fff" />
      {[0, 4, 8, 12].map((y) => (
        <rect y={y} width="20" height="2" fill="#d8232f" key={y} />
      ))}
      <rect width="9" height="8" fill="#20438f" />
    </svg>
  ),
  in: (
    <svg viewBox="0 0 20 14">
      <rect width="20" height="4.7" fill="#ff9933" />
      <rect y="4.7" width="20" height="4.6" fill="#fff" />
      <rect y="9.3" width="20" height="4.7" fill="#138808" />
      <circle cx="10" cy="7" r="1.7" fill="none" stroke="#20438f" strokeWidth="0.9" />
    </svg>
  ),
  gb: (
    <svg viewBox="0 0 20 14">
      <rect width="20" height="14" fill="#20438f" />
      <path d="M0 0l20 14M20 0L0 14" stroke="#fff" strokeWidth="2.6" />
      <path d="M10 0v14M0 7h20" stroke="#fff" strokeWidth="4" />
      <path d="M10 0v14M0 7h20" stroke="#d8232f" strokeWidth="2.2" />
    </svg>
  ),
  ca: (
    <svg viewBox="0 0 20 14">
      <rect width="20" height="14" fill="#fff" />
      <rect width="5" height="14" fill="#d8232f" />
      <rect x="15" width="5" height="14" fill="#d8232f" />
      <path d="M10 3.4l1.5 3.2 2-.7-1 2.6 2 .6-2.6 1.4.4 1.5-2.3-1-2.3 1 .4-1.5L5.5 9l2-.6-1-2.6 2 .7z" fill="#d8232f" />
    </svg>
  ),
  au: (
    <svg viewBox="0 0 20 14">
      <rect width="20" height="14" fill="#20438f" />
      <rect width="9" height="7" fill="#16306b" />
      <path d="M0 0l9 7M9 0L0 7" stroke="#fff" strokeWidth="1.4" />
      <path d="M4.5 0v7M0 3.5h9" stroke="#fff" strokeWidth="2" />
      <path d="M4.5 0v7M0 3.5h9" stroke="#d8232f" strokeWidth="1" />
      {[
        [14, 4],
        [16.5, 8],
        [12.5, 10.5],
        [17.5, 11.8],
      ].map(([cx, cy]) => (
        <circle cx={cx} cy={cy} r="0.9" fill="#fff" key={cx} />
      ))}
    </svg>
  ),
};

const VD_LOCATIONS = [
  ["us", "United States", "32.6%"],
  ["in", "India", "18.7%"],
  ["gb", "United Kingdom", "8.9%"],
  ["ca", "Canada", "6.4%"],
  ["au", "Australia", "5.1%"],
];

const VD_CHECKS = [
  ["users", "Visitors Tracked"],
  ["eye", "Page Views Recorded"],
  ["target", "Events Captured"],
  ["funnel", "Conversions Measured"],
];

/**
 * Donut built from one circle per slice on a shared track: `pathLength=100`
 * lets each slice be sized in percent directly, offset by everything before
 * it. Offsets are summed up front rather than accumulated while mapping.
 */
function Donut({
  slices,
  total,
  label = "Total",
}: {
  slices: readonly (readonly [string, string, number])[];
  total: string;
  label?: string;
}) {
  const offsets = slices.map((_, i) =>
    slices.slice(0, i).reduce((sum, [, , pct]) => sum + pct, 0),
  );

  return (
    <div className="vd-donut">
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
    </div>
  );
}

/**
 * The analytics dashboard: the app in a browser, the "visitor data tracked"
 * confirmation card overlapping its corner, and the dashed arrow between.
 *
 * Rebuilt from the reference artwork. Hidden from assistive tech for the same
 * reason as the page mock — every figure in it belongs to the picture.
 */
function VisitorsPanel() {
  return (
    <div className="vd" aria-hidden="true">
      <div className="vd-app">
        <div className="lp-bar">
          <i className="on" />
          <i />
          <i />
        </div>

        <div className="vd-body">
          <aside className="vd-side">
            <span className="lp-logo">H</span>
            {VD_NAV.map(([icon, label], i) => (
              <span className={i === 0 ? "vd-nav on" : "vd-nav"} key={label}>
                {ICONS[icon]}
                <span className="n">{label}</span>
              </span>
            ))}
          </aside>

          <main className="vd-main">
            <div className="vd-head">
              <span className="h">Analytics Overview</span>
              <span className="vd-date">
                {ICONS.calendar}
                May 12 – May 18, 2024
                <em>⌄</em>
              </span>
            </div>

            <div className="vd-kpis">
              {VD_KPIS.map(([icon, label, value, delta]) => (
                <div className="vd-card vd-kpi" key={label}>
                  <span className="top">
                    <span className="ic">{ICONS[icon]}</span>
                    {label}
                  </span>
                  <span className="mid">
                    <b>{value}</b>
                    <svg className="spark" viewBox="0 0 60 22" fill="none">
                      <path d="M2 17C8 17 9 8 15 9.5s8 8 14 4.5 10-11 15-12" />
                    </svg>
                  </span>
                  <span className="dl">
                    <em>↑ {delta}</em> vs May 5 – May 11
                  </span>
                </div>
              ))}
            </div>

            <div className="vd-r2">
              <div className="vd-card">
                <span className="ct">Visitors Over Time</span>
                <div className="vd-plot">
                  {/* Labels sit on their gridlines rather than being spread by
                      the flex box, so 0 lands on the baseline exactly. */}
                  <span className="ax">
                    {["6K", "4K", "2K", "0"].map((t, i) => (
                      <i style={{ top: `${(i / 3) * 100}%` }} key={t}>
                        {t}
                      </i>
                    ))}
                  </span>

                  <div className="vd-graph">
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="vd-gl">
                      {[0, 40, 80].map((y) => (
                        <line x1="0" y1={y} x2="300" y2={y} key={y} />
                      ))}
                    </svg>
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="lp-line">
                      <path className="area" d={VD_AREA} />
                      <path className="stroke" d={VD_LINE} />
                    </svg>
                    {VD_DOTS.map((p) => (
                      <span className="vd-dot" style={p} key={p.left} />
                    ))}
                    <span className="vd-tip">
                      <i>May 15, 2024</i>
                      <b>
                        <em /> 4,250 <s>Visitors</s>
                      </b>
                    </span>
                  </div>

                  <span className="vd-xax">
                    {["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"].map(
                      (d) => (
                        <i key={d}>{d}</i>
                      ),
                    )}
                  </span>
                </div>
              </div>

              <div className="vd-card">
                <span className="ct">Top Channels</span>
                <div className="vd-split">
                  <Donut slices={VD_CHANNELS} total="24,580" />
                  <span className="vd-legend">
                    {VD_CHANNELS.map(([name, pct], i) => (
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

            <div className="vd-r3">
              <div className="vd-card">
                <span className="ct">
                  Top Pages <em>Page Views</em>
                </span>
                <span className="vd-rows">
                  {VD_PAGES.map(([p, v]) => (
                    <span key={p}>
                      <span className="n">{p}</span>
                      <b>{v}</b>
                    </span>
                  ))}
                </span>
              </div>

              <div className="vd-card">
                <span className="ct">Device Breakdown</span>
                <div className="vd-split">
                  <Donut slices={VD_DEVICES} total="24,580" />
                  <span className="vd-legend">
                    {VD_DEVICES.map(([name, pct], i) => (
                      <span key={name}>
                        <i className={`d s${i}`} />
                        <span className="n">{name}</span>
                        <b>{pct}</b>
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <div className="vd-card">
                <span className="ct">Top Locations</span>
                <div className="vd-split">
                  <svg className="vd-map" viewBox="0 0 100 50">
                    {[
                      "M8 9L27 6L31 17L22 23L13 18Z",
                      "M24 27L31 25L33 35L27 43L23 34Z",
                      "M44 8L55 7L57 14L48 17Z",
                      "M46 19L59 18L58 31L52 41L46 30Z",
                      "M61 5L87 7L91 17L74 25L62 18Z",
                      "M80 33L91 32L93 39L83 41Z",
                    ].map((d) => (
                      <path d={d} key={d} />
                    ))}
                  </svg>
                  <span className="vd-rows flags">
                    {VD_LOCATIONS.map(([code, name, pct]) => (
                      <span key={code}>
                        <i className="fl">{FLAGS[code]}</i>
                        <span className="n">{name}</span>
                        <b>{pct}</b>
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="vd-status">
              <span className="ic">{ICONS.shield}</span>
              <span className="tx">
                <b>Tracking is Active</b>
                <i>All systems are tracking data correctly.</i>
              </span>
              <span className="pill pill-green">● Live</span>
              <span className="sep" />
              <span className="last">
                <i>Last Data Received</i>
                <b>Just now</b>
              </span>
              <span className="ic soft">{ICONS.wave}</span>
            </div>
          </main>
        </div>
      </div>

      <div className="vd-float">
        <span className="lp-tick">
          <svg className="sparks" viewBox="0 0 96 96" stroke="currentColor" strokeWidth="4">
            {[10, 48, 82, 128, 168, 200, 232, 300, 336].map((deg) => (
              <line
                x1="48"
                y1="14"
                x2="48"
                y2="5"
                key={deg}
                transform={`rotate(${deg} 48 48)`}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="dot">{ICONS.bars}</span>
        </span>

        <div className="t">Visitor Data Tracked!</div>
        <p>We&apos;re capturing important user interactions and turning data into insights.</p>

        <span className="vd-checks">
          {VD_CHECKS.map(([icon, label]) => (
            <span key={label}>
              <i className="ic">{ICONS[icon]}</i>
              {label}
              <b>✓</b>
            </span>
          ))}
        </span>

        <span className="b1">
          <LinkIcon /> View Full Analytics
        </span>
      </div>

      <svg className="vd-arrow" viewBox="0 0 130 92" fill="none">
        <path
          d="M4 78C36 96 96 88 110 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
        <path
          d="M100 26L110 12L120 26"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const SR_NAV = [
  ["home", "Overview"],
  ["users", "Visitors"],
  ["play", "Session Replay"],
  ["flame", "Heatmaps"],
  ["target", "Events"],
  ["bars", "Funnels"],
  ["chat", "Goals"],
  ["bars", "Reports"],
  ["gear", "Settings"],
];

const SR_KPIS = [
  ["users", "Total Sessions", "1,248", "18.7%"],
  ["play", "Sessions Watched", "890", "22.4%"],
  ["clock", "Avg. Watch Time", "04:32", "14.6%"],
  ["tap", "Interactions", "3,562", "16.3%"],
];

const SR_EVENTS = [
  ["00:00", "start", "Session started"],
  ["00:05", "view", "Viewed /landing-page"],
  ["00:12", "tap", "Clicked “Get Started”"],
  ["00:45", "scroll", "Scrolled to section"],
  ["01:18", "view", "Viewed /features"],
  ["02:03", "tap", "Clicked “Pricing”"],
  ["02:45", "scroll", "Scrolled to bottom"],
  ["03:10", "tap", "Clicked “Get Started”"],
  ["04:32", "end", "Session ended"],
];

const SR_INFO = [
  ["Device", "Desktop"],
  ["Browser", "Chrome 124.0"],
  ["OS", "Windows 11"],
  ["Location", "United States"],
  ["Referrer", "google.com"],
  ["Landing Page", "/landing-page"],
];

const SR_RECENT = [
  ["#82473", "us", "United States", "5", "04:32", "May 15, 11:42 AM"],
  ["#82472", "gb", "United Kingdom", "3", "03:18", "May 15, 10:21 AM"],
  ["#82471", "ca", "Canada", "7", "06:45", "May 15, 09:47 AM"],
];

const SR_ENTRY = [
  ["/landing-page", "46.2%", 100],
  ["/features", "24.1%", 52],
  ["/pricing", "15.7%", 34],
  ["/blog", "8.6%", 19],
  ["/contact", "5.4%", 12],
];

const SR_CHECKS = [
  "Sessions Recorded",
  "User Interactions Captured",
  "Clicks & Scrolls Tracked",
  "Complete Journey Replay",
  "Device & Browser Info",
];

/** Markers on the scrubber, coloured by interaction type. */
const SR_MARKS = [
  [11, "click"],
  [21, "click"],
  [34, "scroll"],
  [52, "input"],
  [56, "scroll"],
  [64, "drop"],
  [74, "click"],
];

/**
 * The session replay screen: the player and its event log, the "video
 * tracked" card beside it, and the dashed arrow between them.
 *
 * Rebuilt from the reference artwork. Hidden from assistive tech — the whole
 * thing is a picture, and the accordion entry carries the real meaning. Text
 * inside the replay viewport is deliberately tiny: it's a recording of a page
 * shown at reduced scale, which is what a replay actually looks like.
 */
function ReplayPanel() {
  return (
    <div className="sr" aria-hidden="true">
      <div className="sr-app">
        <div className="sr-bar">
          <i className="r" />
          <i className="y" />
          <i className="g" />
        </div>

        <div className="sr-body">
          <aside className="sr-side">
            <span className="lp-logo">H</span>
            {SR_NAV.map(([icon, label], i) => (
              <span className={i === 2 ? "vd-nav on" : "vd-nav"} key={label}>
                {ICONS[icon]}
                <span className="n">{label}</span>
              </span>
            ))}

            <div className="sr-track">
              <span className="th">
                Tracking Active
                <span className="pill pill-green">● Live</span>
              </span>
              <svg className="spark" viewBox="0 0 80 26" fill="none">
                <path d="M2 21C10 21 12 12 19 13s9 7 15 3 10-11 17-12 12 6 19 4" />
              </svg>
              <span className="tl">Recording Visitors</span>
              <span className="tn">32</span>
              <span className="ts">Now on your site</span>
              <span className="avs">
                {["A", "R", "K", "P"].map((a) => (
                  <i key={a}>{a}</i>
                ))}
                <b>+28</b>
              </span>
            </div>
          </aside>

          <main className="sr-main">
            <div className="sr-head">
              <span className="ht">
                <b>Session Replay</b>
                <i>Watch how real visitors interact with your website</i>
              </span>
              <span className="vd-date">
                {ICONS.calendar}
                May 12 – May 18, 2024
                <em>⌄</em>
              </span>
              <span className="vd-date">
                {ICONS.filter}
                Filters
              </span>
            </div>

            <div className="vd-kpis">
              {SR_KPIS.map(([icon, label, value, delta]) => (
                <div className="vd-card vd-kpi" key={label}>
                  <span className="top">
                    <span className="ic">{ICONS[icon]}</span>
                    {label}
                  </span>
                  <span className="mid">
                    <b>{value}</b>
                    <svg className="spark" viewBox="0 0 60 22" fill="none">
                      <path d="M2 17C8 17 9 8 15 9.5s8 8 14 4.5 10-11 15-12" />
                    </svg>
                  </span>
                  <span className="dl">
                    <em>↑ {delta}</em> vs May 5 – May 11
                  </span>
                </div>
              ))}
            </div>

            <div className="sr-mid">
              <div className="vd-card sr-player">
                <span className="ph">
                  <i className="mo">{ICONS.monitor}</i>
                  <b>Session #82473</b>
                  <em>May 15, 2024 • 11:42 AM • Chrome • Windows • United States</em>
                  <i className="fl">{FLAGS.us}</i>
                </span>

                <div className="sr-view">
                  <div className="sr-pnav">
                    <span className="lg">▽ YOUR LOGO</span>
                    <span className="lk">
                      <i>Home</i>
                      <i>Features</i>
                      <i>Pricing</i>
                      <i>Resources</i>
                    </span>
                    <span className="gs">Get Started</span>
                  </div>

                  <div className="sr-phero">
                    <div className="sr-pcopy">
                      <span className="h">
                        Grow your business
                        <br />
                        faster with <em>analytics</em>
                      </span>
                      <span className="p">
                        Powerful insights to help you make better decisions and grow.
                      </span>
                      <span className="b">Get Started Free</span>
                      <span className="cur">
                        <i />
                        <svg viewBox="0 0 20 20">
                          <path d="M4 2.4l12 7.4-5 1.5 2.5 5.4-2.4 1.1-2.5-5.5-4.6 3.7z" />
                        </svg>
                      </span>
                    </div>

                    <div className="sr-pviz">
                      <div className="sr-pcard rev">
                        <span className="l">Total Revenue</span>
                        <span className="v">$24,540</span>
                        <span className="u">↑ 18.6%</span>
                        <div className="ch">
                          <svg viewBox="0 0 200 70" preserveAspectRatio="none">
                            <path
                              className="stroke"
                              d={asPath([
                                [4, 58],
                                [32, 46],
                                [60, 52],
                                [88, 34],
                                [116, 40],
                                [144, 20],
                                [172, 26],
                                [196, 8],
                              ])}
                            />
                          </svg>
                          {asPoints(
                            [
                              [32, 46],
                              [60, 52],
                              [88, 34],
                              [116, 40],
                              [144, 20],
                              [172, 26],
                              [196, 8],
                            ],
                            200,
                            70,
                          ).map((p) => (
                            <span className="pt" style={p} key={p.left} />
                          ))}
                        </div>
                      </div>

                      <div className="sr-prow">
                        <div className="sr-pcard">
                          <span className="l">New Customers</span>
                          <span className="v">1,245</span>
                          <span className="u">↑ 16.3%</span>
                        </div>
                        <div className="sr-pcard mid">
                          <span className="l">Conversion Rate</span>
                          <svg className="dn" viewBox="0 0 42 42">
                            <circle className="t" cx="21" cy="21" r="16" />
                            <circle
                              className="f"
                              cx="21"
                              cy="21"
                              r="16"
                              pathLength="100"
                              strokeDasharray="76 24"
                            />
                            <text x="21" y="24.5">
                              7.62%
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sr-ctrl">
                  <i className="pl">▶</i>
                  <i>⟲</i>
                  <i>⟳</i>
                  <i className="sp">1x</i>
                  <span className="tk">
                    <span className="fill" />
                    {SR_MARKS.map(([left, kind]) => (
                      <b className={`m ${kind}`} style={{ left: `${left}%` }} key={`${left}`} />
                    ))}
                  </span>
                  <span className="tm">01:24 / 04:32</span>
                  <i className="sv">{ICONS.expand}</i>
                  <i className="sv">{ICONS.volume}</i>
                </div>

                <span className="sr-leg">
                  {[
                    ["click", "Click"],
                    ["scroll", "Scroll"],
                    ["drop", "Drop-off"],
                    ["input", "Input"],
                  ].map(([kind, label]) => (
                    <i key={kind}>
                      <b className={kind} />
                      {label}
                    </i>
                  ))}
                </span>
              </div>

              <div className="sr-col">
                <div className="vd-card">
                  <span className="ct">Session Events</span>
                  <span className="sr-ev">
                    {SR_EVENTS.map(([time, kind, label]) => (
                      <span key={`${time}${label}`}>
                        <i className="tm">{time}</i>
                        <i className={`ic ${kind}`}>{ICONS[kind] ?? ""}</i>
                        <span className="n">{label}</span>
                      </span>
                    ))}
                  </span>
                </div>

                <div className="vd-card">
                  <span className="ct">Session Info</span>
                  <span className="sr-inf">
                    {SR_INFO.map(([l, v]) => (
                      <span key={l}>
                        <i>{l}</i>
                        <b>{v}</b>
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="sr-bot">
              <div className="vd-card">
                <span className="ct">Recent Sessions</span>
                <span className="sr-tab">
                  <span className="hd">
                    <i>Visitor</i>
                    <i>Location</i>
                    <i>Pages</i>
                    <i>Duration</i>
                    <i>Started</i>
                    <i>Actions</i>
                  </span>
                  {SR_RECENT.map(([id, code, place, pages, dur, started]) => (
                    <span className="rw" key={id}>
                      <i className="id">{id}</i>
                      <i className="lo">
                        <b className="fl">{FLAGS[code]}</b>
                        <b className="n">{place}</b>
                      </i>
                      <i>{pages}</i>
                      <i>{dur}</i>
                      <i className="st">{started}</i>
                      <i className="ac">
                        <b className="pl">▶</b>⋮
                      </i>
                    </span>
                  ))}
                </span>
              </div>

              <div className="vd-card">
                <span className="ct">Top Entry Pages</span>
                <span className="sr-entry">
                  {SR_ENTRY.map(([page, pct, w]) => (
                    <span key={page}>
                      <i className="n">{page}</i>
                      <i className="tk">
                        <b style={{ width: `${w}%` }} />
                      </i>
                      <i className="v">{pct}</i>
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="sr-float">
        <span className="lp-tick">
          <svg className="sparks" viewBox="0 0 96 96" stroke="currentColor" strokeWidth="4">
            {[10, 48, 82, 128, 168, 200, 232, 300, 336].map((deg) => (
              <line
                x1="48"
                y1="14"
                x2="48"
                y2="5"
                key={deg}
                transform={`rotate(${deg} 48 48)`}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="dot">▶</span>
        </span>

        <div className="t">Visitor Video Tracked!</div>
        <p>Watch real user sessions to see exactly how visitors interact with your site.</p>

        <span className="vd-checks">
          {SR_CHECKS.map((label) => (
            <span key={label}>
              <i className="ic">{ICONS.play}</i>
              <span className="n">{label}</span>
              <b>✓</b>
            </span>
          ))}
        </span>

        <span className="b1">
          <i className="pl">▶</i> Watch Sessions
        </span>
      </div>

      <svg className="sr-arrow" viewBox="0 0 140 92" fill="none">
        <path
          d="M4 20C22 82 84 88 122 62"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
        <path
          d="M110 54L123 61L112 71"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const CT_NAV = [
  ["home", "Overview"],
  ["users", "Visitors"],
  ["target", "Events"],
  ["tap", "CTA Clicks"],
  ["play", "Session Replay"],
  ["flame", "Heatmaps"],
  ["bars", "Reports"],
  ["gear", "Settings"],
];

const CT_KPIS = [
  ["tap", "Total CTA Clicks", "3,862", "22.7%"],
  ["target", "Unique Clicks", "2,541", "18.4%"],
  ["ctr", "CTR (Click Through Rate)", "8.62%", "15.3%"],
  ["tap", "Clicks to Conversions", "1,248", "20.1%"],
];

const CT_POINTS = [
  [0, 84],
  [25, 71],
  [50, 51],
  [75, 73],
  [100, 82],
  [125, 66],
  [150, 49],
  [175, 74],
  [200, 86],
  [225, 60],
  [250, 42],
  [275, 35],
  [300, 17],
];
const CT_LINE = asPath(CT_POINTS);
const CT_AREA = `${CT_LINE}L300 120L0 120Z`;
const CT_DOTS = asPoints(CT_POINTS, 300, 120);

const CT_DEVICES = [
  ["Desktop", "58.3%", 58.3],
  ["Mobile", "35.7%", 35.7],
  ["Tablet", "6.0%", 6],
] as const;

const CT_ELEMENTS = [
  ["tap", "Get Started Free", "/landing-page", "1,248", "842", "11.3%", 100],
  ["monitor", "Book a Demo", "/features", "862", "563", "9.2%", 68],
  ["mail", "Contact Us", "/contact", "568", "392", "6.7%", 50],
  ["mail", "Learn More", "/pricing", "456", "311", "5.1%", 38],
  ["monitor", "See Plans", "/pricing", "386", "261", "4.3%", 32],
];

const CT_PAGES = [
  ["/landing-page", "1,682", "10.8%", 100],
  ["/features", "856", "8.4%", 52],
  ["/pricing", "644", "7.1%", 40],
  ["/blog/analytics-guide", "356", "5.6%", 24],
  ["/contact", "324", "6.2%", 22],
];

const CT_CHECKS = [
  ["mail", "CTA Clicks Tracked"],
  ["target", "Button Interactions Captured"],
  ["clock", "Link Clicks Recorded"],
  ["eye", "Form Submissions Tracked"],
];

/** Sparkline with the endpoint dot the CTA cards carry in the artwork. */
function Spark() {
  return (
    <svg className="spark" viewBox="0 0 48 22" fill="none">
      <path d="M2 17C8 17 9 8 15 9.5s8 8 14 4.5 10-11 15-12" />
      <circle cx="44" cy="2" r="2.6" />
    </svg>
  );
}

/**
 * The CTA clicks dashboard. Shares the app chassis with the analytics tab —
 * same `.vd-*` frame, sidebar, KPI cards, donut and status bar — with its own
 * two tables. Hidden from assistive tech like the other mocks.
 */
function CtaPanel() {
  // `vd` supplies the shared app frame; `cta` carries this tab's own bits.
  // Not `ct` — that's already the card-title class used inside .vd-card.
  return (
    <div className="vd cta" aria-hidden="true">
      <div className="vd-app">
        <div className="lp-bar">
          <i className="on" />
          <i />
          <i />
        </div>

        <div className="vd-body">
          <aside className="vd-side">
            <span className="lp-logo">H</span>
            {CT_NAV.map(([icon, label], i) => (
              <span className={i === 3 ? "vd-nav on" : "vd-nav"} key={label}>
                {ICONS[icon]}
                <span className="n">{label}</span>
              </span>
            ))}
          </aside>

          <main className="vd-main">
            <div className="vd-head">
              <span className="ht">
                <b>CTA Clicks Overview</b>
                <i>Track and analyze all call-to-action clicks on your site</i>
              </span>
              <span className="vd-date">
                {ICONS.calendar}
                May 12 – May 18, 2024
                <em>⌄</em>
              </span>
              <span className="vd-date">
                {ICONS.filter}
                Filters
              </span>
            </div>

            <div className="vd-kpis">
              {CT_KPIS.map(([icon, label, value, delta]) => (
                <div className="vd-card vd-kpi" key={label}>
                  <span className="top">
                    <span className="ic">{ICONS[icon]}</span>
                    <span className="n">{label}</span>
                  </span>
                  <span className="mid">
                    <b>{value}</b>
                    <Spark />
                  </span>
                  <span className="dl">
                    <em>↑ {delta}</em> vs May 5 – May 11
                  </span>
                </div>
              ))}
            </div>

            <div className="vd-r2">
              <div className="vd-card">
                <span className="ct">
                  CTA Clicks Over Time
                  <em className="sel">
                    Clicks <b>⌄</b>
                  </em>
                </span>
                <div className="vd-plot">
                  <span className="ax">
                    {["2K", "1.5K", "1K", "500", "0"].map((t, i) => (
                      <i style={{ top: `${(i / 4) * 100}%` }} key={t}>
                        {t}
                      </i>
                    ))}
                  </span>
                  <div className="vd-graph">
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="vd-gl">
                      {[0, 30, 60, 90].map((y) => (
                        <line x1="0" y1={y} x2="300" y2={y} key={y} />
                      ))}
                    </svg>
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="lp-line">
                      <path className="area" d={CT_AREA} />
                      <path className="stroke" d={CT_LINE} />
                    </svg>
                    {CT_DOTS.map((p) => (
                      <span className="vd-dot" style={p} key={p.left} />
                    ))}
                    <span className="vd-tip">
                      <i>May 16, 2024</i>
                      <b>
                        <em /> 1,275 <s>Clicks</s>
                      </b>
                    </span>
                  </div>
                  <span className="vd-xax">
                    {["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"].map(
                      (d) => (
                        <i key={d}>{d}</i>
                      ),
                    )}
                  </span>
                </div>
              </div>

              <div className="vd-card">
                <span className="ct">Clicks by Device</span>
                <div className="vd-split">
                  <Donut slices={CT_DEVICES} total="3,862" />
                  <span className="vd-legend">
                    {CT_DEVICES.map(([name, pct], i) => (
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

            <div className="ct-r3">
              <div className="vd-card">
                <span className="ct">Top CTA Elements</span>
                <span className="ct-tab el">
                  <span className="hd">
                    <i>CTA Element</i>
                    <i>Clicks</i>
                    <i>Unique Clicks</i>
                    <i>CTR</i>
                  </span>
                  {CT_ELEMENTS.map(([icon, name, path, clicks, uniq, ctr, w]) => (
                    <span className="rw" key={`${name}${path}`}>
                      <i className="el">
                        <b className="ic">{ICONS[icon as string]}</b>
                        <b className="tx">
                          <s>{name}</s>
                          <u>{path}</u>
                        </b>
                      </i>
                      <i>{clicks}</i>
                      <i>{uniq}</i>
                      <i className="ctr">
                        <b className="v">{ctr}</b>
                        <b className="tk">
                          <s style={{ width: `${w}%` }} />
                        </b>
                      </i>
                    </span>
                  ))}
                </span>
                <span className="ct-more">View all CTA elements →</span>
              </div>

              <div className="vd-card">
                <span className="ct">Top Pages by CTA Clicks</span>
                <span className="ct-tab pg">
                  <span className="hd">
                    <i>Page</i>
                    <i>Clicks</i>
                    <i>CTR</i>
                    <i />
                  </span>
                  {CT_PAGES.map(([page, clicks, ctr, w]) => (
                    <span className="rw" key={page}>
                      <i className="pg">{page}</i>
                      <i>{clicks}</i>
                      <i className="tk">
                        <b style={{ width: `${w}%` }} />
                      </i>
                      <i className="v">{ctr}</i>
                    </span>
                  ))}
                </span>
                <span className="ct-more">View all pages →</span>
              </div>
            </div>

            <div className="vd-status">
              <span className="ic">{ICONS.trend}</span>
              <span className="tx">
                <b>
                  Tracking Active <span className="pill pill-green">● Live</span>
                </b>
                <i>We&apos;re capturing CTA clicks in real-time.</i>
              </span>
              <span className="sep" />
              <span className="last">
                <i>Last CTA Click Received</i>
                <b>Just now</b>
              </span>
              <span className="ic soft">{ICONS.target}</span>
            </div>
          </main>
        </div>
      </div>

      <div className="vd-float">
        <span className="lp-tick">
          <svg className="sparks" viewBox="0 0 96 96" stroke="currentColor" strokeWidth="4">
            {[10, 48, 82, 128, 168, 200, 232, 300, 336].map((deg) => (
              <line
                x1="48"
                y1="14"
                x2="48"
                y2="5"
                key={deg}
                transform={`rotate(${deg} 48 48)`}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="dot">{ICONS.tap}</span>
        </span>

        <div className="t">CTA Clicks Captured!</div>
        <p>We&apos;re capturing every important CTA click so you never miss an opportunity.</p>

        <span className="vd-checks">
          {CT_CHECKS.map(([icon, label]) => (
            <span key={label}>
              <i className="ic">{ICONS[icon]}</i>
              <span className="n">{label}</span>
              <b>✓</b>
            </span>
          ))}
        </span>

        <span className="b1">
          <LinkIcon /> View CTA Analytics
        </span>
      </div>

      <svg className="vd-arrow" viewBox="0 0 130 92" fill="none">
        <path
          d="M4 78C36 96 96 88 110 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
        <path
          d="M100 26L110 12L120 26"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const FM_NAV = [
  ["home", "Overview"],
  ["users", "Visitors"],
  ["target", "Events"],
  ["page", "Forms"],
  ["play", "Recordings"],
  ["funnel", "Funnels"],
  ["bars", "Reports"],
  ["gear", "Settings"],
];

/* The last two rise as well, but a rise in abandonment is bad news — hence
   the tone flag rather than colouring every delta green. */
const FM_KPIS = [
  ["page", "Total Forms", "28", "12.5%", "good"],
  ["check", "Submitted Forms", "18", "18.6%", "good"],
  ["x", "Abandoned Forms", "10", "25.0%", "bad"],
  ["trend", "Abandonment Rate", "35.7%", "6.7%", "bad"],
];

/* Abandonments per day. The axis tops out at 10, so y = 120 − 12 × value. */
const FM_POINTS = [
  [0, 72],
  [25, 64.8],
  [50, 45.6],
  [75, 60],
  [100, 75.6],
  [125, 67.2],
  [150, 58.8],
  [175, 54],
  [200, 54],
  [225, 63.6],
  [250, 44.4],
  [275, 28.8],
  [300, 9.6],
];
const FM_LINE = asPath(FM_POINTS);
const FM_AREA = `${FM_LINE}L300 120L0 120Z`;
const FM_DOTS = asPoints(FM_POINTS, 300, 120);

const FM_FORMS = [
  ["Contact Form", "40% (4)", 40],
  ["Lead Generation Form", "30% (3)", 30],
  ["Newsletter Signup", "20% (2)", 20],
  ["Request a Quote", "10% (1)", 10],
] as const;

const FM_TABLE = [
  ["Contact Form", "4", "44.4%"],
  ["Lead Generation Form", "3", "37.5%"],
  ["Newsletter Signup", "2", "28.6%"],
  ["Request a Quote", "1", "20.0%"],
];

const FM_REASONS = [
  ["clock", "Left on Field", "Users left after filling some fields.", "60% (6)"],
  ["help", "Validation Errors", "Users faced errors and didn't submit.", "20% (2)"],
  ["xcircle", "Closed or Navigated Away", "Users closed the form or left the page.", "20% (2)"],
];

const FM_CHECKS = [
  ["page", "Abandoned Forms Tracked"],
  ["users", "User Interactions Captured"],
  ["clock", "Drop-off Points Identified"],
  ["target", "Recovery Opportunities Found"],
];

/**
 * The abandoned-forms dashboard. Shares the app chassis with the analytics and
 * CTA tabs — same `.vd-*` frame, sidebar, KPI cards, plot and donut — and adds
 * this tab's own reasons list and recovery banner. Hidden from assistive tech
 * like the other mocks: every figure in it belongs to the picture.
 */
function FormsPanel() {
  return (
    <div className="vd fm" aria-hidden="true">
      <div className="vd-app">
        <div className="lp-bar">
          <i className="on" />
          <i />
          <i />
        </div>

        <div className="vd-body">
          <aside className="vd-side">
            <span className="lp-logo">H</span>
            {FM_NAV.map(([icon, label], i) => (
              <span className={i === 3 ? "vd-nav on" : "vd-nav"} key={label}>
                {ICONS[icon]}
                <span className="n">{label}</span>
              </span>
            ))}
          </aside>

          <main className="vd-main">
            <div className="vd-head">
              <span className="ht">
                <b>Forms Overview</b>
                <i>Track and analyze all form interactions on your site.</i>
              </span>
              <span className="vd-date">
                {ICONS.calendar}
                May 12 – May 18, 2024
                <em>⌄</em>
              </span>
            </div>

            <div className="vd-kpis">
              {FM_KPIS.map(([icon, label, value, delta, tone]) => (
                <div className="vd-card vd-kpi" key={label}>
                  <span className="top">
                    <span className="ic">{ICONS[icon]}</span>
                    <span className="n">{label}</span>
                  </span>
                  <span className="mid">
                    <b>{value}</b>
                  </span>
                  <span className="dl">
                    <em className={tone}>↑ {delta}</em> vs May 5 – May 11
                  </span>
                </div>
              ))}
            </div>

            <div className="vd-r2">
              <div className="vd-card">
                <span className="ct">Abandoned Forms Over Time</span>
                <div className="vd-plot">
                  <span className="ax">
                    {["10", "8", "6", "4", "2", "0"].map((t, i) => (
                      <i style={{ top: `${(i / 5) * 100}%` }} key={t}>
                        {t}
                      </i>
                    ))}
                  </span>
                  <div className="vd-graph">
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="vd-gl">
                      {[0, 24, 48, 72, 96].map((y) => (
                        <line x1="0" y1={y} x2="300" y2={y} key={y} />
                      ))}
                    </svg>
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="lp-line">
                      <path className="area" d={FM_AREA} />
                      <path className="stroke" d={FM_LINE} />
                    </svg>
                    {FM_DOTS.map((p) => (
                      <span className="vd-dot" style={p} key={p.left} />
                    ))}
                    <span className="vd-tip">
                      <i>May 16, 2024</i>
                      <b>
                        <em /> 7 <s>Abandoned Forms</s>
                      </b>
                    </span>
                  </div>
                  <span className="vd-xax">
                    {["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"].map(
                      (d) => (
                        <i key={d}>{d}</i>
                      ),
                    )}
                  </span>
                </div>
              </div>

              <div className="vd-card">
                <span className="ct">Abandonment by Form</span>
                <div className="vd-split">
                  <Donut slices={FM_FORMS} total="10" />
                  <span className="vd-legend">
                    {FM_FORMS.map(([name, pct], i) => (
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

            <div className="ct-r3">
              <div className="vd-card">
                <span className="ct">Top Abandoned Forms</span>
                <span className="ct-tab fa">
                  <span className="hd">
                    <i>Form Name</i>
                    <i>Abandoned</i>
                    <i className="rt">Abandonment Rate</i>
                  </span>
                  {FM_TABLE.map(([name, count, rate]) => (
                    <span className="rw" key={name}>
                      <i className="pg">{name}</i>
                      <i>{count}</i>
                      <i className="rt bad">{rate}</i>
                    </span>
                  ))}
                </span>
              </div>

              <div className="vd-card">
                <span className="ct">Abandonment Reasons (Detected)</span>
                <span className="fm-why">
                  {FM_REASONS.map(([icon, title, sub, share]) => (
                    <span key={title}>
                      <i className="ic">{ICONS[icon]}</i>
                      <span className="tx">
                        <b>{title}</b>
                        <em>{sub}</em>
                      </span>
                      <span className="v">{share}</span>
                    </span>
                  ))}
                </span>
              </div>
            </div>

            <div className="fm-cta">
              <span className="ic">{ICONS.bulb}</span>
              <span className="tx">
                <b>Recover More Leads</b>
                <i>
                  Set up smart form recovery and email notifications to convert more abandoned
                  opportunities.
                </i>
              </span>
              <span className="b">
                Setup Form Recovery <em>↗</em>
              </span>
            </div>
          </main>
        </div>
      </div>

      <div className="vd-float">
        <span className="lp-tick">
          <svg className="sparks" viewBox="0 0 96 96" stroke="currentColor" strokeWidth="4">
            {[10, 48, 82, 128, 168, 200, 232, 300, 336].map((deg) => (
              <line
                x1="48"
                y1="14"
                x2="48"
                y2="5"
                key={deg}
                transform={`rotate(${deg} 48 48)`}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="dot">{ICONS.formx}</span>
        </span>

        <div className="t">Abandoned Forms Captured!</div>
        <p>
          We&apos;ve captured users who started but didn&apos;t submit the form. Review, analyze,
          and recover lost opportunities.
        </p>

        <span className="vd-checks">
          {FM_CHECKS.map(([icon, label]) => (
            <span key={label}>
              <i className="ic">{ICONS[icon]}</i>
              <span className="n">{label}</span>
              <b>✓</b>
            </span>
          ))}
        </span>

        <span className="b1">
          <LinkIcon /> View Abandoned Forms
        </span>
      </div>

      <svg className="vd-arrow" viewBox="0 0 130 92" fill="none">
        <path
          d="M4 78C36 96 96 88 110 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
        <path
          d="M100 26L110 12L120 26"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const LD_KPIS = [
  ["users", "Total Leads", "156", "28.4%"],
  ["check", "Qualified Leads", "98", "24.7%"],
  ["funnel", "Conversion Rate", "12.6%", "3.2%"],
  ["dollar", "Leads Value", "$24,680", "31.5%"],
];

/* Leads per day. The axis tops out at 80, so y = 120 − 1.5 × value. */
const LD_POINTS = [
  [0, 82.5],
  [21.4, 70.5],
  [42.9, 52.5],
  [64.3, 61.5],
  [85.7, 73.5],
  [107.1, 63],
  [128.6, 57],
  [150, 58.5],
  [171.4, 63],
  [192.9, 55.5],
  [214.3, 57],
  [235.7, 58.5],
  [257.1, 37.5],
  [278.6, 19.5],
  [300, 4.5],
];
const LD_LINE = asPath(LD_POINTS);
const LD_AREA = `${LD_LINE}L300 120L0 120Z`;
const LD_DOTS = asPoints(LD_POINTS, 300, 120);

const LD_SOURCES = [
  ["Website", "45.5% (71)", 45.5],
  ["Google Ads", "24.4% (38)", 24.4],
  ["Facebook Ads", "15.4% (24)", 15.4],
  ["Organic Search", "9.6% (15)", 9.6],
  ["Referral", "5.1% (8)", 5.1],
] as const;

const LD_RECENT = [
  ["John Smith", "john.smith@email.com", "2m ago"],
  ["Sarah Johnson", "sarah.j@email.com", "15m ago"],
  ["Michael Brown", "michael.b@email.com", "32m ago"],
  ["Emily Davis", "emily.d@email.com", "45m ago"],
];

/* The bars run against a common ceiling rather than the largest status, as in
   the artwork — "New" reads as most of the pipeline, not all of it. */
const LD_STATUS = [
  ["New", "62 (39.7%)", 65],
  ["Contacted", "48 (30.8%)", 51],
  ["Qualified", "32 (20.5%)", 34],
  ["Converted", "14 (9.0%)", 15],
];

const LD_CHECKS = [
  ["idcard", "Lead Information Captured"],
  ["target", "Source Tracking Enabled"],
  ["shield", "Lead Quality Verified"],
  ["bell", "Real-time Notifications"],
  ["send", "Follow-up Ready"],
];

/**
 * The leads dashboard. Unlike the other tabs this one has no browser window
 * around it — the artwork puts the confirmation card beside the panels as a
 * column of its own rather than overlapping a window, so `.ld` is a two-column
 * grid instead of the `.vd-app` chassis. The cards, plot, donut and check list
 * inside it are still the shared `.vd-*` pieces. Hidden from assistive tech
 * like the other mocks: every figure in it belongs to the picture.
 */
function LeadsPanel() {
  return (
    <div className="ld" aria-hidden="true">
      <div className="ld-card">
        <span className="lp-tick">
          <svg className="sparks" viewBox="0 0 96 96" stroke="currentColor" strokeWidth="4">
            {[14, 46, 84, 130, 166, 204, 236, 298, 334].map((deg) => (
              <line
                x1="48"
                y1="14"
                x2="48"
                y2="5"
                key={deg}
                transform={`rotate(${deg} 48 48)`}
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="dot">{ICONS.magnet}</span>
        </span>

        <div className="t">
          Leads
          <b>Captured!</b>
        </div>
        <p>
          We&apos;ve captured quality leads from your website and turned interest into potential
          opportunities.
        </p>

        <span className="vd-checks">
          {LD_CHECKS.map(([icon, label]) => (
            <span key={label}>
              <i className="ic">{ICONS[icon]}</i>
              <span className="n">{label}</span>
              <b>✓</b>
            </span>
          ))}
        </span>

        <span className="b1">{ICONS.eye} View All Leads</span>
        <span className="b2">{ICONS.download} Export Leads</span>
      </div>

      <div className="ld-main">
        <span className="ld-h">Lead Summary</span>

        <div className="vd-kpis">
          {LD_KPIS.map(([icon, label, value, delta]) => (
            <div className="vd-card vd-kpi" key={label}>
              <span className="top">
                <span className="ic">{ICONS[icon]}</span>
                <span className="n">{label}</span>
              </span>
              <span className="mid">
                <b>{value}</b>
                <Spark />
              </span>
              <span className="dl">
                <em>↑ {delta}</em> vs last 7 days
              </span>
            </div>
          ))}
        </div>

        <div className="vd-r2">
          <div className="vd-card">
            <span className="ct">
              Leads Over Time
              <em className="sel">
                {ICONS.calendar} Last 7 Days <b>⌄</b>
              </em>
              <em className="ib">{ICONS.sliders}</em>
            </span>
            <div className="vd-plot">
              <span className="ax">
                {["80", "60", "40", "20", "0"].map((t, i) => (
                  <i style={{ top: `${(i / 4) * 100}%` }} key={t}>
                    {t}
                  </i>
                ))}
              </span>
              <div className="vd-graph">
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="vd-gl">
                  {[0, 30, 60, 90].map((y) => (
                    <line x1="0" y1={y} x2="300" y2={y} key={y} />
                  ))}
                </svg>
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="lp-line">
                  <path className="area" d={LD_AREA} />
                  <path className="stroke" d={LD_LINE} />
                </svg>
                {LD_DOTS.map((p) => (
                  <span className="vd-dot" style={p} key={p.left} />
                ))}
                <span className="vd-tip">
                  <i>May 16, 2024</i>
                  <b>
                    <em /> 42 <s>Leads</s>
                  </b>
                </span>
              </div>
              <span className="vd-xax">
                {["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"].map((d) => (
                  <i key={d}>{d}</i>
                ))}
              </span>
            </div>
          </div>

          <div className="vd-card">
            <span className="ct">Leads by Source</span>
            <div className="vd-split">
              <Donut slices={LD_SOURCES} total="156" label="Total Leads" />
              <span className="vd-legend">
                {LD_SOURCES.map(([name, pct], i) => (
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

        <div className="ct-r3">
          <div className="vd-card">
            <span className="ct">
              Recent Leads
              <em className="lk">View All</em>
            </span>
            <span className="ld-recent">
              {LD_RECENT.map(([name, email, ago]) => (
                <span key={email}>
                  <i className="av">{ICONS.person}</i>
                  <span className="tx">
                    <b>{name}</b>
                    <em>{email}</em>
                  </span>
                  <span className="pill pill-green">New</span>
                  <span className="ago">{ago}</span>
                </span>
              ))}
            </span>
          </div>

          <div className="vd-card">
            <span className="ct">Leads by Status</span>
            <span className="ld-stat">
              {LD_STATUS.map(([label, value, w]) => (
                <span key={label}>
                  <i className="n">{label}</i>
                  <i className="tk">
                    <b style={{ width: `${w}%` }} />
                  </i>
                  <i className="v">{value}</i>
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="ld-note">
          <span className="ic">{ICONS.mail}</span>
          <span className="tx">
            <b>Never miss a lead!</b>
            <i>Get instant email &amp; SMS notifications when new leads are captured.</i>
          </span>
          <span className="b">
            Manage Notifications {ICONS.gear}
          </span>
        </div>
      </div>

      <svg className="ld-arrow" viewBox="0 0 130 92" fill="none">
        <path
          d="M4 78C36 96 96 88 110 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
        <path
          d="M100 26L110 12L120 26"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StagePanel({ kind }: { kind: string }) {
  if (kind === "setup") return <SetupPanel />;
  if (kind === "page") return <PagePanel />;
  if (kind === "visitors") return <VisitorsPanel />;
  if (kind === "replay") return <ReplayPanel />;
  if (kind === "cta") return <CtaPanel />;
  if (kind === "forms") return <FormsPanel />;
  return <LeadsPanel />;
}

/* ---------------------------------------------------------- section */

/**
 * Scales the open mock down until it fits the stage, which is pinned to the
 * accordion's height beside it.
 *
 * The mock is laid out at `1 / --k` of the frame's width and scaled back by
 * `--k`, so the whole picture zooms rather than any part of it reflowing —
 * but that means widening it changes its height, so `--k` and the height each
 * depend on the other. Hence the loop: it settles in two or three passes.
 * `offsetHeight` reads the untransformed layout height, which is what the
 * ratio needs.
 *
 * The stylesheet carries a starting `--k` per mock, so first paint is already
 * close and this only has to correct for the actual width and font metrics.
 * Below the stacking breakpoint the mock isn't positioned, and there's no
 * column left to match heights with, so it's left alone.
 */
/* Low enough for a phone frame, where the mock has to shrink a long way to
   fit; it only ever bites if a mock can't fit at any scale. */
const MIN_K = 0.16;

function fitStage(screen: HTMLElement | null) {
  const el = screen?.firstElementChild as HTMLElement | null;
  if (!screen || !el) return;

  if (getComputedStyle(el).position !== "absolute") {
    el.style.removeProperty("--k");
    return;
  }

  const pad = parseFloat(getComputedStyle(screen).getPropertyValue("--pad")) || 0;
  const avail = screen.clientHeight - pad * 2;
  if (avail <= 0) return;

  /* Unscaled if it already fits — most mocks do on a wide screen. */
  el.style.setProperty("--k", "1");
  if (el.offsetHeight <= avail) return;

  /* Bisection rather than iterating height/avail directly: a smaller scale
     lays the mock out wider, which makes it shorter, so the naive ratio
     overshoots and settles well under the height it was given. The scaled
     height only ever rises with `--k`, though, so halving the interval finds
     the largest one that fits. */
  let lo = MIN_K;
  let hi = 1;
  for (let i = 0; i < 9; i++) {
    const mid = (lo + hi) / 2;
    el.style.setProperty("--k", String(mid));
    if (el.offsetHeight * mid <= avail) lo = mid;
    else hi = mid;
  }
  el.style.setProperty("--k", String(lo));
}

export default function TrackingSetup() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const screen = useRef<HTMLDivElement | null>(null);
  const step = setupSteps[active];

  const fit = useCallback(() => fitStage(screen.current), []);

  /* Before paint, so a freshly switched mock is never shown at the wrong
     size — it remounts on every tab change, hence the dependency. */
  useLayoutEffect(fit, [fit, active]);

  /* The frame's height is fixed but its width isn't, and a mock's height
     moves with its width. Fonts land after first paint and shift it again. */
  useEffect(() => {
    const el = screen.current;
    if (!el) return;
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, [fit]);

  /* Roving tabindex means only the selected tab is in the tab order, so the
     arrow keys have to do the rest — without this the other five would be
     unreachable by keyboard. */
  function onKeyDown(e: React.KeyboardEvent) {
    const last = setupSteps.length - 1;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="section section-alt" id="setup">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Your Setup</Eyebrow>
          <h2>From one line of code to a lead in your inbox</h2>
          <p>
            Setup takes one snippet, and we handle it. After that every visit, click, form and
            enquiry on your page is recorded for you. Open any step to see what it captures.
          </p>
        </div>

        <div className="setup-grid" data-anim="fade-up">
          <div
            className="setup-list"
            role="tablist"
            aria-orientation="vertical"
            aria-label="What we set up and track"
            onKeyDown={onKeyDown}
          >
            {/* Odd slots are left free for the stage, which takes the one
                after the open step — see the 1080px rules, where the list
                becomes `display: contents` and the two interleave. */}
            {setupSteps.map((item, i) => (
              <div
                className={i === active ? "setup-item open" : "setup-item"}
                key={item.key}
                style={{ order: i * 2 }}
              >
                <button
                  type="button"
                  role="tab"
                  id={`setup-tab-${item.key}`}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  aria-selected={i === active}
                  aria-controls="setup-stage"
                  aria-describedby={`setup-desc-${item.key}`}
                  tabIndex={i === active ? 0 : -1}
                  className="setup-head"
                  onClick={() => setActive(i)}
                >
                  <span className="setup-n">{item.n}</span>
                  <span className="setup-t">{item.label}</span>
                  <span className="setup-chev" aria-hidden="true">
                    ⌄
                  </span>
                </button>

                {/* Outside the button: a tab should hold its label and nothing
                    more, so the description is referenced instead of nested. */}
                <div className="setup-body" id={`setup-desc-${item.key}`}>
                  <div>
                    <p>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="setup-stage"
            role="tabpanel"
            id="setup-stage"
            aria-labelledby={`setup-tab-${step.key}`}
            tabIndex={0}
            style={{ order: active * 2 + 1 }}
          >
            <div className="setup-chrome">
              <span className="setup-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="setup-url">{step.url}</span>
              <span className="pill pill-green">Live</span>
            </div>

            {/* Re-keyed so the mock remounts and its bars re-fill on change. */}
            <div className="setup-screen" key={step.key} ref={screen}>
              <StagePanel kind={step.panel} />
            </div>
          </div>
        </div>

        <p className="mock-note">Representative views — your dashboard shows your own data</p>
      </div>
    </section>
  );
}
