import { benefits } from "../lib/content";

export default function Benefits() {
  return (
    <section className="section-tight" id="benefits">
      <div className="wrap">
        <div className="benefit-strip">
          {benefits.map((item) => (
            <div className="benefit" data-anim="zoom-in" key={item.title}>
              <div className="num" aria-hidden="true">
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
