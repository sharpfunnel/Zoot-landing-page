import { testimonials } from "../lib/content";
import { Eyebrow } from "./ui";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Testimonials</Eyebrow>
          <h2>What it&apos;s like to finally see the data</h2>
        </div>
        <div className="grid-3">
          {testimonials.map((item) => (
            <figure className="testi-card" data-anim="from-bottom" key={item.name}>
              <div className="stars" aria-label="Rated 5 out of 5">
                ★★★★★
              </div>
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="testi-person">
                <div className="testi-avatar" aria-hidden="true">
                  {item.initials}
                </div>
                <div>
                  <div className="name">{item.name}</div>
                  <div className="role">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
