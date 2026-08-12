import { dashboardModules, moduleTags } from "../lib/content";
import { Eyebrow } from "./ui";

export default function DashboardModules() {
  return (
    <section className="section-tight" id="modules">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Dashboard Modules</Eyebrow>
          <h2>Every module your team will actually use</h2>
          <p>Turn on what you need. Nothing forces you to look at data you don&apos;t care about.</p>
        </div>

        <div className="deliver-grid">
          {dashboardModules.map((module) => (
            <div className="why-card" key={module.title} data-anim="from-bottom">
              <div className="ic" aria-hidden="true">
                {module.icon}
              </div>
              <div className="t">{module.title}</div>
              <div className="b">{module.body}</div>
            </div>
          ))}
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
