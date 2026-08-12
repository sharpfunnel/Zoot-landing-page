import { dashboardModules, moduleTags } from "../lib/content";
import { Eyebrow } from "./ui";

export default function DashboardModules() {
  return (
    <section className="section section-alt" id="dashboard">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Your Dashboard</Eyebrow>
          <h2>Everything Your Dashboard Tracks</h2>
          <p>One simple login. Swipe through the tools your team will actually use.</p>
        </div>

        <div className="carousel" data-anim="fade-up">
          {/* A scroll-snapping row rather than a JS carousel: it works with
              touch, trackpad, keyboard and scrollbar out of the box. */}
          <div
            className="carousel-track"
            tabIndex={0}
            role="group"
            aria-label="Dashboard modules, scroll horizontally to see more"
          >
            {dashboardModules.map((module) => (
              <article className="track-card" key={module.title}>
                <div className="ic" aria-hidden="true">
                  {module.icon}
                </div>
                <h4>{module.title}</h4>
                <p>{module.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="tag-cloud" data-anim="fade-up">
          {moduleTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
