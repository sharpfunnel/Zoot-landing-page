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

/**
 * Simplified marks for the two ad platforms. Approximations of third-party
 * logos, not official assets — they carry no trademark colours beyond the
 * ones the shapes need to be recognisable. Shared by the hero's floating
 * badges and the setup mock's ad-accounts row, which is why they live here
 * and take their size from whatever class the caller passes.
 */

/* The "A" mark: two round-capped legs at mirrored angles with the green dot at
   the foot of the yellow one. The yellow leg starts a little below the blue
   apex so the blue caps it cleanly and only the yellow's point shows through,
   and the dot is drawn a touch wider than the leg so it hides that leg's cap. */
export function GoogleAdsMark({ className = "su-brand" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeLinecap="round">
      <path d="M11.9 5.6L4.35 18.6" stroke="#FBBC04" strokeWidth="7.4" />
      <path d="M12.45 4.9L20.15 18.6" stroke="#4285F4" strokeWidth="7.4" />
      <circle cx="4.35" cy="18.6" r="3.95" fill="#34A853" stroke="none" />
    </svg>
  );
}

/* One continuous lemniscate with a thick stroke and tight loops, so it reads
   as a single ribbon. Thin, round loops just read as "∞". */
export function MetaMark({ className = "su-brand meta" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 20">
      <path
        d="M10 5c3.2 0 4.5 2.9 6 5s2.8 5 6 5c2.9 0 4.7-2.2 4.7-5S24.9 5 22 5c-3.2 0-4.5 2.9-6 5s-2.8 5-6 5C7.1 15 5.3 12.8 5.3 10S7.1 5 10 5z"
        fill="none"
        stroke="#0081FB"
        strokeWidth="4.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
