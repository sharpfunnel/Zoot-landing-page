"use client";

import { useState } from "react";
import { site } from "../lib/content";
import { CheckList, Eyebrow } from "./ui";

const INTERESTS = ["Landing Page + Dashboard", "Ads Management", "Both"];

/**
 * The demo-request form, used twice on the page.
 *
 * There is no backend in this project, so submitting composes a prefilled
 * email to the agency inbox rather than silently dropping the enquiry.
 * Swap `handleSubmit` for a POST to a real endpoint (a route handler, or a
 * form service) when one exists.
 */
export default function LeadForm({
  id,
  eyebrow,
  title,
  body,
  checks,
  submitLabel = "Get My Free Demo",
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  checks: readonly string[];
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const interest = String(data.get("interest") ?? "");

    const subject = encodeURIComponent(`Demo request — ${name || "New enquiry"}`);
    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
      "",
      "Sent from the Zoot Web Agency landing page.",
    ];
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    setSent(true);
  };

  return (
    <section className="section-tight section-alt" id={id}>
      <div className="wrap form-split">
        <div data-anim="from-left">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", marginBottom: 14 }}>{title}</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 22 }}>{body}</p>
          <CheckList items={checks} />
        </div>

        <div className="form-card" data-anim="from-right">
          {sent ? (
            <div className="form-sent">
              <div className="ic" aria-hidden="true">
                ✓
              </div>
              <h3 style={{ fontSize: 19, marginBottom: 8 }}>Your email is ready to send</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14.5 }}>
                We&apos;ve opened your email app with the details filled in. Send it and we&apos;ll
                call you back within 24 hours — or reach us directly at {site.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <div className="field">
                <label htmlFor={`${id}-name`}>Full name</label>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>

              <div className="field">
                <label htmlFor={`${id}-phone`}>Phone number</label>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                />
              </div>

              <fieldset style={{ border: "none" }}>
                <legend
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    marginBottom: 7,
                  }}
                >
                  I&apos;m interested in
                </legend>
                <div className="choice-row">
                  {INTERESTS.map((option, i) => (
                    <label className="choice" key={option}>
                      <input type="radio" name="interest" value={option} defaultChecked={i === 0} />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button type="submit" className="btn btn-accent btn-block" data-ripple>
                {submitLabel}
              </button>
              <p className="form-note">
                No spam, no obligation — we usually reply the same day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
