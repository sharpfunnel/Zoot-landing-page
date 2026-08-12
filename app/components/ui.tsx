/**
 * Small presentational primitives shared by several sections.
 * Server components — no interactivity beyond the CSS-driven hover states.
 */

/**
 * A labelled progress row used in funnels, CTA tracking and budget splits.
 * `display` overrides the printed figure when the bar is rounded but the real
 * number isn't (e.g. a 10% bar labelled "10.3%").
 */
export function FunnelRow({
  name,
  value,
  display,
}: {
  name: string;
  value: number;
  display?: string;
}) {
  return (
    <div className="fbar">
      <span className="fname">{name}</span>
      <span className="ftrack">
        <span className="ffill" data-w={value} />
      </span>
      <span className="fval">{display ?? `${value}%`}</span>
    </div>
  );
}

/**
 * The icon + heading + body card used across the services and module grids.
 * `anim` lets each grid pick its own entrance direction.
 */
export function GlassCard({
  icon,
  title,
  body,
  anim = "from-bottom",
}: {
  icon: string;
  title: string;
  body: string;
  anim?: string;
}) {
  return (
    <div className="glass-card" data-anim={anim}>
      <div className="card-icon" aria-hidden="true">
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

/** Section eyebrow — the uppercase, letter-spaced kicker above every heading. */
export function Eyebrow({ children, center }: { children: string; center?: boolean }) {
  return <div className={center ? "eyebrow eyebrow-center" : "eyebrow"}>{children}</div>;
}
