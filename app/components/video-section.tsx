import { video } from "../lib/content";
import { Eyebrow } from "./ui";

export default function VideoSection() {
  return (
    <section className="section-tight" id="video">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <div className="section-head center" data-anim="fade-up">
          <Eyebrow center>Watch It Work</Eyebrow>
          <h2>{video.title}</h2>
          <p>{video.body}</p>
        </div>

        <div className="video-frame" data-anim="zoom-in">
          {video.src ? (
            <video controls preload="metadata" playsInline>
              <source src={video.src} type="video/mp4" />
              Your browser doesn&apos;t support embedded video.
            </video>
          ) : (
            /* No file yet — an honest placeholder rather than a fake player
               that does nothing when clicked. Set `video.src` in content.ts
               to swap this for the real thing. */
            <div className="video-placeholder">
              <div className="play" aria-hidden="true">
                ▶
              </div>
              <div className="t">{video.title}</div>
              <div className="b">Video coming soon</div>
            </div>
          )}
        </div>

        <div className="chapter-list" data-anim="fade-up">
          {video.chapters.map((chapter) => (
            <span key={chapter}>{chapter}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
