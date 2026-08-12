import { footerLegalText, footerSolutions, mailto, site, telHref } from "../lib/content";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="logo">
              <span className="dot" aria-hidden="true" />
              ZOOT
            </div>
            <p>
              Meta Ads, landing pages and live dashboards for real estate brokers, developers and
              agencies — plus every other industry running paid traffic.
            </p>
            <div className="social-row">
              <a
                href={site.social.youtube}
                aria-label="YouTube"
                rel="noreferrer noopener"
                target="_blank"
              >
                YT
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                rel="noreferrer noopener"
                target="_blank"
              >
                IG
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                rel="noreferrer noopener"
                target="_blank"
              >
                IN
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Solutions</h5>
            <ul>
              {footerSolutions.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={mailto}>{site.email}</a>
              </li>
              <li>
                <a href={telHref}>{site.phone}</a>
              </li>
              <li>
                {site.locality}, India
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Get Started</h5>
            <ul>
              <li>
                <a href="#demo">Get a free demo</a>
              </li>
              <li>
                <a href="#pricing">Request a quote</a>
              </li>
              <li>
                <a href="#faq">Read the FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-legal">{footerLegalText}</p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>Landing pages · live dashboards · Meta &amp; Google Ads</span>
        </div>
      </div>
    </footer>
  );
}
