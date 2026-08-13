import { heroTrust, reviews } from "../lib/content";
import { Eyebrow } from "./ui";

export default function SocialProof() {
  return (
    <section className="section" id="stories">
      <div className="wrap">
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Real Stories</Eyebrow>
          <h2>What clients say once the data is on</h2>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
            <div className="rating-badge">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="n">{heroTrust.rating}</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {heroTrust.ratingLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="review-wall" data-anim="fade-up">
          {reviews.map((review) => (
            <figure className="review-card" key={review.name}>
              <div className="stars" aria-label="Rated 5 out of 5">
                ★★★★★
              </div>
              <blockquote>
                <p>{review.text}</p>
              </blockquote>
              <figcaption className="who">
                <span className="av" aria-hidden="true">
                  {review.initials}
                </span>
                <span className="nm">{review.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
