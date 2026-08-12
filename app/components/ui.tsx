/** Section eyebrow — the mono, letter-spaced kicker above every heading. */
export function Eyebrow({ children, center }: { children: string; center?: boolean }) {
  return <div className={center ? "eyebrow eyebrow-center" : "eyebrow"}>{children}</div>;
}

/** Blue tick used in hero, feature and pricing lists. */
export function Tick() {
  return (
    <span className="tick" aria-hidden="true">
      ✓
    </span>
  );
}

/** A bulleted list of benefits, each with a blue tick. */
export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Tick />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * The small dashboard panels that sit beside the feature rows and tab
 * content. Three variants, keyed by name so sections just ask for one.
 */
export function MiniPanel({ variant }: { variant: string }) {
  if (variant === "leads") {
    return (
      <div className="mini-panel">
        <div className="head">
          <span className="ic" aria-hidden="true">
            ▤
          </span>
          <span className="t">Recent leads</span>
        </div>
        <div className="mini-row">
          <span>
            <span className="name">Aditya Sharma</span>
            <br />
            <span className="sub">3BHK Launch Offer</span>
          </span>
          <span className="pill pill-blue">Facebook</span>
        </div>
        <div className="mini-row">
          <span>
            <span className="name">Priya Nair</span>
            <br />
            <span className="sub">Office Space — Search</span>
          </span>
          <span className="pill pill-green">Google</span>
        </div>
        <div className="mini-row">
          <span>
            <span className="name">Ruhi Mehta</span>
            <br />
            <span className="sub">Weekend Site Visit</span>
          </span>
          <span className="pill pill-amber">Instagram</span>
        </div>
      </div>
    );
  }

  if (variant === "kpis") {
    return (
      <div className="mini-panel">
        <div className="head">
          <span className="ic" aria-hidden="true">
            ◎
          </span>
          <span className="t">This week</span>
        </div>
        <div className="mini-kpis">
          <div className="mini-kpi">
            <div className="l">Leads</div>
            <div className="v">97</div>
          </div>
          <div className="mini-kpi">
            <div className="l">Cost per lead</div>
            <div className="v">₹412</div>
          </div>
        </div>
      </div>
    );
  }

  // "bars" — budget split by channel
  return (
    <div className="mini-panel">
      <div className="head">
        <span className="ic" aria-hidden="true">
          ◹
        </span>
        <span className="t">Spend by channel</span>
      </div>
      {[
        { name: "Meta — Listings", value: 42 },
        { name: "Meta — Retarget", value: 28 },
        { name: "Google Search", value: 18 },
        { name: "Instagram", value: 12 },
      ].map((row) => (
        <div className="mini-bar" key={row.name}>
          <span className="bn">{row.name}</span>
          <span className="bt">
            {/* Width is set inline rather than by ScrollFx: these panels are
                remounted when a tab changes, and anything JS-filled would be
                stranded at zero after the remount. */}
            <span className="bf" style={{ width: `${row.value}%` }} />
          </span>
          <span className="bv">{row.value}%</span>
        </div>
      ))}
    </div>
  );
}
